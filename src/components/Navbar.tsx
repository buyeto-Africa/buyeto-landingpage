import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Buyeto-black.png"
            alt="Buyeto"
            width={120}
            height={79}
            className="h-8 w-auto aspect-149/98 object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#book-a-call"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
