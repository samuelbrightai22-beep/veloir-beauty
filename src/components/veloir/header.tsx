"use client";

import { useEffect, useState } from "react";
import { Menu, Search, User, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop All", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "Bestsellers", href: "#bestsellers" },
  { label: "Journal", href: "#journal" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemCount = useCart((s) => s.itemCount());
  const openCart = useCart((s) => s.openCart);
  const openSearch = useCart((s) => s.openSearch);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 backdrop-blur-md border-b transition-all duration-300",
        scrolled
          ? "bg-background/95 border-cream-soft/30 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-background/70 border-cream-soft/10"
      )}
    >
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-4">
          {/* Left: mobile toggle + primary nav */}
          <div className="flex items-center gap-3 lg:gap-4 flex-1">
            <button
              type="button"
              className="lg:hidden text-cream hover:text-copper transition-colors p-1"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <nav className="hidden lg:flex items-center gap-7 text-[12px] tracking-[0.16em] uppercase font-body text-cream/85">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-copper transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Center: logo */}
          <a
            href="#top"
            aria-label="VELOIR home"
            className="flex-shrink-0 group"
          >
            <div className="flex flex-col items-center">
              <span className="font-serif-display text-[26px] lg:text-[30px] tracking-[0.32em] text-cream leading-none group-hover:text-copper transition-colors">
                VELOIR
              </span>
              <span className="font-body text-[8px] lg:text-[9px] tracking-[0.42em] text-copper uppercase mt-1">
                Paris · New York
              </span>
            </div>
          </a>

          {/* Right: secondary nav + actions */}
          <div className="flex-1 flex items-center justify-end gap-3 lg:gap-5">
            <nav className="hidden lg:flex items-center gap-7 text-[12px] tracking-[0.16em] uppercase font-body text-cream/85">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-copper transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 lg:gap-4 text-cream">
              <button
                type="button"
                className="hover:text-copper transition-colors p-1"
                aria-label="Search"
                onClick={openSearch}
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
              <a
                href="#contact"
                className="hidden sm:block hover:text-copper transition-colors p-1"
                aria-label="Account"
              >
                <User className="w-[18px] h-[18px]" />
              </a>
              <button
                type="button"
                onClick={openCart}
                className="relative hover:text-copper transition-colors p-1"
                aria-label={`Cart, ${itemCount} items`}
              >
                <ShoppingBag className="w-[18px] h-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-copper text-cream text-[9px] font-medium w-[15px] h-[15px] rounded-full flex items-center justify-center tabular-nums">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[78%] max-w-[340px] bg-ink border-r border-cream-soft/20 flex flex-col">
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-cream-soft/15">
              <span className="font-serif-display text-[22px] tracking-[0.32em] text-cream">
                VELOIR
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="text-cream/80 hover:text-copper transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto veloir-scrollbar px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif-display text-[22px] text-cream/90 hover:text-copper transition-colors py-3 border-b border-cream-soft/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="px-6 py-6 border-t border-cream-soft/15">
              <p className="font-body text-[10px] tracking-[0.22em] uppercase text-cream/50 mb-3">
                La Maison VELOIR
              </p>
              <p className="font-body text-[12px] text-cream/70 leading-relaxed">
                8 rue de Sèvres, Paris 75007
                <br />
                112 Mercer Street, New York NY 10012
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
