export type Category = "Cosmetics" | "Skincare" | "Fragrance";

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: Category;
  collection: string;
  price: number;
  size: string;
  description: string;
  story: string;
  notes?: string[];
  ingredients?: string[];
  finish?: string;
  howToUse?: string;
  image: string;
  swatch?: string;
  bestseller?: boolean;
  isNew?: boolean;
  limitedEdition?: boolean;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  // ───────────────────────── COSMETICS ─────────────────────────
  {
    id: "vlp-001",
    slug: "noir-velvet-lip",
    name: "Noir Velours",
    subtitle: "Velvet Matte Lip Colour — 4g",
    category: "Cosmetics",
    collection: "Le Noir",
    price: 68,
    size: "4g",
    description:
      "A pigment-drenched velvet lip colour that drapes the mouth in deep, enigmatic noir. Weightless yet uncompromising, it deposits full coverage in a single stroke and wears for ten hours without feathering.",
    story:
      "Inspired by the inky silence of a Parisian theatre at midnight, Noir Velours was developed across three seasons to perfect its whisper-soft matte hand. Each shade is milled seven times to suspend the pigment in a cushion of mango seed butter and rose wax — so the mouth feels kissed, never painted.",
    notes: ["Top: Black Plum", "Heart: Crushed Velvet Rose", "Dry-down: Smoked Vanilla"],
    ingredients: [
      "Mango Seed Butter",
      "Rosa Damascena Wax",
      "Vitamin E (Tocopherol)",
      "Hyaluronic Microspheres",
    ],
    finish: "Velvet Matte",
    howToUse:
      "Define the lip with the curved edge of the bullet, then fill from the heart outward. Blot once with tissue for a stain finish.",
    image: "/products/lip-noir-velours.png",
    bestseller: true,
    rating: 4.9,
    reviewCount: 412,
  },
  {
    id: "vlp-002",
    slug: "copper-lumiere-lip",
    name: "Cuivre Lumière",
    subtitle: "Satin Lip Colour — 4g",
    category: "Cosmetics",
    collection: "Maison Cuivre",
    price: 64,
    size: "4g",
    description:
      "A liquid-light satin lip in warm copper. Glides on like silk, settles into a luminous second skin that catches candlelight and holds it close.",
    story:
      "Maison Cuivre was born of an evening at the Palais Garnier, where gilded balustrades caught the chandeliers and threw them back as molten light. Cuivre Lumière is that reflection, bottled for the mouth.",
    notes: ["Top: Bergamot Peel", "Heart: Saffron Petal", "Dry-down: Amber Resin"],
    ingredients: ["Squalane", "Jojoba Oil", "Mica", "Vitamin E"],
    finish: "Luminous Satin",
    howToUse:
      "Apply from the center of the mouth outward. Layer for a deeper wash of copper.",
    image: "/products/lip-cuivre-lumiere.png",
    bestseller: true,
    rating: 4.8,
    reviewCount: 287,
  },
  {
    id: "vlp-003",
    slug: "champagne-fluide-foundation",
    name: "Champagne Fluide",
    subtitle: "Luminous Skin Foundation — 30ml",
    category: "Cosmetics",
    collection: "La Lumière",
    price: 96,
    size: "30ml",
    description:
      "A weightless, light-diffusing foundation that melts into the skin and disappears, leaving only a lit-from-within glow. Buildable from sheer to medium in three drops.",
    story:
      "Three years in formulation, Champagne Fluide suspends micro-pearls of champagne gold in a serum-light base of hyaluronic acid and white peony extract. The result is skin that looks rested even when it isn't — the kind of light that flatters every room.",
    ingredients: [
      "Hyaluronic Acid",
      "White Peony Extract",
      "Niacinamide 2%",
      "Champagne Gold Pearl",
    ],
    finish: "Luminous / Natural",
    howToUse:
      "Warm three drops between fingertips and press into skin from the center of the face outward. Build where needed.",
    image: "/products/foundation-champagne-fluide.png",
    isNew: true,
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "vlp-004",
    slug: "soie-eye-colour",
    name: "Soie d'Ombre",
    subtitle: "Silk Eye Colour Quad — 4 × 1.2g",
    category: "Cosmetics",
    collection: "Le Noir",
    price: 88,
    size: "4 × 1.2g",
    description:
      "A four-pan eye palette in silk-fine powders: ink, ash, copper, and pearl. Each shade sweeps on without fallout and blends like smoke.",
    story:
      "Soie d'Ombre was developed beside the looms of Lyon, where silk is woven so fine it reads as shadow. The palette translates that texture into pigment — four shades that move between matte and metallic with the turn of a brush.",
    ingredients: ["Talc-Free", "Mica", "Silica", "Jojoba Esters"],
    finish: "Matte to Metallic",
    howToUse:
      "Use a dense brush to lay down ink in the crease, then diffuse with copper on the lid. Press pearl into the inner corner with a fingertip.",
    image: "/products/eyeshadow-soie-ombre.png",
    bestseller: true,
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "vlp-005",
    slug: "mascara-velours-noir",
    name: "Velours Noir",
    subtitle: "Lash Mascara — 10ml",
    category: "Cosmetics",
    collection: "Le Noir",
    price: 52,
    size: "10ml",
    description:
      "A jet-black lash lacquer that lengthens, curls, and holds for eighteen hours without flaking. The brush is hand-shaped in seventeen bristle tiers.",
    story:
      "The mascara that needs no reapplication. Velours Noir coats each lash in a weightless film of carbon black and beeswax, building volume that stays supple — never brittle, never clumpy.",
    ingredients: ["Carbon Black Pigment", "Beeswax", "Argan Oil", "Panthenol"],
    finish: "High-Volume Matte",
    howToUse:
      "Wiggle from the base of the lashes to the tips. Two coats for evening drama.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 521,
  },

  // ───────────────────────── SKINCARE ─────────────────────────
  {
    id: "vls-001",
    slug: "rose-noir-serum",
    name: "Rose Noir Serum",
    subtitle: "Resurfacing Night Serum — 30ml",
    category: "Skincare",
    collection: "Les Sérums",
    price: 142,
    size: "30ml",
    description:
      "A midnight ritual in a bottle. Lactic acid, black rose stem cells, and encapsulated retinol resurface the skin overnight, leaving it luminous by dawn.",
    story:
      "Rose Noir was the first formula VELOIR ever made — a personal blend created for the founder's mother, a former dancer whose skin had grown weary of stage lights. After a year of nightly use, her skin glowed again. The serum has never left the collection since.",
    ingredients: [
      "0.3% Encapsulated Retinol",
      "5% Lactic Acid",
      "Black Rose Stem Cells",
      "Hyaluronic Acid",
      "Squalane",
    ],
    howToUse:
      "Five drops pressed into clean skin before bed. Layer moisturiser over. Wear SPF by day. Not for use during pregnancy.",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80&auto=format&fit=crop",
    bestseller: true,
    rating: 4.9,
    reviewCount: 689,
  },
  {
    id: "vls-002",
    slug: "creme-de-velours",
    name: "Crème de Velours",
    subtitle: "Cushion Repair Cream — 50ml",
    category: "Skincare",
    collection: "Les Sérums",
    price: 168,
    size: "50ml",
    description:
      "A cushion-soft cream that wraps the skin in a veil of nourishment. Ceramides, bio-fermented oat, and champagne grape water rebuild the barrier over four weeks.",
    story:
      "Crème de Velours was the formula that took longest to perfect — seventy-two trials before the texture was right. It should feel like silk on the finger and disappear on the skin, leaving only a soft-focus glow.",
    ingredients: [
      "Ceramide Complex NP",
      "Bio-Fermented Oat",
      "Champagne Grape Water",
      "Shea Butter",
      "Bisabolol",
    ],
    howToUse:
      "Massage a pea-sized amount over face and neck, morning and night. Layer over serum.",
    image: "/products/creme-de-velours.png",
    bestseller: true,
    rating: 4.8,
    reviewCount: 312,
  },
  {
    id: "vls-003",
    slug: "lumiere-eye-recovery",
    name: "Lumière Eye Recovery",
    subtitle: "Brightening Eye Serum — 15ml",
    category: "Skincare",
    collection: "La Lumière",
    price: 124,
    size: "15ml",
    description:
      "A cooling peptide eye serum that erases the night before. Caffeine, haloxyl, and pearls of light diffuse dark circles within two weeks.",
    story:
      "For the long Parisian nights that turn into longer New York mornings. Lumière was developed for the founders themselves, who refused to enter a boardroom with shadows under their eyes.",
    ingredients: [
      "5% Caffeine",
      "Haloxyl Peptide",
      "Niacinamide 3%",
      "Pearl Powder",
      "Hyaluronic Acid",
    ],
    howToUse:
      "Tap three drops around the orbital bone morning and night. Store in the refrigerator for an added de-puffing effect.",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1200&q=80&auto=format&fit=crop",
    isNew: true,
    rating: 4.7,
    reviewCount: 142,
  },
  {
    id: "vls-004",
    slug: "rose-mist-tonique",
    name: "Rose Mist Tonique",
    subtitle: "Hydrating Essence Mist — 100ml",
    category: "Skincare",
    collection: "Les Sérums",
    price: 68,
    size: "100ml",
    description:
      "A featherlight mist of damask rose water and beta-glucan that sets makeup, refreshes the complexion, and revives the spirit throughout the day.",
    story:
      "Mist your face on the metro, on the tarmac, between meetings. Rose Mist Tonique is the bottle the founders carry in every handbag — the small luxury that makes a city bearable.",
    ingredients: [
      "Damask Rose Water",
      "Beta-Glucan",
      "Aloe Vera",
      "Panthanol",
    ],
    howToUse:
      "Hold 20cm from the face and mist generously. Use between skincare steps, over makeup, or whenever the skin craves a moment of breath.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 233,
  },
  {
    id: "vls-005",
    slug: "noir-clay-mask",
    name: "Masque Noir",
    subtitle: "Purifying Charcoal Mask — 75ml",
    category: "Skincare",
    collection: "Le Noir",
    price: 88,
    size: "75ml",
    description:
      "A creamy charcoal mask that draws out impurities without stripping the skin. White clay, activated charcoal, and manuka honey leave the complexion refined and luminous.",
    story:
      "Sunday night in the 6th arrondissement: the lights low, the tea steeping, the mask setting on the skin. Masque Noir is the ritual that closes one week and opens the next.",
    ingredients: [
      "Activated Charcoal",
      "White Kaolin Clay",
      "Manuka Honey",
      "Willow Bark",
    ],
    howToUse:
      "Apply a thin layer to clean, dry skin. Leave for ten minutes, then rinse with warm water. Use twice weekly.",
    image: "/products/mask-noir.png",
    limitedEdition: true,
    rating: 4.7,
    reviewCount: 178,
  },

  // ───────────────────────── FRAGRANCE ─────────────────────────
  {
    id: "vlf-001",
    slug: "veloir-eau-de-parfum",
    name: "VELOIR",
    subtitle: "Eau de Parfum — 50ml",
    category: "Fragrance",
    collection: "Les Parfums",
    price: 215,
    size: "50ml",
    description:
      "The signature scent. Black plum, crushed velvet rose, smoked vanilla, and a thread of leather — a fragrance that unfolds across the day like a letter read in three sittings.",
    story:
      "VELOIR took three years and forty-two trials to perfect. The brief was a single sentence: a perfume that smells like the inside of a velvet-lined jewelry box at midnight. The final composition is exactly that — intimate, expensive, and impossible to forget.",
    notes: [
      "Top: Black Plum, Bergamot, Pink Pepper",
      "Heart: Crushed Velvet Rose, Iris, Saffron",
      "Base: Smoked Vanilla, Leather, Cashmere Musk, Amber",
    ],
    howToUse:
      "Mist onto pulse points at the wrists, neck, and behind the ears. Do not rub. Reapply as desired.",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&q=80&auto=format&fit=crop",
    bestseller: true,
    rating: 4.9,
    reviewCount: 1247,
  },
  {
    id: "vlf-002",
    slug: "lumiere-doree",
    name: "Lumière Dorée",
    subtitle: "Eau de Parfum — 50ml",
    category: "Fragrance",
    collection: "Les Parfums",
    price: 215,
    size: "50ml",
    description:
      "Daylight in a bottle. Bergamot, neroli, and orange blossom over a base of golden amber and white musk — the warmth of a Provençal afternoon at four o'clock.",
    story:
      "Lumière Dorée is the perfume of late summer in the south — the hour when the light turns gold and the cicadas fall silent. It is the scent of bare shoulders and cold rosé and a long, slow dinner to come.",
    notes: [
      "Top: Bergamot, Neroli, Italian Mandarin",
      "Heart: Orange Blossom, Jasmine Sambac, Ylang",
      "Base: Golden Amber, White Musk, Cedarwood",
    ],
    howToUse:
      "Mist onto pulse points. Layer with Crème de Velours for a softer sillage.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80&auto=format&fit=crop",
    isNew: true,
    rating: 4.8,
    reviewCount: 423,
  },
  {
    id: "vlf-003",
    slug: "noir-absolu",
    name: "Noir Absolu",
    subtitle: "Extrait de Parfum — 30ml",
    category: "Fragrance",
    collection: "Les Parfums",
    price: 285,
    size: "30ml",
    description:
      "An extrait-strength composition of ink, smoke, and incense. Worn close to the skin, it lingers for sixteen hours and leaves a trail that turns heads in a crowded room.",
    story:
      "Noir Absolu was blended for the house's tenth anniversary — a perfume so concentrated it borders on the sacred. Each bottle is hand-filled and sealed with copper foil, and only five hundred are produced each year.",
    notes: [
      "Top: Black Pepper, Smoke, Elemi",
      "Heart: Black Rose, Oud, Incense",
      "Base: Vetiver, Leather, Tonka, Cashmere",
    ],
    howToUse:
      "Apply a single drop to the base of the throat and the inner wrist. A little is enough.",
    image: "/products/parfum-noir-absolu.png",
    limitedEdition: true,
    rating: 4.9,
    reviewCount: 198,
  },
  {
    id: "vlf-004",
    slug: "rose-de-mai",
    name: "Rose de Mai",
    subtitle: "Eau de Parfum — 50ml",
    category: "Fragrance",
    collection: "Les Parfums",
    price: 225,
    size: "50ml",
    description:
      "A soliflore rose gathered at dawn in Grasse. Fresh, dewy, and impossibly true to the flower — a perfume for those who already love roses, and for those who thought they didn't.",
    story:
      "Rose de Mai is harvested for only three weeks each spring in the fields above Grasse. It takes four thousand blossoms to yield a single kilo of absolute. VELOIR's soliflore is built around that absolute — nothing more, nothing less.",
    notes: [
      "Top: Dewy Green, Lychee Petal",
      "Heart: Rose de Mai Absolute, Turkish Rose",
      "Base: White Musk, Soft Amber",
    ],
    howToUse:
      "Mist onto pulse points and the back of the neck. Pairs with the Rose Noir Serum ritual.",
    image: "/products/parfum-rose-de-mai.png",
    bestseller: true,
    rating: 4.9,
    reviewCount: 567,
  },
  {
    id: "vlf-005",
    slug: "cannelle-cuivre",
    name: "Cannelle & Cuivre",
    subtitle: "Eau de Parfum — 50ml",
    category: "Fragrance",
    collection: "Maison Cuivre",
    price: 210,
    size: "50ml",
    description:
      "Cinnamon bark, copper resin, and dried tobacco over a base of warm cedar. An autumnal perfume for the wearer who lights candles at noon and reads by candlelight.",
    story:
      "Cannelle & Cuivre was the second fragrance VELOIR ever released, and it has never gone out of production. It is the house's autumn signature — the perfume of long walks in the Tuileries under falling leaves.",
    notes: [
      "Top: Cinnamon Bark, Cardamom, Pink Pepper",
      "Heart: Copper Resin, Dried Tobacco, Immortelle",
      "Base: Cedarwood, Benzoin, Soft Vanilla",
    ],
    howToUse:
      "Apply to pulse points. Layer under a wool coat for a deeper dry-down.",
    image: "/products/parfum-cannelle-cuivre.png",
    rating: 4.7,
    reviewCount: 234,
  },
];

