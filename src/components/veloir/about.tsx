"use client";

const pillars = [
  {
    n: "I",
    title: "Composed Slowly",
    body: "Every VELOIR formula is developed in-house over years, not seasons. We launch only what the founders would wear themselves — no filler, no shortcut, no trend-chasing.",
  },
  {
    n: "II",
    title: "Made in France",
    body: "All cosmetics and skincare are manufactured in our atelier outside Lyon. Fragrance is blended in Grasse, in partnership with a fourth-generation family house.",
  },
  {
    n: "III",
    title: "Refillable by Design",
    body: "Every VELOIR vessel is engineered to be refilled, refinished, and kept. We sell refills at cost — we want our packaging on your vanity, not in landfill.",
  },
  {
    n: "IV",
    title: "Cruelty-Free, Always",
    body: "We have never tested on animals, and we never will. VELOIR is Leaping Bunny certified and vegan wherever the formula allows it.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-ink-soft py-24 lg:py-32 border-y border-cream-soft/10">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-script text-copper text-3xl mb-3">La Maison</p>
          <h2 className="font-serif-display text-[42px] md:text-[58px] leading-[1.05] text-cream">
            Four convictions, held since the first day.
          </h2>
          <div className="hairline mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-20 lg:gap-y-16">
          {pillars.map((pillar) => (
            <div key={pillar.n} className="flex gap-6">
              <div className="shrink-0">
                <span className="font-serif-display text-[44px] text-copper/70 italic leading-none">
                  {pillar.n}
                </span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-serif-display text-[26px] text-cream mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-body text-[14px] text-cream/65 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
