"use client";

import { Suspense, useMemo } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import {
  ProductFiltersSidebar,
  ProductFiltersMobile,
  ActiveFilterChips,
  useProductFiltersFromUrl,
} from "@/components/product-filters";
import { Input } from "@/components/ui/input";
import { products, filterProducts, DEFAULT_FILTERS } from "@/lib/data";

function ProductsContent() {
  const { filters, setFilters, search, setSearch } = useProductFiltersFromUrl();

  const filtered = useMemo(
    () => filterProducts(products, filters, search),
    [filters, search]
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
      <div className="mb-8 min-w-0">
        <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-display-s)] font-medium italic text-[var(--color-ink)]">
          All Products
        </h1>
        <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
          Skinboosters, devices, and Korean skincare — curated for radiant beauty.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-ink-faint)]" />
          <Input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-h-11 pl-10"
            aria-label="Search products"
          />
        </div>
        <ProductFiltersMobile
          filters={filters}
          onChange={setFilters}
          resultCount={filtered.length}
        />
      </div>

      <ActiveFilterChips filters={filters} onChange={setFilters} />

      <div className="mt-8 flex gap-10">
        <ProductFiltersSidebar
          filters={filters}
          onChange={setFilters}
          resultCount={filtered.length}
        />

        <div className="min-w-0 flex-1">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[var(--color-paper-3)] py-16 text-center">
              <p className="text-[var(--color-ink-muted)]">
                No products match your filters.
              </p>
              <button
                type="button"
                className="mt-4 text-sm font-medium text-[var(--color-accent)] hover:underline"
                onClick={() => setFilters(DEFAULT_FILTERS)}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
