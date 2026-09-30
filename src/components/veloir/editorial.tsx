"use client";

export function Editorial() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image */}
        <div className="relative h-[60vh] lg:h-auto overflow-hidden">
          <img
            src="/products/editorial-atelier.png"
            alt="A close-up editorial photograph of VELOIR packaging on a marble surface"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/15" />
        </div>

        {/* Copy */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-0">
          <div className="max-w-xl">
            <p className="font-script text-copper text-3xl mb-4">
              Depuis 2014
            </p>
            <h2 className="font-serif-display text-[42px] md:text-[56px] lg:text-[64px] leading-[1.02] text-cream">
              A house built
              <br />
              slowly, on
              <br />
              <span className="italic">intention.</span>
            </h2>
            <div className="hairline my-8 max-w-[120px]" />
            <p className="font-body text-[15px] text-cream/75 leading-relaxed mb-5">
              VELOIR was founded in a one-room atelier on the rue de Sèvres by
              two friends — a chemist and a perfumer — who shared a single
              conviction: that beauty should be composed slowly, like a letter
              you intend to reread.
            </p>
            <p className="font-body text-[15px] text-cream/75 leading-relaxed mb-8">
              A decade later, the house remains small by design. We launch only
              what we would wear ourselves, only what earns its place on the
              vanity. Every formula is composed in-house, every vessel is
              refillable, and every product is shipped with the same
              handwritten note the founders wrote to their first customer.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { n: "10+", l: "Years in atelier" },
                { n: "47", l: "Countries shipped" },
                { n: "0", l: "Animal testing, ever" },
              ].map((stat) => (
                <div key={stat.l}>
                  <p className="font-serif-display text-[36px] text-copper leading-none">
                    {stat.n}
                  </p>
                  <p className="mt-2 font-body text-[10px] tracking-[0.22em] uppercase text-cream/55 leading-snug">
                    {stat.l}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="#about"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-cream hover:text-copper transition-colors font-body"
            >
              <span>Read the full story</span>
              <span className="w-12 h-px bg-current" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
