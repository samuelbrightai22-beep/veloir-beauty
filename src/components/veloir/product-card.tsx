"use client";

import { Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const openProduct = useCart((s) => s.openProduct);
  const addItem = useCart((s) => s.addItem);

  return (
    <article
      className="group cursor-pointer animate-fade-up"
      style={{ animationDelay: `${Math.min(index * 0.05, 0.4)}s` }}
      onClick={() => openProduct(product.id)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft mb-5">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5">
          {product.bestseller && (
            <span className="bg-cream text-ink text-[9px] font-body tracking-[0.22em] uppercase px-2.5 py-1">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-copper text-cream text-[9px] font-body tracking-[0.22em] uppercase px-2.5 py-1">
              New
            </span>
          )}
          {product.limitedEdition && (
            <span className="border border-copper text-copper text-[9px] font-body tracking-[0.22em] uppercase px-2.5 py-1">
              Limited
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              addItem(product);
            }}
            className="w-full bg-ink/95 backdrop-blur text-cream text-[10px] tracking-[0.32em] uppercase py-3 hover:bg-copper transition-colors"
          >
            Add to Bag
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-body text-[9px] tracking-[0.32em] uppercase text-copper mb-1.5">
            {product.collection}
          </p>
          <h3 className="font-serif-display text-[22px] text-cream leading-tight group-hover:text-copper transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 font-body text-[12px] text-cream/55 leading-snug">
            {product.subtitle}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-serif-display text-[20px] text-cream tabular-nums">
            ${product.price}
          </p>
          <div className="flex items-center gap-1 justify-end mt-1">
            <Star className="w-3 h-3 fill-copper text-copper" />
            <span className="font-body text-[10px] text-cream/55 tabular-nums">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[4/5] bg-ink-soft mb-5" />
      <div className="h-3 w-20 bg-ink-soft mb-2" />
      <div className="h-5 w-3/4 bg-ink-soft mb-2" />
      <div className="h-3 w-1/2 bg-ink-soft" />
    </div>
  );
}

export { cn };
