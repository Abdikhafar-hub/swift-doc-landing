import Link from "next/link";

import {
  ShieldCheck,
  Clock,
  Clock3,
  FileCheck2,
  Landmark,
  ArrowRight,
  ArrowUpRight,
  Quote,
  CheckCircle2,
  FileText,
  Users,
  Building2,
  Award,
  Headphones,
  UserPlus,
} from "lucide-react";
import heroOfficialDocumentsImg from "@/assets/hero-official-documents.png";
import registryDeskImg from "@/assets/registry-desk.png";
import consultImg from "@/assets/consultation.jpg";
import passportImg from "@/assets/passport.jpg";
import clientImg from "@/assets/client-business.jpg";
import nairobiImg from "@/assets/nairobi-night.jpg";
import teamImg from "@/assets/team.jpg";
import preSubmissionAuditImg from "@/assets/pre-submission-audit.png";
import { Counter, Reveal } from "@/components/site/motion";
import { PrimaryLink, GhostLink, WhatsAppButton } from "@/components/site/ui";
import { PracticeAreasSection } from "@/components/site/PracticeAreasSection";
import { VisaServicesSection } from "@/components/site/VisaServicesSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ContactRequestSection } from "@/components/site/ContactRequestSection";
import {
  COMPANY,
  FAQS,
  INDUSTRIES,
  POSTS,
  PROCESS,
  SERVICES,
  STATS,
  TESTIMONIALS,
} from "@/data/site";

export default Home;

const assurances = [
  {
    icon: ShieldCheck,
    title: "Custody you can audit",
    body: "Every original document is logged on receipt, stored in a secured safe and released only against signature.",
  },
  {
    icon: Landmark,
    title: "Official channels only",
    body: "Statutory fees are paid directly to the authority. You receive the official receipt, always.",
  },
  {
    icon: Clock3,
    title: "Timelines we can defend",
    body: "We quote the true regulatory window, not a hopeful one — and tell you when a deadline cannot be met.",
  },
  {
    icon: FileCheck2,
    title: "Checked before submission",
    body: "A second reviewer audits every file against current requirements. That is why 98% clear on first submission.",
  },
];

