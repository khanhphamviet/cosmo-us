import Image from "next/image";
import SashikoIntroGallery from "./SashikoIntroGallery";
import ProductStoryLink from "./ProductStoryLink";

const LADIES100_CATALOGUE_PDF = "/pdfs/100-ladies-catalogue-20260714.pdf";

const GALLERY = [
  {
    img: "/images/ladies100-gallery-gamaguchi-20260617.png",
    alt: "100 Ladies gamaguchi pouch with embroidered figures",
    width: 600,
    height: 600,
  },
  {
    img: "/images/ladies100-gallery-02-20260616.jpg",
    alt: "Embroidered ladies with colorful outfits",
    width: 600,
    height: 600,
  },
  {
    img: "/images/ladies100-gallery-fireworks-20260617.png",
    alt: "100 Ladies figures in yukata with fireworks embroidery",
    width: 600,
    height: 600,
  },
  {
    img: "/images/ladies100-gallery-04-20260616.jpg",
    alt: "Finished 100 Ladies mini tote",
    width: 600,
    height: 600,
  },
  {
    img: "/images/ladies100-gallery-05-20260616.jpg",
    alt: "Creative styling on 100 Ladies fabric",
    width: 600,
    height: 600,
  },
];

const CONCEPTS = [
  {
    id: "characters" as const,
    title: "100 Unique Characters",
    body: "Printed fabric filled with women — each with her own pose, outfit, and personality.",
  },
  {
    id: "style" as const,
    title: "Dress & Style",
    body: "Stitch like a coloring book. Use embroidery, fabric pens, appliqué, beads, and more.",
  },
  {
    id: "make" as const,
    title: "Create & Display",
    body: "Frame the whole cloth, cut out individual ladies, or make charms, patches, and gifts.",
  },
];

const LINEUP = [
  {
    title: "100 Ladies Embroidery Fabric",
    body:
      "Free-form embroidery fabric featuring 100 cool ladies to dress and stitch any way you like. Cotton/linen blend in off-white, pale gray, smoky blue, and more. Approx. 40 × 52 cm (15.7 × 20.5 in).",
    img: "/images/ladies100-lineup-fabric-20260616.jpg",
    alt: "100 Ladies embroidery fabric sheet",
  },
  {
    title: "Sample Kit",
    body:
      "Trial materials set with 8 line-drawing figures to embroider, appliqué, or decorate. Includes COSMO embroidery floss and a needle. Approx. 10.5 × 20 cm fabric; each figure approx. 5 cm tall.",
    img: "/images/ladies100-lineup-sample-20260616.jpg",
    alt: "100 Ladies sample kit with floss and fabric",
  },
  {
    title: "Charm Embroidery Kit",
    body:
      "Beginner-friendly kit to make four charms. Practice five basic stitches on a lesson area, then stitch and finish the charm designs. Available in white and pale gray.",
    img: "/images/ladies100-lineup-charm-20260616.jpg",
    alt: "100 Ladies charm embroidery kit",
  },
  {
    title: "Pre-Sewn Mini Tote Kit",
    body:
      "Pre-sewn mini tote ready for you to stitch and style. A quick project that shows off your finished ladies on a bag you can carry every day.",
    img: "/images/ladies100-lineup-tote-20260616.jpg",
    alt: "Pre-sewn 100 Ladies mini tote kit",
  },
  {
    title: "Pre-Sewn Zip Pouch Kit",
    body:
      "Pre-sewn zip pouch with printed ladies ready to embroider. Stitch the design, add your own color, and finish a practical accessory.",
    img: "/images/ladies100-lineup-pouch-20260616.jpg",
    alt: "Pre-sewn 100 Ladies zip pouch kit",
  },
] as const;

export default function Ladies100Content() {
  return (
    <div className="sashiko-page ladies100-page">
      <section className="sashiko-hero ladies100-hero" aria-labelledby="ladies100-hero-title">
        <div className="sashiko-hero-split">
          <div className="sashiko-hero-copy ladies100-hero-copy">
            <h1 className="sashiko-hero-title ladies100-hero-title" id="ladies100-hero-title">
              100 Ladies
            </h1>
            <p className="ladies100-hero-tagline">
              Design Your Own Fashion Story.
            </p>
            <p className="sashiko-hero-sub ladies100-hero-sub">
              Dress, stitch, and style 100 unique ladies your way. Like a
              coloring book—with needle and thread.
            </p>
          </div>
          <figure className="sashiko-hero-media">
            <Image
              src="/images/ladies100-hero-20260616.jpg"
              alt="100 Ladies embroidery fabric with stylized figures"
              fill
              sizes="(max-width:900px) 100vw, 58vw"
              className="sashiko-hero-img"
              style={{ objectPosition: "center 42%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <section
        id="about"
        className="sashiko-section ladies100-about-section"
        aria-labelledby="ladies100-about-title"
      >
        <h2
          className="sashiko-section-title sashiko-section-title--center"
          id="ladies100-about-title"
        >
          What is 100 Ladies?
        </h2>
        <div className="ladies100-before-after ladies100-before-after--about">
          <figure className="ladies100-about-panel">
            <div className="ladies100-about-panel-media">
              <Image
                src="/images/ladies100-before-20260617.png"
                alt="100 Ladies fabric before stitching"
                fill
                sizes="(max-width:640px) 100vw, 42vw"
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
                src="/images/ladies100-after-20260617.png"
                alt="100 Ladies fabric after stitching and styling"
                fill
                sizes="(max-width:640px) 100vw, 42vw"
                className="ladies100-about-panel-img"
              />
            </div>
          </figure>
        </div>
        <div className="sashiko-concepts ladies100-about-concepts">
          {CONCEPTS.map((item) => (
            <div key={item.title} className="ladies100-concept">
              <h3 className="ladies100-concept-title">{item.title}</h3>
              <p className="sashiko-concept-body">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="sashiko-gallery-block" id="gallery">
        <h2 className="sashiko-section-title sashiko-section-title--center sashiko-gallery-title">
          Endless Ways to Style
        </h2>
        <SashikoIntroGallery items={GALLERY} />
      </div>

      <section
        id="lineup"
        className="sashiko-section sashiko-section--last"
        aria-labelledby="ladies100-lineup-title"
      >
        <h2 className="sashiko-section-title" id="ladies100-lineup-title">
          Product Lineup
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          Each lady is only about 5 cm tall — small enough for beginners, open
          enough for experienced stitchers. Use COSMO embroidery floss, mix
          stitches freely, and turn finished figures into charms, patches, bags,
          and more.
        </p>
        <p className="sashiko-lineup-catalog">
          <a
            href={LADIES100_CATALOGUE_PDF}
            className="btn-outline sashiko-lineup-catalog-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View product catalogue (PDF)
            <span aria-hidden="true"> ↗</span>
          </a>
        </p>
        <div className="sashiko-lineup-grid">
          {LINEUP.map((item) => (
            <article key={item.title} className="sashiko-lineup-card">
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
                <p className="sashiko-lineup-text">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="sashiko-section-footnote">
          Curated thread color sets and cut-cloth packs are also available.
          For stitch guides and project inspiration, visit the{" "}
          <a
            href="https://www.lecien.co.jp/100ne-san/"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 Ladies site
          </a>
          .
        </p>
        <ProductStoryLink
          href="/stories/100-ladies-embroidery-fabric"
          title="100 Ladies®: Design Your Own Fashion Story"
        />
      </section>
    </div>
  );
}
