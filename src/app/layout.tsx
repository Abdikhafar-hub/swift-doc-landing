import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

import "@/globals.css";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Analytics } from "@/components/seo/Analytics";
import { COMPANY } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: `${COMPANY.name} — Document & Registration Services in Kenya`,
    description:
      "Kenyan document processing specialists: company registration, KRA, passports, NTSA, civil records, NGO registration and authentication.",
    path: "/",
  }),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#C9A227",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
