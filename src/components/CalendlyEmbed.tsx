"use client";

import Script from "next/script";

/**
 * Inline Calendly scheduler. The widget script scans for `.calendly-inline-widget[data-url]` on load
 * and renders the booking UI in place — no backend needed. Set the URL via NEXT_PUBLIC_CALENDLY_URL.
 */
export default function CalendlyEmbed({ url }: { url: string }) {
  return (
    <>
      <div
        className="calendly-inline-widget w-full overflow-hidden rounded-2xl border border-border"
        data-url={url}
        style={{ minWidth: "320px", height: "720px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
