const GOALS = [
  {
    label: "World-class, tailored to you",
    description:
      "We deliver world-class software and digital solutions built around each client's specific business needs.",
  },
  {
    label: "Technology that pays for itself",
    description:
      "We help our clients reach their goals through integrated solutions that maximize their technology investment.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-wide text-muted">
              About us
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              How we work.
            </h2>
          </div>

          <div className="flex flex-col lg:col-span-7">
            {GOALS.map((goal, index) => (
              <div
                key={goal.label}
                className="flex gap-6 border-t border-border py-8 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span className="text-sm font-medium text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    {goal.label}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
