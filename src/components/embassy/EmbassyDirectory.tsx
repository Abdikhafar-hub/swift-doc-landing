"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, ExternalLink, Landmark, MapPin, Search } from "lucide-react";
import { VISA_COUNTRIES, type VisaCountry, type VisaGroup } from "@/data/visaCountries";

export function EmbassyDirectory({ initialCountries = VISA_COUNTRIES }: { initialCountries?: VisaCountry[] }) {
  const [query, setQuery] = useState("");
  const [filterMission, setFilterMission] = useState<string>("all");

  const filtered = useMemo(() => {
    return initialCountries.filter((c) => {
      if (filterMission !== "all" && c.missionType !== filterMission) {
        return false;
      }
      if (!query.trim()) return true;

      const q = query.toLowerCase();
      const city = (c.missionCity || "Nairobi").toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.missionName.toLowerCase().includes(q) ||
        city.includes(q) ||
        c.applicationCenter.toLowerCase().includes(q)
      );
    });
  }, [initialCountries, filterMission, query]);

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div className="relative">
          <label htmlFor="embassy-search" className="sr-only">
            Search diplomatic missions
          </label>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
          <input
            id="embassy-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by country, mission name, or submission center (e.g. Gigiri, VFS, British High Commission)..."
            className="h-12 w-full rounded-xs border border-hairline bg-card pl-11 pr-4 text-sm text-[#06132F] placeholder:text-neutral-400 shadow-xs focus:border-gold focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["all", "High Commission", "Embassy", "Directorate"].map((mType) => (
            <button
              key={mType}
              type="button"
              onClick={() => setFilterMission(mType)}
              className={`rounded-xs px-4 py-2.5 text-xs font-bold transition-all ${
                filterMission === mType
                  ? "bg-[#06132F] text-white shadow-xs"
                  : "border border-hairline bg-card text-neutral-700 hover:border-gold"
              }`}
            >
              {mType === "all" ? "All Missions" : mType}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-hairline pb-4 text-xs text-neutral-500">
        <span>
          Showing <strong className="text-[#06132F]">{filtered.length}</strong> diplomatic missions & centres in Nairobi
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

      {/* Directory Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((country) => (
          <div
            key={country.slug}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xs border border-hairline bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                  {country.missionType}
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-500 font-medium">
                  <MapPin className="size-3 text-neutral-400" />
                  {country.missionCity || "Nairobi"}
                </span>
              </div>

              <h3 className="mt-4 font-serif text-xl font-bold tracking-tight text-[#06132F] group-hover:text-gold transition-colors">
                {country.missionName}
              </h3>

              <p className="mt-1 text-xs text-neutral-500 font-medium">
                Country: <strong className="text-neutral-700">{country.name}</strong>
              </p>

              <div className="mt-5 space-y-2 border-t border-hairline pt-4 text-xs text-neutral-600">
                <p>
                  <strong className="text-[#06132F]">Application Center:</strong>{" "}
                  {country.applicationCenter}
                </p>
                <p className="line-clamp-2">
                  <strong className="text-[#06132F]">Categories Handled:</strong>{" "}
                  {country.categories.map((c) => (c.name.split("(")[0] ?? c.name).trim()).join(", ")}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-xs">
              <Link
                href={`/embassies/${country.slug}`}
                className="font-bold text-[#06132F] hover:text-gold transition-colors"
              >
                Mission Details
              </Link>
              <Link
                href={`/visa/${country.slug}`}
                className="inline-flex items-center gap-1 font-bold text-gold hover:underline"
              >
                Visa Services
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
