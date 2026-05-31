import { HERO } from "@/lib/content";

export function HeroMarquee() {
  const parts = HERO.headline.split(" ");

  return (
    <section className="hero">
      <div className="container">
        <p className="hero__eyebrow">{HERO.eyebrow}</p>
        <h1 className="hero__title">
          {parts[0]} <em>{parts.slice(1).join(" ")}</em>
        </h1>
        <p className="hero__subhead">{HERO.subhead}</p>
        <hr className="hero__rule" aria-hidden="true" />
      </div>
    </section>
  );
}
