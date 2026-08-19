import type { Metadata } from "next";

import { PageHero } from "@/components/site/ui";
import { COMPANY } from "@/data/site";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Swift Doc",
  description: "Read how Swift Doc handles personal information connected to document preparation and statutory filing services.",
  path: "/privacy",
});

export default PrivacyPage;

const sections = [
  {
    h: "Information we collect",
    p: "We collect the identification documents, contact details and supporting records required to prepare and lodge the filings you instruct us to handle. We do not collect data that a filing does not require.",
  },
  {
    h: "How we use your information",
    p: "Your data is used solely to prepare applications, pay statutory fees on your behalf, correspond with the relevant authority, and keep you updated. We do not sell client data or use it for third-party marketing.",
  },
  {
    h: "Document custody",
    p: "Physical originals are logged on receipt, stored in a secured safe and released only against signature. Digital copies are encrypted at rest, access-controlled and available only to the consultants assigned to your matter.",
  },
  {
    h: "Disclosure",
    p: "We disclose your information to government authorities strictly as required to process your instruction, and to no one else without your written authority or a lawful order.",
  },
  {
    h: "Retention",
    p: "Records are retained for the period required by the relevant authority and for our own statutory obligations, after which they are securely destroyed. You may request earlier deletion of copies we are not legally required to keep.",
  },
  {
    h: "Your rights",
    p: "Under the Data Protection Act, 2019 you may request access to, correction of, or deletion of your personal data. Write to us and we will respond within statutory timelines.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead="We hold sensitive originals. This is exactly how they are handled."
      />
      <section className="shell max-w-3xl py-16 lg:py-24">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-extrabold tracking-tight">{s.h}</h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-hairline pt-6 text-sm text-muted-foreground">
          Questions about this policy can be sent to{" "}
          <a className="font-semibold text-gold hover:underline" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
