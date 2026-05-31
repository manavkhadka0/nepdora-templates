"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { getProductImage, imageUrl } from "@/lib/images";

type ProductImageProps = {
  slug: string;
  name: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
};

export function ProductImage({
  slug,
  name,
  className,
  sizes = "(max-width: 768px) 50vw, 25vw",
  priority = false,
  width = 600,
}: ProductImageProps) {
  const src = getProductImage(slug);

  if (!src) {
    const initials = name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("");
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-[var(--color-accent-muted)] to-[var(--color-paper-3)] font-[family-name:var(--font-display)] text-2xl italic text-[var(--color-accent-soft)]",
          className
        )}
        aria-hidden
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={imageUrl(src, width)}
      alt={name}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover object-center", className)}
    />
  );
}

type RemoteImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
};

export function RemoteImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  width = 800,
}: RemoteImageProps) {
  return (
    <Image
      src={imageUrl(src, width)}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover object-center", className)}
    />
  );
}