function Home() {
  return (
    <>
      {/* ---------------- Hero Section (Editorial Reference Match) ---------------- */}
      <section className="relative overflow-hidden bg-[#FAF8F5]">
        {/* Subtle background ambient curves / glow */}
        <div
          className="pointer-events-none absolute right-0 top-0 -z-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-gold/10 via-gold/5 to-transparent blur-3xl"
          aria-hidden="true"
        />

        <div className="shell relative grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-12 xl:gap-16 lg:py-16 xl:py-20">
          {/* Left Column: Eyebrow, Heading, Paragraph, CTAs & Integrated Trust Strip */}
          <div className="flex flex-col justify-center">
            <Reveal variant="fade-down">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gold" aria-hidden="true" />
                <span className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-gold">
                  Westlands, Nairobi · Document Specialists
                </span>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={60}>
              <h1 className="mt-5 font-serif text-[2.75rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-[3.5rem] lg:text-[3.85rem] xl:text-[4.35rem]">
                Kenyan paperwork,
                <span className="block text-gold font-serif">handled properly.</span>
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={120}>
              <p className="mt-6 max-w-xl font-sans text-[0.98rem] leading-[1.72] text-muted-foreground sm:text-[1.05rem]">
                We prepare, lodge and follow through the registrations, licences, certificates and
                permits that Kenyan life and business depend on — from company incorporation to
                embassy legalisation.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={180}>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href={COMPANY.portalRegisterUrl}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xs bg-gold px-7 py-3 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
                >
                  <UserPlus className="size-4" aria-hidden="true" />
                  Sign up for portal
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xs border border-gold/70 bg-white px-6 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  Request a consultation
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xs border border-hairline bg-transparent px-5 py-3 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-gold hover:text-foreground"
                >
                  Browse all services
                </Link>
              </div>
            </Reveal>

            {/* Integrated Trust / Value Strip */}
            <Reveal variant="fade-up" delay={240}>
              <div className="mt-10 rounded-md border border-hairline bg-white/95 p-4 sm:p-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xs">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:divide-x sm:divide-hairline">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <ShieldCheck className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-wider text-muted-foreground">
                        Trusted by
                      </p>
                      <p className="text-xs sm:text-[0.78rem] font-bold text-foreground leading-tight">
                        Businesses & Individuals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:pl-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <Clock className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-wider text-muted-foreground">
                        Fast
                      </p>
                      <p className="text-xs sm:text-[0.78rem] font-bold text-foreground leading-tight">
                        Turnaround Times
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:pl-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <FileCheck2 className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-wider text-muted-foreground">
                        100% Secure
                      </p>
                      <p className="text-xs sm:text-[0.78rem] font-bold text-foreground leading-tight">
                        Document Handling
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:pl-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <Headphones className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-wider text-muted-foreground">
                        Personalised
                      </p>
                      <p className="text-xs sm:text-[0.78rem] font-bold text-foreground leading-tight">
                        Support Every Step
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Visual with Curved Gold Frame & Experience Badge */}
          <Reveal
            variant="scale"
            delay={120}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] lg:max-w-[540px]">
              {/* Outer decorative golden halo ribbon */}
              <div
                className="pointer-events-none absolute -inset-2.5 sm:-inset-3.5 -z-10 rounded-tl-[160px] sm:rounded-tl-[240px] lg:rounded-tl-[280px] rounded-br-[45px] rounded-tr-[35px] rounded-bl-[90px] border border-gold/40 opacity-75"
                aria-hidden="true"
              />

              {/* Main Arched Frame Container */}
              <div className="relative overflow-hidden rounded-tl-[150px] sm:rounded-tl-[230px] lg:rounded-tl-[270px] rounded-br-[40px] rounded-tr-[30px] rounded-bl-[80px] border-[5px] sm:border-[7px] border-gold bg-[#06132F] shadow-[0_25px_60px_-15px_rgba(210,160,30,0.28)]">
                <img
                  src={heroOfficialDocumentsImg.src}
                  alt="Official Republic of Kenya document booklet with gold embossed Harambee coat of arms and luxury pen"
                  width={1200}
                  height={1200}
                  className="aspect-square sm:aspect-4/5 lg:aspect-square w-full object-cover object-center transition-transform duration-700 hover:scale-103"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06132F]/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Experience Badge matching reference */}
              <div className="absolute -bottom-4 right-3 sm:-bottom-5 sm:right-5 z-20 rounded-xl border border-gold/50 bg-[#06132F]/95 p-4 sm:p-5 text-center shadow-[0_20px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <div className="flex items-center justify-center gap-1.5 text-gold">
                  <Award className="size-5" aria-hidden="true" />
                  <span className="font-serif text-2xl sm:text-3xl font-extrabold text-gold leading-none">
                    10+
                  </span>
                </div>
                <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-gold">
                  YEARS
                </p>
                <p className="mt-1.5 text-[0.68rem] leading-tight text-white/85 font-medium">
                  of helping Kenyans
                  <br />
                  get things done
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------------- Dark Navy Stats Bar (Matching Reference) ---------------- */}
        <div className="border-y border-gold/20 bg-[#06132F] text-white">
          <div className="shell grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:divide-x sm:divide-white/10 py-7 sm:py-9">
            <Reveal variant="fade-up" delay={60} className="px-3 sm:px-6 text-center">
              <FileText className="size-6 text-gold mx-auto mb-2" aria-hidden="true" />
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">
                <Counter value={50} suffix="K+" />
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">
                Documents Processed
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={120} className="px-3 sm:px-6 text-center">
              <Users className="size-6 text-gold mx-auto mb-2" aria-hidden="true" />
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">
                <Counter value={20} suffix="K+" />
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">Happy Clients</p>
            </Reveal>

            <Reveal variant="fade-up" delay={180} className="px-3 sm:px-6 text-center">
              <Building2 className="size-6 text-gold mx-auto mb-2" aria-hidden="true" />
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">
                <Counter value={8} suffix="K+" />
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">
                Businesses Registered
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={240} className="px-3 sm:px-6 text-center">
              <Clock className="size-6 text-gold mx-auto mb-2" aria-hidden="true" />
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">
                <Counter value={99} suffix="%" />
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">Success Rate</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Introduction: asymmetric split ---------------- */}
      <section className="shell grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal variant="fade-left" className="lg:col-span-5">
          <div className="media-zoom border border-hairline">
            <img
              src={registryDeskImg.src}
              alt="Kenyan government filing dossiers, registration certificates, and official stamps prepared on an executive desk in Nairobi"
              loading="lazy"
              width={1408}
              height={1008}
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-px border border-hairline bg-hairline">
            <div className="bg-background p-5">
              <p className="font-display text-2xl font-extrabold text-gold">
                <Counter value={47} suffix="" />
              </p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">Counties served</p>
            </div>
            <div className="bg-background p-5">
              <p className="font-display text-2xl font-extrabold text-gold">
                <Counter value={11} suffix="" />
              </p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">
                Regulators worked with
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="fade-right" delay={100} className="lg:col-span-6 lg:col-start-7">
          <p className="rule-label">Who we are</p>
          <h2 className="display-lg mt-6">
            Nairobi's trusted documentation partners:{" "}
            <span className="text-gold">swift, precise and verified.</span>
          </h2>
          <div className="mt-7 space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
            <p>
              {COMPANY.legal} is a premier documentation consultancy based in Westlands, Nairobi. We
              specialise in preparing, lodging and expediting regulatory registrations, statutory
              compliances, licensing and official certifications for businesses, NGOs, professionals
              and individuals across Kenya.
            </p>
            <p>
              From complex corporate formations and tax compliance to immigration filings, civil
              registry services and document legalisation, our dedicated desk eliminates procedural
              bureaucracy. We ensure every file is assembled with precision and submitted correctly
              the first time.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Written quotations before work begins",
              "Named consultant on every file",
              "Official receipts for all statutory fees",
              "Secure archive of your certified copies",
            ].map((point, idx) => (
              <li key={point} className="flex gap-3 text-sm font-semibold">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-emerald-brand"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <GhostLink href="/about">About our practice</GhostLink>
          </div>
        </Reveal>
      </section>

      {/* ---------------- Why clients stay: editorial split hero + four-column guarantee ---------------- */}
      <section className="relative overflow-hidden bg-[#06132F] text-[#F7F7F3]">
        {/* Subtle dark Nairobi city skyline background with atmospheric deep navy overlay */}
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
          <img
            src={nairobiImg.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1600}
            height={912}
            className="size-full object-cover opacity-15 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06132F]/80 via-[#06132F]/92 to-[#06132F]" />
        </div>

        <div className="shell relative pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-18 lg:pb-18">
          {/* Top Hero Split: Left text (~50%), Right application dossier photograph (~50%) */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            {/* Left Hero Content */}
            <Reveal variant="fade-left" className="flex flex-col justify-center">
              <div className="flex items-center gap-2.5">
                <span className="h-[1.5px] w-5 bg-[#DFA500]" aria-hidden="true" />
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#DFA500]">
                  Why clients stay
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-normal leading-[1.12] tracking-tight text-[#F7F7F3] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.12]">
                The difference is
                <br />
                what happens before
                <br />
                <span className="text-[#DFA500]">submission.</span>
              </h2>

              <p className="mt-6 max-w-xl font-sans text-sm leading-[1.68] text-[#AEB6C7] sm:text-[0.95rem]">
                Nearly every rejected application we inherit was rejected for something small and
                avoidable — a name mismatch, an expired attachment, a missing consent. Our process
                is built entirely around catching those before the file leaves our office.
              </p>
            </Reveal>

            {/* Right Hero Image: Large document/application dossier photograph */}
            <Reveal
              variant="scale"
              delay={120}
              className="relative flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[530px] overflow-hidden rounded-xs border border-white/[0.08] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]">
                <img
                  src={preSubmissionAuditImg.src}
                  alt="Kenyan Certificate of Incorporation, BRS filing forms, and internal compliance audit checklist"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-4/3 w-full object-cover object-center"
                />
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          </div>

          {/* Guarantee Section Header with Centered Gold Flanking Lines */}
          <Reveal
            variant="fade-down"
            delay={60}
            className="relative mt-14 flex items-center justify-center sm:mt-16 lg:mt-18"
          >
            <div className="h-px w-12 bg-[#DFA500]/60 sm:w-20 lg:w-28" aria-hidden="true" />
            <p className="px-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#DFA500] sm:px-6 sm:text-xs">
              Our guarantee before you submit
            </p>
            <div className="h-px w-12 bg-[#DFA500]/60 sm:w-20 lg:w-28" aria-hidden="true" />
          </Reveal>

          {/* Four Guarantee Items: Open editorial 4-column layout with thin vertical dividers */}
          <div className="mt-10 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 sm:grid-cols-2 sm:divide-y-0 sm:border-y-0 lg:grid-cols-4">
            {assurances.map((a, i) => (
              <Reveal
                key={a.title}
                variant="scale-fade"
                delay={i * 90}
                className={`flex flex-col items-center px-3 py-6 text-center sm:px-4 lg:px-5 ${
                  i > 0 ? "lg:border-l lg:border-white/10" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:border-white/10" : ""} ${
                  i >= 2 ? "sm:border-t sm:border-white/10 lg:border-t-0" : ""
                }`}
              >
                <div className="flex size-15 items-center justify-center rounded-full border border-[#DFA500] sm:size-16">
                  <a.icon className="size-7 stroke-[1.35] text-[#DFA500]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-[1.12rem] font-medium tracking-tight text-[#F7F7F3] sm:text-lg lg:text-[1.2rem] xl:text-[1.25rem]">
                  {a.title}
                </h3>
                <p className="mt-2.5 max-w-[250px] font-sans text-xs leading-[1.65] text-[#AEB6C7] sm:text-[0.82rem] lg:max-w-[260px]">
                  {a.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom subtle gold transition divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DFA500]/25 to-transparent" />
      </section>

      {/* ---------------- Practice Areas: Editorial Mosaic Grid ---------------- */}
      <PracticeAreasSection />

      {/* ---------------- Visa Application Services: International & Local Travel Desk ---------------- */}
      <VisaServicesSection />

      {/* ---------------- Process: sticky image + steps ---------------- */}
      <section className="border-y border-hairline bg-sand">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
          <Reveal variant="fade-left" className="lg:sticky lg:top-32 lg:self-start">
            <p className="rule-label">How we work</p>
            <h2 className="display-lg mt-6">
              Five stages, and you are told where you are at each one.
            </h2>
            <div className="mt-8 media-zoom border border-hairline">
              <img
                src={consultImg.src}
                alt="Two consultants advising a client across a meeting table"
                loading="lazy"
                width={1408}
                height={1008}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
          </Reveal>

          <ol className="relative">
            {PROCESS.map((p, i) => (
              <Reveal
                as="li"
                key={p.step}
                variant="fade-up"
                delay={i * 80}
                className="relative border-b border-hairline py-8 pl-14 last:border-b-0 sm:pl-20"
              >
                <span
                  className="absolute left-0 top-8 font-display text-sm font-extrabold text-gold"
                  aria-hidden="true"
                >
                  {p.step}
                </span>
                <span
                  className="absolute left-6 top-9 hidden h-px w-8 bg-hairline sm:block"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
                    {p.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {p.duration}
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Statistics band ---------------- */}
      <section className="shell py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-px border border-hairline bg-hairline lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              variant="scale-fade"
              delay={i * 80}
              className="bg-background p-5 sm:p-8 lg:p-10"
            >
              <p className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <h3 className="mt-3 font-display text-sm font-bold sm:mt-4 sm:text-base">
                {s.label}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Client outcomes: horizontal single-slide carousel ---------------- */}
      <TestimonialsSection />

      {/* ---------------- Industries + document categories ---------------- */}
      <section className="border-y border-hairline bg-ink text-ink-foreground">
        <div className="shell grid gap-14 py-20 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:py-28">
          <Reveal variant="fade-left">
            <p className="rule-label text-ink-foreground/50">Industries served</p>
            <h2 className="display-lg mt-6 text-ink-foreground">
              Sector knowledge, not generic form-filling.
            </h2>
            <ul className="mt-10 divide-y divide-ink-foreground/10 border-y border-ink-foreground/10">
              {INDUSTRIES.map((ind) => (
                <li
                  key={ind.name}
                  className="flex flex-wrap items-baseline justify-between gap-2 py-4"
                >
                  <span className="font-display text-base font-bold">{ind.name}</span>
                  <span className="text-xs text-ink-foreground/55">{ind.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade-right" delay={120}>
            <div className="media-zoom border border-ink-foreground/15">
              <img
                src={passportImg.src}
                alt="A Kenyan passport, travel documents and a pen laid out on linen"
                loading="lazy"
                width={1200}
                height={1504}
                className="aspect-3/4 w-full object-cover"
              />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-foreground/60">
              Personal documents, corporate registrations, regulatory licences and cross-border
              authentication — handled by the same team, under one reference.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold"
            >
              See every document category
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="shell grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
        <Reveal variant="fade-left" className="lg:sticky lg:top-32 lg:self-start">
          <p className="rule-label">Questions</p>
          <h2 className="display-lg mt-6">Straight answers before you commit.</h2>
          <p className="lede mt-5">
            The same questions come up every week. Here are the honest versions.
          </p>
          <GhostLink href="/faq" className="mt-8">
            All questions
          </GhostLink>
        </Reveal>
        <div className="divide-y divide-hairline border-y border-hairline">
          {FAQS.slice(0, 5).map((f, i) => (
            <Reveal key={f.q} variant="fade-up" delay={i * 60}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-bold tracking-tight marker:hidden">
                  {f.q}
                  <span
                    className="mt-1 grid size-6 shrink-0 place-items-center border border-hairline text-muted-foreground transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Insights ---------------- */}
      <section className="border-t border-hairline bg-sand">
        <div className="shell py-20 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal variant="fade-up">
              <p className="rule-label">Insights</p>
              <h2 className="display-lg mt-6 max-w-xl">Notes from the registry counter.</h2>
            </Reveal>
            <Reveal variant="fade-left" delay={80}>
              <GhostLink href="/blog" className="w-fit">
                All articles
              </GhostLink>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px bg-hairline md:grid-cols-3">
            {POSTS.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} variant="scale-fade" delay={i * 90} className="bg-sand">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-background"
                >
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                    {post.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold">
                    Read
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact / Consultation request section ---------------- */}
      <ContactRequestSection />

      <div className="h-16 lg:h-24" />
    </>
  );
}
