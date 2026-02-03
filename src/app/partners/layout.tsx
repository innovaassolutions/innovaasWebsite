import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Innovaas Solutions' technology partners — collaborating to deliver best-in-class digital transformation and AI solutions for SMBs.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Our Partners | Innovaas Solutions",
    description:
      "Technology partnerships powering digital transformation for US businesses.",
    url: "https://innovaas.co/partners",
  },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
