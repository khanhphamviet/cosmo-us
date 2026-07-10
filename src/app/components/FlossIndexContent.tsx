import Link from "next/link";
import Image from "next/image";

const FLOSS_LINES = [
  {
    id: "cosmo",
    title: "COSMO No. 25 Embroidery Floss",
    highlights: ["The Qualities Behind Every Thread", "500 Colors", "Made in Japan"],
    desc: "COSMO® No. 25 Embroidery Floss—made in Japan, designed in Kyoto. Extra-long staple cotton, silk-like luster, lasting color, and a palette of 500 solid colors.",
    img: "/images/blog-embroidery-floss-qualities-hero-lce200214-671-20260708.jpg",
    width: 2400,
    height: 1597,
    alt: "Close-up of colorful COSMO No. 25 embroidery floss skeins",
    objectPosition: "50% 42%",
    cta: "Explore No. 25",
  },
  {
    id: "seasons",
    title: "Seasons Variegated Floss",
    highlights: ["One length of thread, many tones", "140 variegated colors", "Made in Japan"],
    desc: "Beautiful gradation No. 25 embroidery thread. A color range designed to complement 500 solid No. 25 colors—three series with different color-change lengths for richer expression.",
    img: "/images/floss-seasons-20260610.jpg",
    width: 800,
    height: 800,
    alt: "COSMO Seasons variegated embroidery floss in soft pink and white gradations",
    objectPosition: "50% 50%",
    cta: "Explore Seasons",
  },
  {
    id: "nishikiito",
    title: "Nishikiito Metallic Thread",
    highlights: [
      "Japanese-made metallic thread",
      "Five finishes, 48 colors",
      "Kyoto kimono gold-thread technique",
    ],
    desc: "Japanese-made metallic thread for hand embroidery, crafted with Kyoto kimono gold-thread technique. Five finishes—Nishiki, Mirror, Iridescent, Champagni, and Neoni—for embroidery accents.",
    img: "/images/floss-nishikiito-hero-catalog-20260710-v2.jpg",
    width: 3337,
    height: 5000,
    alt: "Colorful COSMO Nishikiito metallic thread spools",
    objectPosition: "50% 45%",
    cta: "Explore Nishikiito",
  },
] as const;

export default function FlossIndexContent() {
  return (
    <div className="floss-index-page">
      <header className="floss-index-intro">
        <h1 className="floss-index-title">Embroidery Floss</h1>
        <p className="floss-index-lead">
          From everyday No. 25 cotton to variegated Seasons and metallic
          Nishikiito—three thread lines made in Japan, designed to work together
          in your palette.
        </p>
      </header>

      <div className="floss-index-list">
        {FLOSS_LINES.map((line) => (
          <article key={line.id} className="floss-index-card">
            <Link href={`/floss/${line.id}`} className="floss-index-card-link">
              <div className="floss-index-card-media">
                <Image
                  src={line.img}
                  alt={line.alt}
                  fill
                  sizes="(max-width:900px) 100vw, 1080px"
                  className="floss-index-card-img"
                  style={{ objectPosition: line.objectPosition }}
                />
              </div>
              <div className="floss-index-card-body">
                <h2 className="floss-index-card-title">{line.title}</h2>
                <ul className="floss-index-card-highlights">
                  {line.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="floss-index-card-desc">{line.desc}</p>
                <span className="floss-index-card-cta">{line.cta} →</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
