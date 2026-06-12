import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/system/PageHero";

export const metadata: Metadata = {
  title: "Engineering Services",
  description:
    "Consulting, custom AI development, agentic systems, and implementation — delivered as one continuous engagement by one senior team. From assessment to production.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "consulting",
    n: "01",
    title: "Consulting & Assessment",
    lead: "Know exactly where you stand before you spend.",
    body: "Every engagement starts with evidence, not opinion. Our FlowForge platform interviews your stakeholders in parallel — shop floor to C-suite — and we synthesize the findings into a readiness picture across technology, process, people, data, and strategy. You get a prioritized roadmap with realistic timelines and costs, built by the same engineers who would execute it.",
    points: [
      "AI-facilitated stakeholder interviews, run in days not months",
      "Multi-dimensional readiness scoring with gap analysis",
      "Prioritized, costed roadmap — implementation-ready, not shelfware",
    ],
  },
  {
    id: "development",
    n: "02",
    title: "Custom AI Development",
    lead: "Software built around how you actually work.",
    body: "When off-the-shelf doesn't fit, we design and build it — internal platforms, client-facing products, data pipelines, ML models. We've shipped five production platforms of our own, so the patterns, infrastructure, and judgment are already battle-tested before your project starts. You own the code outright.",
    points: [
      "Full-stack product engineering with AI integrated where it earns its place",
      "Machine learning and predictive models trained on your data",
      "Complete code ownership — no lock-in, no licensing surprises",
    ],
  },
  {
    id: "web",
    n: "03",
    title: "Web Design & Development",
    lead: "Your site is doing sales calls while you sleep. Make it senior.",
    body: "We design and build web platforms that carry serious business — corporate sites, e-commerce, and client portals with the narrative, motion, and performance to match. Recent work spans bilingual luxury commerce in Singapore to data-centre service platforms in Canada. This site is our own work, too.",
    points: [
      "Brand narrative, design systems, and motion — not template skins",
      "Next.js / TypeScript builds: fast, accessible, SEO-sound",
      "E-commerce, multilingual, CMS, and lead-capture integrations",
    ],
    href: "/work",
    cta: "See selected work",
  },
  {
    id: "agentic",
    n: "04",
    title: "Agentic AI Systems",
    lead: "AI that does the work, not just answers questions.",
    body: "The next layer of automation isn't chat — it's agents: AI systems that plan, use tools, take actions, and complete multi-step business processes with humans setting the guardrails. We architect and build agentic systems that handle real workflows — triage, research, reporting, coordination — measured by outcomes, not demos.",
    points: [
      "Process-mapped agent design: where autonomy pays, where humans stay",
      "Tool-using agents integrated with your existing systems and data",
      "Observability, guardrails, and human-in-the-loop controls by default",
    ],
    href: "/services/agentic-ai",
    cta: "Deep dive: how we build agentic systems",
  },
  {
    id: "implementation",
    n: "05",
    title: "Implementation & Integration",
    lead: "The last mile is where value lives — or dies.",
    body: "We deploy what we recommend and what we distribute: systems integration, unified data infrastructure, cloud migration, and the platforms in our distribution portfolio. One team carries the engagement from first interview to production support, so context never gets lost in a handoff.",
    points: [
      "Systems integration and unified namespace data architecture",
      "Deployment of distributed platforms — Tulip, UMH, Litmus — done right",
      "Cloud migration, data governance, and post-go-live support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-ink-950 text-ink-100">
      <PageHero
        index="02"
        label="ENGINEERING SERVICES"
        title="One team, from question"
        accent="to production."
        ctas={[{ href: "/contact", label: "Start a Conversation", solid: true }]}
      >
        <p>
          Consulting, development, and implementation are usually three firms
          and two handoffs. At Innovaas they are one continuous engagement:
          the senior engineers who assess your operation are the ones who
          design, build, and ship the answer.
        </p>
      </PageHero>

      {/* Service lines */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="space-y-8">
            {services.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-24 rounded-lg border border-line bg-ink-900 p-8 md:p-12"
              >
                <div className="grid gap-8 md:grid-cols-[200px_1fr]">
                  <div>
                    <p className="font-mono text-3xl text-signal-500">{s.n}</p>
                    <p className="mt-2 font-mono text-[11px] leading-relaxed tracking-[0.2em] text-ink-400">
                      SERVICE LINE
                    </p>
                  </div>
                  <div>
                    <h2
                      className="text-2xl font-semibold text-ink-50 md:text-3xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.title}
                    </h2>
                    <p className="mt-2 font-medium text-signal-400">{s.lead}</p>
                    <p className="mt-4 leading-relaxed text-ink-300">{s.body}</p>
                    <ul className="mt-6 space-y-2 border-t border-line pt-6">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-ink-200">
                          <span className="font-mono text-signal-500">—</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    {s.href && (
                      <Link
                        href={s.href}
                        className="mt-6 inline-block text-sm font-semibold !text-signal-400 hover:!text-signal-500"
                      >
                        {s.cta} →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why one team */}
      <section className="border-t border-line bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2
            className="text-2xl font-bold tracking-tight text-ink-50 md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why the one-team model wins
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {[
              {
                t: "We build what we recommend",
                b: "Five production platforms of our own. Every recommendation is backed by code we've already shipped and run.",
              },
              {
                t: "Senior people, start to finish",
                b: "The engineers in your first assessment meeting are the engineers at go-live. No junior handoffs, no learning on your budget.",
              },
              {
                t: "AI where it counts",
                b: "We use AI where it creates measurable value and skip it where it doesn't. No buzzword padding.",
              },
            ].map((x) => (
              <div key={x.t} className="bg-ink-950 p-8">
                <h3
                  className="text-lg font-semibold text-ink-50"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {x.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{x.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-signal-500 px-8 py-3.5 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
