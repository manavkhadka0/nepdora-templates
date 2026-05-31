"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import {
  categories,
  formatPrice,
  getNavFeaturedProducts,
  getSubcategoryPreviewProduct,
  PROMO_BANNERS,
  SITE,
} from "@/lib/data";
import { getCategoryImage } from "@/lib/images";
import { useCart } from "@/contexts/cart-context";
import { ProductImage, RemoteImage } from "@/components/product-image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_CATEGORIES = categories.slice(0, 7);

export function PromoBar() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % PROMO_BANNERS.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[var(--color-accent-muted)] py-2 text-center text-xs tracking-wide text-[var(--color-ink)]">
      <p
        className={cn(
          "mx-auto max-w-3xl px-4 transition-opacity duration-300",
          fade ? "opacity-100" : "opacity-0"
        )}
        aria-live="polite"
      >
        {PROMO_BANNERS[index]}
      </p>
    </div>
  );
}

function MegaMenuDropdown({
  categorySlug,
  onClose,
}: {
  categorySlug: string;
  onClose: () => void;
}) {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return null;

  const featured = getNavFeaturedProducts(categorySlug, 3);
  const categoryImage = getCategoryImage(categorySlug);

  return (
    <div
      className="animate-mega-in absolute inset-x-0 top-full z-50 border-t border-[var(--color-paper-3)] bg-[var(--color-paper)] shadow-[0_24px_64px_-16px_oklch(62%_0.1_355_/_0.22)]"
      onMouseEnter={() => {}}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-12 lg:px-8">
        {/* Category hero */}
        <div className="min-w-0 lg:col-span-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--color-paper-2)]">
            {categoryImage && (
              <RemoteImage
                src={categoryImage}
                alt={category.name}
                sizes="(max-width: 1024px) 100vw, 33vw"
                width={480}
                className="transition-transform duration-700 ease-[var(--ease-out)] hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(28%_0.03_350_/_0.55)] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <p className="font-[family-name:var(--font-display)] text-2xl italic">
                {category.name}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            {category.description}
          </p>
          <Link
            href={`/categories/${category.slug}`}
            onClick={onClose}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-soft)]"
          >
            Shop all {category.name}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Subcategories with images */}
        <div className="min-w-0 lg:col-span-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-faint)]">
            Collections
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {category.subcategories.map((sub, i) => {
              const preview = getSubcategoryPreviewProduct(
                category.slug,
                sub.slug
              );
              return (
                <Link
                  key={sub.slug}
                  href={`/products?category=${category.slug}&subcategory=${sub.slug}`}
                  onClick={onClose}
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-transparent p-2.5 transition-[background,border-color,transform] duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-paper-3)] hover:bg-[var(--color-paper-2)]"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-[var(--color-paper-3)]">
                    {preview ? (
                      <ProductImage
                        slug={preview.slug}
                        name={preview.name}
                        width={120}
                        sizes="56px"
                      />
                    ) : categoryImage ? (
                      <RemoteImage
                        src={categoryImage}
                        alt={sub.name}
                        width={120}
                        sizes="56px"
                      />
                    ) : null}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
                      {sub.name}
                    </p>
                    <p className="text-xs text-[var(--color-ink-faint)]">
                      Explore →
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Featured products */}
        <div className="min-w-0 lg:col-span-3">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-faint)]">
            Featured
          </p>
          <ul className="space-y-3">
            {featured.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="group flex min-w-0 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-[var(--color-paper-2)]"
                >
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-[var(--color-paper-3)]">
                    <ProductImage
                      slug={product.slug}
                      name={product.name}
                      width={128}
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-medium leading-snug text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
                      {product.name}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold tabular-nums text-[var(--color-accent)]">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const { itemCount } = useCart();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)]/95 backdrop-blur-md">
      <PromoBar />

      <div
        className="relative border-b border-[var(--color-paper-3)]"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 lg:px-8">
          <Link
            href="/"
            className="min-w-0 shrink-0 font-[family-name:var(--font-display)] text-2xl font-medium italic tracking-tight text-[var(--color-ink)] transition-opacity hover:opacity-80 md:text-3xl"
          >
            {SITE.name}
          </Link>

          <nav
            className="hidden items-center lg:flex"
            aria-label="Main"
            onMouseEnter={() => {}}
          >
            {NAV_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                className={cn(
                  "flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors",
                  activeMenu === cat.slug
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-ink)] hover:text-[var(--color-accent)]"
                )}
                onMouseEnter={() => setActiveMenu(cat.slug)}
                onFocus={() => setActiveMenu(cat.slug)}
                aria-expanded={activeMenu === cat.slug}
                aria-haspopup="true"
              >
                {cat.name}
                <ChevronDown
                  className={cn(
                    "size-3.5 opacity-50 transition-transform duration-200",
                    activeMenu === cat.slug && "rotate-180 opacity-100"
                  )}
                />
              </button>
            ))}
            <Link
              href="/categories"
              className="px-3.5 py-2 text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              All
            </Link>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]"
              aria-label="Search"
              render={<Link href="/products" />}
            >
              <Search className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              className="hidden text-[var(--color-ink-muted)] hover:text-[var(--color-accent)] sm:inline-flex"
              aria-label="Account"
            >
              <User className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              className="relative text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]"
              aria-label={`Cart, ${itemCount} items`}
              render={<Link href="/cart" />}
            >
              <ShoppingBag className="size-4" />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex size-4 animate-scale-in items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] font-semibold text-[var(--color-accent-foreground)]">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="lg:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="size-5" />
                  </Button>
                }
              />
              <SheetContent
                side="right"
                className="w-full max-w-sm overflow-y-auto p-0"
              >
                <div className="border-b border-[var(--color-paper-3)] p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-display)] text-xl italic">
                      {SITE.name}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => setMobileOpen(false)}
                      aria-label="Close menu"
                    >
                      <X className="size-4" />
                    </Button>
                  </div>
                </div>
                <nav className="flex flex-col gap-1 p-4">
                  {categories.map((cat) => {
                    const catImg = getCategoryImage(cat.slug);
                    return (
                      <div
                        key={cat.slug}
                        className="overflow-hidden rounded-xl border border-[var(--color-paper-3)]"
                      >
                        <Link
                          href={`/categories/${cat.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 p-3"
                        >
                          <div className="relative size-12 shrink-0 overflow-hidden rounded-lg">
                            {catImg && (
                              <RemoteImage
                                src={catImg}
                                alt={cat.name}
                                width={96}
                                sizes="48px"
                              />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="font-[family-name:var(--font-display)] text-lg italic text-[var(--color-ink)]">
                              {cat.name}
                            </p>
                            <p className="truncate text-xs text-[var(--color-ink-faint)]">
                              {cat.subcategories.length} collections
                            </p>
                          </div>
                        </Link>
                        <div className="flex flex-wrap gap-1.5 border-t border-[var(--color-paper-3)] px-3 py-2">
                          {cat.subcategories.map((sub) => (
                            <Link
                              key={sub.slug}
                              href={`/products?category=${cat.slug}&subcategory=${sub.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-full bg-[var(--color-paper-2)] px-2.5 py-1 text-xs text-[var(--color-ink-muted)] hover:bg-[var(--color-accent-muted)] hover:text-[var(--color-accent)]"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                  <Link
                    href="/contact"
                    className="mt-2 block py-2 text-center text-sm font-medium text-[var(--color-accent)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {activeMenu && (
          <MegaMenuDropdown
            categorySlug={activeMenu}
            onClose={() => setActiveMenu(null)}
          />
        )}
      </div>
    </header>
  );
}
