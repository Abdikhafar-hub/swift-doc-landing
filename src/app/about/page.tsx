import type { Metadata } from "next";

import { COMPANY, PROCESS, STATS } from "@/data/site";
import { Counter, Reveal } from "@/components/site/motion";
import { PrimaryLink, GhostLink } from "@/components/site/ui";
import teamImg from "@/assets/team.jpg";
import consultImg from "@/assets/consultation.jpg";
import nairobiImg from "@/assets/nairobi-night.jpg";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Swift Doc | Documentation Services in Kenya",
  description:
    "Learn how Swift Doc prepares, lodges and follows up Kenyan statutory filings through official channels from Westlands, Nairobi.",
  path: "/about",
});

export default AboutPage;

const values = [
  {
    title: "Say the difficult thing early",
    body: "If a deadline cannot be met, or a file has a fatal defect, you hear it in the first conversation — not after you have paid.",
  },
  {
    title: "One file, one owner",
    body: "A named consultant carries your matter from intake to handover. You never re-explain your case to a stranger.",
  },
  {
    title: "Paper discipline",
    body: "Receipts, reference numbers, submission acknowledgements. Everything we do leaves a trail you can inspect.",
  },
  {
    title: "No shortcuts through back doors",
    body: "We work official channels. It is slower in the rare case and far safer in every case.",
  },
];

const milestones = [
  {
    year: "01",
    text: "Corporate & Business Formations: Company incorporations, CR12s, share restructuring, and annual returns for local and foreign entities.",
  },
  {
    year: "02",
    text: "Statutory & Tax Compliance: Complete KRA ledger reconciliation, TCC processing, NTSA logbook transfers, and business licensing.",
  },
  {
    year: "03",
    text: "Immigration & Global Mobility: Expatriate work permits, eTA, special passes, alien cards, and official embassy authentications.",
  },
  {
    year: "04",
    text: "NGO & Society Registration: Non-profit trust deeds, NGO board approvals, constitution drafting, and society registrations.",
  },
  {
    year: "05",
    text: "Digital Intake & Custody: Remote file submission, certified copy archiving, and doorstep delivery across Kenya and the diaspora.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-sand">
        <div
          className="hairline-grid pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div className="shell relative grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-24">
          <div>
            <Reveal variant="fade-down">
              <p className="rule-label">About the firm</p>
            </Reveal>
            <Reveal variant="fade-up" delay={60}>
              <h1 className="display-xl mt-6 max-w-3xl">
                A documentation practice built on one habit: submit once, correctly.
              </h1>
            </Reveal>
          </div>
          <Reveal variant="fade-up" delay={120} className="max-w-md lg:pb-2">
            <p className="lede">
              {COMPANY.legal} takes the procedural burden off your shoulders — delivering swift,
              accurate filings across all Kenyan registries.
            </p>
          </Reveal>
        </div>
        <div className="shell relative pb-16 lg:pb-20">
          <Reveal variant="scale" delay={100}>
            <div className="media-zoom border border-hairline">
              <img
                src={teamImg.src}
                alt="The consulting team standing in the office lobby"
                width={1408}
                height={1008}
                className="aspect-21/9 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal variant="fade-left" className="lg:col-span-7">
          <p className="rule-label">Our purpose</p>
          <h2 className="display-lg mt-6">
            Streamlining your documentation with ease and absolute precision.
          </h2>
          <div className="mt-7 space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
            <p>
              Swift Doc was founded on a clear principle: individuals and businesses should not have
              to navigate bureaucratic bottlenecks, confusing statutory requirements, or lost days
              at government desks to get their official paperwork done.
            </p>
            <p>
              Operating from Unga House in Westlands, Nairobi, we manage comprehensive documentation
              files — from company incorporations, tax and tender compliances to immigration
              paperwork, NGO registrations, and embassy authentications. We absorb the procedural
              complexity so our clients can focus on growing their ventures.
            </p>
            <p>
              We are deliberately an executive documentation practice, not a law firm and not a
              government office. Where a matter requires formal legal counsel, we ensure a seamless
              and qualified referral.
            </p>
          </div>
        </Reveal>

        <Reveal variant="fade-right" delay={120} className="lg:col-span-4 lg:col-start-9">
          <div className="border border-hairline">
            {STATS.map((s) => (
              <div key={s.label} className="border-b border-hairline p-6 last:border-b-0">
                <p className="font-display text-3xl font-extrabold text-primary">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-bold">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-hairline bg-ink text-ink-foreground">
        <div className="shell py-20 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal variant="fade-up">
              <p className="rule-label text-ink-foreground/50">How we operate</p>
              <h2 className="display-lg mt-6 text-ink-foreground">
                Four commitments, applied literally.
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={80}>
              <p className="text-[0.98rem] leading-relaxed text-ink-foreground/65">
                These are not slogans. They are the rules our consultants are held to, and the
                reason our clients trust and continuously recommend us.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-px border border-ink-foreground/10 bg-ink-foreground/10 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                variant="scale-fade"
                delay={i * 80}
                className="bg-ink p-8 lg:p-10"
              >
                <span className="font-display text-xs font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold text-ink-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/60">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
        <Reveal variant="fade-left" className="lg:sticky lg:top-32 lg:self-start">
          <p className="rule-label">Capabilities</p>
          <h2 className="display-lg mt-6">Built for reliability: our core operational pillars.</h2>
          <div className="mt-8 media-zoom border border-hairline">
            <img
              src={nairobiImg.src}
              alt="Nairobi skyline at dusk"
              loading="lazy"
              width={1600}
              height={912}
              className="aspect-16/10 w-full object-cover"
            />
          </div>
        </Reveal>
        <ol className="divide-y divide-hairline border-y border-hairline">
          {milestones.map((m, i) => (
            <Reveal
              as="li"
              key={m.year}
              variant="fade-up"
              delay={i * 70}
              className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 py-7"
            >
              <span className="font-display text-lg font-extrabold text-gold">{m.year}</span>
              <p className="text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="process" className="border-y border-hairline bg-sand">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
          <Reveal variant="fade-left">
            <p className="rule-label">Our process</p>
            <h2 className="display-lg mt-6">Five stages from first call to handover.</h2>
            <ol className="mt-10 divide-y divide-hairline border-y border-hairline">
              {PROCESS.map((p, idx) => (
                <Reveal key={p.step} variant="fade-up" delay={idx * 60} as="li" className="py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-extrabold">
                      <span className="mr-3 text-gold">{p.step}</span>
                      {p.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {p.duration}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </Reveal>
          <Reveal variant="fade-right" delay={100}>
            <div className="media-zoom border border-hairline">
              <img
                src={consultImg.src}
                alt="Consultants advising a client in the Nairobi office"
                loading="lazy"
                width={1408}
                height={1008}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <PrimaryLink href="/contact">Speak to a consultant</PrimaryLink>
              <GhostLink href="/services">See the service index</GhostLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
