import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/system/PageHero";
import Illuminate from "@/components/system/Illuminate";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected web development and platform work by Innovaas — luxury e-commerce, data centre service platforms, GPU cloud, and the AI products we run ourselves.",
  alternates: { canonical: "/work" },
};

type Project = {
  n: string;
  name: string;
  category: string;
  img: string | null;
  imgAlt?: string;
  blurb: string;
  stack: { k: string; v: string }[];
  href?: string;
  cta?: string;
};

const projects: Project[] = [
  {
    n: "01",
    name: "Eterno",
    category: "LUXURY E-COMMERCE · SINGAPORE",
    img: "/work/eterno.webp",
    imgAlt: "Eterno — luxury e-commerce homepage with serif wordmark",
    blurb:
      "A bilingual (English / 简体中文) luxury commerce experience for a Singapore brand spanning accessories, fine wines, and a Japanese coffee bar. Headless Shopify storefront with fully custom motion design — built for clients who keep the finest things and notice the details.",
    stack: [
      { k: "BUILD", v: "Next.js 15 · TypeScript · Tailwind" },
      { k: "COMMERCE", v: "Shopify Storefront API (headless)" },
      { k: "EXPERIENCE", v: "Custom luxury animations · EN/ZH i18n" },
    ],
  },
  {
    n: "02",
    name: "SAIDI Canada",
    category: "DATA CENTRE SERVICES · CANADA",
    img: "/work/saidi-canada.webp",
    imgAlt: "SAIDI Canada — lower-carbon data centre services website",
    blurb:
      "Marketing platform for SAIDI Canada's lower-carbon data centre services — natural-gas-powered compute with Canada's natural cooling advantage. Positioning, copy, and build for colocation, cloud, and managed hosting, delivered with full client handover documentation.",
    stack: [
      { k: "BUILD", v: "Next.js · TypeScript" },
      { k: "SCOPE", v: "Brand narrative · site · handover docs" },
      { k: "SECTOR", v: "Data centre / energy" },
    ],
  },
  {
    n: "03",
    name: "SAIDI Cloud",
    category: "GPU CLOUD COMPUTING · PLATFORM",
    img: "/work/saidi-cloud.webp",
    imgAlt: "SAIDI Cloud — GPU cloud computing services website",
    blurb:
      "Web platform for SAIDI's GPU cloud computing services — high-performance infrastructure for AI, ML, and rendering workloads. Service catalogue, document center, admin area, and integrated lead capture, designed and shipped by one team.",
    stack: [
      { k: "BUILD", v: "Next.js · Tailwind" },
      { k: "SCOPE", v: "Design · build · admin & lead capture" },
      { k: "SECTOR", v: "GPU cloud / AI infrastructure" },
    ],
  },
  {
    n: "04",
    name: "FlowForge, NovaCRM & the Nova platforms",
    category: "OUR OWN PRODUCTS · IN PRODUCTION",
    img: null,
    blurb:
      "The strongest portfolio piece is the software we run our own company on: an AI assessment engine, a full CRM, knowledge management, predictive maintenance, and voice agents — five platforms, designed, built, and operated in-house.",
    stack: [
      { k: "BUILD", v: "Next.js · Python · ML pipelines" },
      { k: "AI", v: "Anthropic · OpenAI · Gemini" },
      { k: "STATUS", v: "Live, in daily production use" },
    ],
    href: "/products",
    cta: "Explore the platforms",
  },
];

export default function WorkPage() {
  return (
    <div className="bg-ink-950 text-ink-100">
      <PageHero
        index="02.5"
        label="SELECTED WORK"
        title="Designed, built,"
        accent="shipped."
        ctas={[{ href: "/contact", label: "Start a Project", solid: true }]}
      >
        <p>
          Web platforms, e-commerce, and product engineering — a selection of
          what we&apos;ve built for clients and for ourselves. Hover (or scroll)
          to bring each one to life.
        </p>
      </PageHero>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="space-y-10">
            {projects.map((p) => (
              <article
                key={p.n}
                className="rounded-lg border border-line bg-ink-900 p-6 md:p-10"
              >
                {p.img && (
                  <Illuminate className="mb-10 overflow-hidden rounded-md border border-line bg-ink-950">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 border-b border-line bg-ink-900 px-4 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
                      <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
                      <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
                      <span className="ml-3 font-mono text-[11px] tracking-[0.14em] text-ink-400">
                        {p.name.toUpperCase()} — PRODUCTION BUILD
                      </span>
                    </div>
                    <Image
                      src={p.img}
                      alt={p.imgAlt ?? p.name}
                      width={1280}
                      height={800}
                      className="block h-auto w-full"
                      sizes="(max-width: 1024px) 100vw, 1100px"
                    />
                  </Illuminate>
                )}
                <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.2em] text-ink-400">
                      {p.n} · {p.category}
                    </p>
                    <h2
                      className="mt-4 text-2xl font-semibold text-ink-50 md:text-3xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.name}
                    </h2>
                    <p className="mt-4 leading-relaxed text-ink-300">{p.blurb}</p>
                    {p.href && (
                      <Link
                        href={p.href}
                        className="mt-5 inline-block text-sm font-semibold !text-signal-400 hover:!text-signal-500"
                      >
                        {p.cta} →
                      </Link>
                    )}
                  </div>
                  <div className="space-y-px self-start overflow-hidden rounded-md border border-line bg-line">
                    {p.stack.map((row) => (
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
            className="mx-auto max-w-3xl text-3xl font-bold uppercase leading-[1.0] tracking-tight text-ink-50 md:text-5xl"
            style={{ fontFamily: "var(--font-anton)", fontWeight: 400 }}
          >
            Your site is your <span className="text-signal-500">first impression.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-300">
            From brand narrative to production deployment — we design and build
            web platforms that carry serious business.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-md bg-signal-500 px-8 py-4 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
