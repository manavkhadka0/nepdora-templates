"use client";

import { useEffect, useRef, useState } from "react";
import { STATS, type StatFormat } from "@/lib/content";
import { formatStatValue } from "@/lib/format-stat";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function StatItem({
  value,
  suffix,
  label,
  format,
  active,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  format: StatFormat;
  active: boolean;
  index: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1800 + index * 120;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(easeOutCubic(progress) * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [active, value, index]);

  return (
    <article className="stat-strip__item">
      <p className="stat-strip__value" aria-live="polite">
        {formatStatValue(display, suffix, format)}
      </p>
      <p className="stat-strip__label">{label}</p>
      <span className="stat-strip__shine" aria-hidden="true" />
    </article>
  );
}

export function StatStrip() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stat-strip stat-strip--interactive" ref={ref} aria-label="Impact statistics">
      <div className="container">
        <div className="stat-strip__grid">
          {STATS.map((stat, index) => (
            <StatItem key={stat.label} {...stat} active={active} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
