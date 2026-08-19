import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, Globe2, Landmark, MapPin, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/site/ui";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { EmbassyDirectory } from "@/components/embassy/EmbassyDirectory";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, organizationSchema } from "@/lib/seo/schema";
import { STANDARD_VISA_DISCLAIMER, VISA_COUNTRIES } from "@/data/visaCountries";

export const metadata: Metadata = createMetadata({
  title: "Embassies & High Commissions in Nairobi | Diplomatic Mission Directory",
  description:
    "Directory of foreign embassies, High Commissions, consulates, and authorized visa application centres (VFS Global, TLScontact, Tasheer) located in Nairobi, Kenya.",
  path: "/embassies",
});

const EMBASSY_FAQS = [
  {
    q: "Where are most foreign embassies located in Nairobi?",
    a: "Major foreign missions and High Commissions are concentrated in Gigiri (near the UN Complex), Muthaiga, Westlands, Upper Hill, Kilimani, and Riverside.",
  },
  {
    q: "Can I submit my visa application directly at the embassy?",
    a: "Most major diplomatic missions in Nairobi (such as the UK, Canada, Australia, and Schengen member states) outsource biometric capture and dossier intake to commercial partners like VFS Global or TLScontact. Others, such as the U.S. Embassy and Chinese Embassy (via CVASC), have specific in-person or online appointment mechanisms.",
  },
  {
    q: "How does Swift Doc assist with foreign embassies in Kenya?",
    a: "Swift Doc provides administrative preparation, document legalization, MFA authentication, certified translations, and portal filing. We do not represent diplomatic missions or influence visa decisions.",
  },
];

export default function EmbassiesIndexPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Embassies Directory", href: "/embassies" },
  ];

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(EMBASSY_FAQS)} />

      <PageHero
        eyebrow="Diplomatic Mission Directory"
        title="Embassies and High Commissions in Nairobi."
        lead="Comprehensive directory of foreign diplomatic missions, consular sections, and outsourced visa application centres across Kenya."
      />

      <section className="shell py-12 lg:py-16">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8">
          <EmbassyDirectory initialCountries={VISA_COUNTRIES} />
        </div>
      </section>

      {/* Diplomatic Services & FAQs */}
      <section className="shell py-16 lg:py-24 border-t border-hairline">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="rule-label">Consular Submissions in Nairobi</p>
            <h2 className="display-lg mt-6">
              How diplomatic intake works in Kenya.
            </h2>
            <p className="lede mt-4">
              Learn how biometrics, document authentication, and visa appointments are managed across Nairobi's diplomatic quarter.
            </p>
            <div className="mt-6">
              <Link
                href="/visa"
                className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:underline"
              >
                Browse all visa requirements
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="divide-y divide-hairline border-y border-hairline">
            {EMBASSY_FAQS.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-lg font-bold marker:hidden flex items-start justify-between">
                  {faq.q}
                  <span className="mt-1 grid size-6 shrink-0 place-items-center border border-hairline text-neutral-500 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-16 rounded-xs border border-amber-900/20 bg-amber-50/70 p-6 text-amber-950">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
            Diplomatic Disclaimer
          </p>
          <p className="mt-1 text-xs leading-relaxed text-amber-900/80">
            {STANDARD_VISA_DISCLAIMER}
          </p>
        </div>
      </section>
    </>
  );
}
