"use client";

import { useEffect, useState } from "react";

type Row = { label: string; value: string; live?: boolean };

const STATIC_ROWS: Row[] = [
  { label: "HUB", value: "SIN · SINGAPORE" },
  { label: "BRANDS REPRESENTED", value: "04" },
  { label: "DEAL CAPACITY", value: "NINE-FIGURE" },
  { label: "DELIVERY MODEL", value: "END-TO-END" },
];

function jitter(base: number, spread: number, fix = 1) {
  return (base + (Math.random() - 0.5) * spread).toFixed(fix);
}

export default function Telemetry() {
  const [tick, setTick] = useState(0);
  const [live, setLive] = useState({ thr: "1.62", lat: "0.8", routes: "08" });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setLive({
        thr: jitter(1.6, 0.18, 2),
        lat: jitter(0.9, 0.4, 1),
        routes: "08",
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  const rows: Row[] = [
    { label: "THROUGHPUT", value: `${live.thr} TBPS`, live: true },
    { label: "ACTIVE ROUTES", value: live.routes, live: true },
    { label: "HOP LATENCY", value: `${live.lat} MS`, live: true },
    ...STATIC_ROWS,
  ];

  return (
    <div className="font-mono text-[11px] leading-relaxed">
      <div className="mb-3 flex items-center gap-2 text-ink-400">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-signal-500" />
        SYSTEM TELEMETRY
        <span className="text-ink-400">{String(tick % 100).padStart(2, "0")}</span>
      </div>
      <dl className="m-0 space-y-2">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-6 border-b border-line pb-1.5"
          >
            <dt className="text-ink-400">{row.label}</dt>
            <dd className={`m-0 tabular-nums ${row.live ? "text-signal-400" : "text-ink-100"}`}>
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
