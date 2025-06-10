"use client";
import { usePathname } from "next/navigation";
import Hero from "./Hero";

export default function HeroWrapper() {
  const pathname = usePathname();
  let heroImage = "/home-hero.webp";
  if (pathname.startsWith("/about")) heroImage = "/hero-about.webp";
  else if (pathname.startsWith("/services")) heroImage = "/hero-services.webp";
  else if (pathname.startsWith("/partners")) heroImage = "/hero-partners.webp";
  return <Hero image={heroImage} />;
}
