import Image from "next/image";
import SashikoIntroGallery from "./SashikoIntroGallery";
import ProductStoryLink from "./ProductStoryLink";

const GALLERY = [
  {
    img: "/images/crochet-arrange-accessory-20260617.jpg",
    alt: "Crochet pouch arranged as accessories and brooches",
    width: 1000,
    height: 550,
  },
  {
    img: "/images/crochet-arrange-cake-20260617.jpg",
    alt: "Chocolate cake variation of a crochet pouch",
    width: 1000,
    height: 550,
  },
  {
    img: "/images/crochet-arrange-rabbits-20260617.jpg",
    alt: "Twin rabbit crochet pouches in different colors",
    width: 1000,
    height: 550,
  },
  {
    img: "/images/crochet-arrange-tail-20260617.jpg",
    alt: "Crochet animal pouch with a tail added",
    width: 1000,
    height: 550,
  },
  {
    img: "/images/crochet-arrange-brooch-20260617.jpg",
    alt: "Face-only crochet brooch variation",
    width: 1000,
    height: 550,
  },
];

const FEATURES = [
  {
    title: "Finishing Touches with Embroidery.",
    img: "/images/crochet-feature-embroidery-20260618.jpg",
    alt: "Hands holding small crocheted food pouches with embroidered details",
    width: 800,
    height: 800,
  },
  {
    title: "Take It Anywhere with Ball Chain.",
    img: "/images/crochet-feature-ballchain-20260618.jpg",
    alt: "Hamburger crochet pouch attached to a tote bag with a ball chain",
    width: 800,
    height: 800,
  },
  {
    title: "Step-by-Step Instructions Included.",
    img: "/images/crochet-feature-instructions-20260618.jpg",
    alt: "Hands crocheting a small pouch with embroidery floss",
    width: 800,
    height: 800,
  },
];

const SERIES1 = [
  {
    title: "Macaron",
    img: "/images/crochet-lineup-macaron-20260617.jpg",
    alt: "Macaron crochet pouch kit",
  },
  {
    title: "Cake",
    img: "/images/crochet-lineup-cake-20260617.jpg",
    alt: "Cake crochet pouch kit",
  },
  {
    title: "Hamburger",
    img: "/images/crochet-lineup-hamburger-20260617.jpg",
    alt: "Hamburger crochet pouch kit",
  },
  {
    title: "Orange",
    img: "/images/crochet-lineup-orange-20260617.jpg",
    alt: "Orange crochet pouch kit",
  },
  {
    title: "Tomato",
    img: "/images/crochet-lineup-tomato-20260617.jpg",
    alt: "Tomato crochet pouch kit",
  },
  {
    title: "Takoyaki",
    img: "/images/crochet-lineup-takoyaki-20260617.jpg",
    alt: "Takoyaki crochet pouch kit",
  },
];

const SERIES2 = [
  {
    title: "Bear",
    img: "/images/crochet-lineup-bear-20260617.jpg",
    alt: "Bear crochet pouch kit",
  },
  {
    title: "Panda",
    img: "/images/crochet-lineup-panda-20260617.jpg",
    alt: "Panda crochet pouch kit",
  },
  {
    title: "Capybara",
    img: "/images/crochet-lineup-capybara-20260617.jpg",
    alt: "Capybara crochet pouch kit",
  },
  {
    title: "Gorilla",
    img: "/images/crochet-lineup-gorilla-20260617.jpg",
    alt: "Gorilla crochet pouch kit",
  },
  {
    title: "Lion",
    img: "/images/crochet-lineup-lion-20260617.jpg",
    alt: "Lion crochet pouch kit",
  },
];

function LineupCard({
  item,
  comingSoon = false,
}: {
  item: { title: string; img: string; alt: string };
  comingSoon?: boolean;
}) {
  return (
    <article
      className={`sashiko-lineup-card${comingSoon ? " crochet-lineup-card--soon" : ""}`}
    >
      <div className="sashiko-lineup-media">
        <Image
          src={item.img}
          alt={item.alt}
          fill
          sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 20vw"
          className="sashiko-lineup-img"
        />
        {comingSoon && (
          <span className="crochet-lineup-soon-badge">Coming Soon</span>
        )}
      </div>
      <div className="sashiko-lineup-body crochet-lineup-body">
        <h3 className="sashiko-lineup-title">{item.title}</h3>
      </div>
    </article>
  );
}

export default function CrochetContent() {
  return (
    <div className="sashiko-page crochet-page">
      <section className="sashiko-hero crochet-hero" aria-labelledby="crochet-hero-title">
        <div className="sashiko-hero-split">
          <div className="sashiko-hero-copy crochet-hero-copy">
            <h1 className="sashiko-hero-title ladies100-hero-title crochet-hero-title" id="crochet-hero-title">
              Tiny Pouch Crocheted with Embroidery Floss
            </h1>
            <p className="sashiko-hero-sub ladies100-hero-sub crochet-hero-sub">
              Crochet something delightful with COSMO embroidery floss.
            </p>
            <p className="sashiko-hero-sub ladies100-hero-sub crochet-hero-sub">
              Transform simple stitches into miniature treats, playful pouches,
              and everyday treasures.
            </p>
          </div>
          <figure className="sashiko-hero-media">
            <Image
              src="/images/crochet-hero-20260617.png"
              alt="Small food-themed crochet pouches on a glass stand"
              fill
              sizes="(max-width:900px) 100vw, 58vw"
              className="sashiko-hero-img"
              style={{ objectPosition: "center center" }}
              priority
            />
          </figure>
        </div>
      </section>

      <section
        id="about"
        className="sashiko-section ladies100-about-section crochet-about-section"
        aria-labelledby="crochet-hero-title"
      >
        <div className="sashiko-features crochet-features">
          {FEATURES.map((item) => (
            <figure key={item.title} className="sashiko-feature-card">
              <div className="sashiko-feature-media">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width:640px) 100vw, 33vw"
                  className="sashiko-feature-img"
                />
              </div>
              <figcaption className="sashiko-feature-title">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="series-1"
        className="sashiko-section"
        aria-labelledby="crochet-series-1-lineup-title"
      >
        <h2 className="sashiko-subsection-title" id="crochet-series-1-lineup-title">
          Product Lineup
        </h2>
        <div className="sashiko-lineup-grid">
          {SERIES1.map((item) => (
            <LineupCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="series-2" className="sashiko-section" aria-label="Series 2">
        <div className="sashiko-lineup-grid">
          {SERIES2.map((item) => (
            <LineupCard key={item.title} item={item} comingSoon />
          ))}
        </div>
      </section>

      <div className="sashiko-gallery-block" id="gallery">
        <h2 className="sashiko-section-title sashiko-section-title--center sashiko-gallery-title">
          Arrange Your Way
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight crochet-gallery-intro">
          Turn finished pouches into accessories and brooches. Change floss
          colors on the same pattern, add a tail, or make a face-only brooch —
          playful variations to inspire your next make.
        </p>
        <SashikoIntroGallery items={GALLERY} />
        <p className="sashiko-section-footnote crochet-gallery-note">
          Arrange projects shown for inspiration. Step-by-step recipes for
          arrange works are not included in the kits.
        </p>
        <ProductStoryLink
          href="/stories/crochet-with-floss"
          title="Crochet with Floss: Lace and Color from a Single Skein"
        />
      </div>
    </div>
  );
}
