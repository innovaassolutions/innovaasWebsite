"use client";

import { useEffect, useRef } from "react";

const TEXT =
  "Technology only matters when it ships. So we built a company that closes the distance between contract and production — distribution backed by engineering, advice backed by code, intelligence backed by action.";

/** Statement block: words illuminate progressively as the reader scrolls through. */
export default function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = Array.from(el.querySelectorAll<HTMLSpanElement>("span[data-w]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      words.forEach((w) => (w.style.opacity = "1"));
      return;
    }

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 when the block enters, 1 when its bottom passes 35% of the viewport
        const progress = Math.min(
          1,
          Math.max(0, (vh * 0.85 - rect.top) / (rect.height + vh * 0.5))
        );
        const lit = Math.floor(progress * words.length * 1.15);
        words.forEach((w, i) => {
          w.style.opacity = i < lit ? "1" : "0.55";
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="border-b border-line bg-ink-950">
      <div className="mx-auto max-w-5xl px-6 py-28 md:py-36">
        <p className="mb-10 font-mono text-xs tracking-[0.28em] text-signal-500">
          / WHY WE EXIST
        </p>
        <p
          ref={ref}
          className="m-0 text-3xl font-semibold leading-snug tracking-tight text-ink-50 md:text-[2.9rem] md:leading-[1.25]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {TEXT.split(" ").map((word, i) => (
            <span
              key={i}
              data-w
              style={{ opacity: 0.55, transition: "opacity 0.25s ease" }}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
