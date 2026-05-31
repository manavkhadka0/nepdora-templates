"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is your return policy?",
    a: "We accept returns within 7 days of delivery. Items must be unused and in original packaging.",
  },
  {
    q: "Do you offer free shipping?",
    a: `Yes — free shipping on all orders over $${SITE.freeShippingThreshold}.`,
  },
  {
    q: "How does the LuxCoin Rewards program work?",
    a: "Earn LuxCoins with every purchase. Redeem points for discounts on future orders.",
  },
  {
    q: "Are your products authentic?",
    a: "All products are sourced directly from authorized distributors and brands.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
      <div className="mb-12 min-w-0 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-display-s)] font-medium italic text-[var(--color-ink)]">
          Get in Touch
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--color-ink-muted)]">
          We&apos;re here to help with orders, product questions, and skincare advice.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] p-6">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-xl italic">
              Send a message
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required className="mt-1.5 min-h-11" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" required className="mt-1.5 min-h-11" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required className="mt-1.5 min-h-11" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={5} className="mt-1.5" />
              </div>
              <Button
                type="submit"
                className="min-h-11 bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-soft)]"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper-2)] p-6">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl italic">
              FAQ
            </h2>
            <Accordion>
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-sm text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[var(--color-ink-muted)]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-accent-muted)]/50 p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl italic text-[var(--color-ink)]">
              Customer Service
            </h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="text-sm font-medium">Hours</p>
                  <p className="text-sm text-[var(--color-ink-muted)]">{SITE.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a
                    href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                    className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]"
                  >
                    {SITE.phone}
                  </a>
                  <br />
                  <a
                    href={`tel:${SITE.phoneTollFree.replace(/\D/g, "")}`}
                    className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]"
                  >
                    {SITE.phoneTollFree} (Toll Free)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]"
                  >
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="text-sm font-medium">Shipping</p>
                  <p className="text-sm text-[var(--color-ink-muted)]">
                    Same day shipping for orders placed before 3pm EST
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Price Match", detail: "Best value guaranteed" },
              { label: "Secure Payment", detail: "Encrypted checkout" },
              { label: "7-Day Returns", detail: "Hassle-free policy" },
              { label: "Refer a Friend", detail: "Rewards for you both" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[var(--color-paper-3)] bg-[var(--color-paper)] p-4 text-center"
              >
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-[var(--color-ink-faint)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
