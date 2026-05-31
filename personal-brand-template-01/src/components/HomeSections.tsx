import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";
import { ABOUT, assetUrl, HOME_STAGE_PREVIEW, STAGE } from "@/lib/content";

export function HomeStagePreview() {
  return (
    <section className="section section--bleed home-stage">
      <div className="container">
        <ScrollReveal>
          <header className="section-head">
            <p className="section-head__eyebrow">{STAGE.eyebrow}</p>
            <h2 className="section-head__title">{STAGE.title}</h2>
            <p className="section-head__desc">{STAGE.description}</p>
          </header>
        </ScrollReveal>

        <div className="home-stage__grid">
          {HOME_STAGE_PREVIEW.map((src, i) => (
            <ScrollReveal key={src} delay={i * 80}>
              <TiltCard className="home-stage__card">
                <figure className="home-stage__figure">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl(src)}
                    alt={`Live stage moment ${String(i + 1).padStart(2, "0")}`}
                    loading="lazy"
                    width={480}
                    height={600}
                  />
                  <figcaption className="home-stage__caption">
                    {String(i + 1).padStart(2, "0")} / LIVE
                  </figcaption>
                </figure>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <p className="section-cta">
            <Link href="/stage" className="cta-link">
              See the full gallery →
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function HomeAboutSplit() {
  return (
    <section className="section home-about">
      <div className="container home-about__grid">
        <ScrollReveal>
          <TiltCard className="home-about__visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/saunak/coaching.png")}
              alt="Saunak coaching session"
              loading="lazy"
              width={640}
              height={480}
            />
          </TiltCard>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="home-about__content">
            <p className="section-head__eyebrow">{ABOUT.eyebrow}</p>
            <h2 className="section-head__title">{ABOUT.title}</h2>
            <div className="prose">
              {ABOUT.body.slice(1).map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <Link href="/about" className="cta-link section-cta">
              Read the full story →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
