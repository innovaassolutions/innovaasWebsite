"use client";

import { useRef } from "react";
import Link from "next/link";
import FlowMap from "./FlowMap";
import Telemetry from "./Telemetry";

/* Magnetic CTA — drifts toward the cursor, snaps back on leave */
function MagneticLink({
  href,
  children,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  variant: "solid" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.18;
    const y = (e.clientY - r.top - r.height / 2) * 0.3;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base =
    "inline-block rounded-sm px-7 py-3.5 text-sm font-semibold tracking-wide transition-[background-color,border-color,color] duration-200 will-change-transform";
  const styles =
    variant === "solid"
      ? "bg-signal-500 !text-white hover:bg-signal-400"
      : "border border-line-strong !text-ink-100 hover:border-signal-500 hover:!text-signal-400";

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles}`}
      style={{ transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      {children}
    </Link>
  );
}

const STATS = [
  { k: "DISTRIBUTION", v: "4 brands, one region" },
  { k: "ENGINEERING", v: "Consult → build → run" },
  { k: "AI SYSTEMS", v: "Agentic, in production" },
  { k: "STRUCTURED FOR", v: "Nine-figure programs" },
];

export default function HeroThroughput() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-950 text-ink-100">
      {/* Flow map — full-bleed backdrop, fades under the type column */}
      <div className="absolute inset-0">
        <FlowMap className="h-full w-full" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,8,14,0.94) 0%, rgba(5,8,14,0.72) 38%, rgba(5,8,14,0.15) 70%, rgba(5,8,14,0.4) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{ background: "linear-gradient(180deg, transparent, rgba(5,8,14,0.9))" }}
        />
      </div>

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-20 md:grid-cols-[1fr_260px] md:pb-20 md:pt-28 lg:pt-32">
        <div>
          {/* Kicker */}
          <p className="thr-reveal mb-8 font-mono text-xs tracking-[0.28em] text-signal-500">
            SYSTEM ONLINE&nbsp;—&nbsp;SINGAPORE HUB
            <span className="thr-cursor ml-1 inline-block h-3 w-[7px] translate-y-[1px] bg-signal-500" />
          </p>

          {/* Display headline */}
          <h1
            className="m-0 select-none uppercase leading-[0.92] tracking-tight text-ink-50"
            style={{ fontFamily: "var(--font-anton)", fontWeight: 400 }}
          >
            <span className="thr-reveal block text-[clamp(3rem,9vw,7.5rem)]" style={{ animationDelay: "0.1s" }}>
              We move
            </span>
            <span
              className="thr-reveal block text-[clamp(3rem,9vw,7.5rem)] text-transparent"
              style={{
                animationDelay: "0.22s",
                WebkitTextStroke: "2px #f25c05",
              }}
            >
              technology
            </span>
            <span className="thr-reveal block text-[clamp(3rem,9vw,7.5rem)]" style={{ animationDelay: "0.34s" }}>
              without
            </span>
            <span className="thr-reveal block text-[clamp(3rem,9vw,7.5rem)]" style={{ animationDelay: "0.46s" }}>
              borders<span className="text-signal-500">.</span>
            </span>
          </h1>

          <p
            className="thr-reveal mt-8 max-w-xl text-base leading-relaxed text-ink-300 md:text-lg"
            style={{ animationDelay: "0.62s" }}
          >
            Innovaas is a Singapore-headquartered distribution and engineering
            company. We represent world-class technology brands, build agentic
            AI systems, and implement everything we sell — structured for
            programs from first pilot to nine-figure supply agreements.
          </p>

          <div className="thr-reveal mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.74s" }}>
            <MagneticLink href="/distribution" variant="solid">
              Explore Distribution
            </MagneticLink>
            <MagneticLink href="/services" variant="ghost">
              Engineering Services
            </MagneticLink>
          </div>
        </div>

        {/* Telemetry column */}
        <aside
          className="thr-reveal hidden self-end md:block"
          style={{ animationDelay: "0.9s" }}
        >
          <Telemetry />
        </aside>
      </div>

      {/* Stats readout strip */}
      <div className="relative border-t border-line bg-ink-950/80 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.k}
              className="thr-reveal border-r border-line px-6 py-5 last:border-r-0"
              style={{ animationDelay: `${1 + i * 0.08}s` }}
            >
              <p className="m-0 font-mono text-[11px] tracking-[0.22em] text-ink-400">
                {s.k}
              </p>
              <p
                className="m-0 mt-1 text-sm font-semibold text-ink-100"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .thr-reveal {
          opacity: 0;
          transform: translateY(26px);
          animation: thrRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .thr-cursor {
          animation: thrBlink 1.1s steps(1) infinite;
        }
        @keyframes thrRise {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes thrBlink {
          50% {
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .thr-reveal {
            opacity: 1;
            transform: none;
            animation: none;
          }
          .thr-cursor {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
