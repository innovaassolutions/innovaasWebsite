import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/system/PageHero";

export const metadata: Metadata = {
  title: "Agentic AI Systems",
  description:
    "We design and build agentic AI systems — autonomous agents that plan, use tools, and complete real business workflows with human guardrails. Architecture, build, and operation by Innovaas.",
  alternates: { canonical: "/services/agentic-ai" },
};

const useCases = [
  {
    t: "Operations triage",
    b: "Agents that monitor incoming work — tickets, orders, alerts — classify it, resolve the routine cases end-to-end, and escalate the exceptions with full context attached.",
  },
  {
    t: "Research & intelligence",
    b: "Agents that sweep markets, suppliers, tenders, and competitors on schedule, cross-reference findings against your data, and deliver decision-ready briefs.",
  },
  {
    t: "Document workflows",
    b: "Quotes, contracts, compliance packs, RFP responses — drafted, checked against policy, routed for human approval, and filed. Days of paperwork compressed to minutes.",
  },
  {
    t: "Coordination & follow-up",
    b: "Agents that chase the loose ends humans drop: follow-ups, status updates, data entry across systems, meeting prep — the connective tissue of operations.",
  },
];

const principles = [
  {
    n: "01",
    t: "Process first, model second",
    b: "We map the workflow before we write a prompt. Autonomy is assigned where errors are cheap and reversible; humans hold the steps where they aren't.",
  },
  {
    n: "02",
    t: "Tools, not chat",
    b: "Real agents act: they query databases, call APIs, file documents, and update systems. We build the tool layer that connects agents safely to your stack.",
  },
  {
    n: "03",
    t: "Guardrails by default",
    b: "Permissions, spending limits, approval gates, and full audit trails are part of the architecture — not bolted on after an incident.",
  },
  {
    n: "04",
    t: "Measured by outcomes",
    b: "Every system ships with instrumentation: completion rates, intervention rates, cycle-time deltas. If the numbers don't move, the system isn't done.",
  },
];

const phases = [
  { n: "PHASE 1", t: "Map", b: "Workflow analysis, autonomy boundaries, ROI model. 2–3 weeks." },
  { n: "PHASE 2", t: "Pilot", b: "One workflow, production data, humans in the loop. 4–6 weeks." },
  { n: "PHASE 3", t: "Harden", b: "Guardrails, observability, failure handling, scale testing." },
  { n: "PHASE 4", t: "Operate", b: "Rollout, monitoring, and continuous tuning — by us or your team." },
];

export default function AgenticAIPage() {
  return (
    <div className="bg-ink-950 text-ink-100">
      <PageHero
        index="02.3"
        label="AGENTIC AI SYSTEMS"
        title="AI that completes the work,"
        accent="not just the sentence."
        ctas={[
          { href: "/contact", label: "Scope an Agentic Pilot", solid: true },
          { href: "/services", label: "All Services" },
        ]}
      >
        <p>
          Chatbots answer questions. Agents finish jobs: they plan, use tools,
          act across your systems, and hand humans the decisions that matter.
          Innovaas designs, builds, and operates agentic systems for real
          business workflows — with the guardrails serious operations demand.
        </p>
      </PageHero>

      {/* What agents do */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-500">
            WHERE AGENTS EARN THEIR KEEP
          </p>
          <h2
            className="max-w-2xl text-2xl font-bold tracking-tight text-ink-50 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The work between the work.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-300">
            Most operational cost hides in repetitive, multi-step processes
            that are too varied for traditional automation and too dull for
            your best people. That&apos;s the agentic sweet spot.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {useCases.map((u) => (
              <div key={u.t} className="bg-ink-900 p-8">
                <h3
                  className="text-lg font-semibold text-ink-50"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {u.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{u.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-line bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-500">
            HOW WE BUILD
          </p>
          <h2
            className="text-2xl font-bold tracking-tight text-ink-50 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Autonomy is an engineering discipline.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.n} className="bg-ink-950 p-8">
                <p className="font-mono text-sm text-signal-500">{p.n}</p>
                <h3
                  className="mt-3 text-base font-semibold text-ink-50"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-500">
            ENGAGEMENT MODEL
          </p>
          <h2
            className="text-2xl font-bold tracking-tight text-ink-50 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From map to production in one quarter.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((p) => (
              <div key={p.n} className="bg-ink-900 p-8">
                <p className="font-mono text-[11px] tracking-[0.2em] text-ink-400">{p.n}</p>
                <h3
                  className="mt-3 text-lg font-semibold text-signal-400"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{p.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-400">
            We run our own business on agentic systems — assessment interviews,
            CRM intelligence, knowledge retrieval — so the architecture we
            propose is the architecture we already operate.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2
            className="mx-auto max-w-3xl text-3xl font-bold uppercase leading-[1.0] tracking-tight text-ink-50 md:text-5xl"
            style={{ fontFamily: "var(--font-anton)", fontWeight: 400 }}
          >
            Pick one workflow.<span className="text-signal-500"> We&apos;ll automate it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-300">
            The best way to evaluate agentic AI is a scoped pilot on a real
            process with real data. Bring the workflow that hurts most.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-md bg-signal-500 px-8 py-4 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
          >
            Scope a Pilot
          </Link>
        </div>
      </section>
    </div>
  );
}
