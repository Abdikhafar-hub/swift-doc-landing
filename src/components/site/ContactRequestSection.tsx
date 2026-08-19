"use client";

import * as React from "react";
import {
  ChevronDown,
  ChevronRight,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { COMPANY, SERVICES } from "@/data/site";
import teamImg from "@/assets/team.jpg";
import { Reveal } from "@/components/site/motion";

export function ContactRequestSection() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="shell py-16 sm:py-20 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:gap-12 items-stretch">
        {/* ========================================================= */}
        {/* LEFT PANEL: CONSULTATION / REQUEST FORM (Deep Navy)      */}
        {/* ========================================================= */}
        <Reveal variant="fade-left" className="flex w-full">
          <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#06132F] p-7 sm:p-10 lg:p-12 text-[#F7F7F3] shadow-2xl">
            {/* Subtle decorative background curves */}
            <div
              className="pointer-events-none absolute inset-0 select-none opacity-15"
              aria-hidden="true"
            >
              <svg
                className="absolute right-0 top-0 h-full w-full max-w-2xl translate-x-1/4 stroke-[#DFA500]/30"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="300" cy="300" r="280" strokeWidth="1.2" strokeDasharray="4 8" />
                <circle cx="300" cy="300" r="200" strokeWidth="1" />
                <circle cx="300" cy="300" r="120" strokeWidth="0.8" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Gold Eyebrow */}
              <p className="flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#DFA500]">
                <span className="h-[1.5px] w-6 bg-[#DFA500]" aria-hidden="true" />
                START HERE
              </p>

              {/* Editorial Headline */}
              <h2 className="mt-5 font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#F7F7F3] sm:text-4xl lg:text-[2.65rem]">
                Tell us the document.
                <br />
                <span className="text-[#DFA500]">
                  We will tell you the truth about the timeline.
                </span>
              </h2>

              {/* Reassurance Subtext */}
              <p className="mt-4 max-w-xl text-xs leading-relaxed text-[#AEB6C7] sm:text-sm">
                Consultations are free and take about fifteen minutes. You leave with a written
                scope, a fee breakdown and a realistic date.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {/* Row 1: Full name + Email address */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="req-name"
                      className="mb-1.5 block text-xs font-semibold text-white/90"
                    >
                      Full name
                    </label>
                    <input
                      id="req-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full min-h-12 rounded-xs border border-white/15 bg-[#0B1E48]/80 px-4 text-sm text-white placeholder:text-white/40 shadow-inner transition-colors duration-200 focus:border-[#DFA500] focus:ring-1 focus:ring-[#DFA500] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="req-email"
                      className="mb-1.5 block text-xs font-semibold text-white/90"
                    >
                      Email address
                    </label>
                    <input
                      id="req-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full min-h-12 rounded-xs border border-white/15 bg-[#0B1E48]/80 px-4 text-sm text-white placeholder:text-white/40 shadow-inner transition-colors duration-200 focus:border-[#DFA500] focus:ring-1 focus:ring-[#DFA500] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Phone number + Service you need */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="req-phone"
                      className="mb-1.5 block text-xs font-semibold text-white/90"
                    >
                      Phone number
                    </label>
                    <div className="flex min-h-12 items-center rounded-xs border border-white/15 bg-[#0B1E48]/80 px-3.5 shadow-inner transition-colors duration-200 focus-within:border-[#DFA500] focus-within:ring-1 focus-within:ring-[#DFA500]">
                      <span
                        className="mr-2.5 text-base select-none"
                        role="img"
                        aria-label="Kenya flag"
                      >
                        🇰🇪
                      </span>
                      <input
                        id="req-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+254 7xx xxx xxx"
                        className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="req-service"
                      className="mb-1.5 block text-xs font-semibold text-white/90"
                    >
                      Service you need
                    </label>
                    <div className="relative">
                      <select
                        id="req-service"
                        name="service"
                        defaultValue=""
                        required
                        className="w-full min-h-12 appearance-none rounded-xs border border-white/15 bg-[#0B1E48]/80 px-4 pr-10 text-sm text-white shadow-inner transition-colors duration-200 focus:border-[#DFA500] focus:ring-1 focus:ring-[#DFA500] focus:outline-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#06132F] text-white/50">
                          Select a service
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.title} className="bg-[#06132F] text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Other" className="bg-[#06132F] text-white">
                          Something else / custom inquiry
                        </option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-[#DFA500]" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Tell us more about your document */}
                <div>
                  <label
                    htmlFor="req-message"
                    className="mb-1.5 block text-xs font-semibold text-white/90"
                  >
                    Tell us more about your document
                  </label>
                  <textarea
                    id="req-message"
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your document or situation..."
                    className="w-full rounded-xs border border-white/15 bg-[#0B1E48]/80 p-4 text-sm text-white placeholder:text-white/40 shadow-inner transition-colors duration-200 focus:border-[#DFA500] focus:ring-1 focus:ring-[#DFA500] focus:outline-none resize-none"
                  />
                </div>

                {/* CTA Row: Book Button + Privacy Reassurance */}
                <div className="mt-8 flex flex-col gap-4 pt-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xs bg-[#DFA500] px-7 py-3.5 text-sm font-bold text-[#06132F] shadow-xs transition-all duration-300 hover:bg-[#C99000] hover:shadow-md cursor-pointer active:scale-95"
                  >
                    Book a consultation
                    <ChevronRight className="size-4 stroke-[2.5]" />
                  </button>

                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-9 shrink-0 items-center justify-center rounded-xs border border-white/10 bg-white/5 text-[#DFA500]"
                      aria-hidden="true"
                    >
                      <Lock className="size-4" />
                    </div>
                    <p className="text-xs leading-snug text-[#AEB6C7]">
                      Your information is safe with us.
                      <br />
                      <span className="text-white/80">We respect your privacy.</span>
                    </p>
                  </div>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="mt-4 flex items-center gap-2 rounded-xs border border-emerald-400/30 bg-emerald-500/10 p-3.5 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="size-4 shrink-0" />
                    Thank you — your consultation request has been received. Our Nairobi desk will
                    contact you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </Reveal>

        {/* ========================================================= */}
        {/* RIGHT PANEL: CONTACT DETAILS (Crisp Ivory)               */}
        {/* ========================================================= */}
        <Reveal variant="fade-right" delay={120} className="flex w-full">
          <div className="flex w-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-[#FAF9F6] p-7 sm:p-10 lg:p-12 text-[#06132F] shadow-sm">
            <div>
              {/* Gold Eyebrow */}
              <p className="flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#DFA500]">
                <span className="h-[1.5px] w-6 bg-[#DFA500]" aria-hidden="true" />
                CONTACT DETAILS
              </p>

              {/* Editorial Headline */}
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#06132F] sm:text-4xl">
                We are here to help.
              </h2>

              {/* Existing Team Image */}
              <div className="mt-6 overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-200/80 shadow-xs">
                <img
                  src={teamImg.src}
                  alt="The Swift Doc consulting team in Nairobi"
                  loading="lazy"
                  width={1200}
                  height={600}
                  className="aspect-16/9 sm:aspect-2/1 w-full object-cover"
                />
              </div>

              {/* Four Clean Contact Rows */}
              <div className="mt-6 space-y-3">
                {/* OFFICE */}
                <div className="flex items-center gap-4 rounded-xl border border-neutral-200/80 bg-white p-4 transition-all duration-200 hover:border-neutral-300 hover:shadow-xs">
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#DFA500]/10 text-[#DFA500]"
                    aria-hidden="true"
                  >
                    <MapPin className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-neutral-400">
                      OFFICE
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-[#06132F] sm:text-sm">
                      {COMPANY.address}
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-[#DFA500]" aria-hidden="true" />
                </div>

                {/* EMAIL */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 rounded-xl border border-neutral-200/80 bg-white p-4 transition-all duration-200 hover:border-neutral-300 hover:shadow-xs group"
                >
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#DFA500]/10 text-[#DFA500]"
                    aria-hidden="true"
                  >
                    <Mail className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-neutral-400">
                      EMAIL
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-[#06132F] sm:text-sm group-hover:text-[#DFA500] transition-colors">
                      {COMPANY.email}
                    </p>
                  </div>
                  <ChevronRight
                    className="size-4 shrink-0 text-[#DFA500] group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </a>

                {/* PHONE */}
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-4 rounded-xl border border-neutral-200/80 bg-white p-4 transition-all duration-200 hover:border-neutral-300 hover:shadow-xs group"
                >
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#DFA500]/10 text-[#DFA500]"
                    aria-hidden="true"
                  >
                    <Phone className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-neutral-400">
                      PHONE
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-[#06132F] sm:text-sm group-hover:text-[#DFA500] transition-colors">
                      {COMPANY.phone}
                    </p>
                  </div>
                  <ChevronRight
                    className="size-4 shrink-0 text-[#DFA500] group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </a>

                {/* WHATSAPP OUR DESK (Subtle Green Highlight) */}
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-4 rounded-xl border border-emerald-200/90 bg-emerald-50/40 p-4 transition-all duration-200 hover:bg-emerald-50/80 hover:border-emerald-300 hover:shadow-xs group"
                >
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-100/80 text-emerald-600"
                    aria-hidden="true"
                  >
                    <MessageCircle className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-emerald-700">
                      WHATSAPP OUR DESK
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-[#06132F] sm:text-sm">
                      Chat with us on WhatsApp
                    </p>
                  </div>
                  <ChevronRight
                    className="size-4 shrink-0 text-emerald-600 group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
