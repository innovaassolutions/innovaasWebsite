"use client";

import { useEffect, useRef } from "react";

/**
 * Greyscale-to-color "illumination" wrapper (styles in globals.css).
 * Cursor devices: lights up on hover. Touch devices: lights up as the
 * element crosses the middle band of the viewport, one card at a time.
 */
export default function Illuminate({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Hover-capable devices use the CSS :hover path instead
    if (window.matchMedia("(hover: hover)").matches) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => el.classList.toggle("illum-lit", e.isIntersecting)),
      { rootMargin: "-35% 0px -35% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`illum-card ${className}`}>
      {children}
    </div>
  );
}
