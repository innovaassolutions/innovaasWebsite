import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on digital transformation, AI adoption, IoT integration, and operational efficiency for US small and mid-size businesses.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Innovaas Solutions Blog",
    description:
      "Expert insights on digital transformation, AI, and operational efficiency for SMBs.",
    url: "https://innovaas.co/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
