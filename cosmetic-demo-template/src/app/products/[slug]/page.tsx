"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import { Minus, Plus, ShoppingBag, Star, Truck } from "lucide-react";
import { getProductBySlug, formatPrice, getDiscountPercent, products } from "@/lib/data";
import { useCart } from "@/contexts/cart-context";
import { ProductImage } from "@/components/product-image";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) notFound();

  const hasSale =
    product.compareAtPrice && product.compareAtPrice > product.price;
  const discount = hasSale
    ? getDiscountPercent(product.price, product.compareAtPrice!)
    : 0;

  const related = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.brand === product.brand)
    )
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
      <nav className="mb-8 text-sm text-[var(--color-ink-faint)]" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[var(--color-accent)]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/categories/${product.category}`}
          className="hover:text-[var(--color-accent)]"
        >
          {product.category.replace(/-/g, " ")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-ink)]">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--color-paper-2)]">
          <ProductImage
            slug={product.slug}
            name={product.name}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            width={900}
          />
          {product.badge && (
            <Badge className="absolute left-4 top-4 rounded-full bg-[var(--color-accent)] px-3 py-1 text-white capitalize">
              {product.badge === "flash" ? "Flash Sale" : product.badge}
            </Badge>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-faint)]">
            {product.brand}
          </p>
          <h1
            className="mt-2 overflow-wrap-anywhere font-[family-name:var(--font-display)] text-3xl font-medium italic leading-tight text-[var(--color-ink)] md:text-4xl"
            style={{ overflowWrap: "anywhere" }}
          >
            {product.name}
          </h1>

          {product.rating && (
            <div className="mt-3 flex items-center gap-2">
              <div className="flex text-[var(--color-accent)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${i < Math.floor(product.rating!) ? "fill-current" : "fill-none"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-ink-muted)]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          )}

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-semibold tabular-nums text-[var(--color-ink)]">
              {formatPrice(product.price)}
            </span>
            {hasSale && (
              <>
                <span className="text-lg tabular-nums text-[var(--color-ink-faint)] line-through">
                  {formatPrice(product.compareAtPrice!)}
                </span>
                <span className="rounded bg-[var(--color-sale)] px-2 py-0.5 text-xs font-bold text-white">
                  Save {discount}%
                </span>
              </>
            )}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            {product.description}
          </p>

          <Separator className="my-6" />

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-lg border border-[var(--color-paper-3)]">
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus className="size-4" />
              </Button>
              <span className="min-w-[2.5rem] text-center text-sm tabular-nums">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus className="size-4" />
              </Button>
            </div>

            <Button
              className="min-h-11 flex-1 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:bg-[var(--color-accent-soft)]"
              disabled={!product.inStock}
              onClick={() => addItem(product, quantity)}
            >
              <ShoppingBag className="size-4" />
              {product.inStock ? "Add to Cart" : "Sold Out"}
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-ink-muted)]">
            <Truck className="size-4 text-[var(--color-accent)]" />
            Free shipping on orders over $35
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl italic text-[var(--color-ink)]">
            You may also like
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
