import Link from "next/link";
import { ABOUT, assetUrl, HERO, HERO_BACKGROUND } from "@/lib/content";

export function HomeHero() {
  return (
    <section className="hero hero--home hero--photo">
      <div className="hero__media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero__bg"
          src={assetUrl(HERO_BACKGROUND)}
          alt=""
          loading="eager"
          width={1920}
          height={1080}
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__main">
        <div className="container hero__inner">
          <p className="hero__eyebrow">{HERO.eyebrow}</p>
          <h1 className="hero__title">
            Saunak <em>Bhatta</em>
          </h1>
          <p className="hero__subhead">{HERO.subhead}</p>
          <div className="hero__actions">
            <Link href="/contact" className="hero__cta hero__cta--primary">
              Hire Saunak
            </Link>
            <Link href="/programs" className="hero__cta hero__cta--ghost">
              View programs
            </Link>
          </div>
          <hr className="hero__rule" aria-hidden="true" />
        </div>
      </div>

      <div className="hero__about-band">
        <div className="container hero__about-snippet">
          <p className="hero__about-label">{ABOUT.eyebrow}</p>
          <p className="hero__about-text">{ABOUT.body[0]}</p>
        </div>
      </div>
    </section>
  );
}
