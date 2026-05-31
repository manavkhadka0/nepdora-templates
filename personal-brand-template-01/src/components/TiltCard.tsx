"use client";

import { useCallback, useRef } from "react";

export function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(var(--perspective-depth)) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }, []);

  const onMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(var(--perspective-depth)) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale3d(1.03, 1.03, 1.03)`;
  }, []);

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`.trim()}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerEnter={onMove}
    >
      {children}
    </div>
  );
}
