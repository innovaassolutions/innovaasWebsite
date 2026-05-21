import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Data Center Connectivity & Power",
  description:
    "Innovaas delivers end-to-end data center infrastructure solutions — high-speed interconnect via Black Sea Technology and intelligent rack PDU management via PDUMind.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Data Center Solutions | Innovaas",
    description:
      "High-speed interconnect and intelligent power management for AI clusters and hyper-scale data centers worldwide.",
    url: "https://innovaas.co/solutions",
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
