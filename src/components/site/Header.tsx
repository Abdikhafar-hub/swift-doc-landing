"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronRight, UserPlus, LogIn } from "lucide-react";
import { COMPANY } from "@/data/site";
import { cn } from "@/lib/utils";
import swiftLogo from "@/assets/swift-logo.png";

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Visa Services", to: "/visa" },
  { label: "Embassies", to: "/embassies" },
  { label: "Blog", to: "/blog" },
  { label: "Resources", to: "/resources" },
  { label: "FAQ", to: "/faqs" },
  { label: "Contact", to: "/contact" },
] as const;

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2"
      aria-label={`${COMPANY.name} home`}
    >
      <img
        src={swiftLogo.src}
        alt={COMPANY.name}
        className={cn(
          "h-11 w-auto max-w-[200px] object-contain sm:h-12 transition-transform duration-300 group-hover:scale-102",
          tone === "light" ? "brightness-0 invert" : "",
        )}
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-hairline bg-background/92 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="hidden border-b border-hairline/70 bg-ink text-ink-foreground lg:block">
        <div className="shell flex h-9 items-center justify-between text-[0.72rem] font-medium tracking-wide">
          <p className="text-ink-foreground/70">
            Westlands, Nairobi · Serving all 47 counties & Diaspora
          </p>
          <div className="flex items-center gap-6">
            <a className="transition-colors hover:text-gold" href={COMPANY.phoneHref}>
              {COMPANY.phone}
            </a>
            <a className="transition-colors hover:text-gold" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
            <span className="text-ink-foreground/30">|</span>
            <a
              className="flex items-center gap-1.5 font-bold text-gold transition-colors hover:text-gold-light hover:underline"
              href={COMPANY.portalLoginUrl}
            >
              <LogIn className="size-3.5" />
              Client Portal Sign In
            </a>
          </div>
        </div>
      </div>

      <div className="shell grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <Logo />

        <div className="flex items-center gap-2 sm:gap-3">
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className="relative px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Portal Sign In Link */}
          <a
            href={COMPANY.portalLoginUrl}
            className="hidden items-center gap-1.5 px-3 py-2 text-sm font-bold text-foreground transition-colors hover:text-gold lg:inline-flex"
          >
            <LogIn className="size-4 text-gold" />
            Sign In
          </a>

          {/* Desktop Portal Sign Up CTA Button */}
          <a
            href={COMPANY.portalRegisterUrl}
            data-analytics-event="service_cta_click"
            data-analytics-label="header_signup"
            className="ml-1 hidden items-center gap-2 rounded-xs bg-gold px-5 py-2.5 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:text-ink hover:shadow-md lg:inline-flex"
          >
            <UserPlus className="size-4" aria-hidden="true" />
            Sign Up
          </a>

          <a
            href={COMPANY.phoneHref}
            aria-label={`Call ${COMPANY.phone}`}
            data-analytics-event="contact_interaction"
            data-analytics-label="mobile_header_call"
            className="grid size-11 place-items-center border border-hairline text-foreground transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center border border-hairline bg-gold text-ink transition-colors hover:bg-gold-dark lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[calc(4.5rem+0px)] bottom-0 z-50 overflow-y-auto border-t border-hairline bg-background px-5 pb-16 pt-6 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-hairline py-4 font-display text-2xl font-bold tracking-tight transition-colors hover:text-gold"
              >
                {item.label}
                <ChevronRight className="size-5 text-gold" aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={COMPANY.portalRegisterUrl}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xs bg-gold px-6 text-sm font-bold text-ink shadow-xs transition-colors hover:bg-gold-dark"
            >
              <UserPlus className="size-4" />
              Sign Up / Create Account
            </a>

            <a
              href={COMPANY.portalLoginUrl}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xs border border-gold/60 bg-background px-6 text-sm font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <LogIn className="size-4 text-gold" />
              Sign In to Client Portal
            </a>

            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              data-analytics-event="contact_interaction"
              data-analytics-label="mobile_menu_whatsapp"
              className="flex min-h-12 items-center justify-center bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a request on WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
