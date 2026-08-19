import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Car,
  FileSpreadsheet,
  Globe,
  Headphones,
  HeartHandshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  Stamp,
  Users,
} from "lucide-react";
import { COMPANY, SERVICES } from "@/data/site";
import { GhostLink } from "@/components/site/ui";
import { Reveal } from "@/components/site/motion";

// Photographic assets for the editorial mosaic
import businessImg from "@/assets/practice-business.png";
import passportImg from "@/assets/practice-passport.png";
import clearanceImg from "@/assets/practice-clearance.png";
import ntsaImg from "@/assets/practice-ntsa.png";
import ngoImg from "@/assets/practice-ngo.png";
import tendersImg from "@/assets/practice-tenders.png";
import ipImg from "@/assets/practice-ip.png";
import civilImg from "@/assets/practice-civil.png";
import authImg from "@/assets/practice-auth.png";

export function PracticeAreasSection() {
  const s01 = SERVICES.find((s) => s.slug === "business-registration") ?? SERVICES[0]!;
  const s02 = SERVICES.find((s) => s.slug === "kra-tax-services") ?? SERVICES[1]!;
  const s03 = SERVICES.find((s) => s.slug === "passport-immigration") ?? SERVICES[2]!;
  const s04 = SERVICES.find((s) => s.slug === "civil-registration") ?? SERVICES[3]!;
  const s05 = SERVICES.find((s) => s.slug === "ntsa-motor-vehicle") ?? SERVICES[4]!;
  const s06 = SERVICES.find((s) => s.slug === "clearance-vetting") ?? SERVICES[5]!;
  const s07 = SERVICES.find((s) => s.slug === "ngo-society-registration") ?? SERVICES[6]!;
  const s08 = SERVICES.find((s) => s.slug === "tenders-compliance") ?? SERVICES[7]!;
  const s09 = SERVICES.find((s) => s.slug === "intellectual-property") ?? SERVICES[8]!;
  const s10 = SERVICES.find((s) => s.slug === "authentication-legalisation") ?? SERVICES[9]!;

  return (
    <section className="relative overflow-hidden border-y border-hairline bg-sand py-20 lg:py-28">
      {/* Hairline Grid Overlay matching the hero section */}
      <div
        className="hairline-grid pointer-events-none absolute inset-0 opacity-50 select-none"
        aria-hidden="true"
      />

      <div className="shell relative z-10">
        {/* 1. HERO-STYLE EDITORIAL HEADER */}
        <div className="grid gap-8 border-b border-hairline pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal variant="fade-up">
            <p className="rule-label">Practice Areas</p>
            <h2 className="display-lg mt-6 font-serif text-3xl font-medium tracking-tight text-[#06132F] sm:text-4xl lg:text-[3.25rem]">
              Ten practice areas.
              <br />
              Over <span className="text-gold">sixty-five</span> individual filings.
            </h2>
            <p className="lede mt-4 max-w-xl text-neutral-600">
              End-to-end documentation and statutory compliance support for businesses, individuals,
              diaspora and organizations across Kenya.
            </p>
          </Reveal>

          <Reveal variant="fade-left" delay={80} className="lg:pb-2">
            <GhostLink href="/services" className="w-fit bg-card/80 backdrop-blur-xs">
              View the full index
            </GhostLink>
          </Reveal>
        </div>

        {/* 2. BESPOKE ASYMMETRIC EDITORIAL MOSAIC GRID (2-column on mobile, 12-column on desktop) */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-12 lg:grid-cols-12 lg:gap-5">
          {/* ========================================================= */}
          {/* TALL HERO FEATURE CARD (01 Business Registration)         */}
          {/* ========================================================= */}
          <Reveal variant="scale" className="col-span-1 flex lg:col-span-5 lg:row-span-2">
            <Link
              href={`/services/${s01.slug}`}
              className="group relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-[#071533] p-4 text-[#F7F7F3] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:min-h-[440px] sm:p-7 lg:min-h-[620px] lg:p-9"
            >
              {/* Background Nairobi corporate tower photography with dark gradient */}
              <div
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={businessImg.src}
                  alt=""
                  loading="lazy"
                  className="absolute right-0 top-0 h-full w-full object-cover object-right opacity-45 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071533] via-[#071533]/85 to-[#071533]/40 lg:bg-gradient-to-r lg:from-[#071533] lg:via-[#071533]/90 lg:to-transparent" />
              </div>

              {/* Top info */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-gold sm:text-sm">
                    01
                  </span>
                  <span className="hidden rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold sm:inline-block">
                    Corporate & Commercial
                  </span>
                </div>

                <div className="mt-3 flex size-9 items-center justify-center rounded-xs border border-white/20 bg-white/5 text-white transition-colors duration-300 group-hover:border-gold group-hover:text-gold sm:mt-6 sm:size-13">
                  <Building2 className="size-4.5 stroke-[1.4] sm:size-6" />
                </div>

                <h3 className="mt-3 font-serif text-[1.1rem] font-medium leading-[1.18] tracking-tight text-[#F7F7F3] sm:mt-6 sm:text-2xl lg:text-[2.2rem]">
                  Business
                  <br />
                  Registration
                </h3>

                <p className="mt-2 line-clamp-2 font-sans text-[0.72rem] leading-snug text-[#AEB6C7] sm:mt-4 sm:max-w-sm sm:line-clamp-none sm:text-xs sm:leading-relaxed">
                  Complete incorporation for private limited companies, business names, single
                  business permits and CR12 documentation.
                </p>

                {/* Pill chips showing key filings */}
                <div className="mt-6 hidden flex-wrap gap-2 lg:flex">
                  {[
                    "Private Limited (LLC)",
                    "Business Name",
                    "Foreign Branch",
                    "CR12 Search",
                    "Annual Returns",
                    "Permits",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-xs border border-white/10 bg-white/5 px-2.5 py-1 text-[0.72rem] text-[#AEB6C7]"
                    >
                      <span className="size-1 rounded-full bg-gold" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom action link */}
              <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/10 pt-3 sm:mt-8 sm:pt-5">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-gold group-hover:underline sm:text-xs">
                  Explore filings
                </span>
                <div
                  className="flex size-7 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink sm:size-9"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-3 sm:size-4" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ========================================================= */}
          {/* 02 KRA & TAX SERVICES (4 cols on lg, White Card)           */}
          {/* ========================================================= */}
          <Reveal variant="fade-up" delay={60} className="col-span-1 flex lg:col-span-4">
            <Link
              href={`/services/${s02.slug}`}
              className="group relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card p-4 text-[#06132F] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl sm:min-h-[295px] sm:p-6 lg:p-7"
            >
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold tracking-wider text-gold sm:text-sm">
                  02
                </span>
                <div className="mt-3 flex size-9 items-center justify-center rounded-xs border border-hairline bg-sand text-[#06132F] transition-colors duration-300 group-hover:border-[#06132F] group-hover:bg-card sm:mt-4 sm:size-11">
                  <FileSpreadsheet className="size-4.5 stroke-[1.4] sm:size-5" />
                </div>
                <h3 className="mt-3 font-serif text-[1.1rem] font-medium leading-[1.18] tracking-tight text-[#06132F] sm:mt-5 sm:text-[1.45rem] lg:text-[1.55rem]">
                  KRA &<br />
                  Tax Services
                </h3>
              </div>
              <div className="relative z-10 mt-3 flex items-end justify-between gap-2 sm:mt-6 sm:gap-4">
                <p className="line-clamp-2 max-w-[210px] font-sans text-[0.72rem] leading-snug text-muted-foreground sm:line-clamp-none sm:text-xs sm:leading-[1.6]">
                  PIN registration, VAT, returns, TCC compliance certificates.
                </p>
                <div
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-hairline text-neutral-700 transition-all duration-300 group-hover:border-[#06132F] group-hover:text-[#06132F] group-hover:translate-x-0.5 sm:size-8"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-3 sm:size-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ========================================================= */}
          {/* 03 PASSPORT & IMMIGRATION (3 cols on lg, Dark Photo)     */}
          {/* ========================================================= */}
          <Reveal variant="fade-up" delay={120} className="col-span-1 flex lg:col-span-3">
            <Link
              href={`/services/${s03.slug}`}
              className="group relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-[#06132F] p-4 text-[#F7F7F3] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl sm:min-h-[295px] sm:p-6 lg:p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={passportImg.src}
                  alt=""
                  loading="lazy"
                  className="absolute right-0 top-0 h-full w-3/5 object-cover object-center opacity-60 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06132F] via-[#06132F]/85 to-transparent" />
              </div>
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold tracking-wider text-gold sm:text-sm">
                  03
                </span>
                <div className="mt-3 flex size-9 items-center justify-center rounded-xs border border-white/20 bg-white/5 text-white transition-colors duration-300 group-hover:border-gold group-hover:text-gold sm:mt-4 sm:size-11">
                  <Globe className="size-4.5 stroke-[1.4] sm:size-5" />
                </div>
                <h3 className="mt-3 font-serif text-[1.1rem] font-medium leading-[1.18] tracking-tight text-[#F7F7F3] sm:mt-5 sm:text-[1.45rem] lg:text-[1.55rem]">
                  Passport &<br />
                  Immigration
                </h3>
              </div>
              <div className="relative z-10 mt-3 flex items-end justify-between gap-2 sm:mt-6 sm:gap-4">
                <p className="line-clamp-2 max-w-[190px] font-sans text-[0.72rem] leading-snug text-[#AEB6C7] sm:line-clamp-none sm:text-xs sm:leading-[1.6]">
                  Passports, Kenya eTA, visitor extensions, work permits and PR.
                </p>
                <div
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:translate-x-0.5 sm:size-8"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-3 sm:size-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ========================================================= */}
          {/* 04 CIVIL REGISTRATION (3 cols on lg, White with Parchment)*/}
          {/* ========================================================= */}
          <Reveal variant="fade-up" delay={180} className="col-span-1 flex lg:col-span-3">
            <Link
              href={`/services/${s04.slug}`}
              className="group relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card p-4 text-[#06132F] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl sm:min-h-[295px] sm:p-6 lg:p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={civilImg.src}
                  alt=""
                  loading="lazy"
                  className="absolute right-0 top-0 h-full w-3/5 object-cover object-center opacity-35 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent" />
              </div>
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold tracking-wider text-gold sm:text-sm">
                  04
                </span>
                <div className="mt-3 flex size-9 items-center justify-center rounded-xs border border-hairline bg-sand text-[#06132F] transition-colors duration-300 group-hover:border-[#06132F] group-hover:bg-card sm:mt-4 sm:size-11">
                  <Users className="size-4.5 stroke-[1.4] sm:size-5" />
                </div>
                <h3 className="mt-3 font-serif text-[1.1rem] font-medium leading-[1.18] tracking-tight text-[#06132F] sm:mt-5 sm:text-[1.45rem] lg:text-[1.55rem]">
                  Civil
                  <br />
                  Registration
                </h3>
              </div>
              <div className="relative z-10 mt-3 flex items-end justify-between gap-2 sm:mt-6 sm:gap-4">
                <p className="line-clamp-2 max-w-[190px] font-sans text-[0.72rem] leading-snug text-muted-foreground sm:line-clamp-none sm:text-xs sm:leading-[1.6]">
                  Birth, marriage, Certificate of No Impediment & Deed Poll name change.
                </p>
                <div
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-hairline text-neutral-700 transition-all duration-300 group-hover:border-[#06132F] group-hover:text-[#06132F] group-hover:translate-x-0.5 sm:size-8"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-3 sm:size-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ========================================================= */}
          {/* 05 NTSA & MOTOR VEHICLE (4 cols on lg, White Photo)       */}
          {/* ========================================================= */}
          <Reveal variant="fade-up" delay={100} className="col-span-1 flex lg:col-span-4">
            <Link
              href={`/services/${s05.slug}`}
              className="group relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card p-4 text-[#06132F] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl sm:min-h-[295px] sm:p-6 lg:p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={ntsaImg.src}
                  alt=""
                  loading="lazy"
                  className="absolute right-0 top-0 h-full w-3/5 object-cover object-center opacity-35 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent" />
              </div>
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold tracking-wider text-gold sm:text-sm">
                  05
                </span>
                <div className="mt-3 flex size-9 items-center justify-center rounded-xs border border-hairline bg-sand text-[#06132F] transition-colors duration-300 group-hover:border-[#06132F] group-hover:bg-card sm:mt-4 sm:size-11">
                  <Car className="size-4.5 stroke-[1.4] sm:size-5" />
                </div>
                <h3 className="mt-3 font-serif text-[1.1rem] font-medium leading-[1.18] tracking-tight text-[#06132F] sm:mt-5 sm:text-[1.45rem] lg:text-[1.55rem]">
                  NTSA & Motor
                  <br />
                  Vehicle
                </h3>
              </div>
              <div className="relative z-10 mt-3 flex items-end justify-between gap-2 sm:mt-6 sm:gap-4">
                <p className="line-clamp-2 max-w-[210px] font-sans text-[0.72rem] leading-snug text-muted-foreground sm:line-clamp-none sm:text-xs sm:leading-[1.6]">
                  Smart DL endorsements, renewals, TIMS linking & logbook transfers.
                </p>
                <div
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-hairline text-neutral-700 transition-all duration-300 group-hover:border-[#06132F] group-hover:text-[#06132F] group-hover:translate-x-0.5 sm:size-8"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-3 sm:size-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ========================================================= */}
          {/* 06 CLEARANCE & VETTING (4 cols on lg, Gold Featured Card) */}
          {/* ========================================================= */}
          <Reveal variant="scale-fade" delay={140} className="col-span-1 flex lg:col-span-4">
            <Link
              href={`/services/${s06.slug}`}
              className="group relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-xs border border-gold/60 bg-gradient-to-br from-[#DFA500] via-[#C99000] to-[#B37C00] p-4 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[295px] sm:p-6 lg:p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={clearanceImg.src}
                  alt=""
                  loading="lazy"
                  className="absolute right-0 top-0 h-full w-3/5 object-cover object-center opacity-75 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#C99000] via-[#C99000]/80 to-transparent" />
              </div>
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold tracking-wider text-white/90 sm:text-sm">
                  06
                </span>
                <div className="mt-3 flex size-9 items-center justify-center rounded-xs border border-white/40 bg-white/15 text-white transition-colors duration-300 group-hover:bg-white/25 sm:mt-4 sm:size-11">
                  <ShieldCheck className="size-4.5 stroke-[1.4] sm:size-5" />
                </div>
                <h3 className="mt-3 font-serif text-[1.1rem] font-medium leading-[1.18] tracking-tight text-white sm:mt-5 sm:text-[1.45rem] lg:text-[1.55rem]">
                  Clearance &<br />
                  Vetting
                </h3>
              </div>
              <div className="relative z-10 mt-3 flex items-end justify-between gap-2 sm:mt-6 sm:gap-4">
                <p className="line-clamp-2 max-w-[210px] font-sans text-[0.72rem] leading-snug text-white/90 sm:line-clamp-none sm:text-xs sm:leading-[1.6]">
                  Police clearance (good conduct), SHA / NHIF onboarding & HELB compliance.
                </p>
                <div
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#B37C00] group-hover:translate-x-0.5 sm:size-8"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-3 sm:size-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ========================================================= */}
          {/* 07 NGO & SOCIETY REGISTRATION (3 cols on lg, White)       */}
          {/* ========================================================= */}
          <Reveal variant="fade-up" delay={180} className="col-span-1 flex lg:col-span-3">
            <Link
              href={`/services/${s07.slug}`}
              className="group relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card p-4 text-[#06132F] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl sm:min-h-[295px] sm:p-6 lg:p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={ngoImg.src}
                  alt=""
                  loading="lazy"
                  className="absolute right-0 top-0 h-full w-3/5 object-cover object-center opacity-35 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent" />
              </div>
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold tracking-wider text-gold sm:text-sm">
                  07
                </span>
                <div className="mt-3 flex size-9 items-center justify-center rounded-xs border border-hairline bg-sand text-[#06132F] transition-colors duration-300 group-hover:border-[#06132F] group-hover:bg-card sm:mt-4 sm:size-11">
                  <HeartHandshake className="size-4.5 stroke-[1.4] sm:size-5" />
                </div>
                <h3 className="mt-3 font-serif text-[1.1rem] font-medium leading-[1.18] tracking-tight text-[#06132F] sm:mt-5 sm:text-[1.45rem] lg:text-[1.55rem]">
                  NGO & Society
                  <br />
                  Registration
                </h3>
              </div>
              <div className="relative z-10 mt-3 flex items-end justify-between gap-2 sm:mt-6 sm:gap-4">
                <p className="line-clamp-2 max-w-[190px] font-sans text-[0.72rem] leading-snug text-muted-foreground sm:line-clamp-none sm:text-xs sm:leading-[1.6]">
                  NGOs, societies, trusts, CBOs & constitution drafting.
                </p>
                <div
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-hairline text-neutral-700 transition-all duration-300 group-hover:border-[#06132F] group-hover:text-[#06132F] group-hover:translate-x-0.5 sm:size-8"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-3 sm:size-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ========================================================= */}
          {/* 08 TENDERS & COMPLIANCE (5 cols on lg, Dark Navy Photo)   */}
          {/* ========================================================= */}
          <Reveal variant="fade-up" delay={220} className="col-span-1 flex lg:col-span-5">
            <Link
              href={`/services/${s08.slug}`}
              className="group relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-[#06132F] p-4 text-[#F7F7F3] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl sm:min-h-[295px] sm:p-6 lg:p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={tendersImg.src}
                  alt=""
                  loading="lazy"
                  className="absolute right-0 top-0 h-full w-1/2 object-cover object-center opacity-65 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06132F] via-[#06132F]/85 to-transparent" />
              </div>
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold tracking-wider text-gold sm:text-sm">
                  08
                </span>
                <div className="mt-3 flex size-9 items-center justify-center rounded-xs border border-white/20 bg-white/5 text-white transition-colors duration-300 group-hover:border-gold group-hover:text-gold sm:mt-4 sm:size-11">
                  <Scale className="size-4.5 stroke-[1.4] sm:size-5" />
                </div>
                <h3 className="mt-3 font-serif text-[1.1rem] font-medium leading-[1.18] tracking-tight text-[#F7F7F3] sm:mt-5 sm:text-[1.45rem] lg:text-[1.55rem]">
                  Tenders &<br />
                  Compliance
                </h3>
              </div>
              <div className="relative z-10 mt-3 flex items-end justify-between gap-2 sm:mt-6 sm:gap-4">
                <p className="line-clamp-2 max-w-[280px] font-sans text-[0.72rem] leading-snug text-[#AEB6C7] sm:line-clamp-none sm:text-xs sm:leading-[1.6]">
                  Tender files, AGPO, NCA, EPRA licensing & KEBS compliance.
                </p>
                <div
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:translate-x-0.5 sm:size-8"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-3 sm:size-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ========================================================= */}
          {/* 09 INTELLECTUAL PROPERTY (6 cols on lg, Wide Dark Photo)  */}
          {/* ========================================================= */}
          <Reveal variant="fade-left" delay={100} className="col-span-1 flex lg:col-span-6">
            <Link
              href={`/services/${s09.slug}`}
              className="group relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-[#06132F] p-4 text-[#F7F7F3] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl sm:min-h-[195px] sm:flex-row sm:items-center sm:p-6 lg:p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={ipImg.src}
                  alt=""
                  loading="lazy"
                  className="absolute right-0 top-0 h-full w-1/2 object-cover object-center opacity-65 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06132F] via-[#06132F]/90 to-transparent" />
              </div>
              <div className="relative z-10 max-w-md">
                <span className="font-mono text-xs font-bold tracking-wider text-gold sm:text-sm">
                  09
                </span>
                <div className="mt-2 flex flex-col gap-2 sm:mt-3 sm:flex-row sm:items-center sm:gap-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xs border border-white/20 bg-white/5 text-white transition-colors duration-300 group-hover:border-gold group-hover:text-gold sm:size-11">
                    <Lightbulb className="size-4.5 stroke-[1.4] sm:size-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[1.1rem] font-medium leading-[1.18] tracking-tight text-[#F7F7F3] sm:text-xl lg:text-2xl">
                      {s09.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[0.72rem] leading-snug text-[#AEB6C7] sm:line-clamp-none sm:text-xs">
                      Trademarks, copyright, industrial designs and patents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-3 flex justify-end sm:mt-0">
                <div
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:translate-x-0.5 sm:size-8"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-3 sm:size-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ========================================================= */}
          {/* 10 AUTHENTICATION & LEGALISATION (6 cols on lg, Wide)    */}
          {/* ========================================================= */}
          <Reveal variant="fade-right" delay={140} className="col-span-1 flex lg:col-span-6">
            <Link
              href={`/services/${s10.slug}`}
              className="group relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card p-4 text-[#06132F] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl sm:min-h-[195px] sm:flex-row sm:items-center sm:p-6 lg:p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={authImg.src}
                  alt=""
                  loading="lazy"
                  className="absolute right-0 top-0 h-full w-1/2 object-cover object-center opacity-40 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent" />
              </div>
              <div className="relative z-10 max-w-md">
                <span className="font-mono text-xs font-bold tracking-wider text-gold sm:text-sm">
                  10
                </span>
                <div className="mt-2 flex flex-col gap-2 sm:mt-3 sm:flex-row sm:items-center sm:gap-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xs border border-hairline bg-sand text-[#06132F] transition-colors duration-300 group-hover:border-[#06132F] group-hover:bg-card sm:size-11">
                    <Stamp className="size-4.5 stroke-[1.4] sm:size-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[1.1rem] font-medium leading-[1.18] tracking-tight text-[#06132F] sm:text-xl lg:text-2xl">
                      {s10.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[0.72rem] leading-snug text-muted-foreground sm:line-clamp-none sm:text-xs">
                      MFA authentication, embassy legalisation & certified translation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-3 flex justify-end sm:mt-0">
                <div
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-hairline text-neutral-700 transition-all duration-300 group-hover:border-[#06132F] group-hover:text-[#06132F] group-hover:translate-x-0.5 sm:size-8"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-3 sm:size-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ========================================================= */}
          {/* 11 CONSULTATION CTA BANNER (12 cols on lg, Full Width)   */}
          {/* ========================================================= */}
          <Reveal variant="scale-fade" delay={100} className="col-span-2 flex lg:col-span-12">
            <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card p-7 text-[#06132F] shadow-sm sm:flex-row sm:items-center sm:gap-8 sm:p-9">
              <div className="flex items-center gap-5">
                <div
                  className="flex size-14 shrink-0 items-center justify-center rounded-full border border-hairline bg-sand text-[#06132F]"
                  aria-hidden="true"
                >
                  <Headphones className="size-7 stroke-[1.4]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-[#06132F] sm:text-[1.65rem]">
                    Not sure where to start?
                  </h3>
                  <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    Our documentation specialists in Nairobi are here to guide you through the exact
                    statutory requirements and timeline for your specific case.
                  </p>
                </div>
              </div>

              <div className="mt-6 shrink-0 sm:mt-0">
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xs bg-gold px-7 py-4 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
                >
                  Talk to an expert
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
