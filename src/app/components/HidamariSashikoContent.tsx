import Image from "next/image";
import SashikoIntroGallery from "./SashikoIntroGallery";
import HidamariColorLineup from "./HidamariColorLineup";
import ProductStoryLink from "./ProductStoryLink";
import { SASHIKO_PRODUCTS } from "../data/sashikoProducts";

const SASHIKO_CATALOGUE_PDF = "/pdfs/sashiko-catalogue-20260714.pdf";

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
        id="color-lineup"
        className="sashiko-section"
        aria-labelledby="sashiko-color-lineup-title"
      >
        <h2 className="sashiko-section-title" id="sashiko-color-lineup-title">
          Color Lineup
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          The official color chart is split into three sections that match the
          retail display boards left to right: solids 1–20, solids 21–40, and
          variegated colors 101–405.
        </p>
        <HidamariColorLineup />
      </section>

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
        <p className="sashiko-lineup-catalog">
          <a
            href={SASHIKO_CATALOGUE_PDF}
            className="btn-outline sashiko-lineup-catalog-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View product catalogue (PDF)
            <span aria-hidden="true"> ↗</span>
          </a>
        </p>
        <div className="sashiko-lineup-grid">
          {SASHIKO_PRODUCTS.filter(
            (item) => item.slug !== "hidamari-thread"
          ).map((item) => (
            <article key={item.slug} className="sashiko-lineup-card">
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
                <p className="sashiko-lineup-text">{item.cardBody}</p>
              </div>
            </article>
          ))}
        </div>
        <ProductStoryLink
          stories={[
            {
              href: "/stories/sashiko",
              title: "What Is Sashiko?",
            },
            {
              href: "/stories/hidamari-sashiko-thread",
              title:
                "COSMO® hidamari® Sashiko Thread: A Sunlit Take on a Timeless Craft",
            },
          ]}
        />
      </section>
    </div>
  );
}
