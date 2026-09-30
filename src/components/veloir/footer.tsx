"use client";

const columns = [
  {
    title: "Shop",
    links: ["Cosmetics", "Skincare", "Fragrance", "Bestsellers", "New Arrivals", "Gift Cards"],
  },
  {
    title: "Atelier",
    links: ["Our Story", "Sustainability", "Refill Programme", "Press", "Careers", "Wholesale"],
  },
  {
    title: "Client Care",
    links: ["Shipping & Returns", "Find Your Shade", "Book a Consultation", "Track Order", "FAQ", "Contact"],
  },
];

const socials = ["Instagram", "Pinterest", "TikTok", "YouTube"];

export function Footer() {
  return (
    <footer className="bg-ink border-t border-cream-soft/15 mt-auto">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8">
          {/* Brand block */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex flex-col">
              <span className="font-serif-display text-[30px] tracking-[0.32em] text-cream leading-none">
                VELOIR
              </span>
              <span className="font-body text-[9px] tracking-[0.42em] text-copper uppercase mt-2">
                Paris · New York
              </span>
            </div>
            <p className="mt-6 font-body text-[13px] text-cream/55 leading-relaxed max-w-xs">
              A Parisian-inspired luxury beauty house. Composed slowly in Lyon
              and Grasse, shipped from our ateliers to forty-seven countries.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#contact"
                  className="font-body text-[10px] tracking-[0.22em] uppercase text-cream/55 hover:text-copper transition-colors border-b border-transparent hover:border-copper pb-0.5"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-body text-[10px] tracking-[0.32em] uppercase text-copper mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#shop"
                      className="font-body text-[13px] text-cream/65 hover:text-cream transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Boutique */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.32em] uppercase text-copper mb-5">
              Boutiques
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="font-serif-display text-[16px] text-cream leading-tight">
                  Paris
                </p>
                <p className="font-body text-[11px] text-cream/55 mt-1 leading-snug">
                  8 rue de Sèvres
                  <br />
                  75007 Paris
                </p>
              </li>
              <li>
                <p className="font-serif-display text-[16px] text-cream leading-tight">
                  New York
                </p>
                <p className="font-body text-[11px] text-cream/55 mt-1 leading-snug">
                  112 Mercer Street
                  <br />
                  New York, NY 10012
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-7 border-t border-cream-soft/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-cream/45 text-center md:text-left">
            © {new Date().getFullYear()} VELOIR Beauty SAS · All rights reserved
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {["Privacy", "Terms", "Cookies", "Accessibility", "Sitemap"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-body text-[10px] tracking-[0.22em] uppercase text-cream/45 hover:text-copper transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {["VISA", "MC", "AMEX", "PAY"].map((p) => (
              <span
                key={p}
                className="font-body text-[9px] tracking-[0.18em] uppercase text-cream/55 border border-cream-soft/25 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
