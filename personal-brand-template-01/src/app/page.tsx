import type { Metadata } from "next";
import Link from "next/link";
import { HomeAboutSplit, HomeStagePreview } from "@/components/HomeSections";
import { HomeDomainBento, HomeVideoRow } from "@/components/HomeMedia";
import { HomeHero } from "@/components/HomeHero";
import { PressWall } from "@/components/PressWall";
import { ProgramGrid } from "@/components/ProgramGrid";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHead } from "@/components/SectionHead";
import { StatStrip } from "@/components/StatStrip";
import { WordMarquee } from "@/components/WordMarquee";
import { MINDFULNESS, PRESS, PROGRAMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatStrip />
      <WordMarquee />

      <HomeAboutSplit />
      <HomeStagePreview />
      <HomeDomainBento />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHead
              eyebrow="Interlude / Offering"
              title="Signature Programs."
              description="Four doorways into the work — pick the one that meets your moment."
            />
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <ProgramGrid programs={PROGRAMS} />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="section-cta">
              <Link href="/programs" className="cta-link">
                Explore all domains →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <HomeVideoRow />

      <section className="section section--bleed">
        <div className="container">
          <ScrollReveal>
            <SectionHead
              eyebrow="Interlude / Echoes"
              title="In the press."
              description="Echoes from the rooms, papers and channels along the way."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <blockquote className="press-quote press-quote--home">
              &ldquo;{PRESS[1].quote}&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <PressWall items={PRESS} />
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <p className="press-band">Featured · Interviewed · Honoured</p>
            <p className="section-cta">
              <Link href="/press" className="cta-link">
                Read all coverage →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--gold">
        <div className="container">
          <ScrollReveal>
            <div className="mindfulness" aria-label="Mindfulness interlude">
              {MINDFULNESS.lines.map((line, i) => (
                <p
                  key={line}
                  className={`mindfulness__line${i === 2 ? " mindfulness__line--gold" : ""}`}
                >
                  {line}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--accent home-hire">
        <div className="container">
          <ScrollReveal>
            <SectionHead
              eyebrow="Final Chapter"
              title="Hire Saunak."
              description="For your training, seminar, coaching — or anything that uplifts a story of life."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link href="/contact" className="cta-link cta-link--on-accent">
              Begin a chapter →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
