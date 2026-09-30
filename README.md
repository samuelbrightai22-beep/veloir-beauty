# VELOIR — Where Beauty Meets Mystery

A Parisian-inspired luxury beauty storefront: cosmetics, skincare, and
fragrance, composed slowly. Built as a single-page Next.js 16 app with
TypeScript, Tailwind CSS 4, shadcn/ui, and Zustand.

> **Note** · This is a fictional concept brand built for demonstration
> purposes — no real transactions are processed.

## ✨ Features

- **Editorial storefront** — rotating announcement bar, sticky header,
  full-bleed hero, brand-values marquee, collections grid, bestsellers
  carousel, brand-story split, shop grid with category filter + sort,
  journal cards, four brand pillars, newsletter, contact form, full footer.
- **15-product catalogue** — cosmetics, skincare, and fragrance, each with
  rich story copy, ingredients/notes, how-to-use, ratings, and badges.
- **Interactive overlays** — product detail modal with tabs + related
  products, cart drawer with quantity steppers + free-shipping progress
  + complimentary gift auto-add, live search modal.
- **Persistent cart** — Zustand store with `localStorage` persistence.
- **Responsive** — mobile drawer nav, fluid grids, touch-friendly targets.
- **Dark luxury aesthetic** — ink black + cream + copper, Bodoni Moda serif
  display, Inter body, Pinyon Script editorial flourishes.

## 🛠 Tech Stack

| Layer       | Choice                                   |
| ----------- | ---------------------------------------- |
| Framework   | Next.js 16 (App Router)                  |
| Language    | TypeScript 5                             |
| Styling     | Tailwind CSS 4 + tw-animate-css          |
| UI library  | shadcn/ui (New York) + Lucide icons      |
| State       | Zustand (cart store, persisted)          |
| Fonts       | Bodoni Moda, Inter, Pinyon Script        |

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

Requirements:

- Node.js 18.18+ (or Bun)
- npm 9+ (or Bun)

## 📦 Production Build

```bash
npm run build
npm start
```

## ☁️ Deploy to Vercel

This repo is Vercel-ready. Two ways to deploy:

### Option A — GitHub integration (recommended)

1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the GitHub repo.
4. Vercel auto-detects Next.js — accept the defaults.
5. Click **Deploy**. Production URL is live in ~2 minutes.

No environment variables are required — the cart uses `localStorage`, and
the product catalogue is static TypeScript data.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

## 🔀 Push to GitHub

```bash
# From the project root:
git add .
git commit -m "Prepare VELOIR for GitHub + Vercel"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/veloir.git
git push -u origin main
```

Then on GitHub: create an empty repo named `veloir` first
(<https://github.com/new>), then run the commands above.

## 📁 Project Structure

```
.
├── public/
│   └── products/              # 12 generated luxury product images
├── src/
│   ├── app/
│   │   ├── globals.css        # VELOIR design tokens + animations
│   │   ├── layout.tsx         # Fonts + metadata
│   │   └── page.tsx           # Composes all sections
│   ├── components/
│   │   ├── ui/                # shadcn/ui primitives
│   │   └── veloir/            # 17 VELOIR-specific components
│   ├── hooks/
│   │   └── use-toast.ts
│   └── lib/
│       ├── cart-store.ts      # Zustand cart store (persisted)
│       ├── products.ts        # Catalogue + collections + journal data
│       └── utils.ts           # cn() helper
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## 🎨 Design System

The palette lives in `src/app/globals.css` as CSS custom properties:

| Token              | Hex       | Use                              |
| ------------------ | --------- | -------------------------------- |
| `--ink`            | `#0b0b0d` | Page background                  |
| `--ink-soft`       | `#141418` | Card background                  |
| `--cream`          | `#f3ecdf` | Primary text                     |
| `--copper`         | `#b87333` | Accent / links / hover           |
| `--champagne`      | `#d9c4a3` | Soft accent                      |
| `--rose`           | `#b88a86` | Tertiary accent                  |

Typography: **Bodoni Moda** (display), **Inter** (body), **Pinyon Script**
(editorial flourishes).

## 📝 License

MIT — built as a design demo. All product names, descriptions, and imagery
are fictional.

## 🙏 Acknowledgements

- Original inspiration: the VELOIR concept.
- Product imagery: a mix of custom-generated visuals and Unsplash photos.
- Built with Next.js, Tailwind, shadcn/ui, and Lucide.
