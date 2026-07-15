"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const FINISHES = [
  {
    heading: "Nishiki",
    subtitle: "round twist · approx. 5–6 count · 18 colors",
    hero: "The most traditional metallic finish in the collection.",
    body:
      "Metallic film wound tightly around the core produces a **refined, understated shine** with controlled reflection—ideal when the thread itself is meant to remain visible. A vacuum-steam straightening process ensures kink-free handling. Colors 2–4 use genuine silver film; colors 18–23 feature genuine silver laminated with Mino washi for lasting strength.",
    recommendedLead: "Refined elegance in every stitch",
    recommended: [
      "Decorative embroidery",
      "Tatting",
      "Kumihimo",
      "Tassels",
    ],
    img: "/images/floss-nishikiito-nishiki-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Nishiki round-twist metallic embroidery thread spools",
    material: "Nylon / polyester / metallic film",
    brightness: 1.12,
    workImg: "/images/floss-nishikiito-work-nishiki-tatting-20260715.png",
    workWidth: 565,
    workHeight: 390,
    workAlt: "Tatting lace snowflake made with Nishiki metallic thread in color 06 Asagi",
    workCaption: "Tatting lace — 06 Asagi",
  },
  {
    heading: "Mirror",
    subtitle: "tasuki twisted · approx. 14 count · 6 colors",
    hero: "The brightest, most reflective finish in the collection.",
    body:
      "Crossing two metallic threads produces a **brilliant, high-impact sparkle** while keeping the surface slippery enough to pull through fabric repeatedly—perfect for projects with many stitches.",
    recommendedLead: "Maximum brilliance where it counts",
    recommended: [
      "Cross-stitch",
      "Dense embroidery",
      "Crisp metallic highlights",
    ],
    img: "/images/floss-nishikiito-mirror-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Mirror Tasuki Twisted metallic embroidery thread spools",
    material: "100% nylon",
    brightness: 1.0,
    workImg: "/images/floss-nishikiito-work-mirror-xstitch-detail-20260715.png",
    workWidth: 332,
    workHeight: 249,
    workAlt: "Cross-stitch Christmas wreath detail showing Mirror thread accent on ribbon and bells",
    workCaption: "Paired with COSMO No. 25",
  },
  {
    heading: "Iridescent",
    subtitle: "tasuki twisted · approx. 11 count · 12 colors",
    hero: "Creates soft color shifts that change with the viewing angle.",
    body:
      "Semi-transparent film produces **opal-like multi-color reflections** rather than direct sparkle—adding a delicate, ever-shifting nuance that no solid-color metallic can replicate.",
    recommendedLead: "Subtle iridescence for changing light",
    recommended: [
      "Color-shifting accents",
      "Floral embroidery",
      "Delicate motifs",
    ],
    img: "/images/floss-nishikiito-iridescent-spools-20260715.jpg",
    width: 1024,
    height: 767,
    alt: "Iridescent Tasuki Twisted metallic embroidery thread spools",
    material: "100% polyester",
    brightness: 1.0,
    workImg: "/images/floss-nishikiito-work-iridescent-ornament-20260715.png",
    workWidth: 1000,
    workHeight: 1000,
    workAlt: "Heart-shaped ornament with bullion-stitch flowers embroidered using Iridescent metallic thread",
    workCaption: "Bullion-stitch ornament",
  },
  {
    heading: "Champagni",
    subtitle: "tasuki twisted · approx. 10 count · 6 colors",
    hero: "Gentle metallic accents in pastel tones.",
    body:
      "Fine sparkles scattered through soft pastels like champagne bubbles, adding **quiet elegance without overpowering** the surrounding embroidery. The cupro-blend hand feels silky, making extended stitching effortless.",
    recommendedLead: "Softness that enhances without competing",
    recommended: [
      "Botanical embroidery",
      "Pastel-palette designs",
      "Everyday accessories",
    ],
    img: "/images/floss-nishikiito-champagni-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Champagni Tasuki Twisted metallic embroidery thread spools in pastel tones",
    material: "81% cupro, 19% polyester",
    brightness: 1.02,
    workImg: "/images/floss-nishikiito-work-champagni-pincushions-20260715.png",
    workWidth: 380,
    workHeight: 380,
    workAlt: "Six pastel pin cushions embroidered with Champagni metallic thread in various stitch patterns",
    workCaption: "Pastel pin cushions",
  },
  {
    heading: "Neoni",
    subtitle: "tasuki twisted · approx. 25 count · 6 colors",
    hero: "Maximum visibility with fluorescent color.",
    body:
      "Designed to **stand out immediately**, even in small amounts. Ultra-fine fluorescent strands deliver dramatic impact—combine as many plies as you like for custom weight and intensity.",
    recommendedLead: "Bold color that demands attention",
    recommended: [
      "Contemporary embroidery",
      "High-contrast accents",
      "Children\u2019s projects",
    ],
    img: "/images/floss-nishikiito-neoni-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Neoni Tasuki Twisted metallic embroidery thread in vivid fluorescent shades",
    material: "100% polyester",
    brightness: 1.08,
    workImg: "/images/floss-nishikiito-work-neoni-buttons-20260715.png",
    workWidth: 580,
    workHeight: 580,
    workAlt: "Four covered buttons with fluorescent cross-stitch patterns in pink, purple, green, and orange Neoni thread",
    workCaption: "Fluorescent covered buttons",
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
        {FINISHES.map((item, index) => (
          <article key={item.heading} className="floss-nishikiito-series-row">
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
                  sizes="(max-width:640px) 100vw, 280px"
                  className="floss-nishikiito-series-img"
                  style={item.brightness !== 1.0 ? { filter: `brightness(${item.brightness})` } : undefined}
                />
              </div>
            </button>
            <div className="floss-nishikiito-series-text">
              <h3 className="floss-nishikiito-series-heading">{item.heading}</h3>
              <p className="floss-nishikiito-series-subtitle">{item.subtitle}</p>
              <p className="floss-nishikiito-series-hero">{item.hero}</p>
              <p
                className="floss-nishikiito-series-body"
                dangerouslySetInnerHTML={{
                  __html: item.body.replace(
                    /\*\*(.+?)\*\*/g,
                    "<strong>$1</strong>"
                  ),
                }}
              />
              <div className="floss-nishikiito-series-recommended">
                <span className="floss-nishikiito-series-recommended-label">
                  Recommended for
                </span>
                <span className="floss-nishikiito-series-recommended-lead">
                  {item.recommendedLead}
                </span>
                <ul className="floss-nishikiito-series-recommended-list">
                  {item.recommended.map((use) => (
                    <li key={use}>{use}</li>
                  ))}
                </ul>
              </div>
              <dl className="floss-nishikiito-series-specs-dl">
                <dt>Material</dt>
                <dd>{item.material}</dd>
              </dl>
            </div>
            {item.workImg ? (
              <figure className="floss-nishikiito-series-work">
                <Image
                  src={item.workImg}
                  alt={item.workAlt}
                  width={item.workWidth}
                  height={item.workHeight}
                  sizes="(max-width:640px) 50vw, 180px"
                  className="floss-nishikiito-series-work-img"
                />
                <figcaption className="floss-nishikiito-series-work-caption">
                  {item.workCaption}
                </figcaption>
              </figure>
            ) : null}
          </article>
        ))}
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
