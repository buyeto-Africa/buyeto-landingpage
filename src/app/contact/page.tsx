import type { Metadata } from "next";
import Link from "next/link";
import { ADDRESS_ONE_LINE, CONTACT, MAP_URL, WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Contact Buyeto Ltd: email ${CONTACT.email}, call ${CONTACT.phoneDisplay}, or visit us at ${ADDRESS_ONE_LINE}.`,
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    note: "Write to us.",
  },
  {
    label: "Phone",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
    note: "Call us.",
  },
  {
    label: "WhatsApp",
    value: CONTACT.phoneDisplay,
    href: WHATSAPP_URL,
    note: "Message us on WhatsApp.",
  },
] as const;

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-20 sm:pt-28">
      <p className="text-sm font-medium uppercase tracking-wide text-muted">
        Contact us
      </p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
        Get in touch.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        Questions about our products, a project, or an account? Reach us any of
        these ways.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {CHANNELS.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.label === "WhatsApp" ? "_blank" : undefined}
            rel={channel.label === "WhatsApp" ? "noreferrer" : undefined}
            className="rounded-2xl border border-border p-6 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-medium text-muted">{channel.label}</p>
            <p className="mt-2 break-words text-lg font-semibold text-ink">
              {channel.value}
            </p>
            <p className="mt-2 text-sm text-muted">{channel.note}</p>
          </a>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-border p-6">
        <p className="text-sm font-medium text-muted">Business address</p>
        <address className="mt-2 text-lg font-semibold not-italic leading-relaxed text-ink">
          {CONTACT.company}
          <br />
          {CONTACT.address.street}
          <br />
          {CONTACT.address.area}, {CONTACT.address.city}
          <br />
          {CONTACT.address.region}, {CONTACT.address.country}
        </address>
        <p className="mt-2 text-sm text-muted">{CONTACT.rcNumber}</p>
        <a
          href={MAP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-medium text-ink underline underline-offset-4"
        >
          Open in Google Maps
        </a>
      </div>

      <p className="mt-12 text-base text-muted">
        Want to talk through a project?{" "}
        <Link href="/book-a-call" className="font-medium text-ink underline underline-offset-4">
          Book a call
        </Link>
        .
      </p>
    </section>
  );
}
