export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-20 sm:pt-28">
      <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
        The infrastructure behind Africa&apos;s next generation of
        businesses.
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
        Buyeto builds custom software for businesses that need solutions
        engineered around their goals — from streamlined operations to
        the systems that run them.
      </p>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <a
          href="#book-a-call"
          className="rounded-full bg-ink px-6 py-3 text-center text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Book a call
        </a>
        <a
          href="#solutions"
          className="rounded-full border border-border px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:bg-subtle"
        >
          See what we build →
        </a>
      </div>
    </section>
  );
}
