"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice, getDiscountPercent } from "@/lib/data";
import { useCart } from "@/contexts/cart-context";
import { ProductImage } from "@/components/product-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  new: "bg-[var(--color-ink)] text-[var(--color-paper)]",
  sale: "bg-[var(--color-sale)] text-white",
  flash: "bg-[var(--color-flash)] text-white",
  bestseller: "bg-[var(--color-accent-muted)] text-[var(--color-accent)]",
  "sold-out": "bg-[var(--color-paper-3)] text-[var(--color-ink-muted)]",
};

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { addItem } = useCart();
  const hasSale =
    product.compareAtPrice && product.compareAtPrice > product.price;
  const discount = hasSale
    ? getDiscountPercent(product.price, product.compareAtPrice!)
    : 0;

  return (
    <article
      className={cn(
        "group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] transition-[transform,box-shadow] duration-[var(--dur-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_oklch(62%_0.1_355_/_0.25)]",
        className
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-[var(--color-paper-2)]"
      >
        <ProductImage
          slug={product.slug}
          name={product.name}
          className="transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105"
        />
        {product.badge && (
          <Badge
            className={cn(
              "absolute left-3 top-3 z-10 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
              badgeStyles[product.badge]
            )}
          >
            {product.badge === "flash" ? "Flash Sale" : product.badge}
          </Badge>
        )}
        {hasSale && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-[var(--color-sale)] px-2 py-0.5 text-[10px] font-bold text-white">
            −{discount}%
          </span>
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col p-4">
        <p className="truncate text-xs uppercase tracking-wider text-[var(--color-ink-faint)]">
          {product.brand}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-1 line-clamp-2 min-w-0 text-sm font-medium leading-snug text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div className="min-w-0">
            <span className="text-base font-semibold tabular-nums text-[var(--color-ink)]">
              {formatPrice(product.price)}
            </span>
            {hasSale && (
              <span className="ml-1.5 text-sm tabular-nums text-[var(--color-ink-faint)] line-through">
                {formatPrice(product.compareAtPrice!)}
              </span>
            )}
          </div>
          <Button
            size="icon-sm"
            variant="outline"
            className="shrink-0 border-[var(--color-paper-3)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] hover:text-[var(--color-accent)]"
            disabled={!product.inStock}
            aria-label={
              product.inStock ? `Add ${product.name} to cart` : "Sold out"
            }
            onClick={() => addItem(product)}
          >
            <ShoppingBag className="size-3.5" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ProductCardCompact({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex min-w-0 items-center gap-3 rounded-lg p-2 transition-colors hover:bg-[var(--color-paper-2)]"
    >
      <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-[var(--color-paper-3)]">
        <ProductImage slug={product.slug} name={product.name} width={120} sizes="56px" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
          {product.name}
        </p>
        <p className="text-sm tabular-nums text-[var(--color-accent)]">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
