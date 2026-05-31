"use client";

import { useEffect, useRef } from "react";

export function useParallax(speed = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    let frame = 0;

    function update() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewCenter = window.innerHeight * 0.5;
      const elCenter = rect.top + rect.height * 0.5;
      const delta = (elCenter - viewCenter) * speed;
      el.style.transform = `translate3d(0, ${delta}px, 0)`;
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed]);

  return ref;
}
