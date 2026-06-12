import Link from "next/link";

/**
 * Standard interior-page hero: mono kicker, Anton display headline,
 * supporting copy, optional CTAs. Keeps every page on the same system.
 */
export default function PageHero({
  index,
  label,
  title,
  accent,
  children,
  ctas,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  accent?: string;
  children?: React.ReactNode;
  ctas?: { href: string; label: string; solid?: boolean }[];
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="mb-8 font-mono text-xs tracking-[0.28em] text-signal-500">
          {index} / {label}
        </p>
        <h1
          className="m-0 max-w-5xl uppercase leading-[0.95] tracking-tight text-ink-50"
          style={{ fontFamily: "var(--font-anton)", fontWeight: 400 }}
        >
          <span className="text-[clamp(2.4rem,6.5vw,5rem)]">
            {title}
            {accent && <span className="text-signal-500"> {accent}</span>}
          </span>
        </h1>
        {children && (
          <div className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">
            {children}
          </div>
        )}
        {ctas && ctas.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <Link
                key={cta.href + cta.label}
                href={cta.href}
                className={
                  cta.solid
                    ? "rounded-md bg-signal-500 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
                    : "rounded-md border border-line-strong px-6 py-3 text-sm font-semibold !text-ink-100 transition-colors hover:border-signal-500 hover:!text-signal-400"
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
