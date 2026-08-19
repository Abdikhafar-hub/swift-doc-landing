import { FileDown } from "lucide-react";
import { PageHero, PrimaryLink } from "@/components/site/ui";
import { Reveal } from "@/components/site/motion";
import { COMPANY } from "@/data/site";

export default DownloadsPage;

const files = [
  {
    title: "Company incorporation checklist",
    note: "Directors, shareholding, name search & CR12",
    size: "PDF · 180 KB",
  },
  {
    title: "KRA PIN & tax compliance pack",
    note: "Individual, corporate, VAT and TCC resolution",
    size: "PDF · 140 KB",
  },
  {
    title: "Passport & Kenya eTA requirements",
    note: "First issue, renewal, lost replacement and eTA entry",
    size: "PDF · 160 KB",
  },
  {
    title: "Work permit & residency dossier",
    note: "Class A–M permits, PR and citizenship requirements",
    size: "PDF · 220 KB",
  },
  {
    title: "Deed Poll & name change procedure",
    note: "Affidavits, Registrar of Documents and Gazette notice",
    size: "PDF · 150 KB",
  },
  {
    title: "Certificate of No Impediment & marriage",
    note: "Civil wedding, customary and overseas marriage clearances",
    size: "PDF · 140 KB",
  },
  {
    title: "NTSA logbook transfer & smart DL guide",
    note: "TIMS steps, buyer/seller forms and DL endorsements",
    size: "PDF · 130 KB",
  },
  {
    title: "SHA / NHIF & police clearance pack",
    note: "Social Health Authority compliance and DCI Good Conduct",
    size: "PDF · 150 KB",
  },
  {
    title: "AGPO & tender statutory attachments",
    note: "Youth, women and PWD bid compilation checklist",
    size: "PDF · 210 KB",
  },
  {
    title: "Authentication & legalisation chain",
    note: "Notary → MFA → Embassy consular chain",
    size: "PDF · 130 KB",
  },
];

function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Requirement checklists, free to use."
        lead="The same sheets our consultants work from. Bring a complete file and you halve your timeline."
      />

      <section className="shell py-16 lg:py-24">
        <ul className="grid gap-px bg-hairline sm:grid-cols-2">
          {files.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              variant="scale-fade"
              delay={i * 60}
              className="bg-background p-8"
            >
              <FileDown className="size-5 text-gold" aria-hidden="true" />
              <h2 className="mt-5 font-display text-lg font-extrabold tracking-tight">{f.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{f.note}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                {f.size} · available on request
              </p>
            </Reveal>
          ))}
        </ul>
        <Reveal variant="fade-up" delay={100} className="mt-12">
          <PrimaryLink href="/contact">Request a checklist by email</PrimaryLink>
        </Reveal>
      </section>
    </>
  );
}
