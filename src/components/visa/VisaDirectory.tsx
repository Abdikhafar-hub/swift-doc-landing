"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Search, Sparkles } from "lucide-react";
import { VISA_COUNTRIES, VISA_GROUPS, type VisaCountry, type VisaGroup } from "@/data/visaCountries";

export function VisaDirectory({ initialCountries = VISA_COUNTRIES }: { initialCountries?: VisaCountry[] }) {
  const [selectedGroup, setSelectedGroup] = useState<"all" | VisaGroup>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return initialCountries.filter((c) => {
      const matchesGroup = selectedGroup === "all" || c.group === selectedGroup;
      if (!matchesGroup) return false;
      if (!query.trim()) return true;

      const q = query.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.missionName.toLowerCase().includes(q) ||
        c.categories.some((cat) => cat.name.toLowerCase().includes(q) || cat.typicalPurpose.toLowerCase().includes(q))
      );
    });
  }, [initialCountries, selectedGroup, query]);

  return (
    <div className="space-y-10">
      {/* Search & Filter Controls */}
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div className="relative">
          <label htmlFor="visa-search" className="sr-only">
            Search countries or visa types
          </label>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
          <input
            id="visa-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by country, mission, or visa category (e.g. UK, Student, B1/B2, Schengen)..."
            className="h-12 w-full rounded-xs border border-hairline bg-card pl-11 pr-4 text-sm text-[#06132F] placeholder:text-neutral-400 shadow-xs focus:border-gold focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedGroup("all")}
            className={`rounded-xs px-4 py-2.5 text-xs font-bold transition-all ${
              selectedGroup === "all"
                ? "bg-[#06132F] text-white shadow-xs"
                : "border border-hairline bg-card text-neutral-700 hover:border-gold"
            }`}
          >
            All ({initialCountries.length})
          </button>
          {VISA_GROUPS.map((group) => {
            const count = initialCountries.filter((c) => c.group === group.id).length;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setSelectedGroup(group.id)}
                className={`rounded-xs px-4 py-2.5 text-xs font-bold transition-all ${
                  selectedGroup === group.id
                    ? "bg-[#06132F] text-white shadow-xs"
                    : "border border-hairline bg-card text-neutral-700 hover:border-gold"
                }`}
              >
                {(group.label.split("&")[0] ?? group.label).trim()} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Query Notice */}
      <div className="flex items-center justify-between border-b border-hairline pb-4 text-xs text-neutral-500">
        <span>
          Showing <strong className="text-[#06132F]">{filtered.length}</strong> visa destinations
          {query ? ` matching "${query}"` : ""}
        </span>
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="font-bold text-gold hover:underline"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Cards Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-xs border border-hairline bg-card p-12 text-center">
          <Globe className="mx-auto size-10 text-neutral-400" />
          <h3 className="mt-4 font-serif text-lg font-bold text-[#06132F]">
            No visa destination found
          </h3>
          <p className="mt-2 text-sm text-neutral-500">
            We handle applications for major diplomatic missions in Nairobi. Try searching for "UK",
            "Canada", "Schengen", or "Student".
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedGroup("all");
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-xs bg-gold px-5 py-2.5 text-xs font-bold text-ink"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((country) => (
            <Link
              key={country.slug}
              href={`/visa/${country.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                    {country.code} · {country.missionType}
                  </span>
                  <span className="text-xs font-semibold text-neutral-400">
                    {country.categories.length} Categories
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#06132F] transition-colors group-hover:text-gold">
                  {country.name}
                </h3>

                <p className="mt-1 text-xs text-neutral-500 line-clamp-1 font-medium">
                  {country.missionName}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-neutral-600 line-clamp-2">
                  {country.tagline || country.description}
                </p>

                {/* Categories list */}
                <div className="mt-5 space-y-1.5 border-t border-hairline pt-4">
                  <p className="text-[0.68rem] font-bold uppercase tracking-wider text-neutral-400">
                    Key Categories Handled:
                  </p>
                  <ul className="space-y-1">
                    {country.categories.slice(0, 3).map((cat) => (
                      <li
                        key={cat.slug}
                        className="flex items-baseline justify-between text-xs text-neutral-700"
                      >
                        <span className="font-medium truncate max-w-[190px]">
                          {(cat.name.split("(")[0] ?? cat.name).trim()}
                        </span>
                        <span className="text-[0.68rem] text-neutral-400 shrink-0">
                          {(cat.estimatedTurnaround.split(";")[0] ?? cat.estimatedTurnaround).trim()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-xs font-bold text-gold group-hover:underline">
                <span>View requirements & process</span>
                <div className="flex size-7 items-center justify-center rounded-full border border-hairline text-neutral-700 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <ArrowRight className="size-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
