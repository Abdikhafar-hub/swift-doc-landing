import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Globe,
  Landmark,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PrimaryLink, WhatsAppButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/motion";
import { createMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  embassySchema,
  faqSchema,
  visaServiceSchema,
} from "@/lib/seo/schema";
import {
  getRelatedVisaCountries,
  getVisaCountry,
  STANDARD_VISA_DISCLAIMER,
  VISA_COUNTRIES,
  VISA_PROCESS_STEPS,
} from "@/data/visaCountries";
import { COMPANY } from "@/data/site";

export function generateStaticParams() {
  return VISA_COUNTRIES.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getVisaCountry(slug);
  if (!country) return {};

  return createMetadata({
    title: `${country.name} Visa Application Services in Kenya | Swift Doc`,
    description: `${country.description} Official requirements, document checklist, biometrics guidance, and expert application assistance in Nairobi.`,
    path: `/visa/${country.slug}`,
  });
}

export default async function VisaCountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const country = getVisaCountry(slug);

  if (!country) {
    notFound();
  }

  const related = getRelatedVisaCountries(country, 4);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Visa Services", href: "/visa" },
    { name: country.name, href: `/visa/${country.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={visaServiceSchema(
          country.name,
          country.tagline,
          country.description,
          `/visa/${country.slug}`,
        )}
      />
      <JsonLd
        data={embassySchema(
          country.name,
          country.missionName,
          country.applicationCenter,
          `/visa/${country.slug}`,
        )}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(country.faqs)} />

      {/* ---------------- Country Hero Header ---------------- */}
      <section className="relative overflow-hidden border-b border-hairline bg-[#06132F] text-white">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-gold/15 via-gold/5 to-transparent blur-3xl"
          aria-hidden="true"
        />

        <div className="shell relative py-16 lg:py-24">
          <div className="[&_span]:text-white/70 [&_a]:text-white/60">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <Reveal variant="fade-up">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                  {country.groupLabel}
                </span>
                <span className="text-xs text-white/50">·</span>
                <span className="text-xs font-semibold text-white/70">
                  {country.missionType} in Nairobi
                </span>
              </div>

              <h1 className="mt-5 font-serif text-3xl font-medium tracking-tight sm:text-5xl lg:text-[3.5rem] leading-[1.1]">
                {country.name} Visa Services
              </h1>

              <p className="mt-4 text-base sm:text-lg font-medium text-gold">
                {country.tagline}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300">
                {country.description}
              </p>
            </Reveal>

            <Reveal variant="fade-left" delay={100} className="lg:justify-self-end">
              <div className="rounded-xs border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                  Official Consular Authority
                </p>
                <h2 className="mt-2 font-serif text-lg font-bold text-white">
                  {country.missionName}
                </h2>
                <div className="mt-4 space-y-2 border-t border-white/10 pt-3 text-xs text-neutral-300">
                  <p>
                    <strong className="text-white">Submission Channel:</strong>{" "}
                    {country.applicationCenter}
                  </p>
                  {country.officialAuthority.url && (
                    <p className="flex items-center gap-1.5 pt-1">
                      <a
                        href={country.officialAuthority.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-gold hover:underline"
                      >
                        Official Authority Portal
                        <ExternalLink className="size-3" />
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6 text-sm text-neutral-300">
            <span className="font-bold text-white">Who this is for: </span>
            {country.whoIsItFor}
          </div>
        </div>
      </section>

      {/* ---------------- Main Content Layout ---------------- */}
      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          {/* Main Column */}
          <div className="space-y-16">
            {/* 1. Visa Categories */}
            <section>
              <Reveal variant="fade-up">
                <div className="flex items-center justify-between border-b border-hairline pb-4">
                  <div>
                    <p className="rule-label">Supported Visa Categories</p>
                    <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-[#06132F] sm:text-3xl">
                      Select your travel purpose
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-neutral-500">
                    {country.categories.length} Available Routes
                  </span>
                </div>
              </Reveal>

              <div className="mt-8 divide-y divide-hairline border-y border-hairline">
                {country.categories.map((category, idx) => (
                  <Reveal
                    key={category.slug}
                    variant="fade-up"
                    delay={idx * 60}
                    className="py-8 first:pt-4 last:pb-4"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/visa/${country.slug}/${category.slug}`}
                          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#06132F] transition-colors hover:text-gold"
                        >
                          {category.name}
                        </Link>
                      </div>
                      <span className="rounded-xs border border-hairline bg-sand px-3 py-1 text-xs font-bold text-neutral-700">
                        {category.estimatedTurnaround}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {category.shortDescription}
                    </p>

                    <div className="mt-5 rounded-xs border border-hairline bg-sand/60 p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#06132F]">
                        Key Requirements:
                      </p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {category.keyRequirements.map((req, i) => (
                          <li key={i} className="flex gap-2 text-xs leading-relaxed text-neutral-700">
                            <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {category.commonMistakes.length > 0 && (
                      <div className="mt-4 rounded-xs border border-amber-200 bg-amber-50/50 p-4">
                        <p className="text-[0.72rem] font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                          <AlertTriangle className="size-3.5 text-amber-600" />
                          Common Pitfalls to Avoid:
                        </p>
                        <ul className="mt-2 space-y-1 text-xs text-amber-950">
                          {category.commonMistakes.map((mistake, mIdx) => (
                            <li key={mIdx}>• {mistake}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-hairline/60 pt-4">
                      <div className="text-xs text-neutral-500">
                        <strong>Audience:</strong> {category.audience}
                      </div>
                      <Link
                        href={`/visa/${country.slug}/${category.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline"
                      >
                        Deep-dive checklist & details
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 2. What Swift Doc Handles vs Embassy Role */}
            <section className="rounded-xs border border-hairline bg-card p-7 sm:p-9 shadow-xs">
              <Reveal variant="fade-up">
                <p className="rule-label">Division of Responsibility</p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                  What Swift Doc handles vs. What the Embassy decides
                </h2>
                <p className="mt-2 text-xs text-neutral-500">
                  Transparent breakdown of administrative document preparation versus consular statutory authority.
                </p>
              </Reveal>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xs border border-emerald-200 bg-emerald-50/40 p-6">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                    <UserCheck className="size-5 text-emerald-600" />
                    Swift Doc Application Desk
                  </div>
                  <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-emerald-950">
                    {country.whatSwiftDocHandles.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xs border border-hairline bg-sand/60 p-6">
                  <div className="flex items-center gap-2 text-[#06132F] font-bold text-sm">
                    <Landmark className="size-5 text-neutral-700" />
                    Official Consular Desk
                  </div>
                  <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-neutral-700">
                    {country.whatEmbassyDecides.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-neutral-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Biometrics & Appointment Guidance */}
            <section className="rounded-xs border border-hairline bg-sand p-7 sm:p-9">
              <Reveal variant="fade-up">
                <div className="flex items-center gap-2">
                  <CalendarCheck className="size-5 text-gold" />
                  <p className="rule-label">Submission Logistics</p>
                </div>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                  Biometrics & Appointment Guidance
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  {country.biometricsInterviewInfo}
                </p>
              </Reveal>
            </section>

            {/* 4. Common Mistakes */}
            <section>
              <Reveal variant="fade-up">
                <p className="rule-label">Compliance Alert</p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                  Avoidable reasons {country.name} applications face delays or refusals
                </h2>
              </Reveal>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {country.commonMistakes.map((mistake, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 rounded-xs border border-amber-200/80 bg-amber-50/40 p-4 text-xs text-amber-950"
                  >
                    <ShieldAlert className="size-5 shrink-0 text-amber-600 mt-0.5" />
                    <span>{mistake}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Country FAQs */}
            <section>
              <Reveal variant="fade-up">
                <p className="rule-label">Country Questions</p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                  {country.name} visa frequently asked questions
                </h2>
              </Reveal>

              <div className="mt-6 divide-y divide-hairline border-y border-hairline">
                {country.faqs.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="cursor-pointer list-none font-display text-lg font-bold marker:hidden flex items-start justify-between">
                      {faq.q}
                      <span className="mt-1 grid size-6 shrink-0 place-items-center border border-hairline text-neutral-500 transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
            <Reveal variant="fade-left" delay={100}>
              {/* Document checklist box */}
              <div className="rounded-xs border border-hairline bg-card p-6 shadow-xs">
                <p className="rule-label">Core Document Checklist</p>
                <h3 className="mt-2 font-serif text-lg font-bold text-[#06132F]">
                  What to prepare
                </h3>
                <ul className="mt-5 space-y-3">
                  {country.requiredDocumentGuidance.map((doc, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs leading-relaxed text-neutral-700">
                      <FileCheck2 className="size-4 shrink-0 text-gold mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-hairline pt-4 text-[0.7rem] leading-relaxed text-neutral-500">
                  Consular requirements are verified against the active embassy checklist before submission.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-6 space-y-3">
                <a
                  href={COMPANY.portalRegisterUrl}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xs bg-gold px-6 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
                >
                  Apply on Client Portal
                  <ArrowUpRight className="size-4" />
                </a>
                <WhatsAppButton className="w-full justify-center" />
                <Link
                  href="/contact"
                  className="flex min-h-12 w-full items-center justify-center rounded-xs border border-hairline bg-card px-6 text-sm font-bold text-[#06132F] transition-all hover:border-gold hover:text-gold"
                >
                  Request Consultation Quote
                </Link>
                <a
                  href={COMPANY.phoneHref}
                  className="flex min-h-12 w-full items-center justify-center rounded-xs border border-hairline bg-sand px-6 text-xs font-bold text-neutral-700 hover:border-gold hover:text-gold"
                >
                  Call Desk: {COMPANY.phone}
                </a>
              </div>

              {/* Official Mission Card */}
              <div className="mt-6 rounded-xs border border-hairline bg-sand/70 p-5 text-xs text-neutral-600">
                <p className="font-bold uppercase tracking-wider text-neutral-500 text-[0.68rem]">
                  Mission Details
                </p>
                <p className="mt-2 font-semibold text-[#06132F]">{country.missionName}</p>
                <p className="mt-1">Application Center: {country.applicationCenter}</p>
                <Link
                  href={`/embassies/${country.slug}`}
                  className="mt-3 inline-flex items-center gap-1 font-bold text-gold hover:underline"
                >
                  View Embassy Profile
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* ---------------- Related Countries ---------------- */}
      {related.length > 0 && (
        <section className="border-t border-hairline bg-sand py-16 lg:py-20">
          <div className="shell">
            <Reveal variant="fade-up">
              <p className="rule-label">Alternative & Related Destinations</p>
              <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                Other visa destinations from Kenya
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r, i) => (
                <Reveal key={r.slug} variant="scale-fade" delay={i * 60}>
                  <Link
                    href={`/visa/${r.slug}`}
                    className="group flex h-full flex-col justify-between rounded-xs border border-hairline bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
                  >
                    <div>
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                        {r.code} · {r.missionType}
                      </span>
                      <h3 className="mt-2 font-serif text-lg font-bold text-[#06132F] group-hover:text-gold transition-colors">
                        {r.name}
                      </h3>
                      <p className="mt-2 text-xs text-neutral-600 line-clamp-2">
                        {r.tagline}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-hairline pt-3 text-xs font-bold text-gold">
                      <span>View details</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- Statutory Disclaimer ---------------- */}
      <section className="border-t border-hairline bg-background py-10">
        <div className="shell">
          <div className="rounded-xs border border-hairline bg-sand/60 p-5 text-xs text-neutral-600 sm:flex sm:items-center sm:gap-4">
            <ShieldCheck className="size-5 shrink-0 text-gold" />
            <p>{country.disclaimer || STANDARD_VISA_DISCLAIMER}</p>
          </div>
        </div>
      </section>
    </>
  );
}
