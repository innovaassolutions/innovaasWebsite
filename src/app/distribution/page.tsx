import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Distribution",
  description:
    "Innovaas distributes and implements world-class technology across Southeast Asia — data center connectivity, frontline operations, and industrial data platforms. Structured for transactions from pilot deployments to nine-figure supply agreements.",
  alternates: { canonical: "/distribution" },
};

const partners = [
  {
    id: "black-sea-technology",
    name: "Black Sea Technology",
    category: "Data Center Connectivity",
    logo: null,
    description:
      "High-performance optical transceivers, copper cabling, and fiber solutions for AI clusters, hyperscale, and enterprise data centers — 400G, 800G, and 1.6T modules engineered for the bandwidth demands of modern compute.",
    role: "We represent Black Sea Technology across Southeast Asia, supporting data center operators from product selection and qualification through volume supply.",
    link: { href: "/distribution/black-sea-technology", label: "View the connectivity portfolio" },
  },
  {
    id: "tulip",
    name: "Tulip Interfaces",
    category: "Frontline Operations Platform",
    logo: "/partners/Tulip/Tulip White Logo.png",
    description:
      "The industry standard for frontline operations — a no-code, cloud-native platform that lets manufacturers build apps for the shop floor, connect equipment, and digitize quality and production workflows without rip-and-replace.",
    role: "We distribute, implement, and build on Tulip — from first app to plant-wide rollouts.",
    link: { href: "/distribution/tulip", label: "Distribution & implementation details" },
  },
  {
    id: "umh",
    name: "United Manufacturing Hub",
    category: "Open-Source IIoT Infrastructure",
    logo: "/partners/UnitedManufacturingHub/UMH_WhiteTransparent.png",
    description:
      "An open-source Unified Namespace platform for industrial IoT — manage every data stream, device, and application across your plants through a single, engineer-friendly management console.",
    role: "We architect and deploy UMH-based data infrastructure as the foundation for analytics, MES, and AI on the factory floor.",
    link: { href: "/distribution/umh", label: "Distribution & implementation details" },
  },
  {
    id: "litmus",
    name: "Litmus",
    category: "Industrial Edge Data Platform",
    logo: "/partners/Litmus/Litmus White Logo.webp",
    description:
      "An industrial edge platform that connects to virtually any machine out of the box, normalizes the data, and makes Industry 4.0 attainable — analytics, condition monitoring, and integration from a single layer.",
    role: "We deliver Litmus deployments end to end: connectivity audits, edge rollout, and integration with your existing systems.",
    link: { href: "/distribution/litmus", label: "Distribution & implementation details" },
  },
];

const steps = [
  {
    n: "01",
    title: "Evaluate",
    body: "We qualify every technology we represent in our own lab and in the field before it carries our name.",
  },
  {
    n: "02",
    title: "Contract",
    body: "Singapore-registered entity, clean commercial terms, and the compliance and financial infrastructure serious transactions demand.",
  },
  {
    n: "03",
    title: "Implement",
    body: "We don't drop-ship and disappear. Our engineers design, deploy, and integrate what we distribute.",
  },
  {
    n: "04",
    title: "Support",
    body: "Regional presence, vendor-backed escalation paths, and a single point of accountability after go-live.",
  },
];

export default function DistributionPage() {
  return (
    <div className="bg-ink-950 text-ink-100">
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="mb-6 font-mono text-sm tracking-[0.2em] text-signal-500">
            01 / DISTRIBUTION
          </p>
          <h1
            className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-ink-50 md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            World-class technology, delivered and implemented across Southeast
            Asia.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">
            Innovaas represents a select portfolio of technology brands in the
            region — and backs every one of them with engineering. Our
            distribution operation is structured for transactions from pilot
            deployments to nine-figure supply agreements, with the compliance,
            logistics, and financial infrastructure that scale demands.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-signal-500 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
            >
              Source Through Us
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-line-strong px-6 py-3 text-sm font-semibold !text-ink-100 transition-colors hover:border-ink-400"
            >
              Become a Partner Brand
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2
            className="text-2xl font-bold tracking-tight text-ink-50 md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Distribution backed by engineering
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="bg-ink-900 p-8">
                <p className="font-mono text-sm text-signal-500">{step.n}</p>
                <h3
                  className="mt-3 text-lg font-semibold text-ink-50"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2
            className="text-2xl font-bold tracking-tight text-ink-50 md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-ink-300">
            Brands we represent, qualify, and implement.
          </p>

          <div className="mt-12 space-y-8">
            {partners.map((partner, i) => (
              <article
                key={partner.id}
                id={partner.id}
                className="scroll-mt-24 rounded-lg border border-line bg-ink-900 p-8 md:p-10"
              >
                <div className="grid gap-8 md:grid-cols-[280px_1fr]">
                  <div>
                    <p className="font-mono text-xs tracking-[0.18em] text-ink-400">
                      {String(i + 1).padStart(2, "0")} · {partner.category.toUpperCase()}
                    </p>
                    <div className="mt-6 flex h-16 items-center">
                      {partner.logo ? (
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={220}
                          height={64}
                          style={{ objectFit: "contain", maxHeight: "56px", width: "auto" }}
                        />
                      ) : (
                        <span
                          className="text-2xl font-bold tracking-tight text-ink-50"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          BLACK SEA{" "}
                          <span className="text-signal-500">TECHNOLOGY</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold text-ink-50"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {partner.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-200">
                      {partner.description}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-400">
                      {partner.role}
                    </p>
                    <Link
                      href={partner.link.href}
                      className="mt-5 inline-block text-sm font-semibold !text-signal-400 hover:!text-signal-500"
                    >
                      {partner.link.label} →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2
            className="text-2xl font-bold tracking-tight text-ink-50 md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bring your technology to Southeast Asia — or source it here.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-300">
            Whether you&apos;re a vendor looking for a distribution partner with
            real engineering depth, or a buyer who needs qualified technology
            delivered and implemented — start the conversation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-signal-500 px-8 py-3.5 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </div>
  );
}
