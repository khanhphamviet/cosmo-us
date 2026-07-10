"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const CHART_ALT =
  "COSMO Seasons variegated floss color chart — 140 colors in Seasons 5000, 8000, and 9000 series";

const THUMB = {
  src: "/images/floss-seasons-color-chart-20260710-v2.jpg",
  width: 1200,
  height: 454,
};

const ZOOM = {
  src: "/images/floss-seasons-color-chart-zoom-20260710-v2.jpg",
  width: 5885,
  height: 2228,
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;
const INITIAL_ZOOM = 1.6;

export default function SeasonsColorChart() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setZoom(INITIAL_ZOOM);
  }, []);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(MAX_ZOOM, Math.round((z + ZOOM_STEP) * 10) / 10));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => Math.max(MIN_ZOOM, Math.round((z - ZOOM_STEP) * 10) / 10));
  }, []);

  const resetZoom = useCallback(() => setZoom(INITIAL_ZOOM), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "+" || event.key === "=") zoomIn();
      if (event.key === "-" || event.key === "_") zoomOut();
      if (event.key === "0") resetZoom();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close, zoomIn, zoomOut, resetZoom]);

  useEffect(() => {
    if (!open || !scrollerRef.current) return;
    const el = scrollerRef.current;
    requestAnimationFrame(() => {
      el.scrollLeft = Math.max(0, (el.scrollWidth - el.clientWidth) / 2);
      el.scrollTop = Math.max(0, (el.scrollHeight - el.clientHeight) / 2);
    });
  }, [open, zoom]);

  return (
    <>
      <figure className="floss-cosmo-chart floss-seasons-chart">
        <button
          type="button"
          className="floss-cosmo-chart-trigger"
          onClick={() => {
            setZoom(INITIAL_ZOOM);
            setOpen(true);
          }}
          aria-label="View larger Seasons color chart"
        >
          <Image
            src={THUMB.src}
            alt={CHART_ALT}
            width={THUMB.width}
            height={THUMB.height}
            sizes="100vw"
            className="floss-cosmo-chart-img"
            quality={90}
          />
          <span className="floss-cosmo-chart-hint">Click to enlarge</span>
        </button>
        <figcaption className="floss-cosmo-chart-caption">
          Official COSMO® Seasons color chart — 140 variegated colors in three
          series (5000, 8000, 9000). Click the chart to enlarge and zoom.
        </figcaption>
      </figure>

      {open ? (
        <div
          className="floss-cosmo-chart-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={CHART_ALT}
          onClick={close}
        >
          <div
            className="floss-cosmo-chart-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="floss-cosmo-chart-lightbox-toolbar">
              <p className="floss-cosmo-chart-lightbox-hint">
                Scroll to pan · Use + / − to zoom
              </p>
              <div className="floss-cosmo-chart-lightbox-controls">
                <button
                  type="button"
                  className="floss-cosmo-chart-zoom-btn"
                  onClick={zoomOut}
                  disabled={zoom <= MIN_ZOOM}
                  aria-label="Zoom out"
                >
                  −
                </button>
                <span className="floss-cosmo-chart-zoom-label" aria-live="polite">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  className="floss-cosmo-chart-zoom-btn"
                  onClick={zoomIn}
                  disabled={zoom >= MAX_ZOOM}
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  type="button"
                  className="floss-cosmo-chart-zoom-btn floss-cosmo-chart-zoom-btn--text"
                  onClick={resetZoom}
                >
                  Reset
                </button>
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
                className="floss-cosmo-chart-lightbox-canvas"
                style={{ width: `${zoom * 100}vw` }}
              >
                <Image
                  src={ZOOM.src}
                  alt={CHART_ALT}
                  width={ZOOM.width}
                  height={ZOOM.height}
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
