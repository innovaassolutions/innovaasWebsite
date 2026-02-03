import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Innovaas Solutions team — engineers, strategists, and digital transformation experts helping SMBs modernize operations with AI.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "The Innovaas Team",
    description:
      "Meet the experts behind Innovaas Solutions — driving digital transformation for US businesses.",
    url: "https://innovaas.co/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
