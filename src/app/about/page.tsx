import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/system/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Innovaas Solutions Pte. Ltd. is a Singapore-headquartered technology distribution and services company: world-class brands, senior engineering, and AI systems — delivered end to end.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    n: "01",
    t: "Builders, not just advisors",
    b: "We write code, ship products, and run production software — five platforms of our own. When we say something can be built, it's because our team has already built it.",
  },
  {
    n: "02",
    t: "Skin in everything we sell",
    b: "We qualify the brands we distribute in the field and implement them with our own engineers. If it carries our name, we stand behind it after go-live.",
  },
  {
    n: "03",
    t: "AI where it counts",
    b: "We integrate AI where it creates measurable value and leave it out where it doesn't. Our own operations run on the agentic systems we sell.",
  },
  {
    n: "04",
    t: "Senior people, end to end",
    b: "The people who scope your engagement are the people who deliver it. No junior handoffs, no context lost between teams.",
  },
];

const footprint = [
  { k: "HEADQUARTERS", v: "Singapore" },
  { k: "ENTITY", v: "Innovaas Solutions Pte. Ltd." },
  { k: "DELIVERY", v: "Southeast Asia + global" },
  { k: "SECTORS", v: "Manufacturing · Data centers · Services" },
];

export default function AboutPage() {
  return (
    <div className="bg-ink-950 text-ink-100">
      <PageHero
        index="05"
        label="COMPANY"
        title="Built to move technology"
        accent="from contract to production."
        ctas={[{ href: "/contact", label: "Get in Touch", solid: true }]}
      >
        <p>
          Innovaas Solutions is a Singapore-headquartered technology
          distribution and services company. We represent world-class brands
          across Southeast Asia, engineer custom AI systems, and implement
          everything we sell — one accountable partner from first conversation
          to running infrastructure.
        </p>
      </PageHero>

      {/* Footprint strip */}
      <section className="border-b border-line bg-ink-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
          {footprint.map((f) => (
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

      {/* Why we exist */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-500">
                WHY WE EXIST
              </p>
              <h2
                className="text-2xl font-bold tracking-tight text-ink-50 md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The gap between advice and delivery is where projects die.
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink-300">
              <p>
                Most technology engagements fragment across three parties: a
                consultancy that recommends, a vendor that sells, and an
                integrator that implements — each with its own incentives, each
                losing context at the handoff. The result is the industry&apos;s
                quiet scandal: strategies that never ship.
              </p>
              <p>
                Innovaas was built to close that gap. We are the distributor
                and the engineer and the builder — which means the economics of
                every recommendation include the cost of making it actually
                work. Our team has delivered across financial services,
                manufacturing, marine, education, and technology in markets
                from Southeast Asia to the Middle East, Europe, and North
                America.
              </p>
              <p>
                And because we build and operate our own AI platforms, the
                judgment we bring isn&apos;t theoretical. We recommend what
                we&apos;ve already run in production — for ourselves first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="border-b border-line bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-500">
            OPERATING PRINCIPLES
          </p>
          <h2
            className="text-2xl font-bold tracking-tight text-ink-50 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How we run the company.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.n} className="bg-ink-950 p-8">
                <p className="font-mono text-sm text-signal-500">{v.n}</p>
                <h3
                  className="mt-3 text-lg font-semibold text-ink-50"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {v.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2
            className="mx-auto max-w-3xl text-3xl font-bold uppercase leading-[1.0] tracking-tight text-ink-50 md:text-5xl"
            style={{ fontFamily: "var(--font-anton)", fontWeight: 400 }}
          >
            One partner. <span className="text-signal-500">Full accountability.</span>
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-md bg-signal-500 px-8 py-4 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </div>
  );
}
