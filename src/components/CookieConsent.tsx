"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "innovaas-consent";

function loadTrackingScripts() {
  if ((window as unknown as { reb2b?: unknown }).reb2b) return;
  (window as unknown as { reb2b: { loaded: boolean } }).reb2b = { loaded: true };
  const key = "GNLKQH7W8R6Q";
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://ddwl4m2hdecbv.cloudfront.net/b/${key}/${key}.js.gz`;
  const first = document.getElementsByTagName("script")[0];
  first.parentNode?.insertBefore(s, first);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted") {
      loadTrackingScripts();
    } else if (stored !== "declined") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const choose = (value: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
    if (value === "accepted") loadTrackingScripts();
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[1100] border-t border-line bg-ink-900/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 text-sm leading-relaxed text-ink-300">
          We use a small number of cookies to understand how our site is used.
          No advertising, no data resale.{" "}
          <Link
            href="/privacy"
            className="text-ink-100 underline underline-offset-4 hover:text-signal-400"
          >
            Privacy policy
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={() => choose("declined")}
            className="!bg-transparent rounded-md border border-line-strong px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:border-ink-400 hover:text-ink-50"
          >
            Decline
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-md bg-signal-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-signal-600"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
