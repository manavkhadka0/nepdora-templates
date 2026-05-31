import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";
import { assetUrl, HOME_DOMAIN_PREVIEW, VIDEOS } from "@/lib/content";

export function HomeDomainBento() {
  return (
    <section className="section section--bleed home-domains">
      <div className="container">
        <ScrollReveal>
          <header className="section-head">
            <p className="section-head__eyebrow">Chapter 03 / Practice</p>
            <h2 className="section-head__title">Seven Domains.</h2>
            <p className="section-head__desc">
              Training, stage, meditation, video, writing, courses, coaching —
              one walker, many doorways.
            </p>
          </header>
        </ScrollReveal>

        <div className="domain-grid">
          {HOME_DOMAIN_PREVIEW.map((domain, i) => (
            <ScrollReveal key={domain.num} delay={i * 70}>
              <article className="domain-card">
                <Link href="/programs" className="domain-card__link">
                  <div className="domain-card__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={assetUrl(domain.image)}
                      alt={domain.title}
                      loading="lazy"
                      width={640}
                      height={400}
                    />
                  </div>
                  <div className="domain-card__body">
                    <span className="domain-card__num">{domain.num}</span>
                    <h3 className="domain-card__title">{domain.title}</h3>
                    <p className="domain-card__desc">{domain.description}</p>
                    <span className="domain-card__action">Explore →</span>
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <p className="section-cta">
            <Link href="/programs" className="cta-link">
              See all seven domains →
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function HomeVideoRow() {
  return (
    <section className="section home-videos">
      <div className="container">
        <ScrollReveal>
          <header className="section-head">
            <p className="section-head__eyebrow">Chapter 05 / Watch</p>
            <h2 className="section-head__title">Lean in closer.</h2>
            <p className="section-head__desc">
              Learning and growing is a process. The more you learn, the more
              you grow.
            </p>
          </header>
        </ScrollReveal>

        <div className="home-videos__grid">
          {VIDEOS.map((video, i) => (
            <ScrollReveal key={video.title} delay={i * 90}>
              <TiltCard className="home-videos__card">
                <Link href="/stage" className="home-videos__link">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="home-videos__thumb"
                    src={assetUrl(video.image)}
                    alt=""
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                  <h3 className="home-videos__title">{video.title}</h3>
                  <span className="home-videos__play" aria-hidden="true">
                    ▶
                  </span>
                </Link>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
