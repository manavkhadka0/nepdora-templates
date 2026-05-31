import Link from "next/link";
import { categories, SITE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--color-paper-3)] bg-[var(--color-paper-2)]">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <div className="mb-10 rounded-2xl bg-[var(--color-paper)] p-8 text-center">
          <p className="font-[family-name:var(--font-display)] text-2xl italic text-[var(--color-ink)] md:text-3xl">
            Be the first to know
          </p>
          <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
            New collections and exclusive offers, delivered gently.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Your email"
              className="min-h-11 flex-1 border-[var(--color-paper-3)] bg-[var(--color-paper)]"
              aria-label="Email for newsletter"
            />
            <Button
              type="submit"
              className="min-h-11 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:bg-[var(--color-accent-soft)]"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
              Shop
            </p>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
              Customer Care
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-ink)]">
              <li>
                <Link href="/contact" className="hover:text-[var(--color-accent)]">
                  Contact Us
                </Link>
              </li>
              <li>Shipping & Returns</li>
              <li>Price Match Guarantee</li>
              <li>LuxCoin Rewards</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-ink-muted)]">
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-accent)]">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="hover:text-[var(--color-accent)]">
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-[family-name:var(--font-display)] text-xl italic text-[var(--color-ink)]">
              {SITE.name}
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {SITE.tagline}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-paper-3)] pt-8 text-xs text-[var(--color-ink-faint)] sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Demo template — data sourced from fillerx.com.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-[var(--color-accent)]">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-[var(--color-accent)]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
