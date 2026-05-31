import type { Category, Product, ProductFilters } from "./types";

export const SITE = {
  name: "Filler Lux",
  tagline: "Live beautifully by nurturing what makes you feel authentic, radiant, and alive",
  email: "info@fillerx.com",
  phone: "+1 (212) 970-0055",
  phoneTollFree: "+1 (888) 580-0508",
  hours: "Mon–Fri, 9am–5pm EST",
  freeShippingThreshold: 35,
  giftThreshold: 50,
};

export const PROMO_BANNERS = [
  "Free shipping on orders over $35",
  "Enjoy a gift with every order $50+",
  "Our loyalty program just got better",
];

export const categories: Category[] = [
  {
    slug: "skincare",
    name: "Skincare",
    description: "Serums, creams, masks, and treatments for radiant skin.",
    subcategories: [
      { slug: "serums", name: "Serums & Ampoules" },
      { slug: "creams", name: "Face Creams" },
      { slug: "masks", name: "Facial Masks" },
      { slug: "cleansers", name: "Cleansers & Peels" },
      { slug: "toners", name: "Toners & Mists" },
    ],
  },
  {
    slug: "devices",
    name: "Devices",
    description: "Microneedling pens, LED therapy, and at-home beauty tools.",
    subcategories: [
      { slug: "microneedling", name: "Microneedling Pens" },
      { slug: "cartridges", name: "Cartridges & Rollers" },
      { slug: "led", name: "LED Light Therapy" },
      { slug: "beauty-devices", name: "Beauty Devices" },
    ],
  },
  {
    slug: "dr-pen",
    name: "Dr. Pen",
    description: "Official Dr. Pen microneedling devices, sets, and accessories.",
    subcategories: [
      { slug: "pens", name: "Microneedling Pens" },
      { slug: "sets", name: "Treatment Sets" },
      { slug: "cartridges", name: "Cartridges" },
    ],
  },
  {
    slug: "skinbooster",
    name: "Skinbooster",
    description: "Professional-grade skin boosters for post-treatment care.",
    subcategories: [
      { slug: "ampoules", name: "Ampoules" },
      { slug: "post-care", name: "Post-Treatment Care" },
    ],
  },
  {
    slug: "facial-masks",
    name: "Facial Masks",
    description: "Sheet masks, alginate masks, and peel-off treatments.",
    subcategories: [
      { slug: "sheet", name: "Sheet Masks" },
      { slug: "alginate", name: "Alginate Masks" },
      { slug: "peel-off", name: "Peel-Off Masks" },
    ],
  },
  {
    slug: "beauty-sets",
    name: "Beauty Sets",
    description: "Curated skincare sets and gift bundles.",
    subcategories: [
      { slug: "treatment-sets", name: "Treatment Sets" },
      { slug: "gift-sets", name: "Gift Sets" },
    ],
  },
  {
    slug: "lip-care",
    name: "Lip Care",
    description: "Lip masks, tints, and balms for soft, hydrated lips.",
    subcategories: [
      { slug: "lip-masks", name: "Lip Masks" },
      { slug: "tints", name: "Lip & Cheek Tints" },
    ],
  },
  {
    slug: "hand-creams",
    name: "Hand Creams",
    description: "Luxurious hand creams and perfumed body care.",
    subcategories: [
      { slug: "hand-cream", name: "Hand Creams" },
      { slug: "body-cream", name: "Body Creams" },
    ],
  },
  {
    slug: "hair-care",
    name: "Hair Care",
    description: "Serums and treatments for healthy, glossy hair.",
    subcategories: [
      { slug: "serums", name: "Hair Serums" },
      { slug: "treatment", name: "Scalp Treatment" },
    ],
  },
  {
    slug: "new-arrivals",
    name: "New Arrivals",
    description: "The latest skincare innovations and cult favorites.",
    subcategories: [
      { slug: "korean", name: "Korean Skincare" },
      { slug: "devices", name: "New Devices" },
    ],
  },
  {
    slug: "clearance",
    name: "Clearance",
    description: "Final deals — up to 70% off last-chance products.",
    subcategories: [
      { slug: "skincare", name: "Skincare Deals" },
      { slug: "devices", name: "Device Deals" },
    ],
  },
];

