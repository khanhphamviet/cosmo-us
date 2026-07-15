"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const FINISHES = [
  {
    heading: "Nishiki",
    subtitle: "round twist · 18 colors",
    body:
      "Known for its subdued luster and resistance to friction—the finish often used on kimono obi.",
    recommended:
      "Tatting lace and tassels; strands can be separated one at a time from the 4-strand twist.",
    img: "/images/floss-nishikiito-nishiki-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Nishiki round-twist metallic embroidery thread spools",
    length: "Approx. 22 yd (20 m) per spool",
    thickness: "5 to 6 count (approx.)",
    material:
      "Colors 2–4: 59% nylon, 41% polyester · Colors 5–16: 62% nylon, 38% polyester · Colors 18–23: 57% polyester, 43% nylon",
  },
  {
    heading: "Mirror",
    subtitle: "Tasuki Twisted · 6 colors",
    body:
      "The twist structure and generous metallic content create a strong sparkle and a striking, high-impact finish with a soft hand.",
    recommended: "Cross-stitch and free-stitch embroidery.",
    img: "/images/floss-nishikiito-mirror-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Mirror Tasuki Twisted metallic embroidery thread spools",
    length: "Approx. 22 yd (20 m) per spool",
    thickness: "14 count (approx.)",
    material: "100% nylon",
  },
  {
    heading: "Iridescent",
    subtitle: "Tasuki Twisted · 12 colors",
    body:
      "Film-like texture with opalescent, multicolor reflections. Semi-transparent, allowing light to pass through faintly for a nuance unlike any other thread.",
    recommended:
      "Accent embroidery and decorative highlights where you want iridescent color shift.",
    img: "/images/floss-nishikiito-iridescent-spools-20260715.jpg",
    width: 1024,
    height: 767,
    alt: "Iridescent Tasuki Twisted metallic embroidery thread spools",
    length: "Approx. 22 yd (20 m) per spool",
    thickness: "11 count (approx.)",
    material: "100% polyester",
  },
  {
    heading: "Champagni",
    subtitle: "Tasuki Twisted · 6 colors",
    body:
      "Pastel tones with gentle sparkles like champagne bubbles. Soft and smooth in the hand for comfortable, extended stitching.",
    recommended: "Smooth hand embroidery and flowing pastel accent work.",
    img: "/images/floss-nishikiito-champagni-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Champagni Tasuki Twisted metallic embroidery thread spools in pastel tones",
    length: "Approx. 22 yd (20 m) per spool",
    thickness: "10 count (approx.)",
    material: "81% cupro, 19% polyester",
  },
  {
    heading: "Neoni",
    subtitle: "Tasuki Twisted · 6 colors",
    body:
      "Eye-catching fluorescent colors with dramatic impact even in small amounts. Extra-fine strands for precise control.",
    recommended:
      "Bold accents and high-impact highlights; divide to the ply count you prefer.",
    img: "/images/floss-nishikiito-neoni-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Neoni Tasuki Twisted metallic embroidery thread in vivid fluorescent shades",
    length: "Approx. 54 yd (50 m) per spool",
    thickness: "25 count (approx.)",
    material: "100% polyester",
  },
] as const;

export default function NishikiitoSeriesBlock() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? FINISHES[activeIndex] : null;

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
      <div className="floss-nishikiito-series-block">
        <div className="sashiko-concepts floss-nishikiito-series-grid">
          {FINISHES.map((item, index) => (
            <article key={item.heading} className="floss-nishikiito-series-card">
              <button
                type="button"
                className="floss-nishikiito-series-trigger"
                onClick={() => setActiveIndex(index)}
                aria-label={`View larger: ${item.alt}`}
              >
                <div className="floss-nishikiito-series-media">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 20vw"
                    className="floss-nishikiito-series-img"
                  />
                </div>
              </button>
              <h3 className="sashiko-concept-title">{item.heading}</h3>
              <p className="sashiko-concept-subtitle">{item.subtitle}</p>
              <p className="sashiko-concept-body">{item.body}</p>
              <p className="floss-nishikiito-series-recommended">
                <span className="floss-nishikiito-series-recommended-label">
                  Recommended for
                </span>{" "}
                {item.recommended}
              </p>
              <dl className="floss-nishikiito-series-specs">
                <div>
                  <dt>Length</dt>
                  <dd>{item.length}</dd>
                </div>
                <div>
                  <dt>Thickness</dt>
                  <dd>{item.thickness}</dd>
                </div>
                <div>
                  <dt>Material</dt>
                  <dd>{item.material}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="sashiko-lightbox floss-nishikiito-series-lightbox"
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
                unoptimized
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
