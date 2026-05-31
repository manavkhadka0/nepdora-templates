import Link from "next/link";
import {
  HeroSection,
  FlashSaleSection,
  ProductRail,
} from "@/components/home-sections";
import {
  CategoryGrid,
  TrustStrip,
  TestimonialsSection,
  PromoTiles,
} from "@/components/category-sections";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import {
  getNewArrivals,
  getBestsellers,
  products,
} from "@/lib/data";

export default function HomePage() {
  const newArrivals = getNewArrivals();
  const bestsellers = getBestsellers();
  const trending = products
    .filter((p) => (p.reviewCount ?? 0) > 100)
    .slice(0, 4);

  return (
    <>
      <HeroSection />
      <FlashSaleSection />
      <TrustStrip />

      <ProductRail
        title="New Arrivals"
        subtitle="The latest in skincare innovation"
        href="/categories/new-arrivals"
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {newArrivals.map((product, i) => (
            <Reveal key={product.id} delay={i * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </ProductRail>

      <CategoryGrid />

      <ProductRail
        title="Bestsellers"
        subtitle="Community favorites"
        href="/products"
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {bestsellers.map((product, i) => (
            <Reveal key={product.id} delay={i * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </ProductRail>

      <PromoTiles />

      <ProductRail
        title="Trending This Week"
        href="/products"
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {trending.map((product, i) => (
            <Reveal key={product.id} delay={i * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </ProductRail>

      <TestimonialsSection />

      <section className="border-t border-[var(--color-paper-3)] bg-[var(--color-accent-muted)]/40 py-12">
        <div className="mx-auto max-w-6xl px-4 text-center lg:px-8">
          <p className="font-[family-name:var(--font-display)] text-2xl italic text-[var(--color-ink)] md:text-3xl">
            LuxCoin Rewards
          </p>
          <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
            Join our Rewards Program and earn LuxCoins with every purchase.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block text-sm font-medium text-[var(--color-accent)] hover:underline"
          >
            Learn more →
          </Link>
        </div>
      </section>
    </>
  );
}
