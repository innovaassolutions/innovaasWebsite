"use client";

import { useEffect, useRef, useState } from "react";
import FlowForgeDashboard from "@/components/mockups/FlowForgeDashboard";
import NovaCRMDashboard from "@/components/mockups/NovaCRMDashboard";
import NovaKMSDashboard from "@/components/mockups/NovaKMSDashboard";
import NovaVoiceDashboard from "@/components/mockups/NovaVoiceDashboard";

const slides = [
  { id: "flowforge", label: "FLOWFORGE.INNOVAAS.CO", note: "AI ASSESSMENT ENGINE", C: FlowForgeDashboard },
  { id: "novacrm", label: "NOVACRM.INNOVAAS.CO", note: "AI-FIRST CRM", C: NovaCRMDashboard },
  { id: "novakms", label: "NOVAKMS.INNOVAAS.CO", note: "KNOWLEDGE MANAGEMENT", C: NovaKMSDashboard },
  { id: "novavoice", label: "NOVAVOICE.INNOVAAS.CO", note: "AI PHONE AGENTS", C: NovaVoiceDashboard },
];

const AUTO_MS = 6000;

/** Lateral scroll-snap carousel of live platform mockups (03 / Proof). */
export default function ProofCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = ((i % slides.length) + slides.length) % slides.length;
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  // Track active slide from scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () =>
      setActive(Math.round(track.scrollLeft / track.clientWidth));
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance unless hovered/touched or reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      const track = trackRef.current;
      if (!track) return;
      const current = Math.round(track.scrollLeft / track.clientWidth);
      goTo(current + 1);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="rounded-lg border border-line bg-ink-900 p-3 shadow-2xl shadow-black/40"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
    >
      {/* Header: live label + controls */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-2 pb-2 pt-1">
        <p className="m-0 min-w-0 truncate font-mono text-[11px] tracking-[0.18em] text-ink-400">
          <span className="text-signal-500">●</span> {slides[active]?.label}
          <span className="hidden sm:inline"> — {slides[active]?.note}</span>
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Show ${s.id}`}
                onClick={() => goTo(i)}
                className={`!p-0 h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 !bg-signal-500" : "w-1.5 !bg-ink-600 hover:!bg-ink-400"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            <button
              aria-label="Previous platform"
              onClick={() => goTo(active - 1)}
              className="!bg-ink-800 h-7 w-7 rounded-md !p-0 font-mono !text-xs text-ink-200 transition-colors hover:!bg-ink-700"
            >
              ←
            </button>
            <button
              aria-label="Next platform"
              onClick={() => goTo(active + 1)}
              className="!bg-ink-800 h-7 w-7 rounded-md !p-0 font-mono !text-xs text-ink-200 transition-colors hover:!bg-ink-700"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Slides */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-md"
        style={{ scrollbarWidth: "none" }}
      >
        {slides.map(({ id, C }) => (
          /* Fixed 4:3 stage — mockup SVGs have differing intrinsic ratios
             (800×600 vs 800×560), so center them in a constant-height frame */
          <div
            key={id}
            className="flex aspect-[4/3] w-full shrink-0 items-center justify-center snap-center"
          >
            <div className="w-full">
              <C />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
