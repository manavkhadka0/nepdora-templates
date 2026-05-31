import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="section section--accent">
        <div className="container">
          <SectionHead
            eyebrow={CONTACT.eyebrow}
            title={CONTACT.title}
            description={CONTACT.description}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
