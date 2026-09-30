"use client";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1903&q=80&auto=format&fit=crop"
          alt="A model wearing VELOIR cosmetics, photographed in low light"
          className="w-full h-full object-cover animate-scale-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-script text-copper text-3xl md:text-4xl mb-6 animate-fade-up">
          Where beauty meets
        </p>
        <h1
          className="font-serif-display text-[58px] sm:text-[88px] md:text-[120px] lg:text-[150px] leading-[0.92] text-cream tracking-tight text-shadow-luxe animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Mystery
        </h1>
        <div
          className="mt-8 flex flex-col items-center gap-2 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          <div className="w-px h-12 bg-copper/60" />
          <p className="font-body text-[11px] tracking-[0.42em] uppercase text-cream/70">
            Paris · New York · Est. 2014
          </p>
        </div>
        <p
          className="mt-8 max-w-xl mx-auto font-body text-[15px] md:text-[16px] text-cream/75 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          A Parisian-inspired luxury beauty house crafting high-performance
          cosmetics, skincare, and fragrance. Each formula is composed like a
          letter — slowly, deliberately, and with the intention of being
          reread.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.75s" }}
        >
          <a
            href="#shop"
            className="inline-flex items-center justify-center px-10 py-4 bg-cream text-ink text-[11px] tracking-[0.22em] uppercase font-body hover:bg-copper hover:text-cream transition-all duration-300 min-w-[220px]"
          >
            Discover the House
          </a>
          <a
            href="#bestsellers"
            className="inline-flex items-center justify-center px-10 py-4 border border-cream/40 text-cream text-[11px] tracking-[0.22em] uppercase font-body hover:border-copper hover:text-copper transition-all duration-300 min-w-[220px]"
          >
            Shop Bestsellers
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-cream/50">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>
    </section>
  );
}
