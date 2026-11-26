import Image from "next/image";
import { ADDRESS_ONE_LINE, CONTACT, MAP_URL } from "@/lib/contact";

const FOOTER_LINKS = {
  Company: [
    { label: "About", href: "/about-us" },
    { label: "Contact us", href: "/contact" },
    { label: "Book a call", href: "/book-a-call" },
  ],
  Services: [
    { label: "All services", href: "/services" },
    { label: "Custom software", href: "/services" },
    { label: "Digital platforms", href: "/services" },
  ],
  Contact: [
    { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
    { label: `${CONTACT.address.street}, ${CONTACT.address.area}, ${CONTACT.address.city}`, href: MAP_URL },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/images/Buyeto-white.png"
              alt="Buyeto"
              width={120}
              height={79}
              className="h-8 w-auto shrink-0 aspect-149/98 object-contain"
            />
            <p className="max-w-xs text-sm text-paper/60">
              Digital product infrastructure for African businesses.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-16">
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-paper/40">{section}</h3>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-paper/80 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/10 pt-8 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {CONTACT.company}. All rights reserved.</p>
          <p>{CONTACT.rcNumber} &middot; {ADDRESS_ONE_LINE}</p>
        </div>
      </div>
    </footer>
  );
}
