// Buyeto Ltd's contact details, in one place: the footer, the contact page, the booking page and the structured data
// for search engines all read these. They must match the CAC record and what payment partners were given.

export const CONTACT = {
  company: "Buyeto Ltd",
  rcNumber: "RC 7719235",
  email: "hello@buyeto.ng",
  /** As dialled: for tel: and WhatsApp links. */
  phone: "+2348100275483",
  /** As shown. */
  phoneDisplay: "+234 810 027 5483",
  address: {
    street: " Julius Nyerere Crescent",
    area: "Asokoro",
    city: "Abuja",
    region: "Federal Capital Territory",
    country: "Nigeria",
    countryCode: "NG",
  },
} as const;

/** "8 Julius Nyerere Crescent, Asokoro, Abuja, Nigeria". */
export const ADDRESS_ONE_LINE = [CONTACT.address.street, CONTACT.address.area, CONTACT.address.city, CONTACT.address.country].join(", ");

/** The address on a map. */
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_ONE_LINE)}`;

/** A WhatsApp chat with the business number. */
export const WHATSAPP_URL = `https://wa.me/${CONTACT.phone.replace("+", "")}`;