export const brands = [
  "Dr. Pen",
  "Glutanex",
  "Rejuran",
  "Laneige",
  "Celimax",
  "Curenex",
  "LumiPore",
  "Primoris International",
  "K Derma",
  "Japan Bio Products",
  "Koru Pharmaceuticals",
  "CELL:29",
  "Dives Med",
  "id PLACOSMETICS",
  "LumiPore",
  "Bubi Bubi",
  "Elementre",
];

export const products: Product[] = [
  {
    id: "1",
    slug: "dr-pen-a9-calming-barrier-repair-set",
    name: "Dr. Pen A9 Calming Barrier Repair Set",
    brand: "Dr. Pen",
    category: "dr-pen",
    subcategory: "sets",
    price: 82.99,
    compareAtPrice: 122.84,
    description:
      "A complete calming barrier repair set designed for post-microneedling recovery. Includes soothing serum and barrier cream to support skin healing and hydration.",
    tags: ["new", "set", "post-care"],
    badge: "new",
    inStock: true,
    rating: 4.8,
    reviewCount: 42,
  },
  {
    id: "2",
    slug: "dr-pen-m7s-brightening-pigmentation-set",
    name: "Dr. Pen M7S Brightening & Pigmentation Set",
    brand: "Dr. Pen",
    category: "dr-pen",
    subcategory: "sets",
    price: 89.0,
    compareAtPrice: 149.35,
    description:
      "Target dark spots and uneven tone with this brightening treatment set. Formulated for use alongside microneedling sessions.",
    tags: ["new", "set", "brightening"],
    badge: "new",
    inStock: true,
    rating: 4.7,
    reviewCount: 28,
  },
  {
    id: "3",
    slug: "dr-pen-m7s-revitalizing-hydration-set",
    name: "Dr. Pen M7S Revitalizing Hydration Set",
    brand: "Dr. Pen",
    category: "dr-pen",
    subcategory: "sets",
    price: 89.0,
    compareAtPrice: 148.55,
    description:
      "Deep hydration set for revitalized, plump-looking skin. Perfect companion for microneedling treatments.",
    tags: ["new", "set", "hydration"],
    badge: "new",
    inStock: true,
    rating: 4.9,
    reviewCount: 35,
  },
  {
    id: "4",
    slug: "dr-pen-m9-microneedling-pen",
    name: "Dr. Pen M9 Microneedling Pen",
    brand: "Dr. Pen",
    category: "dr-pen",
    subcategory: "pens",
    price: 215.5,
    description:
      "Next-generation smart microneedling device with one-touch electronic depth adjustment, intelligent cartridge recognition, and next-generation precision for smoother, more controlled treatments.",
    tags: ["device", "microneedling", "bestseller"],
    badge: "bestseller",
    inStock: true,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "5",
    slug: "dr-pen-q1s-microneedling-pen",
    name: "Dr. Pen Q1S Microneedling Pen",
    brand: "Dr. Pen",
    category: "dr-pen",
    subcategory: "pens",
    price: 190.0,
    description:
      "Multi-technology microneedling and EMS device for face and scalp. Combines precision needling with electro-muscle stimulation.",
    tags: ["device", "microneedling"],
    badge: "new",
    inStock: true,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "6",
    slug: "dr-pen-m8s-microneedling-pen",
    name: "Dr. Pen M8S Microneedling Pen",
    brand: "Dr. Pen",
    category: "dr-pen",
    subcategory: "pens",
    price: 83.99,
    compareAtPrice: 99.99,
    description:
      "Professional-grade microneedling pen with adjustable depth settings. A community favorite for at-home treatments.",
    tags: ["device", "microneedling", "sale"],
    badge: "flash",
    inStock: true,
    rating: 4.7,
    reviewCount: 203,
  },
  {
    id: "7",
    slug: "dr-pen-m8s-cartridge",
    name: "Dr. Pen M8S/A8S/A9/A11 Cartridge",
    brand: "Dr. Pen",
    category: "dr-pen",
    subcategory: "cartridges",
    price: 2.97,
    description:
      "Replacement cartridges compatible with Dr. Pen M8S, A8S, A9, and A11 devices. Sterile, single-use needles for safe treatments.",
    tags: ["accessory", "cartridge"],
    inStock: true,
    rating: 4.6,
    reviewCount: 412,
  },
  {
    id: "8",
    slug: "rejuran-dual-effect-ampoule",
    name: "Rejuran Dual Effect Ampoule",
    brand: "Rejuran",
    category: "skinbooster",
    subcategory: "ampoules",
    price: 35.0,
    compareAtPrice: 49.0,
    description:
      "Customer favorite serum with salmon DNA peptide complex. Lightweight, hydrating formulation that absorbs quickly and plumps skin for a youthful glow.",
    tags: ["serum", "bestseller"],
    badge: "bestseller",
    inStock: false,
    rating: 4.9,
    reviewCount: 287,
  },
  {
    id: "9",
    slug: "glutanex-glow-therapy-milky-serum",
    name: "Glutanex Glow Therapy Milky Serum",
    brand: "Glutanex",
    category: "skincare",
    subcategory: "serums",
    price: 34.75,
    description:
      "Lightweight milky serum with NAD+ support for hydration, radiance, and smoother-looking skin.",
    tags: ["new", "serum", "glow"],
    badge: "new",
    inStock: true,
    rating: 4.8,
    reviewCount: 64,
  },
  {
    id: "10",
    slug: "glutanex-glow-booster",
    name: "Glutanex Glow Booster",
    brand: "Glutanex",
    category: "skincare",
    subcategory: "serums",
    price: 35.0,
    description:
      "Crystal capsule cream booster designed for daily radiance and moisture retention.",
    tags: ["new", "serum"],
    badge: "new",
    inStock: true,
    rating: 4.7,
    reviewCount: 51,
  },
  {
    id: "11",
    slug: "laneige-lip-sleeping-mask",
    name: "Laneige Lip Sleeping Mask",
    brand: "Laneige",
    category: "lip-care",
    subcategory: "lip-masks",
    price: 18.0,
    description:
      "Iconic overnight lip mask in Berry shade. Deeply hydrates and softens lips while you sleep.",
    tags: ["korean", "lip", "bestseller"],
    badge: "bestseller",
    inStock: true,
    rating: 4.9,
    reviewCount: 534,
  },
  {
    id: "12",
    slug: "celimax-pore-dark-spot-cream",
    name: "Celimax Pore+Dark Spot Brightening Cream",
    brand: "Celimax",
    category: "skincare",
    subcategory: "creams",
    price: 17.75,
    description:
      "Korean brightening cream targeting pores and dark spots. Lightweight daily moisturizer.",
    tags: ["korean", "brightening"],
    inStock: true,
    rating: 4.6,
    reviewCount: 178,
  },
  {
    id: "13",
    slug: "rejuvenator-4-in-1-beauty-device",
    name: "Rejuvenator 4-in-1 Beauty Device",
    brand: "LumiPore",
    category: "devices",
    subcategory: "beauty-devices",
    price: 180.25,
    compareAtPrice: 385.0,
    description:
      "Multi-mode beauty wand combining LED, EMS, and massage functions. Use 3 times per week for optimal results.",
    tags: ["device", "led", "sale"],
    badge: "flash",
    inStock: true,
    rating: 4.8,
    reviewCount: 92,
  },
  {
    id: "14",
    slug: "hydra-pen-h5-microneedling-device",
    name: "Hydra Pen H5 Microneedling Device",
    brand: "Dr. Pen",
    category: "devices",
    subcategory: "microneedling",
    price: 99.0,
    compareAtPrice: 199.0,
    description:
      "Advanced microneedling device with adjustable depth. Available in Sky Blue and Rose Gold.",
    tags: ["device", "microneedling", "sale"],
    badge: "sale",
    inStock: true,
    rating: 4.7,
    reviewCount: 145,
  },
  {
    id: "15",
    slug: "derma-roller-192-microneedles",
    name: "Derma Roller 192 Microneedles",
    brand: "Dr. Pen",
    category: "devices",
    subcategory: "cartridges",
    price: 13.75,
    description:
      "192-needle derma roller for cosmetic use. Roll vertically, horizontally, and diagonally across clean skin.",
    tags: ["accessory", "roller"],
    inStock: true,
    rating: 4.5,
    reviewCount: 321,
  },
  {
    id: "16",
    slug: "plareceta-collagen-peel-off-mask",
    name: "Plareceta Collagen Peel Off Mask",
    brand: "Japan Bio Products",
    category: "facial-masks",
    subcategory: "peel-off",
    price: 44.0,
    description:
      "Collagen peel-off mask for intense hydration and lifting effects. Use daily for visible plumpness.",
    tags: ["mask", "bestseller"],
    badge: "bestseller",
    inStock: true,
    rating: 4.8,
    reviewCount: 167,
  },
  {
    id: "17",
    slug: "mesoheal-post-treatment-mask",
    name: "Mesoheal Post-Treatment Mask",
    brand: "Koru Pharmaceuticals",
    category: "facial-masks",
    subcategory: "sheet",
    price: 2.95,
    description:
      "Soothing post-treatment sheet mask for sensitive, red skin after procedures.",
    tags: ["mask", "post-care"],
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "18",
    slug: "avalon-hydrogel-mask",
    name: "Avalon Hydrogel Mask",
    brand: "Koru Pharmaceuticals",
    category: "facial-masks",
    subcategory: "sheet",
    price: 4.95,
    description:
      "Hydrogel base mask with cooling, calming sensation for a plump, refreshed appearance.",
    tags: ["mask", "hydrogel"],
    inStock: true,
    rating: 4.6,
    reviewCount: 56,
  },
  {
    id: "19",
    slug: "glutanex-aqua-booster",
    name: "Glutanex Aqua Booster",
    brand: "Glutanex",
    category: "skincare",
    subcategory: "creams",
    price: 29.0,
    description:
      "Hydrating face cream for daily moisture. Lightweight texture suitable for all skin types.",
    tags: ["cream", "hydration"],
    inStock: true,
    rating: 4.7,
    reviewCount: 73,
  },
  {
    id: "20",
    slug: "tender-garden-hand-cream",
    name: "Tender Garden Morning Breeze Hand Cream Nr.961",
    brand: "Primoris International",
    category: "hand-creams",
    subcategory: "hand-cream",
    price: 11.29,
    description:
      "Gentle perfumed hand cream with morning breeze fragrance. Non-greasy, fast-absorbing formula.",
    tags: ["hand", "body"],
    inStock: true,
    rating: 4.5,
    reviewCount: 44,
  },
  {
    id: "21",
    slug: "glutanex-shower-body-cream",
    name: "Glutanex Shower Body Cream",
    brand: "Glutanex",
    category: "hand-creams",
    subcategory: "body-cream",
    price: 39.5,
    description:
      "Luxurious shower body cream for silky, hydrated skin. Part of the Glutanex glow collection.",
    tags: ["body", "hydration"],
    inStock: true,
    rating: 4.6,
    reviewCount: 38,
  },
  {
    id: "22",
    slug: "bubi-bubi-stay-blooming-tint",
    name: "Bubi Bubi Stay Blooming Tint",
    brand: "Bubi Bubi",
    category: "lip-care",
    subcategory: "tints",
    price: 15.0,
    description:
      "2-in-1 lip and cheek tint for a radiant, dewy glow. Long-lasting color with a natural finish.",
    tags: ["lip", "tint", "korean"],
    inStock: true,
    rating: 4.8,
    reviewCount: 112,
  },
  {
    id: "23",
    slug: "doll-eye-false-eyelashes",
    name: "Doll Eye False Eyelashes",
    brand: "Filler Lux",
    category: "new-arrivals",
    subcategory: "korean",
    price: 9.95,
    description:
      "Soft definition lashes for a naturally enhanced, wide-eyed look. Part of Filler Lux's first lash collection.",
    tags: ["lashes", "new"],
    badge: "new",
    inStock: true,
    rating: 4.4,
    reviewCount: 29,
  },
  {
    id: "24",
    slug: "phytopeel",
    name: "Phytopeel",
    brand: "CELL:29",
    category: "skincare",
    subcategory: "cleansers",
    price: 64.0,
    description:
      "Plant extract peel treatment. Massage gently, leave 1–2 minutes, rinse for nourished, smooth skin.",
    tags: ["new", "peel"],
    badge: "new",
    inStock: true,
    rating: 4.6,
    reviewCount: 18,
  },
  {
    id: "25",
    slug: "tengdew-cream",
    name: "Tengdew Cream",
    brand: "K Derma",
    category: "skincare",
    subcategory: "creams",
    price: 39.0,
    description:
      "Rejuvenating cream with a silky, non-sticky texture. Ideal for post-treatment skincare.",
    tags: ["new", "cream"],
    badge: "new",
    inStock: true,
    rating: 4.7,
    reviewCount: 22,
  },
  {
    id: "26",
    slug: "curenex-rejuvenating-cream",
    name: "Curenex Rejuvenating Cream",
    brand: "K Derma",
    category: "skincare",
    subcategory: "creams",
    price: 38.55,
    description:
      "Post-treatment aftercare cream with salmon DNA peptide complex. All EWG 1 certified ingredients.",
    tags: ["cream", "post-care"],
    inStock: true,
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: "27",
    slug: "dives-med-lactic-peel",
    name: "Dives Med Lactic Peel",
    brand: "Dives Med",
    category: "skincare",
    subcategory: "cleansers",
    price: 39.7,
    compareAtPrice: 79.4,
    description:
      "Lactic acid peel for radiance and even tone. Promotes cell turnover for smoother, fresher skin.",
    tags: ["peel", "sale"],
    badge: "sale",
    inStock: true,
    rating: 4.5,
    reviewCount: 41,
  },
  {
    id: "28",
    slug: "elementre-micellar-water",
    name: "Elementre Micellar Water with 2% Glycerin",
    brand: "Elementre",
    category: "skincare",
    subcategory: "cleansers",
    price: 28.05,
    description:
      "Ultimate skin cleansing micellar water with 2% glycerin for gentle, effective makeup removal.",
    tags: ["cleanser"],
    inStock: true,
    rating: 4.6,
    reviewCount: 33,
  },
  {
    id: "29",
    slug: "real-after-care-mist",
    name: "Real After Care Mist",
    brand: "Primoris International",
    category: "skincare",
    subcategory: "toners",
    price: 23.0,
    description:
      "Soothing after-care mist for post-procedure skin. Calms redness and provides instant hydration.",
    tags: ["mist", "post-care"],
    inStock: true,
    rating: 4.7,
    reviewCount: 48,
  },
  {
    id: "30",
    slug: "glutanex-snow-white-sheet-mask",
    name: "Glutanex Snow White Sheet Mask",
    brand: "Glutanex",
    category: "facial-masks",
    subcategory: "sheet",
    price: 3.75,
    description:
      "Brightening sheet mask for snow-white, radiant skin. Single sheet or box of 5 available.",
    tags: ["mask", "brightening"],
    inStock: true,
    rating: 4.5,
    reviewCount: 94,
  },
  {
    id: "31",
    slug: "crystal-carboxy-co2-mask",
    name: "Crystal Carboxy CO2 Mask",
    brand: "id PLACOSMETICS",
    category: "facial-masks",
    subcategory: "alginate",
    price: 65.0,
    description:
      "Professional CO2 bubble mask for oxygenation and brightening. Spa-quality treatment at home.",
    tags: ["mask", "professional"],
    inStock: true,
    rating: 4.8,
    reviewCount: 76,
  },
  {
    id: "32",
    slug: "cell-factory-cica-cleansing-pack",
    name: "Cell Factory CICA Blemish Cleansing Pack",
    brand: "Primoris International",
    category: "skincare",
    subcategory: "cleansers",
    price: 11.95,
    compareAtPrice: 23.9,
    description:
      "Acne-functional cleansing pack with 5 types of CICA for deep cleansing and soothing in one foam.",
    tags: ["cleanser", "cica", "sale"],
    badge: "sale",
    inStock: true,
    rating: 4.6,
    reviewCount: 55,
  },
];

