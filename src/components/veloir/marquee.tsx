"use client";

const phrases = [
  "Cruelty-Free",
  "Clean Formulations",
  "Made in France",
  "Vegan Where Possible",
  "Recyclable Packaging",
  "Refillable Vessels",
  "Carbon-Neutral Shipping",
  "Sustainably Sourced",
];

export function Marquee() {
  // Duplicate phrases for seamless loop
  const items = [...phrases, ...phrases];
  return (
    <div className="border-y border-cream-soft/15 bg-ink-soft py-5 overflow-hidden">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((p, i) => (
          <div key={i} className="flex items-center">
            <span className="font-serif-display text-[15px] tracking-[0.16em] uppercase text-cream/70 px-8">
              {p}
            </span>
            <span className="text-copper text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
