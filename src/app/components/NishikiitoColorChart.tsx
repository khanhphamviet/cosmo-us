"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type ChartItem = {
  id: string;
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

const CHARTS: ChartItem[] = [
  {
    id: "nishiki",
    label: "Nishiki",
    src: "/images/floss-nishikiito-chart-nishiki-20260715.jpg",
    width: 365,
    height: 191,
    alt: "Nishikiito Nishiki color chart — 18 colors",
  },
  {
    id: "mirror",
    label: "Mirror",
    src: "/images/floss-nishikiito-chart-mirror-20260715.jpg",
    width: 365,
    height: 68,
    alt: "Nishikiito Mirror color chart — 6 colors",
  },
  {
    id: "iridescent",
    label: "Iridescent",
    src: "/images/floss-nishikiito-chart-iridescent-20260715.jpg",
    width: 360,
    height: 127,
    alt: "Nishikiito Iridescent color chart — 12 colors",
  },
  {
    id: "champagni",
    label: "Champagni",
    src: "/images/floss-nishikiito-chart-champagni-20260715.jpg",
    width: 362,
    height: 67,
    alt: "Nishikiito Champagni color chart — 6 colors",
  },
  {
    id: "neoni",
    label: "Neoni",
    src: "/images/floss-nishikiito-chart-neoni-20260715.jpg",
    width: 364,
    height: 67,
    alt: "Nishikiito Neoni color chart — 6 colors",
  },
];

export default function NishikiitoColorChart() {
  const [active, setActive] = useState<ChartItem | null>(null);
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
      el.scrollTop = 0;
    });
  }, [active]);

  return (
    <>
      <div className="nishikiito-color-charts">
        {CHARTS.map((chart) => (
          <figure key={chart.id} className="nishikiito-color-chart-item">
            <figcaption className="nishikiito-color-chart-label">
              {chart.label}
            </figcaption>
            <button
              type="button"
              className="nishikiito-color-chart-trigger"
              onClick={() => setActive(chart)}
              aria-label={`Enlarge: ${chart.alt}`}
            >
              <Image
                src={chart.src}
                alt={chart.alt}
                width={chart.width}
                height={chart.height}
                sizes="(max-width:900px) 90vw, 600px"
                className="nishikiito-color-chart-img"
              />
              <span className="hidamari-color-pair-hint">Click to enlarge</span>
            </button>
          </figure>
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
              <div className="floss-cosmo-chart-lightbox-canvas">
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
