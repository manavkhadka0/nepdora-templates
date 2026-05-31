"use client";

import Link from "next/link";
import { categories } from "@/lib/data";
import { getCategoryImage } from "@/lib/images";
import { RemoteImage } from "@/components/product-image";
import { Reveal } from "@/components/reveal";

export function CategoryGrid() {
  return (
    <section className="bg-[var(--color-paper-2)] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal className="mb-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl italic text-[var(--color-ink)] md:text-4xl">
            Shop by category
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {categories.map((cat, i) => {
            const img = getCategoryImage(cat.slug);
            return (
              <Reveal key={cat.slug} delay={i * 60}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="group relative flex min-h-[140px] min-w-0 flex-col justify-end overflow-hidden rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] transition-[transform,box-shadow] duration-[var(--dur-base)] hover:-translate-y-1 hover:shadow-lg"
                >
                  {img && (
                    <RemoteImage
                      src={img}
                      alt={cat.name}
                      width={400}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(28%_0.03_350_/_0.7)] via-[oklch(28%_0.03_350_/_0.2)] to-transparent" />
                  <div className="relative p-4 text-white">
                    <span className="font-[family-name:var(--font-display)] text-lg italic md:text-xl">
                      {cat.name}
                    </span>
                    <span className="mt-1 block truncate text-xs opacity-80">
                      {cat.subcategories.length} collections
                    </span>
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

export function TrustStrip() {
  const badges = [
    { label: "Free Shipping", detail: "Orders over $35" },
    { label: "Money Guarantee", detail: "Satisfaction assured" },
    { label: "Flexible Payment", detail: "Secure checkout" },
    { label: "Online Support", detail: "Mon–Fri 9–5 EST" },
    { label: "7-Day Returns", detail: "Hassle-free" },
  ];

  return (
    <section className="border-y border-[var(--color-paper-3)] py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {badges.map((badge, i) => (
          <Reveal key={badge.label} delay={i * 50} className="min-w-0 text-center">
            <p className="text-sm font-semibold text-[var(--color-ink)]">
              {badge.label}
            </p>
            <p className="mt-0.5 text-xs text-[var(--color-ink-faint)]">
              {badge.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This serum is a clear, lightweight, hydrating formulation that feels silky on the skin and absorbs quickly!",
      author: "Paula",
    },
    {
      quote:
        "Very gentle, I use after procedures. I liked both serums here, by the same company and the masks.",
      author: "J Kelley",
    },
    {
      quote:
        "There is also a ton of serum in the pouch that I love to use after I take the mask off.",
      author: "Traci",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl italic text-[var(--color-ink)]">
            Our favorite voices
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <blockquote className="flex min-w-0 flex-col rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] p-6 transition-shadow hover:shadow-md">
                <p className="flex-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium text-[var(--color-accent)]">
                  — {t.author}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PromoTiles() {
  return (
    <section className="pb-12 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-2 lg:px-8">
        <Reveal direction="right">
          <Link
            href="/categories/clearance"
            className="group relative flex min-h-[200px] overflow-hidden rounded-2xl"
          >
            <RemoteImage
              src="https://fillerx.com/cdn/shop/files/Rejuvenator-4-in-1-Beauty-Wand-01.jpg?v=1779729594"
              alt="Clearance sale"
              width={600}
              sizes="50vw"
              className="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(28%_0.03_350_/_0.75)] to-transparent" />
            <div className="relative flex flex-col justify-center p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-sale)]">
                Up to 70% off
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl italic">
                Clearance
              </p>
              <p className="mt-2 text-sm opacity-90">Final deals — last chance</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium group-hover:underline">
                Shop now →
              </span>
            </div>
          </Link>
        </Reveal>
        <Reveal direction="left" delay={100}>
          <Link
            href="/products?sale=true"
            className="group relative flex min-h-[200px] overflow-hidden rounded-2xl"
          >
            <RemoteImage
              src="https://fillerx.com/cdn/shop/files/Laneige-Lip-Sleeping-Mask.jpg?v=1779726146"
              alt="Beauty sale"
              width={600}
              sizes="50vw"
              className="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(28%_0.03_350_/_0.75)] to-transparent" />
            <div className="relative flex flex-col justify-center p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-flash)]">
                Save 50%
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl italic">
                Beauty Sale
              </p>
              <p className="mt-2 text-sm opacity-90">Bestsellers, chosen for you</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium group-hover:underline">
                Shop now →
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
