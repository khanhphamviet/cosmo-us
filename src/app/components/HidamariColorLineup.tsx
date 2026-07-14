"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type MediaItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type MediaPair = {
  chart: MediaItem;
  display: MediaItem & { caption: string };
};

type LineupGroup = {
  id: string;
  title: string;
  description: string;
  pairs: MediaPair[];
};

const GROUPS: LineupGroup[] = [
  {
    id: "1-40",
    title: "Solid Colors 1–40",
    description:
      "Classic and contemporary solids — the first two retail boards in the color lineup.",
    pairs: [
      {
        chart: {
          src: "/images/sashiko-hidamari-color-chart-1-20-20260714.jpg",
          alt: "Hidamari sashiko thread color chart solid colors 1 through 20",
          width: 1063,
          height: 701,
        },
        display: {
          src: "/images/sashiko-hidamari-display-141-20260714.jpg",
          alt: "Retail display of hidamari solid colors 1–20",
          width: 529,
          height: 1024,
          caption: "Retail display · Solid 1–20",
        },
      },
      {
        chart: {
          src: "/images/sashiko-hidamari-color-chart-21-40-20260714.jpg",
          alt: "Hidamari sashiko thread color chart solid colors 21 through 40",
          width: 1063,
          height: 701,
        },
        display: {
          src: "/images/sashiko-hidamari-display-143-20260714.jpg",
          alt: "Retail display of hidamari solid colors 21–40",
          width: 531,
          height: 1024,
          caption: "Retail display · Solid 21–40",
        },
      },
    ],
  },
  {
    id: "101-405",
    title: "Variegated Colors 101–405",
    description:
      "Patterned color families — four rows that map to the third retail board.",
    pairs: [
      {
        chart: {
          src: "/images/sashiko-hidamari-color-chart-101-405-20260714-v2.jpg",
          alt: "Hidamari sashiko thread color chart patterned colors 101 through 405",
          width: 1063,
          height: 680,
        },
        display: {
          src: "/images/sashiko-hidamari-display-139-20260714.jpg",
          alt: "Retail display of hidamari patterned colors 101–405",
          width: 524,
          height: 1024,
          caption: "Retail display · 101–405",
        },
      },
    ],
  },
];

export default function HidamariColorLineup() {
  const [active, setActive] = useState<MediaItem | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
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

  useEffect(() => {
    if (!active || !scrollerRef.current) return;
    const el = scrollerRef.current;
    requestAnimationFrame(() => {
      el.scrollLeft = Math.max(0, (el.scrollWidth - el.clientWidth) / 2);
      el.scrollTop = Math.max(0, (el.scrollHeight - el.clientHeight) / 2);
    });
  }, [active]);

  return (
    <>
      <div className="hidamari-color-lineup">
        {GROUPS.map((group) => (
          <section
            key={group.id}
            className="hidamari-color-pair"
            aria-labelledby={`hidamari-color-${group.id}`}
          >
            <div className="hidamari-color-pair-copy">
              <h3
                className="hidamari-color-pair-title"
                id={`hidamari-color-${group.id}`}
              >
                {group.title}
              </h3>
              <p className="hidamari-color-pair-text">{group.description}</p>
            </div>

            <div className="hidamari-color-pair-stacks">
              {group.pairs.map((pair) => (
                <div
                  key={pair.display.src}
                  className="hidamari-color-pair-grid"
                >
                  <figure className="hidamari-color-pair-figure">
                    <button
                      type="button"
                      className="hidamari-color-pair-trigger"
                      onClick={() => setActive(pair.display)}
                      aria-label={`Enlarge retail display: ${pair.display.caption}`}
                    >
                      <Image
                        src={pair.display.src}
                        alt={pair.display.alt}
                        width={pair.display.width}
                        height={pair.display.height}
                        sizes="(max-width:900px) 70vw, 32vw"
                        className="hidamari-color-pair-img"
                      />
                      <span className="hidamari-color-pair-hint">
                        Click to enlarge
                      </span>
                    </button>
                    <figcaption className="hidamari-color-pair-caption">
                      {pair.display.caption}
                    </figcaption>
                  </figure>

                  <figure className="hidamari-color-pair-figure">
                    <button
                      type="button"
                      className="hidamari-color-pair-trigger"
                      onClick={() => setActive(pair.chart)}
                      aria-label={`Enlarge chart: ${group.title}`}
                    >
                      <Image
                        src={pair.chart.src}
                        alt={pair.chart.alt}
                        width={pair.chart.width}
                        height={pair.chart.height}
                        sizes="(max-width:900px) 100vw, 55vw"
                        className="hidamari-color-pair-img"
                      />
                      <span className="hidamari-color-pair-hint">
                        Click to enlarge
                      </span>
                    </button>
                    <figcaption className="hidamari-color-pair-caption">
                      Official color chart
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {active ? (
        <div
          className="floss-cosmo-chart-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <div
            className="floss-cosmo-chart-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="floss-cosmo-chart-lightbox-toolbar">
              <p className="floss-cosmo-chart-lightbox-hint">
                Scroll to pan · Esc to close
              </p>
              <div className="floss-cosmo-chart-lightbox-controls">
                <button
                  type="button"
                  className="floss-cosmo-chart-zoom-btn floss-cosmo-chart-zoom-btn--text"
                  onClick={close}
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>
            <div
              ref={scrollerRef}
              className="floss-cosmo-chart-lightbox-scroller"
            >
              <div
                className={[
                  "floss-cosmo-chart-lightbox-canvas",
                  "hidamari-color-lightbox-canvas",
                  active.height > active.width
                    ? "hidamari-color-lightbox-canvas--portrait"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={active.width}
                  height={active.height}
                  className="floss-cosmo-chart-lightbox-img"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
