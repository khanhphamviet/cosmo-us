import Image from "next/image";
import SashikoIntroGallery from "./SashikoIntroGallery";

const GALLERY = [
  {
    img: "/images/sashiko-gallery-pincushions-20260612.jpg",
    alt: "Sashiko pincushions with geometric patterns",
    width: 1024,
    height: 1024,
  },
  {
    img: "/images/sashiko-gallery-mending-20260612.jpg",
    alt: "Decorative sashiko mending on a T-shirt",
    width: 1024,
    height: 1024,
  },
  {
    img: "/images/sashiko-gallery-tote-20260612.jpg",
    alt: "Mini tote with cross-stitch initial",
    width: 1024,
    height: 1024,
  },
  {
    img: "/images/sashiko-gallery-boro-20260612.jpg",
    alt: "Colorful sashiko mending on a folded T-shirt",
    width: 1024,
    height: 1024,
  },
  {
    img: "/images/sashiko-gallery-notebook-20260612.jpg",
    alt: "Fabric notebook cover with shippo sashiko pattern",
    width: 1024,
    height: 1024,
  },
];

const CONCEPTS = [
  {
    id: "origin" as const,
    title: "Origin",
    subtitle: "Northern Japan",
    body: "Born in northern Japan as a practical way to strengthen and repair clothing.",
  },
  {
    id: "purpose" as const,
    title: "Purpose",
    subtitle: "Mending & Reinforcement",
    body: "Simple running stitches used for reinforcement, mending, and durability.",
  },
  {
    id: "today" as const,
    title: "Today",
    subtitle: "Art, Fashion & Home Decor",
    body: "Now enjoyed worldwide as a form of creative expression, fashion, and decor.",
  },
];

const LINEUP = [
  {
    title: "Hidamari Sashiko Thread",
    body:
      "Smooth, low-fuzz Japanese cotton for sashiko — and for sewing, knitting, decorating, and tying. 60 colors including solids, speckle, melange, multicolor, and gradation. Approx. 30 m (32.8 yd) per spool.",
    img: "/images/sashiko-display-overview-20260610.jpg",
    alt: "hidamari sashiko thread display",
  },
  {
    title: "Sashiko Pair Coasters Kit",
    body:
      "Complete kit with pre-printed fabric, hidamari thread, finishing thread, cotton tape, sashiko and sewing needles, threader, and English instructions. Finished size approx. 10 × 10 cm.",
    img: "/images/sashiko-lineup-pair-coasters-20260616.png",
    alt: "Finished sashiko pair coasters with glass of water",
  },
  {
    title: "Sashiko Fabric for Coasters",
    body:
      "Pre-printed 100% cotton fabric to make four coasters. Wash-away pattern and English instructions included. Thread and needles not included. Finished size approx. 10 × 10 cm.",
    img: "/images/sashiko-about-coasters-20260611.jpg",
    alt: "Sashiko fabric for coasters",
  },
  {
    title: "Sashiko Fabric",
    body:
      "Cotton/linen fabric with wash-away printed patterns in circle, kasuri, cross, and chevron designs. Finished size approx. 32 × 32 cm. English instructions included; thread and needle not included.",
    img: "/images/sashiko-lineup-sashiko-fabric-20260616.png",
    alt: "Sashiko-stitched cotton-linen fabric with geometric pattern",
  },
  {
    title: "Celebratory Sashiko Fabric",
    body:
      "Hand-drawn designs by sashiko artist chiebaa, hand-printed in Japan. Stitch auspicious motifs and sew celebratory wishes into the fabric. English instructions included.",
    img: "/images/sashiko-lineup-celebratory-fabric-20260616.png",
    alt: "Celebratory sashiko fabric wall hangings with auspicious motifs",
  },
];

function ConceptIcon({ id }: { id: (typeof CONCEPTS)[number]["id"] }) {
  return (
    <div className="sashiko-concept-icon" aria-hidden="true">
      {id === "origin" && (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 34h32" />
          <path d="M14 34V22l10-12 10 12v12" />
          <path d="M20 34v-8h8v8" />
        </svg>
      )}
      {id === "purpose" && (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 12h24v24H12z" />
          <path d="M12 24h24M24 12v24" />
        </svg>
      )}
      {id === "today" && (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="24" cy="24" r="8" />
          <path d="M24 16V8M24 40v-8M16 24H8M40 24h-8M18 18l-6-6M36 36l-6-6M30 18l6-6M12 36l6-6" />
        </svg>
      )}
    </div>
  );
}

export default function HidamariSashikoContent() {
  return (
    <div className="sashiko-page">
      <section className="sashiko-hero" aria-labelledby="sashiko-hero-title">
        <div className="sashiko-hero-split">
          <div className="sashiko-hero-copy">
            <h1 className="sashiko-hero-title" id="sashiko-hero-title">
              Hidamari Sashiko Thread
            </h1>
            <p className="sashiko-hero-sub">
              The Thread for Modern Sashiko.
              <br />
              60 Colors.
              <br />
              Made in Japan.
            </p>
          </div>
          <figure className="sashiko-hero-media">
            <Image
              src="/images/sashiko-intro-supplies-20260611.jpg"
              alt="hidamari sashiko thread, embroidery hoop, and stitched fabric samples"
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
        aria-labelledby="sashiko-about-title"
      >
        <div className="sashiko-about-split">
          <div className="sashiko-about-left">
            <h2 className="sashiko-section-title" id="sashiko-about-title">
              What is Sashiko?
            </h2>
            <p className="sashiko-section-body sashiko-about-lead">
              A traditional Japanese stitching technique that evolved from
              mending into a celebrated craft.
            </p>
            <div className="sashiko-concepts">
              {CONCEPTS.map((item) => (
                <div key={item.title} className="sashiko-concept">
                  <ConceptIcon id={item.id} />
                  <h3 className="sashiko-concept-title">{item.title}</h3>
                  <p className="sashiko-concept-subtitle">{item.subtitle}</p>
                  <p className="sashiko-concept-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="sashiko-about-media">
            <Image
              src="/images/sashiko-about-coasters-20260611.jpg"
              alt="Sashiko-stitched coasters with a cup on a wooden table"
              fill
              sizes="(max-width:900px) 100vw, 42vw"
              className="sashiko-about-img"
            />
          </figure>
        </div>
      </section>

      <div className="sashiko-gallery-block">
        <h2 className="sashiko-section-title sashiko-section-title--center sashiko-gallery-title">
          Sashiko in Everyday Life
        </h2>
        <SashikoIntroGallery items={GALLERY} />
      </div>

      <section
        id="lineup"
        className="sashiko-section sashiko-section--last"
        aria-labelledby="sashiko-lineup-title"
      >
        <h2 className="sashiko-section-title" id="sashiko-lineup-title">
          Product Lineup
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          Bright and warm like sunlight — hidamari is Japanese-made cotton
          thread with smooth, low-fuzz performance. Beyond sashiko, enjoy it for
          sewing, knitting, embellishing, and knotwork.
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
      </section>
    </div>
  );
}
