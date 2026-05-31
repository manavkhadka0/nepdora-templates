import Link from "next/link";

type Program = {
  num: string;
  title: string;
  description: string;
};

export function ProgramGrid({
  programs,
  limit,
}: {
  programs: readonly Program[];
  limit?: number;
}) {
  const items = limit ? programs.slice(0, limit) : programs;

  return (
    <div className="program-grid">
      {items.map((program) => (
        <article key={program.num} className="program-card">
          <span className="program-card__num">{program.num}</span>
          <h3 className="program-card__title">{program.title}</h3>
          <p className="program-card__desc">{program.description}</p>
          <Link href="/contact" className="program-card__link">
            Enquire →
          </Link>
        </article>
      ))}
    </div>
  );
}
