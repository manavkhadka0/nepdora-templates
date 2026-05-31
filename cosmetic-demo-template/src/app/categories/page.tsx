import Link from "next/link";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
      <div className="mb-10 min-w-0 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-display-s)] font-medium italic text-[var(--color-ink)]">
          All Categories
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--color-ink-muted)]">
          Explore our full range — from microneedling devices to Korean skincare essentials.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="group min-w-0 rounded-2xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] p-6 transition-[transform,box-shadow] duration-[var(--dur-base)] hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl italic text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
              {cat.name}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
              {cat.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.subcategories.map((sub) => (
                <li
                  key={sub.slug}
                  className="rounded-full bg-[var(--color-paper-2)] px-3 py-1 text-xs text-[var(--color-ink-faint)]"
                >
                  {sub.name}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
