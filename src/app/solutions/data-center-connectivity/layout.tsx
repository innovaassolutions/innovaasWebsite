import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Center Connectivity | High-Speed AI Infrastructure Interconnect",
  description:
    "Innovaas is an authorized reseller of Black Sea Technology's 400G / 800G / 1.6T optical modules, copper cables, and fiber patch cords — built for AI clusters, high-density data centers, and HPC environments worldwide.",
  alternates: { canonical: "/solutions/data-center-connectivity" },
  openGraph: {
    title: "Data Center Connectivity Solutions | Innovaas",
    description:
      "Next-generation 400G / 800G / 1.6T interconnect for AI infrastructure worldwide. Authorized Black Sea Technology reseller.",
    url: "https://innovaas.co/solutions/data-center-connectivity",
  },
};

export default function DataCenterConnectivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
