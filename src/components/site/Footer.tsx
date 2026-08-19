"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { COMPANY, SERVICES } from "@/data/site";
import swiftLogo from "@/assets/swift-logo.png";
import { Reveal } from "@/components/site/motion";

const resources = [
  { label: "Resource library", to: "/resources" },
  { label: "Blog", to: "/blog" },
  { label: "Guides", to: "/guides" },
  { label: "Frequently asked questions", to: "/faqs" },
] as const;

const company = [
  { label: "About us", to: "/about" },
  { label: "All services", to: "/services" },
  { label: "Locations", to: "/locations" },
  { label: "Contact", to: "/contact" },
  { label: "Client Portal Login", to: "/login" },
  { label: "Privacy policy", to: "/privacy-policy" },
  { label: "Terms of service", to: "/terms" },
] as const;

const visaLinks = [
  { label: "Visa Services Index", to: "/visa" },
  { label: "UK Visa & Settlement", to: "/visa/united-kingdom" },
  { label: "Canada TRV & Study", to: "/visa/canada" },
  { label: "US B1/B2 & F1 Student", to: "/visa/united-states" },
  { label: "Schengen (France / Germany)", to: "/visa/france" },
  { label: "UAE & Dubai Tourist", to: "/visa/united-arab-emirates" },
  { label: "Kenya eTA & Work Permits", to: "/visa/kenya" },
  { label: "Embassies in Nairobi", to: "/embassies" },
] as const;

export function Footer() {
  return (
    <>
      {/* ---------------- CTA / NEWSLETTER & VISIT SECTION ---------------- */}
      {/* Distinct warm executive background separating it clearly from the dark navy footer */}
      <section className="relative overflow-hidden border-t border-hairline bg-sand py-16 text-[#06132F] lg:py-20">
        <div
          className="hairline-grid pointer-events-none absolute inset-0 opacity-40 select-none"
          aria-hidden="true"
        />
        <div className="shell relative z-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal variant="fade-up" className="max-w-xl">
            <p className="rule-label">Newsletter</p>
            <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-[#06132F] sm:text-4xl">
              Regulatory changes, explained before they cost you.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
              One monthly briefing on filing deadlines, fee changes and process updates across BRS,
              KRA, NTSA and the immigration desk. No marketing.
            </p>
            <form
              className="mt-8 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@company.co.ke"
                className="min-h-12 rounded-xs border border-hairline bg-card px-4 text-sm text-[#06132F] placeholder:text-neutral-400 shadow-xs focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                data-analytics-event="contact_interaction"
                data-analytics-label="footer_newsletter_subscribe"
                className="min-h-12 rounded-xs bg-gold px-7 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:shadow-md cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </Reveal>

          <Reveal variant="fade-up" delay={100} className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="rule-label">Visit</p>
              <address className="mt-5 space-y-4 text-sm not-italic leading-relaxed text-neutral-700">
                <span className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    <span className="block font-medium">{COMPANY.address}</span>
                    <span className="block text-xs text-neutral-500">{COMPANY.postalBox}</span>
                  </span>
                </span>
                <a
                  className="flex gap-3 transition-colors hover:text-gold"
                  href={COMPANY.phoneHref}
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <div className="space-y-0.5">
                    <a
                      className="block break-all transition-colors hover:text-gold"
                      href={`mailto:${COMPANY.email}`}
                    >
                      {COMPANY.email}
                    </a>
                    <a
                      className="block break-all text-xs text-neutral-500 transition-colors hover:text-gold"
                      href={`mailto:${COMPANY.secondaryEmail}`}
                    >
                      {COMPANY.secondaryEmail}
                    </a>
                  </div>
                </div>
              </address>
            </div>
            <div>
              <p className="rule-label">Office hours</p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-700">
                {COMPANY.hours.map((h) => (
                  <li key={h.day}>
                    <span className="block font-semibold text-[#06132F]">{h.day}</span>
                    {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FOOTER (PRESERVED IN FULL) ---------------- */}
      <footer className="border-t border-hairline bg-ink text-ink-foreground">
        <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal variant="fade-up" delay={0}>
            <p className="rule-label text-gold">Statutory Services</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/70">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-gold">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade-up" delay={60}>
            <p className="rule-label text-gold">Visa & Travel Desk</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/70">
              {visaLinks.map((v) => (
                <li key={v.to}>
                  <Link href={v.to} className="transition-colors hover:text-gold">
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade-up" delay={120}>
            <p className="rule-label text-gold">Company</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/70">
              {company.map((c) => (
                <li key={c.to}>
                  <Link href={c.to} className="transition-colors hover:text-gold">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade-up" delay={180}>
            <p className="rule-label text-gold">Resources</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/70">
              {resources.map((r) => (
                <li key={r.to}>
                  <Link href={r.to} className="transition-colors hover:text-gold">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              data-analytics-event="contact_interaction"
              data-analytics-label="footer_whatsapp"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors hover:underline"
            >
              WhatsApp desk
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="border-t border-ink-foreground/10">
          <Reveal variant="fade-up" delay={80}>
            <div className="shell flex flex-col gap-4 py-8 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src={swiftLogo.src}
                  alt={COMPANY.name}
                  className="h-8 w-auto rounded bg-white px-2 py-1 object-contain"
                />
                <p>
                  © {new Date().getFullYear()} {COMPANY.legal}. All rights reserved.
                </p>
              </div>
              <p>
                A private documentation firm. Not a government agency. Statutory fees are paid
                directly to the relevant authority.
              </p>
            </div>
          </Reveal>
        </div>
      </footer>
    </>
  );
}
