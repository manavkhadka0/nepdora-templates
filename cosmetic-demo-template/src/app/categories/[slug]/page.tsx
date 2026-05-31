import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/data";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const categoryProducts = getProductsByCategory(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
      <nav className="mb-6 text-sm text-[var(--color-ink-faint)]">
        <Link href="/" className="hover:text-[var(--color-accent)]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/categories" className="hover:text-[var(--color-accent)]">
          Categories
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-ink)]">{category.name}</span>
      </nav>

      <div className="mb-10 min-w-0">
        <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-display-s)] font-medium italic text-[var(--color-ink)]">
          {category.name}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-muted)]">
          {category.description}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {category.subcategories.map((sub) => (
          <Link
            key={sub.slug}
            href={`/products?category=${category.slug}&subcategory=${sub.slug}`}
            className="rounded-full border border-[var(--color-paper-3)] px-4 py-2 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] hover:text-[var(--color-accent)]"
          >
            {sub.name}
          </Link>
        ))}
      </div>

      {categoryProducts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[var(--color-paper-3)] py-16 text-center">
          <p className="text-[var(--color-ink-muted)]">
            No products in this category yet.
          </p>
          <Link
            href="/products"
            className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)] hover:underline"
          >
            Browse all products →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
