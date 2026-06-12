"use client";

import Link from "next/link";
import Image from "next/image";

const columns: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Distribution",
    links: [
      { href: "/distribution", label: "Overview" },
      { href: "/distribution/black-sea-technology", label: "Black Sea Technology" },
      { href: "/distribution/tulip", label: "Tulip Interfaces" },
      { href: "/distribution/umh", label: "United Manufacturing Hub" },
      { href: "/distribution/litmus", label: "Litmus" },
    ],
  },
  {
    heading: "Capabilities",
    links: [
      { href: "/services", label: "Services" },
      { href: "/solutions", label: "Solutions" },
      { href: "/products", label: "Products" },
      { href: "/work", label: "Work" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/apply", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/legal", label: "Legal" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <Image
              src="/innovaas_logo_tight.png"
              alt="Innovaas"
              width={150}
              height={48}
              style={{ objectFit: "contain", height: "38px", width: "auto" }}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              Technology distribution, consulting, and AI engineering.
              Headquartered in Singapore, delivering across Southeast Asia and
              beyond.
            </p>
            <a
              href="mailto:info@innovaas.co"
              className="mt-4 inline-block text-sm !text-ink-200 underline-offset-4 hover:!text-signal-400 hover:underline"
            >
              info@innovaas.co
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3
                className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {col.heading}
              </h3>
              <ul className="m-0 list-none space-y-2.5 p-0">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm !text-ink-300 transition-colors hover:!text-ink-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="overflow-hidden px-2" aria-hidden="true">
        <p
          className="m-0 select-none text-center uppercase leading-[0.85] tracking-tight text-ink-800"
          style={{
            fontFamily: "var(--font-anton)",
            fontWeight: 400,
            fontSize: "clamp(3.5rem, 14.5vw, 14rem)",
          }}
        >
          INNOVAAS<span className="text-signal-600">.</span>
        </p>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Innovaas Solutions Pte. Ltd. All rights
            reserved.
          </span>
          <span className="font-mono">Registered in Singapore</span>
        </div>
      </div>
    </footer>
  );
}
