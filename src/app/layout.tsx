import ClientLayout from "../components/ClientLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChakraProviders from "../components/ChakraProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Innovaas Solutions | Digital Transformation & AI Solutions for SMBs",
    template: "%s | Innovaas Solutions",
  },
  description:
    "Innovaas Solutions helps US small and mid-size businesses (50-500 employees) accelerate digital transformation with AI-powered software, IoT integration, and data-driven insights. Products include FlowForge, NovaCRM, NovaKMS, and NovaPredict.",
  keywords: [
    "digital transformation",
    "AI solutions",
    "SMB software",
    "digital readiness assessment",
    "IoT integration",
    "FlowForge",
    "NovaCRM",
    "NovaKMS",
    "NovaPredict",
    "Innovaas Solutions",
    "business automation",
    "custom AI software",
  ],
  metadataBase: new URL("https://innovaas.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Innovaas Solutions | Digital Transformation & AI Solutions for SMBs",
    description:
      "Accelerate your digital transformation with AI-powered solutions. Connect machines, sensors, and data to unlock operational efficiency for your business.",
    url: "https://innovaas.co",
    siteName: "Innovaas Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Innovaas Solutions – Digital Transformation & AI for SMBs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovaas Solutions | Digital Transformation & AI Solutions for SMBs",
    description:
      "Accelerate your digital transformation with AI-powered solutions. Connect machines, sensors, and data to unlock operational efficiency.",
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
    "Digital transformation and AI-powered software solutions for US small and mid-size businesses. Products include FlowForge, NovaCRM, NovaKMS, and NovaPredict.",
  sameAs: [
    "https://www.linkedin.com/company/innovaas",
  ],
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
        <meta name="theme-color" content="#0d1a21" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/d847d4600e8aab3ff26548001d53fcb3/script.js"
        />
      </head>
      <Script
        id="reb2b-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("GNLKQH7W8R6Q");`,
        }}
      />
      <Script
        src="https://analytics.innovaas.co/script.js"
        data-website-id="8703e9d2-01a7-4301-9700-f1362c9bda40"
        strategy="afterInteractive"
      />
      <body className={`${inter.variable} antialiased`}>
        <ChakraProviders>
          <Header />
          <ClientLayout>
            {children}
          </ClientLayout>
          <Footer />
        </ChakraProviders>
      </body>
    </html>
  );
}
