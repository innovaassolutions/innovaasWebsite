import Link from "next/link";
import Image from "next/image";

export type PartnerData = {
  code: string;
  name: string;
  category: string;
  logo?: string;
  tagline: string;
  taglineAccent: string;
  intro: string;
  facts: { k: string; v: string }[];
  capabilities: { t: string; b: string }[];
  weDeliver: { t: string; b: string }[];
  externalUrl?: string;
  externalLabel?: string;
};

/** Shared template: partner brands rendered in the Innovaas design system. */
export default function PartnerPage({ data }: { data: PartnerData }) {
  return (
    <div className="bg-ink-950 text-ink-100">
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="mb-8 font-mono text-xs tracking-[0.28em] text-signal-500">
            01 / DISTRIBUTION — {data.code}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {data.logo && (
              <div className="flex h-14 items-center rounded-md border border-line bg-ink-900 px-5">
                <Image
                  src={data.logo}
                  alt={data.name}
                  width={180}
                  height={48}
                  style={{ objectFit: "contain", maxHeight: "36px", width: "auto" }}
                />
              </div>
            )}
            <p className="m-0 font-mono text-xs tracking-[0.2em] text-ink-400">
              {data.category.toUpperCase()}
            </p>
          </div>
          <h1
            className="m-0 mt-8 max-w-5xl uppercase leading-[0.95] tracking-tight text-ink-50"
            style={{ fontFamily: "var(--font-anton)", fontWeight: 400 }}
          >
            <span className="text-[clamp(2.2rem,6vw,4.6rem)]">
              {data.tagline} <span className="text-signal-500">{data.taglineAccent}</span>
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">{data.intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-signal-500 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
            >
              Talk to Our Team
            </Link>
            {data.externalUrl && (
              <a
                href={data.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-line-strong px-6 py-3 text-sm font-semibold !text-ink-100 transition-colors hover:border-signal-500 hover:!text-signal-400"
              >
                {data.externalLabel ?? "Vendor Site"} ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Fact strip */}
      <section className="border-b border-line bg-ink-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
          {data.facts.map((f) => (
            <div key={f.k} className="border-r border-line px-6 py-5 last:border-r-0">
              <p className="m-0 font-mono text-[11px] tracking-[0.22em] text-ink-400">{f.k}</p>
              <p
                className="m-0 mt-1 text-sm font-semibold text-ink-100"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {f.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform capabilities */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-500">THE PLATFORM</p>
          <h2
            className="text-2xl font-bold tracking-tight text-ink-50 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What {data.name} does
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {data.capabilities.map((c) => (
              <div key={c.t} className="bg-ink-900 p-8">
                <h3
                  className="text-base font-semibold text-ink-50"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Innovaas delivers */}
      <section className="border-b border-line bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-500">
            DISTRIBUTION + ENGINEERING
          </p>
          <h2
            className="text-2xl font-bold tracking-tight text-ink-50 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What we deliver around it
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-300">
            We don&apos;t forward licenses. As regional partner we supply,
            implement, integrate, and support {data.name} as part of a working
            solution.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {data.weDeliver.map((w, i) => (
              <div key={w.t} className="bg-ink-950 p-8">
                <p className="font-mono text-sm text-signal-500">{String(i + 1).padStart(2, "0")}</p>
                <h3
                  className="mt-3 text-base font-semibold text-ink-50"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {w.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{w.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2
            className="mx-auto max-w-3xl text-2xl font-bold tracking-tight text-ink-50 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Evaluate {data.name} with a partner who has deployed it.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-signal-500 px-8 py-3.5 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
            >
              Start the Conversation
            </Link>
            <Link
              href="/distribution"
              className="rounded-md border border-line-strong px-8 py-3.5 text-sm font-semibold !text-ink-100 transition-colors hover:border-signal-500 hover:!text-signal-400"
            >
              Full Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
