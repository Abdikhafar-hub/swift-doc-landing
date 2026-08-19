"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Landmark,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  STANDARD_VISA_DISCLAIMER,
  VISA_COUNTRIES,
  VISA_GROUPS,
  VISA_PROCESS_STEPS,
  type VisaGroup,
} from "@/data/visaCountries";
import { COMPANY } from "@/data/site";
import { Reveal } from "@/components/site/motion";

export function VisaServicesSection() {
  const [selectedGroup, setSelectedGroup] = useState<"all" | VisaGroup>("all");

  const filteredCountries =
    selectedGroup === "all"
      ? VISA_COUNTRIES
      : VISA_COUNTRIES.filter((c) => c.group === selectedGroup);

  return (
    <section className="relative overflow-hidden border-y border-hairline bg-[#FAF8F5] py-20 lg:py-28">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 -z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-gold/10 via-gold/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="shell relative z-10">
        {/* 1. SECTION HEADER */}
        <div className="grid gap-8 border-b border-hairline pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal variant="fade-up">
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-6 bg-gold" aria-hidden="true" />
              <span className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-gold">
                International & Local Travel Desk
              </span>
            </div>
            <h2 className="display-lg mt-5 font-serif text-3xl font-medium tracking-tight text-[#06132F] sm:text-4xl lg:text-[3.25rem]">
              Visa Application Services:
              <br />
              <span className="text-gold">prepared properly</span> before submission.
            </h2>
            <p className="lede mt-4 max-w-2xl text-neutral-600">
              Professional visa application support for travel, study, business, work, family visits
              and other international travel purposes. We eliminate errors, audit financial ties, and
              guide your submission through official consular channels.
            </p>
          </Reveal>

          <Reveal variant="fade-left" delay={80} className="flex flex-wrap gap-3 lg:pb-2">
            <Link
              href="/visa"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xs bg-gold px-6 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
            >
              Browse All Visas
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/embassies"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xs border border-hairline bg-card px-5 text-sm font-semibold text-[#06132F] transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Embassies Directory
            </Link>
          </Reveal>
        </div>

        {/* 2. GROUP FILTER PILLS */}
        <Reveal variant="fade-up" delay={60} className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mr-2">
            Filter by Mission:
          </span>
          <button
            type="button"
            onClick={() => setSelectedGroup("all")}
            className={`rounded-xs px-4 py-2 text-xs font-bold transition-all ${
              selectedGroup === "all"
                ? "bg-[#06132F] text-white shadow-xs"
                : "border border-hairline bg-card text-neutral-700 hover:border-gold"
            }`}
          >
            All Destinations ({VISA_COUNTRIES.length})
          </button>
          {VISA_GROUPS.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setSelectedGroup(group.id)}
              className={`rounded-xs px-4 py-2 text-xs font-bold transition-all ${
                selectedGroup === group.id
                  ? "bg-[#06132F] text-white shadow-xs"
                  : "border border-hairline bg-card text-neutral-700 hover:border-gold"
              }`}
            >
              {group.label}
            </button>
          ))}
        </Reveal>

        {/* 3. COUNTRY CARDS GRID */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCountries.map((country, idx) => (
            <Reveal
              key={country.slug}
              variant="fade-up"
              delay={(idx % 6) * 50}
              className="flex"
            >
              <Link
                href={`/visa/${country.slug}`}
                className="group relative flex w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                      {country.code} · {country.missionType}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">
                      {country.categories.length} Categories
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#06132F] group-hover:text-gold transition-colors">
                    {country.name}
                  </h3>

                  <p className="mt-1 text-xs text-neutral-500 line-clamp-1">
                    {country.missionName}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-neutral-600 line-clamp-2">
                    {country.description}
                  </p>

                  {/* Top categories tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {country.categories.slice(0, 3).map((cat) => (
                      <span
                        key={cat.slug}
                        className="rounded-xs border border-hairline bg-sand px-2 py-0.5 text-[0.68rem] font-medium text-neutral-700"
                      >
                        {(cat.name.split("(")[0] ?? cat.name).trim()}
                      </span>
                    ))}
                    {country.categories.length > 3 && (
                      <span className="rounded-xs border border-hairline bg-sand px-2 py-0.5 text-[0.68rem] font-medium text-neutral-500">
                        +{country.categories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-xs font-bold text-gold group-hover:underline">
                  <span>View visa requirements</span>
                  <div className="flex size-7 items-center justify-center rounded-full border border-hairline text-neutral-700 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                    <ArrowRight className="size-3.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* 4. THE 8-STAGE PREPARATION PROCESS BANNER */}
        <div className="mt-16 rounded-xs border border-hairline bg-[#06132F] p-8 text-white shadow-xl lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-gold" />
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold">
                  Our Audit Framework
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
                The 8-step visa preparation workflow.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Most visa refusals stem from simple avoidable discrepancies—funds mismatches, vague
                travel itineraries, missing host attestations, or form inconsistencies. Our structured
                process catches these before your application reaches consular review.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={COMPANY.portalRegisterUrl}
                  className="inline-flex items-center gap-2 rounded-xs bg-gold px-6 py-3 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
                >
                  Start Visa Application
                  <ArrowUpRight className="size-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xs border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  Book Consular Consultation
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {VISA_PROCESS_STEPS.slice(0, 6).map((step) => (
                <div
                  key={step.step}
                  className="rounded-xs border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold">Step {step.step}</span>
                    <span className="text-[0.65rem] uppercase tracking-wider text-neutral-400">
                      {step.duration}
                    </span>
                  </div>
                  <h4 className="mt-2 font-serif text-sm font-semibold text-white">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-300 line-clamp-2">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. STATUTORY DISCLAIMER STRIP */}
        <div className="mt-8 rounded-xs border border-amber-900/20 bg-amber-50/70 p-5 text-amber-950 sm:flex sm:items-center sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
            <ShieldCheck className="size-5" />
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Official Consular Notice & Legal Disclaimer
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-amber-900/80">
              {STANDARD_VISA_DISCLAIMER}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
