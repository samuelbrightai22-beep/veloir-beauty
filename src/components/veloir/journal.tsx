"use client";

import { journalPosts } from "@/lib/products";

export function Journal() {
  return (
    <section id="journal" className="bg-background py-24 lg:py-32 bg-grain">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="font-body text-[10px] tracking-[0.42em] uppercase text-copper mb-4">
              La Maison
            </p>
            <h2 className="font-serif-display text-[42px] md:text-[58px] leading-[1.05] text-cream">
              The Journal
            </h2>
          </div>
          <a
            href="#journal"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-cream hover:text-copper transition-colors font-body"
          >
            <span>View all entries</span>
            <span className="w-8 h-px bg-current" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {journalPosts.map((post, idx) => (
            <article
              key={post.slug}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-ink-soft mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="bg-cream/95 text-ink text-[9px] tracking-[0.22em] uppercase font-body px-2.5 py-1">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 font-body text-[10px] tracking-[0.22em] uppercase text-cream/45 mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-copper rounded-full" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-serif-display text-[26px] text-cream leading-tight group-hover:text-copper transition-colors">
                {post.title}
              </h3>
              <p className="mt-3 font-body text-[13px] text-cream/60 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-cream group-hover:text-copper transition-colors font-body">
                <span>Read entry</span>
                <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
