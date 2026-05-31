import type { Metadata } from "next";
import Link from "next/link";
import { PressWall } from "@/components/PressWall";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { PRESS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Press",
};

export default function PressPage() {
  return (
    <>
      <div className="page-intro">
        <div className="container">
          <SectionHead
            eyebrow="Interlude / Echoes"
            title="In the press."
            description="Echoes from the rooms, papers and channels along the way."
            hanging
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <blockquote className="press-quote">
              &ldquo;{PRESS[1].quote}&rdquo;
            </blockquote>
            <p className="press-attribution">— {PRESS[1].outlet}</p>
          </Reveal>
          <Reveal>
            <PressWall items={PRESS} />
          </Reveal>
          <Reveal>
            <p className="press-band">Featured · Interviewed · Honoured</p>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="cta-link">
              Book Saunak for your event →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
