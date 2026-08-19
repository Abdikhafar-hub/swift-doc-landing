import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { PageHero } from "@/components/site/ui";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { VisaDirectory } from "@/components/visa/VisaDirectory";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, organizationSchema } from "@/lib/seo/schema";
import {
  STANDARD_VISA_DISCLAIMER,
  VISA_COUNTRIES,
  VISA_PROCESS_STEPS,
} from "@/data/visaCountries";
import { getContentEntries } from "@/lib/content";
import { COMPANY } from "@/data/site";
import { Reveal } from "@/components/site/motion";

export const metadata: Metadata = createMetadata({
  title: "Visa Application Services in Kenya | Swift Doc Travel Desk",
  description:
    "Professional visa application support in Nairobi for UK, Canada, USA, Schengen (France, Germany, Belgium), Australia, China, UAE, Saudi Arabia, and Kenya eTA / work permits.",
  path: "/visa",
});

const VISA_HUB_FAQS = [
  {
    q: "What does Swift Doc's visa application service include?",
    a: "Our service provides complete pre-submission auditing, document checklist customization, official portal form completion (e.g. UKVI, DS-160, IRCC, France-Visas), biometric appointment scheduling, financial ties evidence compilation, and interview preparation.",
  },
  {
    q: "Does Swift Doc guarantee visa approval?",
    a: "No. Visa approval is the exclusive statutory prerogative of the respective embassy, high commission, or immigration authority. Swift Doc eliminates clerical errors, strengthens document presentation, and ensures full policy compliance to maximize your chances.",
  },
  {
    q: "Where are biometric appointments conducted in Nairobi?",
    a: "Biometrics are captured at authorized visa application centres in Nairobi—such as VFS Global (Parklands/Westlands), TLScontact, Tasheer, or at the Embassy Consular Section (such as the U.S. Embassy in Gigiri).",
  },
  {
    q: "How early should I begin my visa application before travel?",
    a: "We recommend starting your preparation 6 to 8 weeks before your intended departure date for visitor and business visas, and 2 to 3 months in advance for student and work visas.",
  },
];

export default function VisaHubPage() {
  const visaArticles = getContentEntries("blog")
    .concat(getContentEntries("guides"))
    .filter((entry) => entry.category?.toLowerCase().includes("visa") || entry.category?.toLowerCase().includes("immigration"))
    .slice(0, 3);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Visa Services", href: "/visa" },
  ];

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(VISA_HUB_FAQS)} />

      <PageHero
        eyebrow="International & Local Travel Desk"
        title="Visa application support, verified before submission."
        lead="Comprehensive preparation for Commonwealth High Commissions, Schengen embassies, the United States, East Asia, the Middle East, and Kenya inbound immigration."
      />

      <section className="shell py-12 lg:py-16">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8">
          <VisaDirectory initialCountries={VISA_COUNTRIES} />
        </div>
      </section>

      {/* 8-Step Preparation Framework */}
      <section className="border-y border-hairline bg-[#06132F] text-white py-20 lg:py-28">
        <div className="shell">
          <div className="max-w-2xl">
            <Reveal variant="fade-down">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-gold" />
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold">
                  Our Audit Framework
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-[3rem]">
                The eight-stage dossier audit.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Every application follows a rigorous quality assurance framework designed to catch
                discrepancies, clarify funds origins, and adhere to strict consular policies.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VISA_PROCESS_STEPS.map((step, idx) => (
              <Reveal
                key={step.step}
                variant="fade-up"
                delay={idx * 60}
                className="flex flex-col justify-between rounded-xs border border-white/10 bg-white/5 p-6 transition-all hover:border-gold/50 hover:bg-white/[0.08]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-gold">Stage {step.step}</span>
                    <span className="text-[0.65rem] uppercase tracking-wider text-neutral-400">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-300">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-6 text-gold" />
              <p className="text-xs text-neutral-300">
                Over 98% of Swift Doc dossiers pass consular intake on first submission without procedural rejection.
              </p>
            </div>
            <a
              href={COMPANY.portalRegisterUrl}
              className="inline-flex items-center gap-2 rounded-xs bg-gold px-7 py-3 text-sm font-bold text-ink shadow-xs transition-all hover:bg-gold-dark hover:shadow-md"
            >
              Start Application on Portal
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="rule-label">Frequently Asked Questions</p>
            <h2 className="display-lg mt-6">
              Straight answers on visa application support.
            </h2>
            <p className="lede mt-4">
              Key facts you should know regarding timelines, biometrics, and consular authority.
            </p>
            <div className="mt-8">
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:underline"
              >
                Chat with our Visa Desk
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="divide-y divide-hairline border-y border-hairline">
            {VISA_HUB_FAQS.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-bold tracking-tight marker:hidden">
                  {faq.q}
                  <span className="mt-1 grid size-6 shrink-0 place-items-center border border-hairline text-neutral-500 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Disclaimer Card */}
        <div className="mt-16 rounded-xs border border-amber-900/20 bg-amber-50/70 p-6 text-amber-950">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
            Regulatory Notice & Legal Disclaimer
          </p>
          <p className="mt-1 text-xs leading-relaxed text-amber-900/80">
            {STANDARD_VISA_DISCLAIMER}
          </p>
        </div>
      </section>

      {/* Related Resources */}
      {visaArticles.length > 0 && (
        <section className="border-t border-hairline bg-sand py-16">
          <div className="shell">
            <p className="rule-label">Visa Guides & Intelligence</p>
            <div className="mt-8 grid gap-px bg-hairline md:grid-cols-3">
              {visaArticles.map((entry) => (
                <Link
                  key={`${entry.type}-${entry.slug}`}
                  href={`/${entry.type}/${entry.slug}`}
                  className="bg-sand p-7 transition-colors hover:bg-background"
                >
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                    {entry.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-extrabold leading-snug">
                    {entry.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{entry.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
