import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { VisaCountry } from "@/data/visaCountries";

interface VisaCountryCardProps {
  country: VisaCountry;
  /** Where to link: visa detail or embassy detail */
  linkPrefix?: "/visa" | "/embassies";
}

/**
 * Premium visa country card with realistic waving flag photographic background.
 * Uses a luminous, editorial light-card aesthetic matching the primary service cards
 * (Civil Registration, NTSA, etc.) with the national flag woven into the background.
 */
export function VisaCountryCard({
  country,
  linkPrefix = "/visa",
}: VisaCountryCardProps) {
  return (
    <Link
      href={`${linkPrefix}/${country.slug}`}
      className="group relative flex w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
      id={`visa-card-${country.slug}`}
    >
      {/* ---------- Waving flag photographic background (Right-aligned with smooth fade) ---------- */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={country.flagImage}
          alt=""
          loading="lazy"
          className="absolute right-0 top-0 h-full w-3/5 object-cover object-center opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
        />
        {/* Directional gradient to ensure 100% crisp typography on the left while showing the waving flag on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>

      {/* ---------- Card content ---------- */}
      <div className="relative z-10 flex flex-col justify-between p-5 sm:p-6" style={{ minHeight: 280 }}>
        {/* Top section */}
        <div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
              {country.code} · {country.missionType}
            </span>
            <span className="text-[0.7rem] font-semibold text-neutral-400">
              {country.categories.length} Routes
            </span>
          </div>

          {/* Country name */}
          <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#06132F] transition-colors group-hover:text-gold sm:text-2xl">
            {country.name}
          </h3>

          {/* Mission name */}
          <p className="mt-1 text-xs font-medium text-neutral-500 line-clamp-1">
            {country.missionName}
          </p>

          {/* Tagline / Description */}
          <p className="mt-3 text-xs leading-relaxed text-neutral-600 line-clamp-2">
            {country.tagline || country.description}
          </p>

          {/* Category pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {country.categories.slice(0, 3).map((cat) => (
              <span
                key={cat.slug}
                className="rounded-xs border border-hairline bg-sand/80 px-2 py-0.5 text-[0.68rem] font-medium text-neutral-700"
              >
                {(cat.name.split("(")[0] ?? cat.name).trim()}
              </span>
            ))}
            {country.categories.length > 3 && (
              <span className="rounded-xs border border-hairline bg-sand/60 px-2 py-0.5 text-[0.68rem] font-medium text-neutral-500">
                +{country.categories.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-xs font-bold text-gold">
          <span className="group-hover:underline">
            {linkPrefix === "/embassies"
              ? "View embassy profile"
              : "View visa requirements"}
          </span>
          <div className="flex size-7 items-center justify-center rounded-full border border-hairline text-neutral-700 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
            <ArrowRight className="size-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
