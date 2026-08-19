"use client";

import { useMemo, useState } from "react";
import { Building2, Search } from "lucide-react";
import { VISA_COUNTRIES, type VisaCountry, type VisaGroup } from "@/data/visaCountries";
import { VisaCountryCard } from "@/components/visa/VisaCountryCard";

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

      {/* Directory Grid (2-column on mobile, 3-column on desktop) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {filtered.map((country) => (
          <VisaCountryCard key={country.slug} country={country} linkPrefix="/embassies" />
        ))}
      </div>
    </div>
  );
}
