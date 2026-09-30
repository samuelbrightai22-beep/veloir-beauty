"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Product } from "@/lib/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  isSearchOpen: boolean;
  activeProductId: string | null;
  lastAddedAt: number | null;

  openCart: () => void;
  closeCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  openProduct: (productId: string) => void;
  closeProduct: () => void;

  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clear: () => void;

  itemCount: () => number;
  subtotal: () => number;
}

const FREE_SHIPPING_THRESHOLD = 50;

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      isSearchOpen: false,
      activeProductId: null,
      lastAddedAt: null,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      openSearch: () => set({ isSearchOpen: true }),
      closeSearch: () => set({ isSearchOpen: false }),
      openProduct: (productId) => set({ activeProductId: productId }),
      closeProduct: () => set({ activeProductId: null }),

      addItem: (product, quantity = 1) => {
        const items = get().items;
        const existing = items.find((i) => i.product.id === product.id);
        if (existing) {
          set({
            items: items.map((i) =>
              i.product.id === product.id
                ? { ...i, quantity: i.quantity + quantity }
                : i
            ),
            isOpen: true,
            lastAddedAt: Date.now(),
          });
        } else {
          set({
            items: [...items, { product, quantity }],
            isOpen: true,
            lastAddedAt: Date.now(),
          });
        }
      },
      removeItem: (productId) =>
        set({ items: get().items.filter((i) => i.product.id !== productId) }),
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.product.id === productId ? { ...i, quantity } : i
          ),
        });
      },
      clear: () => set({ items: [] }),

      itemCount: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: () =>
        get().items.reduce(
          (sum, i) => sum + i.product.price * i.quantity,
          0
        ),
    }),
    {
      name: "veloir-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);

export { FREE_SHIPPING_THRESHOLD };
