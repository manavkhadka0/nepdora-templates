import { assetUrl } from "@/lib/content";

type Domain = {
  num: string;
  title: string;
  description: string;
  image: string;
};

export function DomainSteps({ domains }: { domains: readonly Domain[] }) {
  return (
    <div className="step-sequence">
      {domains.map((domain) => (
        <article key={domain.num} className="step">
          <span className="step__num">{domain.num}</span>
          <div>
            <h3 className="step__title">{domain.title}</h3>
            <p className="step__desc">{domain.description}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="step__media"
              src={assetUrl(domain.image)}
              alt=""
              loading="lazy"
              width={448}
              height={252}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
