import { assetUrl } from "@/lib/content";

export function StageGallery({
  images,
}: {
  images: readonly string[];
}) {
  return (
    <div className="stage-gallery">
      {images.map((src, i) => (
        <figure key={src} className="stage-gallery__item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetUrl(src)}
            alt={`Live stage moment ${String(i + 1).padStart(2, "0")}`}
            loading="lazy"
            width={400}
            height={500}
          />
          <figcaption className="stage-gallery__label">
            {String(i + 1).padStart(2, "0")} / LIVE
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
