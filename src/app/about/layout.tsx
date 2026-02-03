import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Innovaas Solutions — our mission to empower US SMBs with digital transformation, AI-powered tools, and connected operations.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Innovaas Solutions",
    description:
      "Our mission: empower small and mid-size businesses with digital transformation and AI-powered solutions.",
    url: "https://innovaas.co/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
