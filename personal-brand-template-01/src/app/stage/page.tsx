import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { StageGallery } from "@/components/StageGallery";
import {
  assetUrl,
  MINDFULNESS,
  STAGE,
  VIDEOS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Stage",
};

export default function StagePage() {
  return (
    <>
      <section className="stage-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="stage-hero__image"
          src={assetUrl(STAGE.images[0])}
          alt=""
          width={1920}
          height={1080}
        />
        <div className="stage-hero__overlay">
          <SectionHead
            eyebrow={STAGE.eyebrow}
            title={STAGE.title}
            description={STAGE.description}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <StageGallery images={STAGE.images} />
          </Reveal>
        </div>
      </section>

      <section className="section section--bleed">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Chapter 05 / Watch"
              title="Lean in closer."
              description="Learn and grow. Learning and growing is a process. The more you learn, the more you grow."
            />
          </Reveal>
          <Reveal>
            <div className="video-grid">
              {VIDEOS.map((video) => (
                <article key={video.title} className="video-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="video-card__thumb"
                    src={assetUrl(video.image)}
                    alt=""
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                  <h3 className="video-card__title">{video.title}</h3>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--gold">
        <div className="container">
          <Reveal>
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
