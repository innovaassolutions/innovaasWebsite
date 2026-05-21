import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Center Power | Intelligent Rack PDU Management",
  description:
    "Innovaas is an authorized reseller of PDUMind's intelligent rack PDUs — metered, switched, and 3-phase power distribution units for AI clusters, high-density data centers, and HPC environments worldwide.",
  alternates: { canonical: "/solutions/data-center-power" },
  openGraph: {
    title: "Data Center Power Solutions | Innovaas",
    description:
      "Intelligent rack PDU management for AI infrastructure worldwide. Authorized PDUMind reseller.",
    url: "https://innovaas.co/solutions/data-center-power",
  },
};

export default function DataCenterPowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
