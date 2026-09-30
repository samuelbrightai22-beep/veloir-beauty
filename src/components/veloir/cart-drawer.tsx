"use client";

import { useEffect } from "react";
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight, Truck } from "lucide-react";
import { useCart, FREE_SHIPPING_THRESHOLD } from "@/lib/cart-store";
import { products } from "@/lib/products";

export function CartDrawer() {
  const isOpen = useCart((s) => s.isOpen);
  const closeCart = useCart((s) => s.closeCart);
  const items = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const subtotal = useCart((s) => s.subtotal());

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  if (!isOpen) return null;

  const freeShipRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShipProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const sampleProducts = products.filter((p) => p.category === "Fragrance").slice(0, 1);

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      <aside className="absolute right-0 top-0 bottom-0 w-full sm:w-[460px] bg-background border-l border-cream-soft/20 flex flex-col animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-cream-soft/15 shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4 text-copper" />
            <span className="font-body text-[11px] tracking-[0.32em] uppercase text-cream">
              Your Bag ({items.length})
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-cream/70 hover:text-copper transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 border border-cream-soft/20 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-7 h-7 text-cream/40" />
            </div>
            <h3 className="font-serif-display text-[26px] text-cream mb-2">
              Your bag is empty
            </h3>
            <p className="font-body text-[13px] text-cream/55 mb-8 max-w-xs leading-relaxed">
              The atelier awaits. Discover our bestsellers, or browse the
              latest additions to the house.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="inline-flex items-center gap-3 px-8 py-4 bg-cream text-ink text-[11px] tracking-[0.28em] uppercase font-body hover:bg-copper hover:text-cream transition-colors group"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        ) : (
          <>
            {/* Free shipping progress */}
            <div className="px-6 py-4 bg-ink-soft/50 border-b border-cream-soft/10 shrink-0">
              {freeShipRemaining > 0 ? (
                <p className="font-body text-[11px] text-cream/65 mb-2 flex items-center gap-2">
                  <Truck className="w-3 h-3 text-copper" />
                  Add <span className="text-copper tabular-nums">${freeShipRemaining.toFixed(0)}</span> for complimentary shipping
                </p>
              ) : (
                <p className="font-body text-[11px] text-copper mb-2 flex items-center gap-2">
                  <Truck className="w-3 h-3" />
                  Complimentary shipping unlocked
                </p>
              )}
              <div className="h-px bg-cream-soft/15 overflow-hidden">
                <div
                  className="h-full bg-copper transition-all duration-500"
                  style={{ width: `${freeShipProgress}%` }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto veloir-scrollbar px-6 py-5 space-y-5">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <button
                    type="button"
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 overflow-hidden bg-ink-soft"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[9px] tracking-[0.28em] uppercase text-copper mb-1">
                      {item.product.collection}
                    </p>
                    <h4 className="font-serif-display text-[18px] text-cream leading-tight">
                      {item.product.name}
                    </h4>
                    <p className="font-body text-[11px] text-cream/55 mt-1">
                      {item.product.subtitle}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-cream-soft/25">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-cream/70 hover:text-copper transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center font-body text-[12px] text-cream tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-cream/70 hover:text-copper transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-serif-display text-[15px] text-cream tabular-nums">
                          ${(item.product.price * item.quantity).toFixed(0)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          className="text-cream/40 hover:text-copper transition-colors"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Complimentary sample */}
              {freeShipRemaining === 0 && sampleProducts[0] && (
                <div className="pt-4 mt-2 border-t border-cream-soft/15">
                  <p className="font-body text-[10px] tracking-[0.28em] uppercase text-copper mb-3">
                    A Complimentary Gift
                  </p>
                  <div className="flex gap-4">
                    <div className="w-16 h-20 bg-ink-soft overflow-hidden shrink-0">
                      <img
                        src={sampleProducts[0].image}
                        alt={sampleProducts[0].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-serif-display text-[15px] text-cream leading-tight">
                        {sampleProducts[0].name}
                      </p>
                      <p className="font-body text-[11px] text-cream/55 mt-1">
                        Travel-size · Added automatically
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="shrink-0 border-t border-cream-soft/15 px-6 py-5 bg-ink-soft/30">
              <div className="flex items-center justify-between mb-1">
                <span className="font-body text-[11px] tracking-[0.22em] uppercase text-cream/60">
                  Subtotal
                </span>
                <span className="font-serif-display text-[24px] text-cream tabular-nums">
                  ${subtotal.toFixed(0)}
                </span>
              </div>
              <p className="font-body text-[10px] text-cream/45 mb-4">
                Shipping & taxes calculated at checkout
              </p>
              <button
                type="button"
                className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream text-ink text-[11px] tracking-[0.28em] uppercase font-body hover:bg-copper hover:text-cream transition-all duration-300"
              >
                Proceed to Checkout
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center font-body text-[10px] tracking-[0.28em] uppercase text-cream/55 hover:text-copper transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
