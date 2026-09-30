"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { products, type Category } from "@/lib/products";

const suggestions = [
  "Velvet Lip",
  "Rose Serum",
  "Eau de Parfum",
  "Bestsellers",
  "Copper",
  "Vegan",
];

export function SearchModal() {
  const isOpen = useCart((s) => s.isSearchOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  // Keyed inner remounts on each open so query state resets cleanly
  return <Inner />;
}

function Inner() {
  const closeSearch = useCart((s) => s.closeSearch);
  const openProduct = useCart((s) => s.openProduct);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeSearch]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-ink/85 backdrop-blur-sm animate-fade-in"
        onClick={closeSearch}
      />

      <div className="relative mx-auto mt-[8vh] max-w-2xl bg-background border border-cream-soft/20 animate-fade-up">
        {/* Input */}
        <div className="flex items-center gap-4 px-6 h-[72px] border-b border-cream-soft/15">
          <Search className="w-4 h-4 text-copper" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the atelier — lip, serum, parfum…"
            className="flex-1 bg-transparent border-0 outline-none font-serif-display text-[20px] text-cream placeholder:text-cream/35"
          />
          <button
            type="button"
            onClick={closeSearch}
            aria-label="Close search"
            className="text-cream/70 hover:text-copper transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto veloir-scrollbar">
          {/* Suggestions */}
          {!query && (
            <div className="px-6 py-7">
              <p className="font-body text-[10px] tracking-[0.32em] uppercase text-cream/55 mb-4">
                Often Searched
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setQuery(s)}
                    className="px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase font-body text-cream/65 hover:text-copper border border-cream-soft/20 hover:border-copper transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-7">
                <p className="font-body text-[10px] tracking-[0.32em] uppercase text-cream/55 mb-4">
                  Browse by Category
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {(["Cosmetics", "Skincare", "Fragrance"] as Category[]).map(
                    (c) => (
                      <a
                        key={c}
                        href="#shop"
                        onClick={closeSearch}
                        className="group p-4 border border-cream-soft/15 hover:border-copper transition-colors text-center"
                      >
                        <p className="font-serif-display text-[16px] text-cream group-hover:text-copper transition-colors">
                          {c}
                        </p>
                        <p className="font-body text-[10px] tracking-[0.18em] uppercase text-cream/45 mt-1">
                          {products.filter((p) => p.category === c).length} pieces
                        </p>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {/* No results */}
          {query && results.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="font-serif-display text-[24px] text-cream/60 mb-2">
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="font-body text-[12px] text-cream/45">
                Try &ldquo;lip&rdquo;, &ldquo;serum&rdquo;, or
                &ldquo;parfum&rdquo; — or browse the categories above.
              </p>
            </div>
          )}

          {/* Results */}
          {query && results.length > 0 && (
            <div className="py-2">
              {results.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    openProduct(p.id);
                    closeSearch();
                  }}
                  className="group w-full flex items-center gap-4 px-6 py-3 hover:bg-ink-soft/50 transition-colors text-left"
                >
                  <div className="w-14 h-16 bg-ink-soft overflow-hidden shrink-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[9px] tracking-[0.28em] uppercase text-copper mb-0.5">
                      {p.collection}
                    </p>
                    <p className="font-serif-display text-[18px] text-cream leading-tight group-hover:text-copper transition-colors">
                      {p.name}
                    </p>
                    <p className="font-body text-[11px] text-cream/55 truncate">
                      {p.subtitle}
                    </p>
                  </div>
                  <div className="text-right shrink-0 flex items-center gap-3">
                    <span className="font-serif-display text-[16px] text-cream tabular-nums">
                      ${p.price}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-cream/40 group-hover:text-copper transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
