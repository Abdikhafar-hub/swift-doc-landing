import { PageHero, GhostLink } from "@/components/site/ui";
import { Reveal } from "@/components/site/motion";
import { COMPANY } from "@/data/site";
import teamImg from "@/assets/team.jpg";

export default CareersPage;

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="We hire for patience, precision and plain speaking."
        lead="Our work is detail work. If you check things twice by instinct, you will do well here."
      />

      <section className="shell grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">
        <Reveal variant="fade-left">
          <p className="rule-label">Careers & Talent</p>
          <div className="mt-8 border border-hairline bg-sand p-8">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              No active vacancies at this time
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
              We do not currently have any open roles listed. However, we are always eager to
              connect with experienced document consultants, registry specialists, and client
              relations professionals who share our commitment to precision.
            </p>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
              If you would like to be considered for upcoming opportunities, you are welcome to send
              your CV and a brief introduction to{" "}
              <a
                className="font-semibold text-gold hover:underline"
                href={`mailto:${COMPANY.email}`}
              >
                {COMPANY.email}
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${COMPANY.email}?subject=General%20Application%20%E2%80%94%20Swift%20Doc`}
                className="inline-flex min-h-12 items-center justify-center bg-foreground px-6 text-sm font-bold text-background transition-colors hover:bg-gold hover:text-ink"
              >
                Send speculative application
              </a>
              <GhostLink href="/contact">Contact our office</GhostLink>
            </div>
          </div>
        </Reveal>
        <Reveal variant="scale" delay={120}>
          <div className="media-zoom border border-hairline">
            <img
              src={teamImg.src}
              alt="Team members in the office lobby"
              loading="lazy"
              width={1408}
              height={1008}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
