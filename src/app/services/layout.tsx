import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Innovaas Solutions' digital transformation services — digital readiness assessments, custom AI software development, IoT integration, and data analytics for SMBs.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Transformation Services | Innovaas Solutions",
    description:
      "Digital readiness assessments, custom AI software, IoT integration, and data analytics — tailored for US small and mid-size businesses.",
    url: "https://innovaas.co/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
