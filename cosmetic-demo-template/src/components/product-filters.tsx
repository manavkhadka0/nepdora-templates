"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { brands, categories, DEFAULT_FILTERS } from "@/lib/data";
import type { ProductFilters } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type Props = {
  filters: ProductFilters;
  onChange: (filters: ProductFilters) => void;
  resultCount: number;
};

function FilterPanel({ filters, onChange, resultCount }: Props) {
  const update = useCallback(
    (patch: Partial<ProductFilters>) => onChange({ ...filters, ...patch }),
    [filters, onChange]
  );

  const toggleArray = useCallback(
    (key: "categories" | "subcategories" | "brands", value: string) => {
      const arr = filters[key];
      const next = arr.includes(value)
        ? arr.filter((v) => v !== value)
        : [...arr, value];
      update({ [key]: next });
    },
    [filters, update]
  );

  const activeSubcategories = useMemo(() => {
    if (!filters.categories.length) {
      return categories.flatMap((c) =>
        c.subcategories.map((s) => ({ ...s, category: c.slug }))
      );
    }
    return categories
      .filter((c) => filters.categories.includes(c.slug))
      .flatMap((c) =>
        c.subcategories.map((s) => ({ ...s, category: c.slug }))
      );
  }, [filters.categories]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--color-ink-muted)]">
          {resultCount} products
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-[var(--color-accent)]"
          onClick={() => onChange(DEFAULT_FILTERS)}
        >
          Clear all
        </Button>
      </div>

      <div>
        <Label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
          Sort by
        </Label>
        <Select
          value={filters.sort}
          onValueChange={(v) =>
            update({ sort: v as ProductFilters["sort"] })
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label className="text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
          Category
        </Label>
        {categories.map((cat) => (
          <div key={cat.slug} className="flex items-center gap-2">
            <Checkbox
              id={`cat-${cat.slug}`}
              checked={filters.categories.includes(cat.slug)}
              onCheckedChange={() => toggleArray("categories", cat.slug)}
            />
            <Label
              htmlFor={`cat-${cat.slug}`}
              className="cursor-pointer text-sm font-normal"
            >
              {cat.name}
            </Label>
          </div>
        ))}
      </div>

      {activeSubcategories.length > 0 && (
        <>
          <Separator />
          <div className="space-y-3">
            <Label className="text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
              Subcategory
            </Label>
            {activeSubcategories.map((sub) => (
              <div key={`${sub.category}-${sub.slug}`} className="flex items-center gap-2">
                <Checkbox
                  id={`sub-${sub.slug}`}
                  checked={filters.subcategories.includes(sub.slug)}
                  onCheckedChange={() => toggleArray("subcategories", sub.slug)}
                />
                <Label
                  htmlFor={`sub-${sub.slug}`}
                  className="cursor-pointer text-sm font-normal"
                >
                  {sub.name}
                </Label>
              </div>
            ))}
          </div>
        </>
      )}

      <Separator />

      <div className="space-y-3">
        <Label className="text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
          Brand
        </Label>
        {brands.slice(0, 10).map((brand) => (
          <div key={brand} className="flex items-center gap-2">
            <Checkbox
              id={`brand-${brand}`}
              checked={filters.brands.includes(brand)}
              onCheckedChange={() => toggleArray("brands", brand)}
            />
            <Label
              htmlFor={`brand-${brand}`}
              className="cursor-pointer text-sm font-normal"
            >
              {brand}
            </Label>
          </div>
        ))}
      </div>

      <Separator />

      <div>
        <Label className="mb-4 block text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
          Price range
        </Label>
        <Slider
          min={0}
          max={400}
          step={5}
          value={[filters.priceMin, filters.priceMax]}
          onValueChange={(value) => {
            const vals = Array.isArray(value) ? value : [value];
            update({ priceMin: vals[0] ?? 0, priceMax: vals[1] ?? 400 });
          }}
          className="mb-2"
        />
        <p className="text-sm tabular-nums text-[var(--color-ink-muted)]">
          ${filters.priceMin} – ${filters.priceMax}
        </p>
      </div>

      <Separator />

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Checkbox
            id="on-sale"
            checked={filters.onSale}
            onCheckedChange={(c) => update({ onSale: !!c })}
          />
          <Label htmlFor="on-sale" className="cursor-pointer text-sm font-normal">
            On sale only
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="in-stock"
            checked={filters.inStock}
            onCheckedChange={(c) => update({ inStock: !!c })}
          />
          <Label htmlFor="in-stock" className="cursor-pointer text-sm font-normal">
            In stock only
          </Label>
        </div>
      </div>
    </div>
  );
}

export function ProductFiltersSidebar(props: Props) {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-36 rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] p-6">
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-lg italic text-[var(--color-ink)]">
          Refine
        </h2>
        <FilterPanel {...props} />
      </div>
    </aside>
  );
}

export function ProductFiltersMobile(props: Props) {
  const activeCount =
    props.filters.categories.length +
    props.filters.subcategories.length +
    props.filters.brands.length +
    (props.filters.onSale ? 1 : 0) +
    (props.filters.inStock ? 1 : 0);

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            className="lg:hidden"
            aria-label="Open filters"
          >
            <SlidersHorizontal className="size-4" />
            Filters
            {activeCount > 0 && (
              <span className="ml-1 rounded-full bg-[var(--color-accent)] px-1.5 py-0.5 text-[10px] text-white">
                {activeCount}
              </span>
            )}
          </Button>
        }
      />
      <SheetContent side="left" className="overflow-y-auto">
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-xl italic">
          Filters
        </h2>
        <FilterPanel {...props} />
      </SheetContent>
    </Sheet>
  );
}

export function useProductFiltersFromUrl() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState<ProductFilters>(() => {
    const category = searchParams.get("category");
    const subcategory = searchParams.get("subcategory");
    return {
      ...DEFAULT_FILTERS,
      categories: category ? [category] : [],
      subcategories: subcategory ? [subcategory] : [],
    };
  });

  const [search, setSearch] = useState(searchParams.get("q") ?? "");

  const updateFilters = useCallback(
    (next: ProductFilters) => {
      setFilters(next);
      const params = new URLSearchParams();
      if (next.categories[0]) params.set("category", next.categories[0]);
      if (next.subcategories[0]) params.set("subcategory", next.subcategories[0]);
      if (search) params.set("q", search);
      router.replace(`/products?${params.toString()}`, { scroll: false });
    },
    [router, search]
  );

  return { filters, setFilters: updateFilters, search, setSearch };
}

export function ActiveFilterChips({
  filters,
  onChange,
}: {
  filters: ProductFilters;
  onChange: (f: ProductFilters) => void;
}) {
  const chips: { label: string; clear: () => void }[] = [];

  filters.categories.forEach((c) => {
    const cat = categories.find((x) => x.slug === c);
    if (cat)
      chips.push({
        label: cat.name,
        clear: () =>
          onChange({
            ...filters,
            categories: filters.categories.filter((x) => x !== c),
          }),
      });
  });

  if (filters.onSale)
    chips.push({
      label: "On sale",
      clear: () => onChange({ ...filters, onSale: false }),
    });

  if (!chips.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <button
          key={chip.label}
          type="button"
          onClick={chip.clear}
          className="inline-flex items-center gap-1 rounded-full bg-[var(--color-accent-muted)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
        >
          {chip.label}
          <X className="size-3" />
        </button>
      ))}
    </div>
  );
}