export const testimonials = [
  {
    quote:
      "This serum is a clear, lightweight, hydrating formulation that feels silky on the skin and absorbs quickly! There is no feeling of tackiness and it immediately plumps the skin giving it a youthful glow!",
    author: "Paula",
  },
  {
    quote:
      "Very gentle, I use after procedures. I liked both serums here, by the same company and the masks, so I thought I would be happy with this and I am.",
    author: "J Kelley",
  },
  {
    quote:
      "There is also a ton of serum in the pouch that I love to use after I take the mask off. It's completely safe for my very sensitive skin.",
    author: "Traci",
  },
];

export const trustBadges = [
  { label: "Free Shipping", detail: "Orders over $35" },
  { label: "Money Guarantee", detail: "Satisfaction assured" },
  { label: "Flexible Payment", detail: "Secure checkout" },
  { label: "Online Support", detail: "Mon–Fri 9–5 EST" },
  { label: "7-Day Returns", detail: "Hassle-free" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getNavFeaturedProducts(
  categorySlug: string,
  limit = 3
): Product[] {
  const inCategory = products.filter((p) => p.category === categorySlug);
  if (inCategory.length >= limit) return inCategory.slice(0, limit);
  return [
    ...inCategory,
    ...products.filter((p) => p.category !== categorySlug),
  ].slice(0, limit);
}

export function getSubcategoryPreviewProduct(
  categorySlug: string,
  subSlug: string
): Product | undefined {
  return products.find(
    (p) => p.category === categorySlug && p.subcategory === subSlug
  );
}

export function getFlashSaleProducts(): Product[] {
  return products.filter(
    (p) => p.badge === "flash" || p.badge === "sale" || p.compareAtPrice
  );
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.badge === "new").slice(0, 8);
}

export function getBestsellers(): Product[] {
  return products
    .filter((p) => p.badge === "bestseller")
    .slice(0, 8);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function getDiscountPercent(
  price: number,
  compareAt: number
): number {
  return Math.round(((compareAt - price) / compareAt) * 100);
}

export const DEFAULT_FILTERS: ProductFilters = {
  categories: [] as string[],
  subcategories: [] as string[],
  brands: [] as string[],
  priceMin: 0,
  priceMax: 400,
  onSale: false,
  inStock: false,
  sort: "featured",
};

export function filterProducts(
  allProducts: Product[],
  filters: ProductFilters,
  search?: string
): Product[] {
  let result = [...allProducts];

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  if (filters.categories.length) {
    result = result.filter((p) => filters.categories.includes(p.category));
  }

  if (filters.subcategories.length) {
    result = result.filter((p) =>
      filters.subcategories.includes(p.subcategory)
    );
  }

  if (filters.brands.length) {
    result = result.filter((p) => filters.brands.includes(p.brand));
  }

  result = result.filter(
    (p) => p.price >= filters.priceMin && p.price <= filters.priceMax
  );

  if (filters.onSale) {
    result = result.filter((p) => p.compareAtPrice);
  }

  if (filters.inStock) {
    result = result.filter((p) => p.inStock);
  }

  switch (filters.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      result.sort((a, b) =>
        a.badge === "new" ? -1 : b.badge === "new" ? 1 : 0
      );
      break;
    default:
      result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  }

  return result;
}
