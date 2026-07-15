"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const FINISHES = [
  {
    heading: "Nishiki",
    subtitle: "Round Twist · Approx. 5–6 Count · 18 Colors",
    hero: "The most traditional metallic finish in the collection.",
    body:
      "Metallic film is tightly wound around the core to create a **refined, understated sheen** with controlled reflection. A vacuum-steam straightening process helps maintain smooth handling during stitching.\n\nSelected colors feature genuine silver film, while colors 18–23 combine genuine silver with laminated Mino washi for added durability.",
    recommendedLead: "",
    recommended: [
      "Decorative embroidery",
      "Tatting",
      "Tassels",
    ],
    img: "/images/floss-nishikiito-nishiki-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Nishiki round-twist metallic embroidery thread spools",
    material: "Nylon / Polyester / Metallic Film",
    brightness: 1.12,
    workImg: "/images/floss-nishikiito-work-nishiki-tatting-20260715.png",
    workWidth: 565,
    workHeight: 390,
    workAlt: "Tatting lace snowflake made with Nishiki metallic thread in color 06 Asagi",
    workCaption: "Tatting lace",
  },
  {
    heading: "Mirror",
    subtitle: "Tasuki Twisted · Approx. 14 Count · 6 Colors",
    hero: "The brightest, most reflective finish in the collection.",
    body:
      "Two metallic threads are twisted together to create crisp, **high-impact brilliance** while remaining smooth enough to glide repeatedly through fabric. Ideal when bold metallic highlights are an essential part of the design.",
    recommendedLead: "",
    recommended: [
      "Cross stitch",
      "Dense embroidery",
      "Metallic accents",
    ],
    img: "/images/floss-nishikiito-mirror-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Mirror Tasuki Twisted metallic embroidery thread spools",
    material: "100% Nylon",
    brightness: 1.0,
    workImg: "/images/floss-nishikiito-work-mirror-xstitch-detail-20260715.png",
    workWidth: 332,
    workHeight: 249,
    workAlt: "Cross-stitch Christmas wreath detail showing Mirror thread accent on ribbon and bells",
    workCaption: "Paired with COSMO No. 25",
  },
  {
    heading: "Iridescent",
    subtitle: "Tasuki Twisted · Approx. 11 Count · 12 Colors",
    hero: "Soft color that shifts with the light.",
    body:
      "A semi-transparent metallic film creates delicate, **opal-like reflections** that change with the viewing angle. Instead of strong sparkle, it adds subtle depth and movement that evolve as the light changes.",
    recommendedLead: "",
    recommended: [
      "Floral embroidery",
      "Decorative accents",
      "Delicate motifs",
    ],
    img: "/images/floss-nishikiito-iridescent-spools-20260715.jpg",
    width: 1024,
    height: 767,
    alt: "Iridescent Tasuki Twisted metallic embroidery thread spools",
    material: "100% Polyester",
    brightness: 1.0,
    workImg: "/images/floss-nishikiito-work-iridescent-ornament-20260715.png",
    workWidth: 1000,
    workHeight: 1000,
    workAlt: "Heart-shaped ornament with bullion-stitch flowers embroidered using Iridescent metallic thread",
    workCaption: "Bullion-stitch ornament",
  },
  {
    heading: "Champagni",
    subtitle: "Tasuki Twisted · Approx. 10 Count · 6 Colors",
    hero: "Gentle metallic sparkle in pastel tones.",
    body:
      "Inspired by the fine bubbles of champagne, this finish scatters **delicate metallic highlights** through soft pastel colors. Its cupro blend provides a silky hand for smooth, comfortable stitching during extended projects.",
    recommendedLead: "",
    recommended: [
      "Botanical embroidery",
      "Pastel designs",
      "Everyday accessories",
    ],
    img: "/images/floss-nishikiito-champagni-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Champagni Tasuki Twisted metallic embroidery thread spools in pastel tones",
    material: "81% Cupro / 19% Polyester",
    brightness: 1.02,
    workImg: "/images/floss-nishikiito-work-champagni-pincushions-20260715.png",
    workWidth: 380,
    workHeight: 380,
    workAlt: "Six pastel pin cushions embroidered with Champagni metallic thread in various stitch patterns",
    workCaption: "Pastel pin cushions",
  },
  {
    heading: "Neoni",
    subtitle: "Tasuki Twisted · Approx. 25 Count · 6 Colors",
    hero: "Maximum visibility with fluorescent color.",
    body:
      "Designed to **stand out immediately**, even in small amounts. Ultra-fine fluorescent strands create vivid accents, while multiple strands can be combined to adjust both thickness and visual impact.",
    recommendedLead: "",
    recommended: [
      "Contemporary embroidery",
      "High-contrast accents",
      "Children\u2019s projects",
    ],
    img: "/images/floss-nishikiito-neoni-spools-20260715.jpg",
    width: 1024,
    height: 768,
    alt: "Neoni Tasuki Twisted metallic embroidery thread in vivid fluorescent shades",
    material: "100% Polyester",
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
              <div
                className="floss-nishikiito-series-body"
                dangerouslySetInnerHTML={{
                  __html: item.body
                    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                    .split("\n\n")
                    .map((p) => `<p>${p}</p>`)
                    .join(""),
                }}
              />
              <div className="floss-nishikiito-series-recommended">
                <span className="floss-nishikiito-series-recommended-label">
                  Best for
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
