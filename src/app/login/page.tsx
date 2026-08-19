import type { Metadata } from "next";
import { LogIn, UserPlus, ShieldCheck, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/ui";
import { createMetadata } from "@/lib/seo/metadata";
import { COMPANY } from "@/data/site";

export const metadata: Metadata = createMetadata({
  title: "Client Login | Swift Doc",
  description: "Access the Swift Doc client portal.",
  path: "/login",
  noindex: true,
});

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Client access"
        title="Sign in to your Swift Doc account."
        lead="Use the secure client portal for applications, statutory tracking, requirements, document vaults, and payment records."
      />
      <section className="shell py-16">
        <div className="mx-auto max-w-xl rounded-xs border border-hairline bg-white p-8 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xs bg-gold/15 text-gold">
              <LogIn className="size-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-extrabold text-foreground">Swift Doc Portal</h2>
              <p className="text-xs text-muted-foreground">Access your verified dashboard & document files</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Portal authentication is handled securely by the Swift Doc Application System. Click below to sign in or create a new client account.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={COMPANY.portalLoginUrl}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xs bg-gold px-6 py-3 text-sm font-bold text-ink shadow-xs transition-colors hover:bg-gold-dark"
            >
              <LogIn className="size-4" />
              Sign In to Portal
              <ArrowRight className="size-4" />
            </a>
            <a
              href={COMPANY.portalRegisterUrl}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xs border border-gold/70 bg-white px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              <UserPlus className="size-4" />
              Create Account
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 border-t border-hairline pt-4 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-gold" />
            <span>256-Bit SSL Encrypted & Data Protection Compliant</span>
          </div>
        </div>
      </section>
    </>
  );
}
