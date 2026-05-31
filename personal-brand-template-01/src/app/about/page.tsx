import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { ABOUT, JOURNEY, JOURNEY_SIDEBAR } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-intro">
        <div className="container">
          <SectionHead
            eyebrow={ABOUT.eyebrow}
            title={ABOUT.title}
            description={ABOUT.subtitle}
            hanging
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="prose">
              {ABOUT.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--bleed">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Chapter 06 / Arc"
              title="The long walk, chapter by chapter."
            />
          </Reveal>
          <div className="journey-grid">
            <Reveal>
              <div className="step-sequence">
                {JOURNEY.map((chapter) => (
                  <article key={chapter.num} className="step">
                    <span className="step__num">{chapter.num}</span>
                    <div>
                      <h3 className="step__title">{chapter.title}</h3>
                      <p className="step__desc">{chapter.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <aside className="journey-sidebar" aria-label="Journey highlights">
                {JOURNEY_SIDEBAR.map((item) => (
                  <div key={item.chapter} className="journey-sidebar__item">
                    <p className="journey-sidebar__chapter">{item.chapter}</p>
                    <h3 className="journey-sidebar__title">{item.title}</h3>
                    <p className="journey-sidebar__desc">{item.description}</p>
                  </div>
                ))}
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
