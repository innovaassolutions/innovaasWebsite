import ClientLayout from "../components/ClientLayout";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Anton } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import RevealOnScroll from "../components/system/RevealOnScroll";
import ChakraProviders from "../components/ChakraProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Innovaas Solutions | Technology Distribution, Consulting & AI Engineering",
    template: "%s | Innovaas Solutions",
  },
  description:
    "Innovaas is a Singapore-headquartered technology distribution and services company. We represent world-class technology brands and deliver consulting, custom development, agentic AI systems, and implementation to clients worldwide.",
  keywords: [
    "global technology distribution",
    "technology distributor Singapore",
    "digital transformation",
    "agentic AI systems",
    "custom AI software",
    "systems integration",
    "data center connectivity",
    "smart manufacturing",
    "Tulip Interfaces",
    "United Manufacturing Hub",
    "Litmus",
    "Black Sea Technology",
    "Innovaas Solutions",
  ],
  metadataBase: new URL("https://innovaas.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Innovaas Solutions | Technology Distribution, Consulting & AI Engineering",
    description:
      "Singapore-headquartered technology distribution and services. World-class brands, consulting, custom AI engineering, and implementation — delivered to clients worldwide.",
    url: "https://innovaas.co",
    siteName: "Innovaas Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Innovaas Solutions – Technology Distribution, Consulting & AI Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovaas Solutions | Technology Distribution, Consulting & AI Engineering",
    description:
      "Singapore-headquartered technology distribution and services. World-class brands, consulting, custom AI engineering, and implementation — end to end.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Innovaas Solutions",
  url: "https://innovaas.co",
  logo: "https://innovaas.co/logo.png",
  description:
    "Technology distribution and services company headquartered in Singapore, serving clients worldwide with world-class technology brands, consulting, custom AI development, and implementation.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SG",
  },
  sameAs: ["https://www.linkedin.com/company/innovaas"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://innovaas.co/contact",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff5a00" />
        <meta name="theme-color" content="#05080e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Umami is cookieless, so it loads without consent; reb2b is gated behind CookieConsent */}
      <Script
        src="https://analytics.innovaas.co/script.js"
        data-website-id="8703e9d2-01a7-4301-9700-f1362c9bda40"
        strategy="afterInteractive"
      />
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${anton.variable} antialiased`}
      >
        <ChakraProviders>
          <Header />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
          <CookieConsent />
          <RevealOnScroll />
        </ChakraProviders>
      </body>
    </html>
  );
}
