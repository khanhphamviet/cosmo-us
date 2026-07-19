import Image from "next/image";
import CosmoColorChart from "./CosmoColorChart";
import ProductStoryLink from "./ProductStoryLink";

const QUALITIES = [
  {
    title: "Premium Cotton",
    body: "Carefully selected extra-long staple cotton—valued for strength, softness, and a naturally smooth surface.",
    img: "/images/pillar-premium-cotton.jpg",
    alt: "Close-up of extra-long staple cotton fibers",
  },
  {
    title: "Silk-like Luster",
    body: "A refined sheen adds depth and dimension without an overly glossy look—so the embroidery stays the focus.",
    img: "/images/pillar-silk-luster.jpg",
    alt: "COSMO embroidery floss with a silky sheen",
  },
  {
    title: "Lasting Color",
    body: "Advanced dyeing and quality control keep colors vibrant over time—and consistent from skein to skein.",
    img: "/images/pillar-color-bouquet.png",
    alt: "Multicolored bouquet of COSMO embroidery floss skeins",
  },
];

export default function CosmoFlossContent() {
  return (
    <div className="sashiko-page floss-cosmo-page">
      <section className="sashiko-hero" aria-labelledby="floss-cosmo-hero-title">
        <div className="sashiko-hero-split">
          <div className="sashiko-hero-copy">
            <h1 className="sashiko-hero-title" id="floss-cosmo-hero-title">
              COSMO No. 25 Embroidery Floss
            </h1>
            <p className="sashiko-hero-sub">
              The Qualities Behind Every Thread.
              <br />
              500 Colors.
              <br />
              Made in Japan.
            </p>
          </div>
          <figure className="sashiko-hero-media">
            <Image
              src="/images/blog-embroidery-floss-qualities-hero-lce200214-671-20260708.jpg"
              alt="Close-up of colorful COSMO No. 25 embroidery floss skeins"
              fill
              sizes="(max-width:900px) 100vw, 58vw"
              className="sashiko-hero-img"
              priority
            />
          </figure>
        </div>
      </section>

      <section
        id="about"
        className="sashiko-section"
        aria-labelledby="floss-cosmo-about-title"
      >
        <h2
          className="sashiko-section-title sashiko-section-title--center"
          id="floss-cosmo-about-title"
        >
          The Qualities Behind Every Thread
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight sashiko-section-intro--center">
          Designed in Kyoto and crafted with care in Japan. Three qualities
          define COSMO® No. 25—how it feels in the hand, catches the light, and
          brings embroidery to life.
        </p>
        <div className="sashiko-concepts floss-cosmo-quality-concepts">
          {QUALITIES.map((item) => (
            <article key={item.title} className="floss-cosmo-quality-concept">
              <div className="floss-cosmo-quality-concept-media">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width:640px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="sashiko-concept-title">{item.title}</h3>
              <p className="sashiko-concept-body">{item.body}</p>
            </article>
          ))}
        </div>
        <ProductStoryLink
          href="/stories/embroidery-floss-qualities"
          title="The Qualities Behind Every Thread: COSMO® Embroidery Floss"
        />
      </section>

      <section
        id="colors"
        className="sashiko-section sashiko-section--last"
        aria-labelledby="floss-cosmo-colors-title"
      >
        <h2 className="sashiko-section-title" id="floss-cosmo-colors-title">
          Explore all 500 colors
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          COSMO® embroidery heritage began in 1924. Around 1950, No. 25 Embroidery
          Floss launched with 195 colors; the palette now includes 500 solid
          colors. The official color chart arranges every shade by family—so you
          can match, blend, and build gradations with confidence. Click the chart
          to enlarge and zoom.
        </p>
        <CosmoColorChart />
        <figure className="floss-cosmo-colors-photo">
          <Image
            src="/images/floss-cosmo-500-solid-colors-20260710.jpg"
            alt="Rows of COSMO embroidery floss skeins in reds, pinks, purples, blues, greens, and yellows"
            width={2400}
            height={1597}
            sizes="100vw"
            className="floss-cosmo-colors-photo-img"
          />
          <figcaption className="floss-cosmo-chart-caption">
            500 solid colors—closely related shades for subtle
            gradations, contrasts, and every style of embroidery.
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
