import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The software, platform, and data services Buyeto builds for businesses across Africa from custom applications and SaaS products to APIs, portals, and internal tools.",
  alternates: { canonical: "/services" },
};

type Service = { label: string; description: string };
type ServiceGroup = { title: string; blurb: string; services: Service[] };

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Build",
    blurb: "The products and applications your business runs on.",
    services: [
      {
        label: "Custom software",
        description:
          "Purpose built applications designed around how your business actually operates  not off the shelf software you bend to fit.",
      },  
      {
        label: "SaaS product development",
        description:
          "We take a product from idea to a live platform your customers sign up for, log into, and rely on.",
      },
      {
        label: "Web & mobile apps",
        description:
          "Fast, modern customer facing apps,  the storefront, portal, or dashboard your business is known by.",
      },
      {
        label: "Operations software",
        description:
          "Automate workflows, retire the spreadsheets, and connect your business end-to-end in one system.",
      },
    ],
  },
  {
    title: "Data & intelligence",
    blurb: "Turn what your business already knows into decisions.",
    services: [
      {
        label: "Analytics & dashboards",
        description:
          "Turn your operational data into dashboards and reports the people running the business actually use.",
      },
      {
        label: "Reporting & automation",
        description:
          "Scheduled reports and automated insights, delivered where your team already works.",
      },
    ],
  },
  {
    title: "Platform & infrastructure",
    blurb: "The systems underneath the product.",
    services: [
      {
        label: "APIs & integrations",
        description:
          "Expose your systems as clean, sellable APIs — or connect the tools you already use into one flow.",
      },
      {
        label: "Customer portals",
        description:
          "Branded portals where your customers, staff, or partners log in and serve themselves.",
      },
      {
        label: "Internal tools & dashboards",
        description:
          "The back office software your team actually runs on  approvals, dashboards, and controls that replace the spreadsheets and group chats holding things together.",
      },
      {
        label: "Cloud hosting & DevOps",
        description:
          "We deploy, scale, and keep your systems running — so uptime and infrastructure aren't your problem.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
        <p className="text-sm font-medium uppercase tracking-wide text-muted">
          Services
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          What we build for businesses.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Buyeto is the engineering team behind the software, platforms, and
          infrastructure that businesses across Africa run on. Here&apos;s the
          full range of what we deliver.
        </p>
      </section>

      {/* Service groups */}
      <section className="border-t border-border bg-subtle">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="flex flex-col gap-16">
            {SERVICE_GROUPS.map((group) => (
              <div
                key={group.title}
                className="grid gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {group.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {group.blurb}
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                  {group.services.map((service) => (
                    <div
                      key={service.label}
                      className="rounded-2xl border border-border bg-paper p-8"
                    >
                      <h3 className="text-lg font-semibold text-ink">
                        {service.label}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Let&apos;s talk about your business.
            </h2>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-muted">
              Tell us what your business needs. We&apos;ll tell you how we&apos;d
              build it.
            </p>
          </div>
          <Link
            href="/#book-a-call"
            className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            Book a call
          </Link>
        </div>
      </section>
    </>
  );
}
