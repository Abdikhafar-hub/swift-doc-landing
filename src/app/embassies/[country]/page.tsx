import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  ExternalLink,
  Globe2,
  Landmark,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/site/motion";
import { WhatsAppButton } from "@/components/site/ui";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, embassySchema } from "@/lib/seo/schema";
import {
  getRelatedVisaCountries,
  getVisaCountry,
  STANDARD_VISA_DISCLAIMER,
  VISA_COUNTRIES,
} from "@/data/visaCountries";
import { COMPANY } from "@/data/site";
import { VisaCountryCard } from "@/components/visa/VisaCountryCard";

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
    title: `${country.missionName} in Nairobi, Kenya | Embassy Profile & Consular Services`,
    description: `Official details, location, and visa submission procedures for ${country.missionName} in Nairobi. Learn how biometrics and visa applications are processed.`,
    path: `/embassies/${country.slug}`,
  });
}

export default async function EmbassyDetailPage({
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
    { name: "Embassies Directory", href: "/embassies" },
    { name: country.missionName, href: `/embassies/${country.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={embassySchema(
          country.name,
          country.missionName,
          country.applicationCenter,
          `/embassies/${country.slug}`,
        )}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative overflow-hidden border-b border-hairline bg-[#06132F] text-white">
        {/* Photographic waving flag background */}
        <div
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={country.flagImage}
            alt=""
            className="absolute right-0 top-0 h-full w-full object-cover object-right md:w-3/5 opacity-35 transition-transform duration-700"
          />
          {/* Gradients ensuring 100% crisp typography on the left and smooth transition to dark navy */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06132F] via-[#06132F]/90 to-[#06132F]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06132F] via-transparent to-transparent" />
        </div>

        <div className="shell relative z-10 py-16 lg:py-24">
          <div className="[&_span]:text-white/70 [&_a]:text-white/60">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <Reveal variant="fade-up">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/embassies"
                  className="inline-flex items-center gap-1 text-xs font-bold text-gold hover:underline"
                >
                  <ArrowLeft className="size-3" />
                  All Diplomatic Missions
                </Link>
                <span className="text-white/40">/</span>
                <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                  {country.missionType}
                </span>
              </div>

              <h1 className="mt-5 font-serif text-3xl font-medium tracking-tight sm:text-5xl lg:text-[3.25rem] leading-[1.15]">
                {country.missionName}
              </h1>

              <p className="mt-4 text-base font-medium text-gold">
                Serving Kenya and Accredited Eastern African Jurisdictions
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-300">
                <div className="flex items-center gap-1.5 rounded-xs border border-white/15 bg-white/5 px-3 py-1.5">
                  <MapPin className="size-4 text-gold" />
                  <span>
                    <strong>Location:</strong> {country.missionCity || "Nairobi"}, Kenya
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-xs border border-white/15 bg-white/5 px-3 py-1.5">
                  <Landmark className="size-4 text-gold" />
                  <span>
                    <strong>Submission Desk:</strong> {country.applicationCenter}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fade-left" delay={100} className="lg:justify-self-end">
              <div className="rounded-xs border border-white/15 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                <p className="text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                  Consular Overview
                </p>
                <p className="text-xs text-neutral-300">
                  <strong className="text-white">Country Represented:</strong> {country.name}
                </p>
                <p className="text-xs text-neutral-300">
                  <strong className="text-white">Accreditation:</strong> Republic of Kenya
                </p>
                {country.officialAuthority.url && (
                  <div className="pt-2 border-t border-white/10">
                    <a
                      href={country.officialAuthority.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline"
                    >
                      Official Government Authority
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Mission Details & Visa Categories ---------------- */}
      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div className="space-y-12">
            {/* Overview */}
            <section className="rounded-xs border border-hairline bg-card p-7 sm:p-9 shadow-xs">
              <Reveal variant="fade-up">
                <p className="rule-label">About the Mission</p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                  Diplomatic Mission Profile & Visa Intake
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  {country.description}
                </p>
                <div className="mt-6 rounded-xs border border-hairline bg-sand/60 p-5 text-xs leading-relaxed text-neutral-700">
                  <strong className="text-[#06132F]">Biometrics & Submission Process: </strong>
                  {country.biometricsInterviewInfo}
                </div>
              </Reveal>
            </section>

            {/* Visa categories handled */}
            <section>
              <Reveal variant="fade-up">
                <div className="flex items-center justify-between border-b border-hairline pb-4">
                  <div>
                    <p className="rule-label">Consular Services</p>
                    <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                      Visas Processed for {country.name}
                    </h2>
                  </div>
                  <Link
                    href={`/visa/${country.slug}`}
                    className="text-xs font-bold text-gold hover:underline flex items-center gap-1"
                  >
                    View All {country.name} Visas
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </Reveal>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {country.categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/visa/${country.slug}/${cat.slug}`}
                    className="group rounded-xs border border-hairline bg-card p-5 transition-all duration-300 hover:border-gold hover:shadow-md"
                  >
                    <h3 className="font-serif text-base font-bold text-[#06132F] group-hover:text-gold transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                      {cat.shortDescription}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="text-neutral-400 font-medium">
                        {(cat.estimatedTurnaround.split(";")[0] ?? cat.estimatedTurnaround).trim()}
                      </span>
                      <span className="font-bold text-gold group-hover:underline">
                        Requirements →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Document Checklist Required for this Mission */}
            <section className="rounded-xs border border-hairline bg-sand p-7 sm:p-9">
              <Reveal variant="fade-up">
                <p className="rule-label">Dossier Preparation</p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#06132F]">
                  Required Documents for Consular Filing
                </h2>
                <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                  {country.requiredDocumentGuidance.map((doc, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="font-bold text-gold">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
            <Reveal variant="fade-left" delay={100}>
              <div className="rounded-xs border border-hairline bg-card p-6 shadow-xs">
                <p className="rule-label">Swift Doc Visa Assistance</p>
                <h3 className="mt-2 font-serif text-lg font-bold text-[#06132F]">
                  Apply for a {country.name} Visa
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  Need help preparing your visa application, scheduling biometrics, or authenticating documents for {country.missionName}?
                </p>

                <div className="mt-6 space-y-3">
                  <Link
                    href={`/visa/${country.slug}`}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xs bg-gold px-6 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
                  >
                    View {country.name} Visa Desk
                    <ArrowRight className="size-4" />
                  </Link>
                  <WhatsAppButton className="w-full justify-center" />
                  <a
                    href={COMPANY.portalRegisterUrl}
                    className="flex min-h-12 w-full items-center justify-center rounded-xs border border-hairline bg-sand px-6 text-xs font-bold text-[#06132F] transition-all hover:border-gold hover:text-gold"
                  >
                    Open Client Portal
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* ---------------- Related Missions ---------------- */}
      {related.length > 0 && (
        <section className="border-t border-hairline bg-sand py-16">
          <div className="shell">
            <p className="rule-label">Other Diplomatic Missions in Nairobi</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
              {related.map((r) => (
                <VisaCountryCard key={r.slug} country={r} linkPrefix="/embassies" />
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
