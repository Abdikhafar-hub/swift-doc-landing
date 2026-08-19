import type { Metadata } from "next";

import { PageHero, PrimaryLink } from "@/components/site/ui";
import { Reveal } from "@/components/site/motion";
import { COMPANY, FAQS } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Swift Doc FAQs | Statutory Filing Questions",
  description:
    "Answers to common Swift Doc questions about Kenyan document preparation, statutory fees, requirements and filing follow-up.",
  path: "/faq",
});

export default FaqPage;

function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <PageHero
        eyebrow="Questions"
        title="The things clients ask before they trust us with originals."
        lead="If your question is not here, ask it directly — we would rather answer than have you guess."
      />

      <section className="shell grid gap-12 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-24">
        <Reveal variant="fade-left" className="lg:sticky lg:top-32 lg:self-start">
          <p className="rule-label">Still unsure?</p>
          <h2 className="display-lg mt-6 text-3xl">Ask a consultant.</h2>
          <p className="lede mt-4">No charge, no obligation, no sales script.</p>
          <PrimaryLink href="/contact" className="mt-8">
            Contact us
          </PrimaryLink>
        </Reveal>

        <div className="divide-y divide-hairline border-y border-hairline">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} variant="fade-up" delay={i * 50}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-bold tracking-tight sm:text-xl">
                  {f.q}
                  <span
                    className="mt-1 grid size-6 shrink-0 place-items-center border border-hairline text-muted-foreground transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
