"use client";

import { useMemo, useState } from "react";
import { products, type Category } from "@/lib/products";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";

type FilterOption = "All" | Category;
type SortOption = "Featured" | "Price: Low to High" | "Price: High to Low" | "Top Rated";

const filters: FilterOption[] = ["All", "Cosmetics", "Skincare", "Fragrance"];
const sorts: SortOption[] = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Top Rated",
];

export function Shop() {
  const [filter, setFilter] = useState<FilterOption>("All");
  const [sort, setSort] = useState<SortOption>("Featured");

  const filtered = useMemo(() => {
    let list = products;
    if (filter !== "All") list = list.filter((p) => p.category === filter);
    switch (sort) {
      case "Price: Low to High":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "Top Rated":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
    }
    return list;
  }, [filter, sort]);

  return (
    <section id="shop" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-body text-[10px] tracking-[0.42em] uppercase text-copper mb-4">
            The Atelier
          </p>
          <h2 className="font-serif-display text-[42px] md:text-[58px] leading-[1.05] text-cream">
            Shop All
          </h2>
          <div className="hairline mt-8" />
        </div>

        {/* Filter bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-12 pb-6 border-b border-cream-soft/15">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "px-4 py-2 text-[10px] tracking-[0.28em] uppercase font-body transition-colors",
                  filter === f
                    ? "bg-cream text-ink"
                    : "text-cream/65 hover:text-copper border border-cream-soft/20 hover:border-copper"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-body text-[10px] tracking-[0.28em] uppercase text-cream/50">
              {filtered.length} {filtered.length === 1 ? "item" : "items"}
            </span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="appearance-none bg-transparent border border-cream-soft/20 text-cream text-[11px] tracking-[0.18em] uppercase font-body pl-4 pr-9 py-2 hover:border-copper transition-colors cursor-pointer focus:outline-none focus:border-copper"
                aria-label="Sort by"
              >
                {sorts.map((s) => (
                  <option key={s} value={s} className="bg-ink text-cream">
                    {s}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-cream/60"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif-display text-2xl text-cream/60">
              No products in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
            {filtered.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
