"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const ACCENT_GALLERY = [
  {
    src: "/images/floss-nishikiito-accent-tamamushi-20260710-v3.jpg",
    alt: "Embroidery with iridescent Nishikiito butterflies and floral accents on white linen",
    width: 1400,
    height: 933,
  },
  {
    src: "/images/floss-nishikiito-accent-hoop-card-20260710-v3.jpg",
    alt: "Nishikiito embroidery on a card case and floral hoop on pink tulle",
    width: 1400,
    height: 934,
  },
  {
    src: "/images/floss-nishikiito-accent-stitch-flower-20260710-v3.jpg",
    alt: "Floral embroidery with metallic Nishikiito thread spelling Stitch on white linen",
    width: 1400,
    height: 933,
  },
] as const;

export default function NishikiitoAccentGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? ACCENT_GALLERY[activeIndex] : null;

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close]);

  return (
    <>
      <div className="floss-nishikiito-accent-gallery">
        {ACCENT_GALLERY.map((item, index) => (
          <figure
            key={item.src}
            className="floss-nishikiito-accent-gallery-item floss-nishikiito-accent-gallery-item--zoomable"
          >
            <button
              type="button"
              className="floss-nishikiito-accent-gallery-trigger"
              onClick={() => setActiveIndex(index)}
              aria-label={`View larger: ${item.alt}`}
            >
              <div className="floss-nishikiito-accent-gallery-media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width:720px) 100vw, 33vw"
                  className="floss-nishikiito-accent-gallery-img"
                />
              </div>
            </button>
          </figure>
        ))}
      </div>

      {activeItem ? (
        <div
          className="sashiko-lightbox floss-nishikiito-accent-lightbox"
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
                src={activeItem.src}
                alt={activeItem.alt}
                width={activeItem.width}
                height={activeItem.height}
                sizes="(max-width:1400px) 100vw, 1400px"
                className="sashiko-lightbox-img"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
