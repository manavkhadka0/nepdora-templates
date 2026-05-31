import type { Metadata } from "next";
import Link from "next/link";
import { DomainSteps } from "@/components/DomainSteps";
import { ProgramGrid } from "@/components/ProgramGrid";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { COURSE, DOMAINS, PROGRAMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
};

export default function ProgramsPage() {
  return (
    <>
      <div className="page-intro">
        <div className="container">
          <SectionHead
            eyebrow="Chapter 03 / Practice"
            title="Seven Domains."
            hanging
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <DomainSteps domains={DOMAINS} />
          </Reveal>
        </div>
      </section>

      <section className="section section--bleed">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Interlude / Offering"
              title="Signature Programs."
              description="Four doorways into the work — pick the one that meets your moment."
            />
          </Reveal>
          <Reveal>
            <ProgramGrid programs={PROGRAMS} />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="course-banner">
              <div>
                <h2 className="course-banner__title">{COURSE.title}</h2>
                <p className="course-banner__subtitle">{COURSE.subtitle}</p>
              </div>
              <Link href="/contact" className="cta-link">
                {COURSE.cta} →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
