"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide scroll choreography: every content <section> stagger-fades in as
 * it enters the viewport (CSS in globals.css). The animated homepage hero
 * (.thr-reveal) is skipped — it runs its own load sequence.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(document.querySelectorAll("main section")).filter(
      (s) => !s.querySelector(".thr-reveal")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        }
      },
      // threshold 0 + small bottom margin: fires as soon as the section edge
      // enters — tall mobile sections would never reach a % threshold
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    for (const s of sections) {
      // Skip sections already fully visible at load so the page never flashes empty
      const rect = s.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.6) continue;
      s.classList.add("reveal-pending");
      observer.observe(s);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
