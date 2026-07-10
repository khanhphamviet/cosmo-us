import Image from "next/image";

const FINISHES = [
  {
    heading: "Nishiki",
    subtitle: "round twist · 18 colors",
    body:
      "Characterized by its subdued luster and tension, recommended for tatting lace and tassels. Can also be used by pulling out one strand at a time from 4-strand twists.",
    img: "/images/floss-nishikiito-nishiki-catalog-20260710-v10.jpg",
    width: 1024,
    height: 683,
    alt: "Nishiki round-twist metallic embroidery thread spools",
    length: "Approx. 22 yd (20 m) per spool",
    thickness: "5 to 6 count (approx.)",
    material:
      "Colors 2–4: 59% nylon, 41% polyester · Colors 5–16: 62% nylon, 38% polyester · Colors 18–23: 57% polyester, 43% nylon",
  },
  {
    heading: "Mirror",
    subtitle: "Tasuki Twisted · 6 colors",
    body:
      "The way the yarn is twisted and the amount of metallic content give it a strong sparkle and presence. Recommended for cross-stitching and free-stitching with its soft touch.",
    img: "/images/floss-nishikiito-mirror-catalog-20260710-v10.jpg",
    width: 1024,
    height: 683,
    alt: "Mirror Tasuki Twisted metallic embroidery thread spools",
    length: "Approx. 22 yd (20 m) per spool",
    thickness: "14 count (approx.)",
    material: "100% nylon",
  },
  {
    heading: "Iridescent",
    subtitle: "Tasuki Twisted · 12 colors",
    body:
      "Film-like texture with opalescent multicolor luster. Semi-transparent, allowing light to faintly pass through for a unique nuance.",
    img: "/images/floss-nishikiito-iridescent-catalog-20260710-v10.jpg",
    width: 1024,
    height: 683,
    alt: "Iridescent Tasuki Twisted metallic embroidery thread spools",
    length: "Approx. 22 yd (20 m) per spool",
    thickness: "11 count (approx.)",
    material: "100% polyester",
  },
  {
    heading: "Champagni",
    subtitle: "Tasuki Twisted · 6 colors",
    body:
      "Pastel-colored gentle sparkles like bubbles in champagne. Soft and smooth texture—comfortable for extended stitching.",
    img: "/images/floss-nishikiito-champagni-catalog-20260710-v10.jpg",
    width: 1024,
    height: 683,
    alt: "Champagni Tasuki Twisted metallic embroidery thread spools in pastel tones",
    length: "Approx. 22 yd (20 m) per spool",
    thickness: "10 count (approx.)",
    material: "81% cupro, 19% polyester",
  },
  {
    heading: "Neoni",
    subtitle: "Tasuki Twisted · 6 colors",
    body:
      "Eye-catching bright colors with dramatic impact even in small amounts. Extra-fine strands—use as many plies as your project needs.",
    img: "/images/floss-nishikiito-neoni-catalog-20260710-v10.jpg",
    width: 1024,
    height: 683,
    alt: "Neoni Tasuki Twisted metallic embroidery thread in vivid fluorescent shades",
    length: "Approx. 54 yd (50 m) per spool",
    thickness: "25 count (approx.)",
    material: "100% polyester",
  },
] as const;

export default function NishikiitoSeriesBlock() {
  return (
    <div className="floss-nishikiito-series-block">
      <div className="sashiko-concepts floss-nishikiito-series-grid">
        {FINISHES.map((item) => (
          <article key={item.heading} className="floss-nishikiito-series-card">
            <div className="floss-nishikiito-series-media">
              <Image
                src={item.img}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 20vw"
                className="floss-nishikiito-series-img"
              />
            </div>
            <h3 className="sashiko-concept-title">{item.heading}</h3>
            <p className="sashiko-concept-subtitle">{item.subtitle}</p>
            <p className="sashiko-concept-body">{item.body}</p>
            <dl className="floss-nishikiito-series-specs">
              <div>
                <dt>Length</dt>
                <dd>{item.length}</dd>
              </div>
              <div>
                <dt>Thickness</dt>
                <dd>{item.thickness}</dd>
              </div>
              <div>
                <dt>Material</dt>
                <dd>{item.material}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
