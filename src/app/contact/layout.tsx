import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Innovaas Solutions. Schedule a digital readiness assessment or learn how our AI-powered software can transform your business.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Innovaas Solutions",
    description:
      "Schedule a digital readiness assessment or discuss how AI-powered solutions can accelerate your business transformation.",
    url: "https://innovaas.co/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
