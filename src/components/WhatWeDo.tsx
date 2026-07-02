const PILLARS = [
  {
    label: "Custom software",
    description:
      "Purpose-built applications designed around how your business actually operates.",
  },
  {
    label: "Process payments",
    description:
      "Accept and manage payments securely, on infrastructure that scales as you grow.",
  },
  {
    label: "Streamline operations",
    description:
      "Custom applications that automate workflows and connect your business end-to-end.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="solutions" className="border-t border-border bg-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-muted">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            We&apos;re the backend for small and large businesses.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Buyeto builds customized software engineered around your goals —
            so you can focus on running the business, not the infrastructure
            behind it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="rounded-2xl border border-border bg-paper p-8"
            >
              <h3 className="text-lg font-semibold text-ink">
                {pillar.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
