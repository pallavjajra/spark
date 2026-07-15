"use client";

import { useMemo, useState } from "react";
import { Search, X, Sparkles, SearchX } from "lucide-react";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/data/types";
import { cn } from "@/lib/utils";

function prettyIndustry(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const chipBase =
  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 focus-visible:outline-none";
const chipSelected =
  "bg-gradient-to-br from-blurple-500 to-sky-500 text-white shadow-soft";
const chipUnselected =
  "bg-white text-slate ring-1 ring-line hover:text-ink hover:ring-ink/20";

export function ProductGrid({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products],
  );
  const industries = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.industries))).sort(),
    [products],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      if (featuredOnly && !p.featured) return false;
      if (category && p.category !== category) return false;
      if (industry && !p.industries.includes(industry)) return false;
      if (q) {
        const hay = [p.name, p.tagline, p.shortDescription, p.category]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [products, search, category, industry, featuredOnly]);

  const hasActive =
    search.trim() !== "" || category !== null || industry !== null || featuredOnly;
  const reset = () => {
    setSearch("");
    setCategory(null);
    setIndustry(null);
    setFeaturedOnly(false);
  };

  return (
    <div>
      <div className="rounded-2xl border border-line bg-white/70 p-6 shadow-soft backdrop-blur lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-md">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-blurple-500/50" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, capabilities…"
              className="w-full rounded-full border border-line bg-mist py-3 pl-11 pr-4 text-sm text-ink transition-all placeholder:text-slate/60 focus:border-blurple-500 focus:outline-none focus:ring-4 focus:ring-blurple-500/10"
            />
          </label>
          <div className="flex items-center gap-3">
            <p className="text-[13px] font-medium text-slate" aria-live="polite">
              <span className="font-semibold text-blurple-600">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "product" : "products"}
            </p>
            {hasActive && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full bg-blurple-500/8 px-3 py-1.5 text-xs font-semibold text-blurple-600 transition-colors hover:bg-blurple-500/15"
              >
                <X className="h-3 w-3" />
                Clear all
              </button>
            )}
          </div>
        </div>

        <fieldset className="mt-7">
          <legend className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate/60">
            Category
          </legend>
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setCategory(null)}
              className={cn(chipBase, category === null ? chipSelected : chipUnselected)}
            >
              All categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(category === cat ? null : cat)}
                className={cn(chipBase, category === cat ? chipSelected : chipUnselected)}
              >
                {cat}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate/60">
            Industry
          </legend>
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setIndustry(null)}
              className={cn(chipBase, industry === null ? chipSelected : chipUnselected)}
            >
              All industries
            </button>
            {industries.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => setIndustry(industry === ind ? null : ind)}
                className={cn(chipBase, industry === ind ? chipSelected : chipUnselected)}
              >
                {prettyIndustry(ind)}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-7 flex items-center justify-between border-t border-line pt-6">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blurple-500/10 text-blurple-600">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[13.5px] font-semibold text-ink">Featured only</p>
              <p className="text-xs text-slate">Highlighted, flagship products</p>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={featuredOnly}
            aria-label="Show featured products only"
            onClick={() => setFeaturedOnly((v) => !v)}
            className={cn(
              "relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-300",
              featuredOnly ? "bg-gradient-to-br from-blurple-500 to-sky-500" : "bg-ink/15",
            )}
          >
            <span
              className={cn(
                "inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-300",
                featuredOnly ? "translate-x-6" : "translate-x-1",
              )}
            />
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-line bg-white px-6 py-16 text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blurple-500/10 text-blurple-600">
            <SearchX className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-lg font-semibold text-ink">
            No products match those filters
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate">
            Try clearing a filter or adjusting your search. The catalog is growing —
            new products join regularly.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blurple-500 to-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-all hover:-translate-y-0.5"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
