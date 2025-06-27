import ClientLayout from "../components/ClientLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChakraProviders from "../components/ChakraProviders";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innovaas Solutions",
  description: "Digital Transformation Agency",
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
      </head>
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
