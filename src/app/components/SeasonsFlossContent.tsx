import Image from "next/image";

const INTRO_LINES = [
  "Beautiful gradation No. 25 embroidery thread.",
  "A color range designed to complement 462 solid No. 25 embroidery thread colors.",
  "Three series with different color-change lengths enable even richer expression.",
];

const SERIES = [
  {
    heading: "Seasons 5000",
    body:
      "Changes color at even intervals about every 8 cm (3.14 in). With an easy-to-use color-change pitch, it is enjoyable for embroidery as well as creative thread play.",
    img: "/images/floss-seasons-5000-lecien.jpg",
    alt: "Seasons 5000 variegated embroidery floss",
  },
  {
    heading: "Seasons 8000",
    body:
      "Colors change about every 30 cm (11.81 in). Ideal for large motifs and firm, full stitching. A rich variety of pinks and greens — colors often used to depict landscapes and scenery.",
    img: "/images/floss-seasons-8000-lecien-20260627.jpg",
    alt: "Seasons 8000 variegated embroidery floss",
  },
  {
    heading: "Seasons 9000",
    body:
      "A series with short, random color-change pitches. Enjoy dynamic gradation even in small motifs. Vivid, memorable colors suited to accent and one-point stitching.",
    img: "/images/floss-seasons-9000-lecien.jpg",
    alt: "Seasons 9000 variegated embroidery floss",
  },
];

export default function SeasonsFlossContent() {
  return (
    <div className="floss-seasons-page">
      <div className="floss-seasons-intro-block">
        <div className="floss-seasons-logo-row">
          <div className="floss-seasons-logo">
            <Image
              src="/images/floss-seasons-logo-lecien.jpg"
              alt="Seasons"
              width={304}
              height={57}
              className="floss-seasons-logo-img"
              priority
            />
          </div>
          <div className="floss-seasons-intro-text">
            {INTRO_LINES.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="floss-seasons-sub-banner">
          <Image
            src="/images/floss-seasons-color-change-chart.jpg"
            alt="Difference in length of color change — Seasons 5000, 8000, and 9000"
            width={750}
            height={288}
            sizes="(max-width:750px) 100vw, 750px"
            className="floss-seasons-sub-banner-img"
          />
        </div>
      </div>

      <div className="floss-seasons-compare">
        <h2 className="floss-seasons-compare-title">The three series</h2>
        <div className="floss-seasons-card-grid">
          {SERIES.map((item) => (
            <article key={item.heading} className="floss-seasons-card">
              <div className="floss-seasons-card-media">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="floss-seasons-card-body">
                <h3 className="floss-seasons-card-title">{item.heading}</h3>
                <p className="floss-seasons-card-text">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
