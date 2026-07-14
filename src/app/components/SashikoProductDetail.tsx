import Image from "next/image";
import Link from "next/link";
import type { SashikoProduct } from "../data/sashikoProducts";
import { SASHIKO_PRODUCTS } from "../data/sashikoProducts";
import { FAIRE_STORE_URL } from "../data/site";
import HidamariColorLineup from "./HidamariColorLineup";

export default function SashikoProductDetail({
  product,
}: {
  product: SashikoProduct;
}) {
  const others = SASHIKO_PRODUCTS.filter((item) => item.slug !== product.slug);
  const showColorChart = product.slug === "hidamari-thread";

  return (
    <article className="sashiko-product-page">
      <header className="sashiko-product-hero">
        <div className="sashiko-product-hero-copy">
          <p className="sashiko-product-eyebrow">Sashiko Product Lineup</p>
          <h1 className="sashiko-product-title">{product.title}</h1>
          <p className="sashiko-product-lead">{product.lead}</p>
        </div>
        <figure className="sashiko-product-hero-media">
          <Image
            src={product.img}
            alt={product.alt}
            fill
            sizes="(max-width:900px) 100vw, 48vw"
            className="sashiko-product-hero-img"
            priority
          />
        </figure>
      </header>

      <section className="sashiko-product-section" aria-labelledby="overview-title">
        <h2 className="sashiko-section-title" id="overview-title">
          Overview
        </h2>
        {product.overview.map((paragraph) => (
          <p key={paragraph} className="sashiko-product-body">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="sashiko-product-section" aria-labelledby="highlights-title">
        <h2 className="sashiko-section-title" id="highlights-title">
          Highlights
        </h2>
        <div className="sashiko-product-highlights">
          {product.highlights.map((item) => (
            <div key={item.heading} className="sashiko-product-highlight">
              <h3 className="sashiko-product-highlight-title">{item.heading}</h3>
              <p className="sashiko-product-highlight-body">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sashiko-product-section" aria-labelledby="specs-title">
        <h2 className="sashiko-section-title" id="specs-title">
          Specifications
        </h2>
        <table className="company-table sashiko-spec-table">
          <tbody>
            {product.specs.map((spec) => (
              <tr key={spec.label}>
                <th>{spec.label}</th>
                <td>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {showColorChart ? (
        <section
          className="sashiko-product-section"
          aria-labelledby="color-chart-title"
        >
          <h2 className="sashiko-section-title" id="color-chart-title">
            Color Lineup
          </h2>
          <p className="sashiko-product-body">
            The official color chart is split into three sections that match the
            retail display boards left to right: solids 1–20, solids 21–40, and
            patterned colors 101–405.
          </p>
          <HidamariColorLineup />
        </section>
      ) : null}

      {!showColorChart && product.gallery?.length ? (
        <section
          className="sashiko-product-section"
          aria-labelledby="gallery-title"
        >
          <h2 className="sashiko-section-title" id="gallery-title">
            {product.galleryTitle ?? "In Context"}
          </h2>
          <div className="sashiko-product-gallery">
            {product.gallery.map((item) => (
              <figure key={item.src} className="sashiko-product-gallery-item">
                <div
                  className={[
                    "sashiko-product-gallery-media",
                    item.height > item.width
                      ? "sashiko-product-gallery-media--portrait"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width:640px) 100vw, 45vw"
                    className="sashiko-product-gallery-img"
                  />
                </div>
                {item.caption ? (
                  <figcaption className="sashiko-product-gallery-caption">
                    {item.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <div className="sashiko-product-cta">
        <a
          href={FAIRE_STORE_URL}
          className="btn-solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Wholesale on Faire
        </a>
        {product.relatedStory ? (
          <Link href={product.relatedStory.href} className="btn-outline">
            {product.relatedStory.label}
          </Link>
        ) : null}
      </div>

      <section
        className="sashiko-product-section sashiko-product-section--related"
        aria-labelledby="related-title"
      >
        <h2 className="sashiko-section-title" id="related-title">
          More from the Lineup
        </h2>
        <div className="sashiko-lineup-grid sashiko-product-related-grid">
          {others.map((item) => (
            <article key={item.slug} className="sashiko-lineup-card">
              <Link
                href={`/sashiko/${item.slug}`}
                className="sashiko-lineup-card-link"
              >
                <div className="sashiko-lineup-media">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 20vw"
                    className="sashiko-lineup-img"
                  />
                </div>
                <div className="sashiko-lineup-body">
                  <h3 className="sashiko-lineup-title">{item.title}</h3>
                  <p className="sashiko-lineup-text">{item.lead}</p>
                  <span className="sashiko-lineup-cta">View details →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
