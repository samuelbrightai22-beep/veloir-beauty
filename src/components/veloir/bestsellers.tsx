"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "./product-card";

export function Bestsellers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bestsellers = products.filter((p) => p.bestseller);

  const scrollBy = (dir: 1 | -1) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 320;
    scrollRef.current.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section id="bestsellers" className="bg-ink-soft py-24 lg:py-32 border-y border-cream-soft/10">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="font-body text-[10px] tracking-[0.42em] uppercase text-copper mb-4">
              Worn Most Often
            </p>
            <h2 className="font-serif-display text-[42px] md:text-[58px] leading-[1.05] text-cream">
              Bestsellers
            </h2>
            <p className="mt-5 font-body text-[14px] text-cream/65 leading-relaxed">
              The formulas our community returns to, season after season.
              Tried, loved, and reordered — the house favourites.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="w-11 h-11 border border-cream-soft/30 text-cream/80 hover:border-copper hover:text-copper transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="w-11 h-11 border border-cream-soft/30 text-cream/80 hover:border-copper hover:text-copper transition-colors flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto veloir-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          {bestsellers.map((product, idx) => (
            <div
              key={product.id}
              data-card
              className="snap-start shrink-0 w-[260px] sm:w-[290px] md:w-[320px]"
            >
              <ProductCard product={product} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
