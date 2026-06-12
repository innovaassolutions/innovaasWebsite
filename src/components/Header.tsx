"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

type NavChild = { href: string; label: string; note?: string };
type NavItem = { label: string; href?: string; match: string; children?: NavChild[] };

const navItems: NavItem[] = [
  {
    label: "Distribution",
    match: "/distribution",
    children: [
      { href: "/distribution", label: "Overview", note: "How we bring brands to Southeast Asia" },
      { href: "/distribution/black-sea-technology", label: "Black Sea Technology", note: "Data center connectivity" },
      { href: "/distribution/tulip", label: "Tulip Interfaces", note: "Frontline operations platform" },
      { href: "/distribution/umh", label: "United Manufacturing Hub", note: "Open-source IIoT infrastructure" },
      { href: "/distribution/litmus", label: "Litmus", note: "Industrial edge data platform" },
    ],
  },
  { label: "Services", href: "/services", match: "/services" },
  { label: "Solutions", href: "/solutions", match: "/solutions" },
  { label: "Products", href: "/products", match: "/products" },
  { label: "Work", href: "/work", match: "/work" },
  {
    label: "Company",
    match: "/about",
    children: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/apply", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

function isActive(pathname: string, item: NavItem) {
  if (item.children) {
    return item.children.some(
      (c) => pathname === c.href.split("#")[0] || pathname.startsWith(item.match)
    );
  }
  return item.match === "/" ? pathname === "/" : pathname.startsWith(item.match);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-[1000] border-b border-line bg-ink-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <Image
            src="/innovaas_logo_tight.png"
            alt="Innovaas"
            width={200}
            height={64}
            priority
            style={{ objectFit: "contain", height: "40px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" style={{ fontFamily: "var(--font-display)" }}>
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className={`!bg-transparent flex items-center gap-1 rounded-md !px-3 !py-2 text-[0.95rem] !font-medium transition-colors ${
                    isActive(pathname, item) ? "text-signal-400" : "text-ink-200 group-hover:text-ink-50"
                  }`}
                  aria-haspopup="true"
                >
                  {item.label}
                  <FiChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-lg border border-line bg-ink-900 p-1.5 shadow-2xl shadow-black/50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2.5 transition-colors hover:bg-ink-800"
                      >
                        <span className="block text-sm font-medium text-ink-100">{child.label}</span>
                        {child.note && (
                          <span className="mt-0.5 block text-xs text-ink-400">{child.note}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={`rounded-md px-3 py-2 text-[0.95rem] font-medium transition-colors ${
                  isActive(pathname, item) ? "!text-signal-400" : "!text-ink-200 hover:!text-ink-50"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-3 rounded-md bg-signal-500 px-4 py-2 text-sm font-semibold !text-white transition-colors hover:bg-signal-600"
          >
            Talk to Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="!bg-transparent !p-2 text-ink-100 md:hidden"
        >
          {mobileOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <nav className="border-t border-line bg-ink-950 px-4 pb-6 pt-2 md:hidden">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-line">
                <button
                  onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                  className="!bg-transparent flex w-full items-center justify-between !px-1 !py-3.5 text-left !text-base !font-medium text-ink-100"
                >
                  {item.label}
                  <FiChevronDown
                    className={`h-4 w-4 opacity-60 transition-transform ${
                      openSection === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === item.label && (
                  <div className="pb-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-2.5 text-sm !text-ink-300 hover:bg-ink-800 hover:!text-ink-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setMobileOpen(false)}
                className={`block border-b border-line px-1 py-3.5 text-base font-medium ${
                  isActive(pathname, item) ? "!text-signal-400" : "!text-ink-100"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-md bg-signal-500 px-4 py-3 text-center text-sm font-semibold !text-white"
          >
            Talk to Us
          </Link>
        </nav>
      )}
    </header>
  );
}
