"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { formatPrice, SITE } from "@/lib/data";
import { ProductImage } from "@/components/product-image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, itemCount } = useCart();
  const shipping =
    subtotal >= SITE.freeShippingThreshold ? 0 : subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center lg:px-8">
        <ShoppingBag className="mx-auto size-12 text-[var(--color-ink-faint)]" />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl italic text-[var(--color-ink)]">
          Your bag is empty
        </h1>
        <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
          Discover something beautiful to add.
        </p>
        <Button
          render={<Link href="/products" />}
          className="mt-8 bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-soft)]"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
      <h1 className="mb-8 font-[family-name:var(--font-display)] text-[length:var(--text-display-s)] font-medium italic text-[var(--color-ink)]">
        Shopping Bag ({itemCount})
      </h1>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex min-w-0 gap-4 rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] p-4"
            >
              <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-[var(--color-paper-3)]">
                <ProductImage
                  slug={product.slug}
                  name={product.name}
                  width={160}
                  sizes="80px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <Link
                  href={`/products/${product.slug}`}
                  className="truncate text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)]"
                >
                  {product.name}
                </Link>
                <p className="text-xs text-[var(--color-ink-faint)]">
                  {product.brand}
                </p>
                <p className="mt-1 text-sm font-semibold tabular-nums">
                  {formatPrice(product.price)}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center rounded border border-[var(--color-paper-3)]">
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      aria-label="Decrease"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                    >
                      <Minus className="size-3" />
                    </Button>
                    <span className="min-w-[2rem] text-center text-xs tabular-nums">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      aria-label="Increase"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                    >
                      <Plus className="size-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    className="text-[var(--color-ink-faint)] hover:text-[var(--color-error)]"
                    aria-label="Remove item"
                    onClick={() => removeItem(product.id)}
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                </div>
              </div>
              <p className="shrink-0 text-sm font-semibold tabular-nums">
                {formatPrice(product.price * quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper-2)] p-6">
          <h2 className="font-[family-name:var(--font-display)] text-xl italic text-[var(--color-ink)]">
            Order Summary
          </h2>
          <Separator className="my-4" />
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-[var(--color-ink-muted)]">Subtotal</dt>
              <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[var(--color-ink-muted)]">Shipping</dt>
              <dd className="tabular-nums">
                {shipping === 0 ? "Free" : formatPrice(shipping)}
              </dd>
            </div>
            {subtotal < SITE.freeShippingThreshold && subtotal > 0 && (
              <p className="text-xs text-[var(--color-accent)]">
                Add {formatPrice(SITE.freeShippingThreshold - subtotal)} more for free shipping
              </p>
            )}
          </dl>
          <Separator className="my-4" />
          <div className="flex justify-between text-base font-semibold">
            <span>Total</span>
            <span className="tabular-nums">{formatPrice(total)}</span>
          </div>
          <Button
            render={<Link href="/checkout" />}
            className="mt-6 min-h-11 w-full bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-soft)]"
          >
            Proceed to Checkout
          </Button>
          <Button render={<Link href="/products" />} variant="ghost" className="mt-2 w-full">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
