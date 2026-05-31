type PressItem = {
  outlet: string;
  quote: string;
};

export function PressWall({ items }: { items: readonly PressItem[] }) {
  return (
    <div className="press-wall">
      {items.map((item) => (
        <article key={item.outlet} className="press-wall__item">
          <p className="press-wall__outlet">{item.outlet}</p>
          <p className="press-wall__quote">&ldquo;{item.quote}&rdquo;</p>
        </article>
      ))}
    </div>
  );
}
