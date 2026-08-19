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
 * Optimized for both 2-column mobile screens and 3/4-column desktop grids.
 */
export function VisaCountryCard({
  country,
  linkPrefix = "/visa",
}: VisaCountryCardProps) {
  return (
    <Link
      href={`${linkPrefix}/${country.slug}`}
      className="group relative flex min-h-[210px] sm:min-h-[280px] w-full flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
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
        {/* Directional gradient ensuring 100% crisp typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>

      {/* ---------- Card content ---------- */}
      <div className="relative z-10 flex h-full flex-col justify-between p-3.5 sm:p-5 lg:p-6">
        {/* Top section */}
        <div>
          <div className="flex items-center justify-between gap-1">
            <span className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wider text-gold">
              <span className="sm:inline">{country.code}</span>
              <span className="hidden sm:inline">· {country.missionType}</span>
            </span>
            <span className="text-[0.65rem] sm:text-[0.7rem] font-semibold text-neutral-400">
              {country.categories.length} <span className="hidden sm:inline">Routes</span>
            </span>
          </div>

          {/* Country name */}
          <h3 className="mt-2.5 sm:mt-4 font-serif text-[1.05rem] sm:text-xl lg:text-2xl font-medium leading-snug tracking-tight text-[#06132F] transition-colors group-hover:text-gold">
            {country.name}
          </h3>

          {/* Mission name */}
          <p className="mt-0.5 sm:mt-1 text-[0.7rem] sm:text-xs font-medium text-neutral-500 line-clamp-1">
            {country.missionName}
          </p>

          {/* Tagline / Description (Visible on tablets and desktop for cleaner compact 2-col mobile cards) */}
          <p className="mt-2 hidden sm:line-clamp-2 text-xs leading-relaxed text-neutral-600">
            {country.tagline || country.description}
          </p>

          {/* Category pills */}
          <div className="mt-3 hidden sm:flex flex-wrap gap-1.5">
            {country.categories.slice(0, 2).map((cat) => (
              <span
                key={cat.slug}
                className="rounded-xs border border-hairline bg-sand/80 px-2 py-0.5 text-[0.68rem] font-medium text-neutral-700"
              >
                {(cat.name.split("(")[0] ?? cat.name).trim()}
              </span>
            ))}
            {country.categories.length > 2 && (
              <span className="rounded-xs border border-hairline bg-sand/60 px-2 py-0.5 text-[0.68rem] font-medium text-neutral-500">
                +{country.categories.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-3 sm:mt-6 flex items-center justify-between border-t border-hairline pt-2.5 sm:pt-4 text-[0.7rem] sm:text-xs font-bold text-gold">
          <span className="group-hover:underline line-clamp-1">
            <span className="sm:hidden">View visa</span>
            <span className="hidden sm:inline">
              {linkPrefix === "/embassies"
                ? "View embassy profile"
                : "View visa requirements"}
            </span>
          </span>
          <div className="flex size-6 sm:size-7 shrink-0 items-center justify-center rounded-full border border-hairline text-neutral-700 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
            <ArrowRight className="size-3 sm:size-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
