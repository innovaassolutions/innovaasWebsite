import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/system/PageHero";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Outcome-focused solutions that combine Innovaas distribution, engineering, and AI software: data center infrastructure and smart manufacturing for Southeast Asia.",
  alternates: { canonical: "/solutions" },
};

const solutions = [
  {
    id: "data-center",
    n: "01",
    title: "Data Center Infrastructure",
    lead: "The connectivity layer for AI, HPC, and cloud.",
    body: "AI clusters live and die on their network fabric. We supply and support the optics and cabling that carry the load — 400G to 1.6T transceivers, DAC/ACC/AEC copper, and fiber from Black Sea Technology — with architecture support for lossless RoCE fabrics and data center interconnect, delivered through our Singapore distribution operation.",
    stack: [
      { k: "DISTRIBUTION", v: "Black Sea Technology optics & cabling" },
      { k: "ENGINEERING", v: "Topology review, optics selection, qualification" },
      { k: "SCALE", v: "Pilot lots to nine-figure supply programs" },
    ],
    links: [
      { href: "/solutions/data-center-connectivity", label: "Connectivity portfolio" },
      { href: "/distribution/black-sea-technology", label: "Black Sea Technology" },
    ],
  },
  {
    id: "smart-manufacturing",
    n: "02",
    title: "Smart Manufacturing",
    lead: "From machine data to decisions — one stack, one team.",
    body: "We build the full smart-factory stack: edge connectivity with Litmus, a Unified Namespace on United Manufacturing Hub, frontline apps and composable MES on Tulip, and predictive maintenance with our own NovaPredict ML platform. Distribution, architecture, and implementation from a single accountable partner.",
    stack: [
      { k: "EDGE & DATA", v: "Litmus + United Manufacturing Hub" },
      { k: "FRONTLINE", v: "Tulip apps, quality & composable MES" },
      { k: "INTELLIGENCE", v: "NovaPredict ML & analytics" },
    ],
    links: [
      { href: "/distribution", label: "Distribution portfolio" },
      { href: "/products", label: "NovaPredict platform" },
    ],
  },
  {
    id: "intelligent-operations",
    n: "03",
    title: "Intelligent Operations",
    lead: "Agents and AI systems inside your daily workflows.",
    body: "Beyond the factory: agentic AI systems that triage, research, document, and coordinate; knowledge management that answers from your own documents; voice agents that never miss a call. Built on the same platforms we run our own company on.",
    stack: [
      { k: "AGENTS", v: "Custom agentic systems with guardrails" },
      { k: "KNOWLEDGE", v: "NovaKMS RAG search & chat" },
      { k: "FRONT DOOR", v: "NovaVoice AI phone agents" },
    ],
    links: [
      { href: "/services/agentic-ai", label: "Agentic AI services" },
      { href: "/products", label: "The platforms" },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-ink-950 text-ink-100">
      <PageHero
        index="03"
        label="SOLUTIONS"
        title="Where the three engines"
        accent="combine."
        ctas={[{ href: "/contact", label: "Discuss Your Project", solid: true }]}
      >
        <p>
          Distribution gives you the technology. Engineering makes it run.
          Software makes it smart. Our solutions bundle all three around a
          business outcome — so you contract one partner, not three vendors.
        </p>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="space-y-8">
            {solutions.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-24 rounded-lg border border-line bg-ink-900 p-8 md:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
                  <div>
                    <p className="font-mono text-sm text-signal-500">{s.n}</p>
                    <h2
                      className="mt-3 text-2xl font-semibold text-ink-50 md:text-3xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.title}
                    </h2>
                    <p className="mt-2 font-medium text-signal-400">{s.lead}</p>
                    <p className="mt-4 leading-relaxed text-ink-300">{s.body}</p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      {s.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="text-sm font-semibold !text-signal-400 hover:!text-signal-500"
                        >
                          {l.label} →
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-px overflow-hidden rounded-md border border-line bg-line">
                    {s.stack.map((row) => (
                      <div key={row.k} className="bg-ink-950 px-5 py-4">
                        <p className="m-0 font-mono text-[11px] tracking-[0.2em] text-ink-400">
                          {row.k}
                        </p>
                        <p className="m-0 mt-1 text-sm font-medium text-ink-100">{row.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2
            className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-ink-50 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Don&apos;t see your problem here? That&apos;s what the assessment is for.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-300">
            Every engagement starts by understanding where you actually stand —
            then we assemble the right combination of brands, builds, and
            engineering.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-signal-500 px-8 py-3.5 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
          >
            Start With an Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
