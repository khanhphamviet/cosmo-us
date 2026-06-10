import Image from "next/image";

const INTRO =
  "nishikiito is a Japanese-made metallic embroidery thread, carefully crafted using the gold-thread techniques once used for kimono in Kyoto.";

const SUBINTRO =
  "Five thread types with distinct luster qualities add accents to a wide range of embroidery and needlework.";

const OVERVIEW_SPECS = [
  { label: "Colors", value: "48" },
  { label: "Country of Origin", value: "Japan" },
];

const STYLES = [
  {
    heading: "Nishiki",
    twist: "round twist",
    body:
      "Known for its subdued luster and resistance to friction. Ideal for tatting lace and tassels. Strands can be separated one at a time from the 4-ply twist.",
    length: "Approx. 20 m (22 yd) per spool",
    thickness: "Equivalent to No. 5–6 thread size (approx.)",
    material: "Nylon / Polyester (varies by color)",
    img: "/images/nishikiito-nishiki-lecien.jpg",
    alt: "Nishiki metallic embroidery thread — round twist",
  },
  {
    heading: "Kagami",
    twist: "tasuki twist",
    body:
      "A bold sparkle from the twist structure and generous metallic content. Soft hand ideal for cross-stitch and free-motion stitching.",
    length: "Approx. 20 m (22 yd) per spool",
    thickness: "Equivalent to No. 14 thread size (approx.)",
    material: "100% Nylon",
    img: "/images/nishikiito-kagami-lecien.jpg",
    alt: "Kagami metallic embroidery thread — tasuki twist",
  },
  {
    heading: "Opali",
    twist: "tasuki twist",
    body:
      "Film-like texture with opalescent, multicolor reflections. A semi-transparent finish lets light pass through faintly for a look unlike any other thread.",
    length: "Approx. 20 m (22 yd) per spool",
    thickness: "Equivalent to No. 11 thread size (approx.)",
    material: "100% Polyester",
    img: "/images/nishikiito-opali-lecien.jpg",
    alt: "Opali metallic embroidery thread — tasuki twist",
  },
  {
    heading: "Champagni",
    twist: "tasuki twist",
    body:
      "Pastel tones with gentle sparkles like champagne bubbles. Soft, smooth texture for comfortable extended stitching.",
    length: "Approx. 20 m (22 yd) per spool",
    thickness: "Equivalent to No. 10 thread size (approx.)",
    material: "81% Cupro, 19% Polyester",
    img: "/images/nishikiito-champagni-lecien.jpg",
    alt: "Champagni metallic embroidery thread — tasuki twist",
  },
  {
    heading: "Neoni",
    twist: "tasuki twist",
    body:
      "Vivid fluorescent colors with dramatic impact even in small amounts. Extra-fine strands — use as many plies as your project needs.",
    length: "Approx. 50 m (54 yd) per spool",
    thickness: "Equivalent to No. 25 thread size (approx.)",
    material: "100% Polyester",
    img: "/images/nishikiito-neoni-lecien.jpg",
    alt: "Neoni metallic embroidery thread — tasuki twist",
  },
];

function SpecTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <table className="company-table floss-nishikiito-spec-table">
      <tbody>
        {specs.map((s) => (
          <tr key={s.label}>
            <th>{s.label}</th>
            <td>{s.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function NishikiitoFlossContent() {
  return (
    <div className="floss-nishikiito-page">
      <div className="floss-nishikiito-banner">
        <Image
          src="/images/nishikiito-title-lecien.jpg"
          alt="Nishikiito Metallic Thread"
          width={750}
          height={300}
          sizes="(max-width:750px) 100vw, 750px"
          className="floss-nishikiito-banner-img"
          priority
        />
      </div>

      <div className="floss-nishikiito-intro-block">
        <div className="floss-nishikiito-logo-row">
          <div className="floss-nishikiito-logo">
            <Image
              src="/images/nishikiito-logo-lecien.jpg"
              alt="nishikiito"
              width={330}
              height={90}
              className="floss-nishikiito-logo-img"
            />
          </div>
          <p className="floss-nishikiito-intro-text">{INTRO}</p>
        </div>

        <SpecTable specs={OVERVIEW_SPECS} />
      </div>

      <div className="floss-nishikiito-styles-section">
        <p className="floss-nishikiito-subintro">{SUBINTRO}</p>

        <ul className="floss-nishikiito-style-list">
          {STYLES.map((item) => (
            <li key={item.heading} className="floss-nishikiito-style-item">
              <div className="floss-nishikiito-style-media">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width:640px) 100vw, 240px"
                  style={{ objectFit: "cover", objectPosition: "center 42%" }}
                />
              </div>
              <div className="floss-nishikiito-style-body">
                <h2 className="floss-nishikiito-style-title">
                  {item.heading}
                  <span className="floss-nishikiito-style-twist"> ({item.twist})</span>
                </h2>
                <p className="floss-nishikiito-style-text">{item.body}</p>
                <dl className="floss-nishikiito-style-specs">
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
