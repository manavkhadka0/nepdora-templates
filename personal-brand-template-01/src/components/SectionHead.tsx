export function SectionHead({
  eyebrow,
  title,
  description,
  hanging = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  hanging?: boolean;
}) {
  return (
    <header
      className={`section-head${hanging ? " section-head--hanging" : ""}`}
    >
      {eyebrow ? <p className="section-head__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-head__title">{title}</h2>
      {description ? (
        <p className="section-head__desc">{description}</p>
      ) : null}
    </header>
  );
}
