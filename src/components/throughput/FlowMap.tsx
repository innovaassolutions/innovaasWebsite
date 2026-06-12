"use client";

import { useEffect, useRef } from "react";

/**
 * Live flow-map of Southeast Asia: stylized dot-matrix landmass with
 * supply/data routes converging on Singapore. Pure canvas, no deps.
 */

type Pt = [number, number]; // [lon, lat]

// Rough, stylized landmass outlines — deliberately coarse, rendered as dots
const LANDMASS: Pt[][] = [
  // Mainland SEA incl. Malay peninsula
  [
    [92, 21], [95, 24], [98, 24.5], [102, 23], [105, 23], [108, 22.5],
    [110, 19], [109, 14], [107, 10], [105, 8.5], [103.5, 10.5], [104.5, 12.5],
    [102.5, 13.5], [100, 13.8], [99.5, 10], [100.5, 7], [101.5, 5.5],
    [103.2, 1.8], [101.8, 2.2], [100.3, 5.8], [98.5, 9], [97.5, 14],
    [94.5, 16.5], [92.5, 18.5],
  ],
  // Sumatra
  [
    [95.3, 5.6], [97.5, 4], [99.5, 1.5], [101.5, -0.5], [103.5, -2.5],
    [105.5, -5], [106, -6], [104.5, -5.8], [102.5, -4], [100.5, -1.5],
    [98.5, 1], [96.5, 3.2], [95, 5],
  ],
  // Java
  [
    [105.5, -6.1], [108, -6.6], [111, -6.5], [114, -7.4], [115.5, -8.4],
    [112.5, -8.3], [109, -7.8], [106, -7.2],
  ],
  // Borneo
  [
    [109.2, 1.5], [110, 4.5], [113, 5.5], [115.5, 7], [117.8, 5.5],
    [119.2, 2], [117.5, -1], [116.2, -3.8], [113, -3.5], [110.2, -1.8],
    [108.8, 0],
  ],
  // Sulawesi (simplified)
  [
    [119, 1.2], [121.5, 1.3], [123.5, 0.5], [122.2, -2], [121.2, -4.2],
    [120.2, -5.6], [119.2, -3.5], [119.8, -1],
  ],
  // Luzon
  [[119.9, 18.4], [122, 18.2], [123.2, 16], [122.2, 13.8], [121, 13.6], [119.8, 16]],
  // Visayas / Mindanao
  [[121.8, 11.2], [125, 10], [126.4, 8], [126.2, 6], [123.8, 5.8], [121.8, 7.5], [122.8, 9.2]],
];

const SIN: Pt = [103.82, 1.35];

// Origin nodes feeding the Singapore hub
const ORIGINS: { code: string; p: Pt; bend: number }[] = [
  { code: "BKK", p: [100.5, 13.75], bend: -0.25 },
  { code: "SGN", p: [106.7, 10.78], bend: 0.22 },
  { code: "MNL", p: [121.0, 14.6], bend: 0.3 },
  { code: "CGK", p: [106.85, -6.2], bend: 0.25 },
  { code: "KUL", p: [101.69, 3.14], bend: -0.4 },
  { code: "HAN", p: [105.85, 21.0], bend: -0.18 },
  // Off-map feeds (global supply entering the region)
  { code: "EU", p: [90.5, 24.5], bend: -0.2 },
  { code: "US", p: [129.5, 22.5], bend: 0.25 },
];

// Viewport in lon/lat
const LON0 = 90, LON1 = 130, LAT0 = -12, LAT1 = 26;

