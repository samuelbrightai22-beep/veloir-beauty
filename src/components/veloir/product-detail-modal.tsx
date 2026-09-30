"use client";

import { useEffect, useState } from "react";
import { X, Plus, Minus, ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { products, getRelatedProducts, type Product } from "@/lib/products";
import { useToast } from "@/hooks/use-toast";

export function ProductDetailModal() {
  const activeProductId = useCart((s) => s.activeProductId);
  const product = products.find((p) => p.id === activeProductId) || null;

  useEffect(() => {
    if (activeProductId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProductId]);

  if (!product) return null;
  // `key` ensures inner component remounts (and resets state) for each product
  return <Inner key={product.id} product={product} />;
}

function Inner({ product }: { product: Product }) {
  const closeProduct = useCart((s) => s.closeProduct);
  const addItem = useCart((s) => s.addItem);
  const openProduct = useCart((s) => s.openProduct);
  const { toast } = useToast();

  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "ingredients" | "use">(
    "description"
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProduct();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeProduct]);

  const related = getRelatedProducts(product, 3);

  const onAdd = () => {
    addItem(product, qty);
    toast({
      title: "Added to your bag",
      description: `${qty} × ${product.name} — $${product.price * qty}`,
    });
    closeProduct();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-stretch md:items-center justify-center">
      <div
        className="absolute inset-0 bg-ink/85 backdrop-blur-sm animate-fade-in"
        onClick={closeProduct}
      />

      <div className="relative w-full md:max-w-[1100px] md:max-h-[92vh] bg-background border border-cream-soft/20 overflow-hidden flex flex-col md:grid md:grid-cols-2 animate-fade-up">
        <button
          type="button"
          onClick={closeProduct}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-cream/80 hover:text-copper transition-colors bg-background/60 backdrop-blur"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="relative aspect-[4/5] md:aspect-auto md:h-full bg-ink-soft overflow-hidden shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
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
        </div>

        {/* Details */}
        <div className="flex flex-col overflow-y-auto veloir-scrollbar px-6 sm:px-8 lg:px-10 py-8 md:py-10">
          <p className="font-body text-[10px] tracking-[0.32em] uppercase text-copper mb-2">
            {product.collection} · {product.category}
          </p>
          <h2 className="font-serif-display text-[36px] md:text-[44px] leading-[1.02] text-cream">
            {product.name}
          </h2>
          <p className="mt-2 font-body text-[13px] text-cream/55 italic">
            {product.subtitle}
          </p>

          <div className="mt-4 flex items-center gap-4">
            <p className="font-serif-display text-[28px] text-cream tabular-nums">
              ${product.price}
            </p>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < Math.round(product.rating)
                        ? "w-3 h-3 fill-copper text-copper"
                        : "w-3 h-3 text-cream/20"
                    }
                  />
                ))}
              </div>
              <span className="font-body text-[11px] text-cream/55 tabular-nums">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>
          </div>

          <div className="hairline my-6" />

          <p className="font-body text-[14px] text-cream/70 leading-relaxed">
            {product.description}
          </p>

          {/* Tabs */}
          <div className="mt-7">
            <div className="flex gap-6 border-b border-cream-soft/15">
              {[
                { id: "description", label: "Story" },
                { id: "ingredients", label: product.notes ? "Notes" : "Ingredients" },
                { id: "use", label: "How to Use" },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id as typeof tab)}
                  className={
                    "pb-3 -mb-px border-b-2 text-[10px] tracking-[0.28em] uppercase font-body transition-colors " +
                    (tab === t.id
                      ? "border-copper text-copper"
                      : "border-transparent text-cream/55 hover:text-cream")
                  }
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="pt-5 min-h-[120px]">
              {tab === "description" && (
                <p className="font-body text-[13px] text-cream/65 leading-relaxed">
                  {product.story}
                </p>
              )}
              {tab === "ingredients" && (
                <ul className="space-y-2">
                  {(product.notes || product.ingredients || []).map((n) => (
                    <li
                      key={n}
                      className="font-body text-[13px] text-cream/70 flex items-start gap-3"
                    >
                      <span className="text-copper mt-0.5">—</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              )}
              {tab === "use" && (
                <p className="font-body text-[13px] text-cream/65 leading-relaxed">
                  {product.howToUse}
                </p>
              )}
            </div>
          </div>

          {/* Qty + Add */}
          <div className="mt-7 flex items-stretch gap-3">
            <div className="flex items-center border border-cream-soft/25">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-11 h-11 flex items-center justify-center text-cream/80 hover:text-copper transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-10 text-center font-serif-display text-[16px] text-cream tabular-nums">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="w-11 h-11 flex items-center justify-center text-cream/80 hover:text-copper transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
            <button
              type="button"
              onClick={onAdd}
              className="flex-1 group inline-flex items-center justify-center gap-3 bg-cream text-ink text-[11px] tracking-[0.28em] uppercase font-body hover:bg-copper hover:text-cream transition-all duration-300"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Bag — ${(product.price * qty).toFixed(0)}
            </button>
          </div>

          <div className="mt-4 flex items-center gap-4 text-[10px] tracking-[0.22em] uppercase text-cream/45 font-body">
            <span>Complimentary shipping</span>
            <span className="w-1 h-1 bg-copper rounded-full" />
            <span>Refillable vessel</span>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-10 pt-8 border-t border-cream-soft/15">
              <p className="font-body text-[10px] tracking-[0.32em] uppercase text-copper mb-4">
                Often Worn With
              </p>
              <div className="grid grid-cols-3 gap-3">
                {related.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => openProduct(r.id)}
                    className="group text-left"
                  >
                    <div className="aspect-square overflow-hidden bg-ink-soft mb-2">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="font-serif-display text-[13px] text-cream group-hover:text-copper transition-colors leading-tight">
                      {r.name}
                    </p>
                    <p className="font-body text-[11px] text-cream/50 tabular-nums">
                      ${r.price}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
