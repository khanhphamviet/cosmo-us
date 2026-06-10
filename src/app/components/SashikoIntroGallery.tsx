"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type SashikoGalleryItem = {
  img: string;
  alt: string;
  width: number;
  height: number;
};

export default function SashikoIntroGallery({
  items,
}: {
  items: SashikoGalleryItem[];
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close]);

  const activeItem = active !== null ? items[active] : null;

  return (
    <>
      <div
        className="sashiko-intro-gallery"
        aria-label="Projects made with hidamari sashiko thread"
      >
        {items.map((item, index) => (
          <button
            key={item.img}
            type="button"
            className="sashiko-gallery-item"
            onClick={() => setActive(index)}
            aria-label={`View larger: ${item.alt}`}
          >
            <Image
              src={item.img}
              alt={item.alt}
              fill
              sizes="(max-width:640px) 50vw, 20vw"
              className="sashiko-gallery-img"
            />
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="sashiko-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
          onClick={close}
        >
          <div
            className="sashiko-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="sashiko-lightbox-close"
              onClick={close}
              aria-label="Close"
            >
              ×
            </button>
            <div className="sashiko-lightbox-media">
              <Image
                src={activeItem.img}
                alt={activeItem.alt}
                width={activeItem.width}
                height={activeItem.height}
                sizes="(max-width:1024px) 100vw, 1024px"
                className="sashiko-lightbox-img"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