export const collections = [
  {
    slug: "le-noir",
    name: "Le Noir",
    tagline: "The House's dark heart — ink, smoke, midnight velvet.",
    description:
      "Le Noir is the founding chapter of the VELOIR story. Across lip, eye, and skin, the collection explores the depths of black and the textures it can take: matte, satin, lacquer, smoke.",
    image:
      "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1600&q=80&auto=format&fit=crop",
    count: 6,
  },
  {
    slug: "maison-cuivre",
    name: "Maison Cuivre",
    tagline: "Warm metal, candlelight, and the heat of gilded rooms.",
    description:
      "Maison Cuivre celebrates the warm metals of the Parisian evening — copper, brass, gold leaf. The collection glows against every complexion and warms every room it enters.",
    image: "/products/collection-maison-cuivre.png",
    count: 4,
  },
  {
    slug: "les-serums",
    name: "Les Sérums",
    tagline: "The skincare rituals that close the day and open the next.",
    description:
      "Les Sérums is the house's skincare canon — a small, considered range of serums and creams engineered to deliver visible results in four weeks without irritation.",
    image: "/products/creme-de-velours.png",
    count: 5,
  },
];

export const journalPosts = [
  {
    slug: "midnight-ritual",
    title: "The Midnight Ritual",
    excerpt:
      "On the small ceremonies that close a day — the candles, the serums, the long silence before sleep. A field guide to the VELOIR evening.",
    category: "Rituals",
    date: "October 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "grasse-in-spring",
    title: "Three Weeks in Grasse",
    excerpt:
      "Each May, the rose fields above Grasse bloom for just twenty-one days. A journal of the harvest that yields Rose de Mai.",
    category: "Field Notes",
    date: "September 2026",
    readTime: "8 min",
    image: "/products/journal-grasse.png",
  },
  {
    slug: "anatomy-of-a-lipstick",
    title: "The Anatomy of a Lipstick",
    excerpt:
      "Seventy-two components, four years of formulation, and one curved bullet. Inside the making of Noir Velours.",
    category: "Craft",
    date: "August 2026",
    readTime: "10 min",
    image: "/products/journal-lipstick-craft.png",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}
