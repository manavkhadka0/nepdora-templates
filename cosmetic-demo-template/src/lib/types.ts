export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  tags: string[];
  badge?: "new" | "sale" | "bestseller" | "sold-out" | "flash";
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  subcategories: { slug: string; name: string }[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type ProductFilters = {
  categories: string[];
  subcategories: string[];
  brands: string[];
  priceMin: number;
  priceMax: number;
  onSale: boolean;
  inStock: boolean;
  sort: "featured" | "price-asc" | "price-desc" | "newest";
};
