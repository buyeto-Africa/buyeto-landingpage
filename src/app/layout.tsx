import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://buyeto.ng";
const TITLE = "Buyeto | Digital Product Infrastructure for African Businesses";
const DESCRIPTION =
  "Buyeto builds custom software that helps businesses streamline operations and process payments — engineered around your goals.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Buyeto",
  },
  description: DESCRIPTION,
  keywords: [
    "Buyeto",
    "custom software Nigeria",
    "digital infrastructure Africa",
    "payments Nigeria",
    "business software Africa",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Buyeto",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Buyeto",
  url: SITE_URL,
  logo: `${SITE_URL}/images/Buyeto-black.png`,
  email: "hello@buyeto.ng",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
