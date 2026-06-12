import Link from "next/link";
import Image from "next/image";
import HeroThroughput from "@/components/throughput/HeroThroughput";
import ProofCarousel from "@/components/system/ProofCarousel";
import LogoMarquee from "@/components/system/LogoMarquee";
import Manifesto from "@/components/system/Manifesto";
import CountUp from "@/components/system/CountUp";

const engines = [
  {
    n: "A",
    title: "Distribution",
    href: "/distribution",
    body: "We represent world-class technology brands across Southeast Asia — qualified in our own practice, contracted through our Singapore entity, and implemented by our engineers. Structured for programs from first pilot to nine-figure supply agreements.",
    points: ["Black Sea Technology", "Tulip Interfaces", "United Manufacturing Hub", "Litmus"],
    cta: "Explore the portfolio",
  },
  {
    n: "B",
    title: "Engineering Services",
    href: "/services",
    body: "Consulting, custom development, and implementation as one continuous engagement. The people who assess your operation are the people who build and ship the solution — no handoffs, no lost context.",
    points: ["Consulting & assessment", "Custom AI development", "Web design & development", "Agentic AI systems", "Implementation & integration"],
    cta: "See how we work",
  },
  {
    n: "C",
    title: "Intelligent Software",
    href: "/products",
    body: "We build and run our own AI-integrated platforms — assessment engines, knowledge systems, predictive maintenance, voice agents. They are the proof behind every recommendation we make.",
    points: ["FlowForge", "NovaKMS", "NovaPredict", "NovaVoice"],
    cta: "View the platforms",
  },
];

const brands = [
  {
    name: "Black Sea Technology",
    category: "Data Center Connectivity",
    logo: "/blackseatech/bst-icon.png",
    wordmark: true,
    href: "/distribution/black-sea-technology",
  },
  {
    name: "Tulip Interfaces",
    category: "Frontline Operations",
    logo: "/partners/Tulip/Tulip White Logo.png",
    href: "/distribution/tulip",
  },
  {
    name: "United Manufacturing Hub",
    category: "IIoT Infrastructure",
    logo: "/partners/UnitedManufacturingHub/UMH_WhiteTransparent.png",
    href: "/distribution/umh",
  },
  {
    name: "Litmus",
    category: "Industrial Edge Data",
    logo: "/partners/Litmus/Litmus White Logo.webp",
    href: "/distribution/litmus",
  },
];

const clients = [
  { name: "Jazeera Paints", img: "/clients/jazeera-paints.jpg", note: "Paints & Coatings · Saudi Arabia", invert: true },
  { name: "Alimex", img: "/clients/alimex.jpg", note: "Aluminium Cast Plate · Germany & Malaysia", invert: true },
  { name: "Tamawira Enterprise", img: "/clients/tamawira.svg", note: "Precision Springs · Automotive & Electronics", invert: true },
  { name: "Cisgenics", img: "/clients/cisgenics.png", note: "AI Irrigation Control · Agriculture" },
  { name: "JPI Solutions", img: "/clients/jpi-solutions.jpg", note: "Industrial Automation & SCADA · Canada", invert: true },
  { name: "Leading With Meaning", img: "/clients/leading-with-meaning.png", note: "Leadership Development · USA" },
];

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-500">
      {n} / {label}
    </p>
  );
}

