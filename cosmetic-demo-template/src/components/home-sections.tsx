"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductImage, RemoteImage } from "@/components/product-image";
import { Reveal } from "@/components/reveal";
import { HERO_IMAGE } from "@/lib/images";
import {
  getFlashSaleProducts,
  formatPrice,
  getDiscountPercent,
} from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-paper)]">
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-96 animate-float rounded-full bg-[var(--color-accent-muted)] opacity-60 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 size-80 animate-float-delayed rounded-full bg-[var(--color-paper-3)] opacity-80 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
        <Reveal direction="right" className="min-w-0">
          <p className="mb-4 inline-flex animate-fade-in items-center gap-2 rounded-full bg-[var(--color-accent-muted)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
            <Sparkles className="size-3.5" />
            New Season
          </p>
          <h1
            className="overflow-wrap-anywhere min-w-0 font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-medium italic leading-[1.05] text-[var(--color-ink)]"
            style={{ overflowWrap: "anywhere" }}
          >
            Radiance, refined for you
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-ink-muted)]">
            Discover skinboosters, microneedling devices, and Korean skincare
            — curated for glowing, authentic beauty.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              render={<Link href="/products" />}
              className="min-h-11 bg-[var(--color-accent)] px-6 text-[var(--color-accent-foreground)] hover:bg-[var(--color-accent-soft)]"
            >
              Shop Collection
            </Button>
            <Button
              render={<Link href="/categories/new-arrivals" />}
              variant="outline"
              className="min-h-11 border-[var(--color-paper-3)]"
            >
              New Arrivals
            </Button>
          </div>
        </Reveal>

        <Reveal direction="left" delay={150} className="relative min-w-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-paper-2)] shadow-[0_24px_64px_-20px_oklch(62%_0.1_355_/_0.3)]">
            <RemoteImage
              src={HERO_IMAGE}
              alt="Dr. Pen M9 Microneedling Pen"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              width={800}
              className="transition-transform duration-[1.2s] ease-[var(--ease-out)] hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(28%_0.03_350_/_0.4)] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-[family-name:var(--font-display)] text-sm italic opacity-90">
                New Arrival
              </p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-medium italic md:text-4xl">
                Dr. Pen M9
              </p>
              <p className="mt-2 max-w-xs text-sm opacity-80">
                Smart one-touch depth adjustment and next-generation precision.
              </p>
              <Button
                render={<Link href="/products/dr-pen-m9-microneedling-pen" />}
                className="mt-4 bg-white/95 text-[var(--color-ink)] hover:bg-white"
              >
                Discover
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 animate-scale-in rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] px-4 py-3 shadow-lg">
            <p className="text-xs text-[var(--color-ink-faint)]">From</p>
            <p className="text-lg font-semibold tabular-nums text-[var(--color-accent)]">
              {formatPrice(215.5)}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FlashSaleSection() {
  const flashProducts = getFlashSaleProducts().slice(0, 4);

  return (
    <section className="border-y border-[var(--color-paper-3)] bg-[var(--color-paper-2)] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2 text-[var(--color-flash)]">
              <Timer className="size-4 animate-pulse-soft" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Flash Sale
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-display-s)] font-medium italic text-[var(--color-ink)]">
              Limited-time offers
            </h2>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
              The more you buy, the more you save — grab your favorites now.
            </p>
          </div>
          <Button
            render={<Link href="/products?sale=true" />}
            variant="outline"
            className="shrink-0 self-start sm:self-auto"
          >
            View all deals
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {flashProducts.map((product, i) => {
            const discount = product.compareAtPrice
              ? getDiscountPercent(product.price, product.compareAtPrice)
              : 0;
            return (
              <Reveal key={product.id} delay={i * 80}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex min-w-0 items-center gap-4 rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] p-3 transition-[transform,box-shadow] duration-[var(--dur-base)] hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-[var(--color-paper-3)]">
                    <ProductImage
                      slug={product.slug}
                      name={product.name}
                      width={160}
                      sizes="80px"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-medium leading-snug text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
                      {product.name}
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                      <span className="font-semibold tabular-nums text-[var(--color-accent)]">
                        {formatPrice(product.price)}
                      </span>
                      {product.compareAtPrice && (
                        <>
                          <span className="text-xs tabular-nums text-[var(--color-ink-faint)] line-through">
                            {formatPrice(product.compareAtPrice)}
                          </span>
                          <span className="rounded bg-[var(--color-sale)] px-1.5 py-0.5 text-[10px] font-bold text-white">
                            −{discount}%
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProductRail({
  title,
  subtitle,
  href,
  children,
}: {
  title: string;
  subtitle?: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium italic text-[var(--color-ink)] md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                {subtitle}
              </p>
            )}
          </div>
          <Link
            href={href}
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition-transform hover:translate-x-0.5 hover:underline"
          >
            See more
            <ArrowRight className="size-3.5" />
          </Link>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
