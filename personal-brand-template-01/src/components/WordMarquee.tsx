import { MARQUEE_WORDS } from "@/lib/content";

function MarqueeRow({ rtl = false }: { rtl?: boolean }) {
  const words = MARQUEE_WORDS.map((word, i) => (
    <span key={`${word}-${i}`}>
      {word}
      <span className="word-marquee__sep" aria-hidden="true">
        {" "}
        ✦{" "}
      </span>
    </span>
  ));

  return (
    <div
      className={`word-marquee__track${rtl ? " word-marquee__track--rtl" : ""}`}
      aria-hidden="true"
    >
      <div className="word-marquee__content">{words}</div>
      <div className="word-marquee__content">{words}</div>
    </div>
  );
}

export function WordMarquee() {
  return (
    <section className="word-marquee" aria-label="Core values">
      <MarqueeRow />
      <MarqueeRow rtl />
    </section>
  );
}