export default function HomePage() {
  return (
    <div className="bg-ink-950 text-ink-100">
      <HeroThroughput />

      <LogoMarquee />

      {/* 01 / The model */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel n="01" label="THE MODEL" />
          <h2
            className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            One company. Three engines.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
            Most firms advise, resell, or build. Innovaas does all three under
            one roof — which means what we distribute gets implemented, what we
            recommend gets built, and what we build runs in production.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-3">
            {engines.map((e) => (
              <div key={e.n} className="group flex flex-col bg-ink-900 p-9 transition-colors hover:bg-ink-850">
                <p className="font-mono text-sm text-signal-500">ENGINE {e.n}</p>
                <h3
                  className="mt-4 text-2xl font-semibold text-ink-50"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {e.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-300">{e.body}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5 font-mono text-[0.82rem] text-ink-300">
                  {e.points.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
                <Link
                  href={e.href}
                  className="mt-6 text-sm font-semibold !text-signal-400 transition-colors hover:!text-signal-500"
                >
                  {e.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 / Distribution */}
      <section className="border-b border-line bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionLabel n="02" label="DISTRIBUTION" />
              <h2
                className="text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A portfolio we stand behind — and stand beside.
              </h2>
              <p className="mt-6 leading-relaxed text-ink-300">
                Every brand we represent is qualified in the field before it
                carries our name, and backed by our own engineers after the
                contract is signed. Our distribution operation is structured
                for transactions from pilot deployments to nine-figure supply
                agreements — with the compliance, logistics, and financial
                infrastructure that scale demands.
              </p>
              <Link
                href="/distribution"
                className="mt-8 inline-block rounded-md bg-signal-500 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
              >
                Explore Distribution
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
              {brands.map((b) => (
                <Link
                  key={b.name}
                  href={b.href}
                  className="group flex min-h-[150px] flex-col justify-between bg-ink-950 p-7 transition-colors hover:bg-ink-850"
                >
                  <p className="font-mono text-[11px] tracking-[0.2em] text-ink-400">
                    {b.category.toUpperCase()}
                  </p>
                  <div className="flex h-12 items-center">
                    {b.wordmark ? (
                      <span className="flex items-center gap-2.5">
                        <Image src={b.logo} alt="" width={28} height={28} />
                        <span
                          className="text-base font-bold tracking-tight text-ink-50"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          BLACK SEA <span className="text-signal-500">TECHNOLOGY</span>
                        </span>
                      </span>
                    ) : (
                      <Image
                        src={b.logo}
                        alt={b.name}
                        width={170}
                        height={44}
                        style={{ objectFit: "contain", maxHeight: "40px", width: "auto" }}
                      />
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Manifesto />

      {/* Numbers */}
      <section className="border-b border-line bg-ink-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
          {[
            { v: 4, suffix: "", label: "BRANDS REPRESENTED" },
            { v: 5, suffix: "", label: "PLATFORMS IN PRODUCTION" },
            { v: 6, suffix: "", label: "INDUSTRIES DELIVERED" },
            { v: 9, suffix: "-FIG", label: "DEAL CAPACITY, STRUCTURED" },
          ].map((s) => (
            <div key={s.label} className="border-r border-line px-6 py-10 last:border-r-0">
              <p className="m-0 font-mono text-4xl text-signal-500 md:text-5xl">
                <CountUp value={s.v} suffix={s.suffix} />
              </p>
              <p className="m-0 mt-3 font-mono text-[11px] tracking-[0.2em] text-ink-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 / Proof */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel n="03" label="PROOF" />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We don&apos;t just advise. We ship.
              </h2>
              <p className="mt-6 leading-relaxed text-ink-300">
                These are live platforms we designed, built, and run ourselves:
                FlowForge powers our consulting practice, NovaCRM runs our own
                sales and delivery, NovaKMS answers from our knowledge base,
                and NovaVoice picks up the phone. When we recommend a build,
                the team that ships it has done it before — for ourselves.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-md border border-line-strong px-6 py-3 text-sm font-semibold !text-ink-100 transition-colors hover:border-signal-500 hover:!text-signal-400"
                >
                  See the platforms
                </Link>
              </div>
            </div>
            <ProofCarousel />
          </div>
        </div>
      </section>

      {/* 04 / Track record */}
      <section className="border-b border-line bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel n="04" label="TRACK RECORD" />
          <h2
            className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trusted by companies that make real things.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {clients.map((c) => (
              <div key={c.name} className="bg-ink-950 p-7">
                <div className="flex h-14 items-center">
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={140}
                    height={48}
                    style={{ objectFit: "contain", maxHeight: "44px", width: "auto", filter: `grayscale(1) ${c.invert ? "invert(1) " : ""}brightness(1.6)`, mixBlendMode: "screen" }}
                  />
                </div>
                <p className="mt-4 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-ink-400">
                  {c.note.toUpperCase()}
                </p>
              </div>
            ))}
          </div>

          <figure className="mx-auto mt-16 max-w-3xl border-l-2 border-signal-500 pl-8">
            <blockquote className="m-0 text-lg leading-relaxed text-ink-200">
              “Todd took my manual client tool and transformed it into an
              automated, web-accessible platform that I can now use to attract
              new clients instead of just serving existing ones. I&apos;ve been
              testing it with clients and peers, and the response has been
              tremendously positive.”
            </blockquote>
            <figcaption className="mt-4 font-mono text-xs tracking-[0.12em] text-ink-400">
              MARK NICKERSON — FOUNDER, LEADING WITH MEANING
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="font-mono text-xs tracking-[0.28em] text-signal-500">
            05 / START
          </p>
          <h2
            className="mx-auto mt-6 max-w-3xl text-3xl font-bold uppercase leading-[1.0] tracking-tight text-ink-50 md:text-6xl"
            style={{ fontFamily: "var(--font-anton)", fontWeight: 400 }}
          >
            Put the network <span className="text-signal-500">to work.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-300">
            Vendor, buyer, or builder — if technology needs to move through
            Southeast Asia, the conversation starts here.
          </p>
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
