"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { BlogFigure, BlogSection } from "../data/blogPosts";

type Props = {
  items: BlogFigure[];
  variant?: BlogSection["galleryVariant"];
  zoomable?: boolean;
};

function GalleryMedia({
  item,
  variant,
  isAside,
}: {
  item: BlogFigure;
  variant?: BlogSection["galleryVariant"];
  isAside: boolean;
}) {
  const width = item.width ?? 900;
  const height = item.height ?? 900;

  return (
    <div
      className={[
        "blog-article-gallery-media",
        item.fit === "contain" ? "blog-article-gallery-media--contain" : "",
        isAside && item.fit === "contain"
          ? "blog-article-gallery-media--aside-fill"
          : "",
        variant === "pillars" ? "blog-article-gallery-media--pillars-fill" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {isAside && item.fit === "contain" ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          quality={90}
          sizes="(max-width: 640px) 45vw, 180px"
          className="blog-article-gallery-img"
        />
      ) : variant === "hero" || variant === "pillars" ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          quality={90}
          sizes={
            variant === "pillars"
              ? "(max-width: 640px) 80vw, 220px"
              : "(max-width: 720px) 100vw, 720px"
          }
          className="blog-article-gallery-img"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          width={width}
          height={height}
          quality={90}
          sizes={
            variant === "comparison"
              ? "(max-width: 640px) 100vw, 50vw"
              : "(max-width: 640px) 100vw, 33vw"
          }
          className="blog-article-gallery-img"
        />
      )}
    </div>
  );
}

export default function BlogArticleGallery({
  items,
  variant = "row",
  zoomable = false,
}: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isAside = variant === "aside";
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

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

  if (variant === "before-after" && items.length >= 2) {
    const [before, after] = items;

    return (
      <div className="ladies100-before-after ladies100-before-after--about blog-article-before-after">
        <figure className="ladies100-about-panel">
          <div className="ladies100-about-panel-media">
            <Image
              src={before.src}
              alt={before.alt}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, 42vw"
              className="ladies100-about-panel-img"
            />
          </div>
        </figure>
        <div className="ladies100-before-after-arrow" aria-hidden="true">
          →
        </div>
        <figure className="ladies100-about-panel">
          <div className="ladies100-about-panel-media">
            <Image
              src={after.src}
              alt={after.alt}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, 42vw"
              className="ladies100-about-panel-img"
            />
          </div>
        </figure>
      </div>
    );
  }

  return (
    <>
      <div
        className={[
          "blog-article-gallery",
          variant === "comparison" ? "blog-article-gallery--comparison" : "",
          variant === "row" ? "blog-article-gallery--row" : "",
          variant === "patterns" ? "blog-article-gallery--patterns" : "",
          variant === "hero" ? "blog-article-gallery--hero" : "",
          variant === "pillars" ? "blog-article-gallery--pillars" : "",
          isAside ? "blog-article-gallery--aside" : "",
          zoomable ? "blog-article-gallery--zoomable" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {items.map((item, index) => {
          const media = (
            <GalleryMedia item={item} variant={variant} isAside={isAside} />
          );

          return (
            <figure
              key={`${item.src}-${item.caption ?? item.alt}`}
              className={[
                "blog-article-gallery-item",
                zoomable ? "blog-article-gallery-item--zoomable" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {zoomable ? (
                <button
                  type="button"
                  className="blog-article-gallery-trigger"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View larger: ${item.alt}`}
                >
                  {media}
                </button>
              ) : (
                media
              )}
              {item.caption ? (
                <figcaption className="blog-article-gallery-caption">
                  {variant === "pillars" ? (
                    <>
                      <span className="blog-article-gallery-caption-title">
                        {item.caption}
                      </span>
                      {item.description ? (
                        <span className="blog-article-gallery-caption-body">
                          {item.description}
                        </span>
                      ) : null}
                    </>
                  ) : (
                    item.caption
                  )}
                </figcaption>
              ) : null}
            </figure>
          );
        })}
      </div>

      {zoomable && activeItem ? (
        <div
          className="sashiko-lightbox blog-article-gallery-lightbox"
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
                width={activeItem.width ?? 1024}
                height={activeItem.height ?? 1024}
                sizes="(max-width:1024px) 100vw, 1024px"
                className="sashiko-lightbox-img"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