function inPoly(lon: number, lat: number, poly: Pt[]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

export default function FlowMap({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Canvas font strings can't use CSS vars — resolve the mono family once
    const monoFamily =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--font-jetbrains-mono")
        .trim() || "ui-monospace";
    const monoS = `9px ${monoFamily}, monospace`;
    const monoM = `10px ${monoFamily}, monospace`;

    let w = 0, h = 0, dpr = 1;
    let dots: { x: number; y: number; d: number }[] = [];
    let raf = 0;
    const start = performance.now();

    const proj = ([lon, lat]: Pt): [number, number] => [
      ((lon - LON0) / (LON1 - LON0)) * w,
      ((LAT1 - lat) / (LAT1 - LAT0)) * h,
    ];

    function rebuild() {
      const rect = canvas!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Rasterize landmass into a dot grid
      dots = [];
      const step = 0.55;
      const [sx, sy] = proj(SIN);
      for (let lon = LON0; lon <= LON1; lon += step) {
        for (let lat = LAT0; lat <= LAT1; lat += step) {
          if (LANDMASS.some((poly) => inPoly(lon, lat, poly))) {
            const [x, y] = proj([lon, lat]);
            dots.push({ x, y, d: Math.hypot(x - sx, y - sy) });
          }
        }
      }
    }

    type Route = { a: [number, number]; c: [number, number]; b: [number, number]; code: string; offset: number };
    let routes: Route[] = [];

    function buildRoutes() {
      const [sx, sy] = proj(SIN);
      routes = ORIGINS.map((o, i) => {
        const [ox, oy] = proj(o.p);
        const mx = (ox + sx) / 2;
        const my = (oy + sy) / 2;
        // Perpendicular control point for arc curvature
        const dx = sx - ox, dy = sy - oy;
        const len = Math.hypot(dx, dy) || 1;
        const cx = mx + (-dy / len) * len * o.bend;
        const cy = my + (dx / len) * len * o.bend;
        return { a: [ox, oy], c: [cx, cy], b: [sx, sy], code: o.code, offset: (i * 0.37) % 1 };
      });
    }

    const qPoint = (r: Route, t: number): [number, number] => {
      const u = 1 - t;
      return [
        u * u * r.a[0] + 2 * u * t * r.c[0] + t * t * r.b[0],
        u * u * r.a[1] + 2 * u * t * r.c[1] + t * t * r.b[1],
      ];
    };

    function draw(now: number) {
      const t = (now - start) / 1000;
      ctx!.clearRect(0, 0, w, h);

      // Graticule dots (ocean texture)
      ctx!.fillStyle = "rgba(255,255,255,0.045)";
      const g = Math.max(34, w / 38);
      for (let x = g / 2; x < w; x += g) {
        for (let y = g / 2; y < h; y += g) {
          ctx!.fillRect(x, y, 1, 1);
        }
      }

      // Landmass dots, radial reveal from Singapore
      const reveal = reduceMotion ? Infinity : Math.max(0, t - 0.2) * (w * 0.85);
      for (const dot of dots) {
        if (dot.d > reveal) continue;
        const local = Math.min(1, (reveal - dot.d) / 120);
        ctx!.fillStyle = `rgba(139,153,176,${0.34 * local})`;
        ctx!.beginPath();
        ctx!.arc(dot.x, dot.y, 1.1, 0, Math.PI * 2);
        ctx!.fill();
      }

      const routesVisible = reduceMotion ? 1 : Math.min(1, Math.max(0, (t - 1.0) / 1.2));

      // Routes
      for (const r of routes) {
        ctx!.strokeStyle = `rgba(255,255,255,${0.1 * routesVisible})`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(r.a[0], r.a[1]);
        ctx!.quadraticCurveTo(r.c[0], r.c[1], r.b[0], r.b[1]);
        ctx!.stroke();

        // Origin node + code
        ctx!.fillStyle = `rgba(230,234,242,${0.55 * routesVisible})`;
        ctx!.fillRect(r.a[0] - 2, r.a[1] - 2, 4, 4);
        ctx!.font = monoS;
        ctx!.fillStyle = `rgba(139,153,176,${0.7 * routesVisible})`;
        ctx!.fillText(r.code, r.a[0] + 7, r.a[1] + 3);

        if (!reduceMotion) {
          // Flow particles with trail, converging on SIN
          for (let k = 0; k < 2; k++) {
            const pt = (t * 0.12 + r.offset + k * 0.5) % 1;
            const [px, py] = qPoint(r, pt);
            const grad = ctx!.createRadialGradient(px, py, 0, px, py, 7);
            grad.addColorStop(0, `rgba(242,92,5,${0.9 * routesVisible})`);
            grad.addColorStop(1, "rgba(242,92,5,0)");
            ctx!.fillStyle = grad;
            ctx!.beginPath();
            ctx!.arc(px, py, 7, 0, Math.PI * 2);
            ctx!.fill();
            // Trail
            for (let s = 1; s <= 6; s++) {
              const tt = pt - s * 0.013;
              if (tt < 0) continue;
              const [qx, qy] = qPoint(r, tt);
              ctx!.fillStyle = `rgba(242,92,5,${(0.4 - s * 0.06) * routesVisible})`;
              ctx!.beginPath();
              ctx!.arc(qx, qy, 1.4, 0, Math.PI * 2);
              ctx!.fill();
            }
          }
        }
      }

      // Singapore hub: pulse rings + core + label
      const [sx, sy] = proj(SIN);
      if (!reduceMotion) {
        for (let k = 0; k < 2; k++) {
          const pulse = ((t * 0.5 + k * 0.5) % 1);
          ctx!.strokeStyle = `rgba(242,92,5,${(1 - pulse) * 0.45})`;
          ctx!.lineWidth = 1.2;
          ctx!.beginPath();
          ctx!.arc(sx, sy, 6 + pulse * 26, 0, Math.PI * 2);
          ctx!.stroke();
        }
      } else {
        ctx!.strokeStyle = "rgba(242,92,5,0.4)";
        ctx!.beginPath();
        ctx!.arc(sx, sy, 14, 0, Math.PI * 2);
        ctx!.stroke();
      }
      ctx!.fillStyle = "#f25c05";
      ctx!.beginPath();
      ctx!.arc(sx, sy, 3.5, 0, Math.PI * 2);
      ctx!.fill();

      ctx!.font = monoM;
      ctx!.fillStyle = "rgba(244,246,250,0.92)";
      ctx!.fillText("SIN — SINGAPORE HUB", sx + 14, sy - 6);
      ctx!.fillStyle = "rgba(139,153,176,0.8)";
      ctx!.fillText("1.3521°N 103.8198°E", sx + 14, sy + 7);

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }

    const onResize = () => {
      rebuild();
      buildRoutes();
      if (reduceMotion) draw(performance.now());
    };

    rebuild();
    buildRoutes();
    if (reduceMotion) {
      draw(performance.now());
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onVisibility = () => {
      if (reduceMotion) return;
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
