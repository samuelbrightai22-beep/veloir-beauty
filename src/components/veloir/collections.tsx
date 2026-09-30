"use client";

import { collections } from "@/lib/products";

export function Collections() {
  return (
    <section id="collections" className="bg-background py-24 lg:py-32 bg-grain">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-[10px] tracking-[0.42em] uppercase text-copper mb-4">
            Three Houses, One Atelier
          </p>
          <h2 className="font-serif-display text-[42px] md:text-[58px] leading-[1.05] text-cream">
            The Collections
          </h2>
          <div className="hairline mt-8" />
          <p className="mt-8 font-body text-[14px] md:text-[15px] text-cream/65 leading-relaxed">
            VELOIR's catalogue is small by design. Each collection is composed
            around a single idea — a texture, a season, an hour of the night —
            and refined until every product within it earns its place.
          </p>
        </div>

        {/* Collection cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, idx) => (
            <a
              key={collection.slug}
              href="#shop"
              className="group relative overflow-hidden block"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-ink-soft">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 bg-ink/15 group-hover:bg-ink/5 transition-colors duration-500" />

                {/* Top label */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="font-body text-[9px] tracking-[0.42em] uppercase text-cream/80">
                    No. 0{idx + 1}
                  </span>
                  <span className="font-body text-[9px] tracking-[0.42em] uppercase text-copper">
                    {collection.count} Pieces
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-serif-display text-[34px] md:text-[40px] text-cream leading-none">
                    {collection.name}
                  </h3>
                  <p className="mt-3 font-body text-[12px] text-cream/70 leading-relaxed max-w-[260px]">
                    {collection.tagline}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-cream group-hover:text-copper transition-colors">
                    <span>Explore</span>
                    <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
