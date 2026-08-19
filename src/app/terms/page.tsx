import type { Metadata } from "next";

import { PageHero } from "@/components/site/ui";
import { COMPANY } from "@/data/site";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service | Swift Doc",
  description:
    "Read Swift Doc terms for private document preparation, statutory filing support, quotations, fees, timelines and client responsibilities.",
  path: "/terms",
});

export default TermsPage;

const sections = [
  {
    h: "Nature of our services",
    p: "We are a private documentation services firm. We are not a government agency, and we do not provide legal representation. Where a matter requires an advocate, we will say so and refer you.",
  },
  {
    h: "Scope and quotations",
    p: "Every engagement begins with a written scope separating the statutory fee from our professional fee. The quotation stands unless the scope changes or the authority revises its fees.",
  },
  {
    h: "Statutory fees",
    p: "Government fees are paid directly to the relevant authority and evidenced by official receipts issued to you. We do not mark up statutory fees.",
  },
  {
    h: "Client responsibilities",
    p: "You are responsible for the accuracy and authenticity of the documents and information you provide. We cannot lodge, and will not lodge, a file we believe to contain false information.",
  },
  {
    h: "Timelines",
    p: "Quoted turnaround windows reflect ordinary regulator performance. They are estimates, not guarantees, and exclude delays caused by the authority, incomplete client documents or system downtime.",
  },
  {
    h: "Rejections and resubmission",
    p: "Where a rejection arises from an error in our preparation, we correct and resubmit at no additional professional fee. Additional statutory fees, where charged by the authority, remain payable.",
  },
  {
    h: "Limitation of liability",
    p: "Our liability in any matter is limited to the professional fee paid for that matter. We are not liable for consequential loss arising from regulator delay or third-party action.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        lead="Plainly worded, so there is nothing to discover later."
      />
      <section className="shell max-w-3xl py-16 lg:py-24">
        <ol className="space-y-10">
          {sections.map((s, i) => (
            <li key={s.h}>
              <span className="font-display text-xs font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 font-display text-xl font-extrabold tracking-tight">{s.h}</h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">{s.p}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 border-t border-hairline pt-6 text-sm text-muted-foreground">
          {COMPANY.legal}, {COMPANY.address}.
        </p>
      </section>
    </>
  );
}
