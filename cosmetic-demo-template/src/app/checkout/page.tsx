"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, Lock } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { formatPrice, SITE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const shipping =
    subtotal >= SITE.freeShippingThreshold ? 0 : subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <p className="text-[var(--color-ink-muted)]">Your cart is empty.</p>
        <Button render={<Link href="/products" />} className="mt-4">
          Shop Products
        </Button>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <CheckCircle2 className="mx-auto size-16 text-[var(--color-success)]" />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl italic text-[var(--color-ink)]">
          Order placed
        </h1>
        <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
          Thank you for shopping with {SITE.name}. A confirmation email will be sent shortly.
        </p>
        <Button
          className="mt-8 bg-[var(--color-accent)] text-white"
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
      <h1 className="mb-8 font-[family-name:var(--font-display)] text-[length:var(--text-display-s)] font-medium italic text-[var(--color-ink)]">
        Checkout
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <section className="rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] p-6">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl italic">
              Contact
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required className="mt-1.5 min-h-11" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" className="mt-1.5 min-h-11" />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] p-6">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl italic">
              Shipping Address
            </h2>
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="first">First name</Label>
                  <Input id="first" required className="mt-1.5 min-h-11" />
                </div>
                <div>
                  <Label htmlFor="last">Last name</Label>
                  <Input id="last" required className="mt-1.5 min-h-11" />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" required className="mt-1.5 min-h-11" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required className="mt-1.5 min-h-11" />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input id="state" required className="mt-1.5 min-h-11" />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP</Label>
                  <Input id="zip" required className="mt-1.5 min-h-11" />
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Select defaultValue="us">
                  <SelectTrigger className="mt-1.5 min-h-11 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] p-6">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl italic">
              Payment
            </h2>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="card">Card number</Label>
                <Input
                  id="card"
                  placeholder="4242 4242 4242 4242"
                  required
                  className="mt-1.5 min-h-11"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input id="expiry" placeholder="MM / YY" required className="mt-1.5 min-h-11" />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" required className="mt-1.5 min-h-11" />
                </div>
              </div>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-[var(--color-ink-faint)]">
              <Lock className="size-3.5" />
              Demo checkout — no real payment processed
            </p>
          </section>
        </div>

        <div className="h-fit space-y-4">
          <div className="rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper-2)] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-xl italic">
              Your Order
            </h2>
            <Separator className="my-4" />
            <ul className="max-h-48 space-y-3 overflow-y-auto">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex justify-between gap-2 text-sm"
                >
                  <span className="min-w-0 truncate text-[var(--color-ink-muted)]">
                    {product.name} × {quantity}
                  </span>
                  <span className="shrink-0 tabular-nums">
                    {formatPrice(product.price * quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <Separator className="my-4" />
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--color-ink-muted)]">Subtotal</span>
                <span className="tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-ink-muted)]">Shipping</span>
                <span className="tabular-nums">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span className="tabular-nums">{formatPrice(total)}</span>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="mt-6 min-h-11 w-full bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-soft)]"
            >
              {loading ? "Processing…" : `Pay ${formatPrice(total)}`}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
