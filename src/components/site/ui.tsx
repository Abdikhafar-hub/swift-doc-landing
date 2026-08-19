import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/motion";

export function PrimaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center gap-2 bg-gold px-6 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:text-ink hover:shadow-md",
        className,
      )}
    >
      {children}
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

export function GhostLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center gap-2 border border-foreground/20 px-6 text-sm font-bold text-foreground transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:text-gold",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function WhatsAppButton({ className }: { className?: string }) {
  return (
    <a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "inline-flex min-h-12 items-center gap-2 border border-emerald-brand px-6 text-sm font-bold text-emerald-brand transition-colors hover:bg-emerald-brand hover:text-white",
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      WhatsApp our desk
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-sand">
      <div
        className="hairline-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div className="shell relative grid gap-8 py-16 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:py-24">
        <div>
          <Reveal variant="fade-down">
            <p className="rule-label">{eyebrow}</p>
          </Reveal>
          <Reveal variant="fade-up" delay={60}>
            <h1 className="display-xl mt-6 max-w-3xl">{title}</h1>
          </Reveal>
        </div>
        {lead ? (
          <Reveal variant="fade-up" delay={120} className="max-w-md lg:pb-3">
            <p className="lede">{lead}</p>
          </Reveal>
        ) : null}
      </div>
      {children}
    </section>
  );
}
