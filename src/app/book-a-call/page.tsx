import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Book a call with Buyeto. Tell us what you're trying to build, and we'll tell you how we'd approach it — pick a time that works for you.",
  alternates: { canonical: "/book-a-call" },
};

const CONTACT_EMAIL = "hello@buyeto.ng";

// Buyeto's Calendly booking link. NEXT_PUBLIC_CALENDLY_URL overrides it if ever needed.
const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/contactbuyeto/30min";
const IS_CONFIGURED = CALENDLY_URL.startsWith("http");

export default function BookACallPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-20 sm:pt-28">
      <p className="text-sm font-medium uppercase tracking-wide text-muted">
        Book a call
      </p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
        Let&apos;s talk about your business.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        Tell us what you&apos;re trying to build, and we&apos;ll tell you how
        we&apos;d approach it. Pick a time below — it takes two minutes.
      </p>

      <div className="mt-12">
        {IS_CONFIGURED ? (
          <CalendlyEmbed url={CALENDLY_URL} />
        ) : (
          <div className="rounded-2xl border border-border bg-subtle p-10 text-center">
            <p className="text-lg font-semibold text-ink">
              Scheduling is being set up.
            </p>
            <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-muted">
              In the meantime, email us and we&apos;ll get a time on the
              calendar within a day.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Book a call with Buyeto`}
              className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              Email {CONTACT_EMAIL}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
