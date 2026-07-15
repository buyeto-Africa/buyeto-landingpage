import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Buyeto is a team of engineers, designers, and problem-solvers building the software and digital platforms that businesses across Africa run on.",
  alternates: { canonical: "/about-us" },
};

type Belief = { label: string; description: string };

const BELIEFS: Belief[] = [
  {
    label: "We build for growth",
    description:
      "We make high-caliber engineering available to businesses of every size — so the software is never the thing holding you back.",
  },
  {
    label: "We're invested in your success",
    description:
      "We're in it from the first call to long after launch. Your outcome, not our hours, is how we measure the work.",
  },
  {
    label: "We ship quality",
    description:
      "Reliable, well-built systems are the baseline. We sweat the details other teams skip, because they're the ones that bite later.",
  },
  {
    label: "We work as one team",
    description:
      "The best software comes from sharp minds building together — your team and ours — not from lone heroics.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Who we are */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
        <p className="text-sm font-medium uppercase tracking-wide text-muted">
          About us
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          Who we are.
        </h1>
        <div className="mt-6 flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-muted">
          <p>
            Buyeto is a team of engineers, designers, and problem-solvers
            building the software and digital platforms that businesses across
            Africa run on. From our base in Abuja, we turn ideas into systems
            that hold up in the real world.
          </p>
          <p>
            We could tell you we&apos;re a reputable software company with a
            solid track record — but what you actually want to know is: will
            they understand my business, and can they deliver? The answer is
            yes. You&apos;re in safe hands.
          </p>
        </div>
      </section>

      {/* What we believe in */}
      <section className="border-t border-border bg-subtle">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wide text-muted">
              What we believe in
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Good software should compound.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Every system we build should make the next one easier — for your
              business and for the teams that come after us. That belief shapes
              how we work.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {BELIEFS.map((belief) => (
              <div
                key={belief.label}
                className="rounded-2xl border border-border bg-paper p-8"
              >
                <h3 className="text-lg font-semibold text-ink">
                  {belief.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {belief.description}
                </p>
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
              Tell us what you&apos;re trying to build. We&apos;ll tell you how
              we&apos;d approach it.
            </p>
          </div>
          <Link
            href="/book-a-call"
            className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            Book a call
          </Link>
        </div>
      </section>
    </>
  );
}
