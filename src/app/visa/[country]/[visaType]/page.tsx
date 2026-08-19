import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileCheck,
  FileText,
  Landmark,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/motion";
import { createMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  embassySchema,
  faqSchema,
  visaServiceSchema,
} from "@/lib/seo/schema";
import {
  getVisaCategory,
  getVisaCountry,
  STANDARD_VISA_DISCLAIMER,
  VISA_COUNTRIES,
  VISA_PROCESS_STEPS,
} from "@/data/visaCountries";
import { COMPANY } from "@/data/site";

export function generateStaticParams() {
  const params: { country: string; visaType: string }[] = [];
  for (const country of VISA_COUNTRIES) {
    for (const category of country.categories) {
      params.push({
        country: country.slug,
        visaType: category.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; visaType: string }>;
}): Promise<Metadata> {
  const { country: countrySlug, visaType: catSlug } = await params;
  const result = getVisaCategory(countrySlug, catSlug);
  if (!result) return {};

  const { country, category } = result;

  return createMetadata({
    title: `${category.name} for ${country.name} from Kenya | Requirements & Application`,
    description: `${category.shortDescription} Requirements, processing timeline, document checklist, and professional application support in Nairobi.`,
    path: `/visa/${country.slug}/${category.slug}`,
  });
}

export default async function VisaTypeDetailPage({
  params,
}: {
  params: Promise<{ country: string; visaType: string }>;
}) {
  const { country: countrySlug, visaType: catSlug } = await params;
  const result = getVisaCategory(countrySlug, catSlug);

  if (!result) {
    notFound();
  }

  const { country, category } = result;
  const siblingCategories = country.categories.filter((c) => c.slug !== category.slug);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Visa Services", href: "/visa" },
    { name: country.name, href: `/visa/${country.slug}` },
    { name: category.name, href: `/visa/${country.slug}/${category.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={visaServiceSchema(
          country.name,
          category.name,
          category.shortDescription,
          `/visa/${country.slug}/${category.slug}`,
        )}
      />
      <JsonLd
        data={embassySchema(
          country.name,
          country.missionName,
          country.applicationCenter,
          `/visa/${country.slug}/${category.slug}`,
        )}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(country.faqs)} />

      {/* ---------------- Category Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-hairline bg-[#06132F] text-white">
        <div className="shell relative py-16 lg:py-24">
          <div className="[&_span]:text-white/70 [&_a]:text-white/60">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="mt-8 max-w-3xl">
            <Reveal variant="fade-up">
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href={`/visa/${country.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-gold hover:underline"
                >
                  <ArrowLeft className="size-3" />
                  {country.name} Visa Desk
                </Link>
                <span className="text-white/40">/</span>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                  {country.groupLabel}
                </span>
              </div>

              <h1 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl leading-tight">
                {category.name}
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-300">
                {category.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-300">
                <div className="flex items-center gap-1.5 rounded-xs border border-white/15 bg-white/5 px-3 py-1.5">
                  <Clock className="size-4 text-gold" />
                  <span>
                    <strong>Turnaround:</strong> {category.estimatedTurnaround}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-xs border border-white/15 bg-white/5 px-3 py-1.5">
                  <Landmark className="size-4 text-gold" />
                  <span>
                    <strong>Submission:</strong> {country.applicationCenter}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Main Content Layout ---------------- */}
      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div className="space-y-12">
            {/* 1. Purpose & Audience */}
            <section className="rounded-xs border border-hairline bg-card p-7 sm:p-9 shadow-xs">
              <Reveal variant="fade-up">
                <div className="flex items-center gap-2">
                  <Users className="size-5 text-gold" />
                  <p className="rule-label">Target Travel Profile</p>
                </div>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                  Typical Purpose & Audience
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
                  <p>
                    <strong className="text-[#06132F]">Primary Purpose:</strong>{" "}
                    {category.typicalPurpose}
                  </p>
                  <p>
                    <strong className="text-[#06132F]">Who Should Apply:</strong>{" "}
                    {category.audience}
                  </p>
                </div>
              </Reveal>
            </section>

            {/* 2. Key Requirements Detailed Breakdown */}
            <section>
              <Reveal variant="fade-up">
                <p className="rule-label">Submission Dossier</p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                  Mandatory Key Requirements
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                  The consular officer requires clear, verifiable proof addressing each of the following pillars:
                </p>
              </Reveal>

              <div className="mt-6 space-y-3">
                {category.keyRequirements.map((req, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-xs border border-hairline bg-sand/60 p-4 text-sm text-neutral-800"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Category Specific Pitfalls */}
            {category.commonMistakes.length > 0 && (
              <section className="rounded-xs border border-amber-300 bg-amber-50/60 p-7">
                <Reveal variant="fade-up">
                  <div className="flex items-center gap-2 text-amber-900">
                    <ShieldAlert className="size-5 text-amber-600" />
                    <p className="text-xs font-bold uppercase tracking-wider">
                      Specific Refusal Risks & Pitfalls
                    </p>
                  </div>
                  <h2 className="mt-3 font-serif text-xl font-bold tracking-tight text-amber-950">
                    Common reasons applicants get delayed or refused for {category.name}
                  </h2>
                  <ul className="mt-4 space-y-2.5 text-sm text-amber-950">
                    {category.commonMistakes.map((mistake, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="font-bold text-amber-700">•</span>
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </section>
            )}

            {/* 4. The 8-Step Preparation Sequence */}
            <section>
              <Reveal variant="fade-up">
                <p className="rule-label">How We Handle Your Case</p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                  Step-by-step application management
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                  From initial document pre-screening to biometrics capture at {country.applicationCenter}.
                </p>
              </Reveal>

              <div className="mt-6 divide-y divide-hairline border-y border-hairline">
                {VISA_PROCESS_STEPS.map((step) => (
                  <div key={step.step} className="py-4 text-sm">
                    <div className="flex items-baseline justify-between">
                      <span className="font-bold text-[#06132F]">
                        {step.step}. {step.title}
                      </span>
                      <span className="text-xs font-semibold text-neutral-400">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-600">{step.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Sibling Categories */}
            {siblingCategories.length > 0 && (
              <section className="border-t border-hairline pt-10">
                <Reveal variant="fade-up">
                  <p className="rule-label">Other {country.name} Visas</p>
                  <h2 className="mt-3 font-serif text-xl font-bold tracking-tight text-[#06132F]">
                    Alternative visa categories for {country.name}
                  </h2>
                </Reveal>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {siblingCategories.map((sib) => (
                    <Link
                      key={sib.slug}
                      href={`/visa/${country.slug}/${sib.slug}`}
                      className="group rounded-xs border border-hairline bg-card p-5 transition-all duration-300 hover:border-gold hover:shadow-md"
                    >
                      <h3 className="font-serif text-base font-bold text-[#06132F] group-hover:text-gold transition-colors">
                        {sib.name}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                        {sib.shortDescription}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-bold text-gold">
                        <span>View requirements</span>
                        <ArrowRight className="size-3" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
            <Reveal variant="fade-left" delay={100}>
              {/* Ready to apply card */}
              <div className="rounded-xs border border-hairline bg-card p-6 shadow-xs">
                <p className="rule-label">Apply with Confidence</p>
                <h3 className="mt-2 font-serif text-xl font-bold text-[#06132F]">
                  Start your {country.name} application
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  Upload your documents securely to the Swift Doc client portal for professional review and form completion.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={COMPANY.portalRegisterUrl}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xs bg-gold px-6 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
                  >
                    Open Client Portal
                    <ArrowUpRight className="size-4" />
                  </a>
                  <WhatsAppButton className="w-full justify-center" />
                  <Link
                    href="/contact"
                    className="flex min-h-12 w-full items-center justify-center rounded-xs border border-hairline bg-sand px-6 text-xs font-bold text-[#06132F] transition-all hover:border-gold hover:text-gold"
                  >
                    Speak with an Immigration Advisor
                  </Link>
                </div>
              </div>

              {/* Mission Details Box */}
              <div className="mt-6 rounded-xs border border-hairline bg-sand/70 p-5 text-xs text-neutral-600 space-y-2">
                <p className="font-bold uppercase tracking-wider text-neutral-500 text-[0.68rem]">
                  Consular Authority
                </p>
                <p className="font-semibold text-[#06132F]">{country.missionName}</p>
                <p>
                  <strong>Application Desk:</strong> {country.applicationCenter}
                </p>
                <div className="pt-2 border-t border-hairline">
                  <Link
                    href={`/embassies/${country.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-gold hover:underline"
                  >
                    View Embassy Directory Profile
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

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
