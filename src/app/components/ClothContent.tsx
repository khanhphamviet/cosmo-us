import Image from "next/image";

const INTRO_LEAD =
  "Japanese-made embroidery cloth with smooth needle passage — from counted even-weave to specialty surfaces.";

const INTRO = [
  "Choosing the right fabric is essential to any embroidery project.",
  "Color, texture, and fiber all shape how your stitching looks and feels.",
  "COSMO cloth is tightly woven for durability and consistency, stitch after stitch.",
];

type ClothItem = {
  title: string;
  description?: string;
  sample?: string;
  img: string;
  alt: string;
  /** Keep Lecien thumbnail framing — no crop (369×241) */
  preserveImage?: boolean;
  imagePosition?: string;
};

type ClothSection = {
  id: string;
  navLabel: string;
  title: string;
  intro?: string[];
  note?: string;
  video?: { label: string; href: string };
  items: ClothItem[];
};

const SECTIONS: ClothSection[] = [
  {
    id: "counted",
    navLabel: "Cross Stitch",
    title: "Cross Stitch · Counted Stitch · Surface Embroidery",
    intro: [
      "Even-weave fabrics for cross stitch, counted stitch, and other techniques worked by counting fabric threads.",
      "Finished size varies with fabric count even when using the same pattern — see the sample photos (stitched on 35 mm covered buttons).",
    ],
    note:
      "In the descriptions below, “X strands” indicates how many strands of No. 25 embroidery floss were used; “X ct” is the fabric count (threads per inch).",
    video: {
      label: "Watch the Embroidery Cloth introduction video",
      href: "https://www.youtube.com/watch?v=CXrvucg3asQ",
    },
    items: [
      {
        title: "Embroidery Cloth 16 ct",
        description:
          "The finest count in the COSMO Embroidery Cloth range — ideal for delicate detail.",
        sample: "2 strands",
        img: "/images/cloth-java-65-lecien-20260611.jpg",
        alt: "Embroidery Cloth 16 ct",
        preserveImage: true,
      },
      {
        title: "Embroidery Cloth 14 ct",
        description:
          "A long-time favorite among stitchers, available in a wide range of colors.",
        sample: "3 strands",
        img: "/images/cloth-java-55-lecien-20260611.jpg",
        alt: "Embroidery Cloth 14 ct",
        preserveImage: true,
      },
      {
        title: "Embroidery Cloth 11 ct",
        description:
          "An easy-to-see weave that makes stitching straightforward — great for beginners.",
        sample: "4 strands",
        img: "/images/cloth-java-45-lecien-20260611.jpg",
        alt: "Embroidery Cloth 11 ct",
        preserveImage: true,
      },
      {
        title: "Embroidery Cloth 9 ct",
        description:
          "Works well with heavier thread for bold stitching — ideal for beginners and children.",
        sample: "6 strands",
        img: "/images/cloth-java-35-lecien-20260611.jpg",
        alt: "Embroidery Cloth 9 ct",
        preserveImage: true,
      },
      {
        title: "Embroidery Cloth 6 ct",
        description:
          "Our coarsest Embroidery Cloth count — enjoy relaxed, textured stitching.",
        sample: "8 strands",
        img: "/images/cloth-java-25-lecien-20260611.jpg",
        alt: "Embroidery Cloth 6 ct",
        preserveImage: true,
      },
      {
        title: "Indian Cloth",
        description:
          "A distinct weave from Embroidery Cloth, suited to the same counted techniques.",
        sample: "3 strands · 13 ct",
        img: "/images/cloth-indian-cross-lecien-20260611.jpg",
        alt: "Indian Cloth",
        preserveImage: true,
      },
      {
        title: "Lame Cloth 14 ct",
        description:
          "Metallic thread is woven into the weft for a soft hand with an elegant sparkle.",
        img: "/images/cloth-lame-14ct-20260616.jpg",
        alt: "Lame Cloth 14 ct",
        preserveImage: true,
      },
    ],
  },
  {
    id: "kogin",
    navLabel: "Kogin",
    title: "Kogin",
    intro: [
      "Even-weave fabrics for kogin stitch, Hardanger, and other counted thread techniques.",
    ],
    items: [
      {
        title: "Congress 70",
        description:
          "Medium-weight Japanese cotton with an easy-to-count weave.",
        sample: "6 strands (No. 25 floss)",
        img: "/images/cloth-congress-70-lecien-20260611.jpg",
        alt: "Congress 70 embroidery fabric",
      },
    ],
  },
  {
    id: "free-stitch",
    navLabel: "Free Stitch",
    title: "Free-Stitch & Surface Embroidery",
    intro: [
      "Embroidery cloth with excellent needle glide. Also suitable for cutwork and sashiko.",
    ],
    items: [
      {
        title: "Cotton Cross for Free Stitch",
        description: "100% cotton with smooth needle passage — ideal for surface embroidery.",
        img: "/images/cloth-free-cotton-lecien-20260611.jpg",
        alt: "Cotton Cross for Free Stitch",
      },
      {
        title: "Linen Classy",
        description:
          "A classic teaching cloth with the weight and body suited to embroidery.",
        img: "/images/cloth-linen-classy-lecien-20260611.jpg",
        alt: "Linen Classy embroidery fabric",
      },
    ],
  },
  {
    id: "other",
    navLabel: "Other Fabrics",
    title: "Other Fabrics",
    items: [
      {
        title: "Cotton Oxford",
        description:
          "For counted stitch as well as freehand embroidery without counting threads.",
        img: "/images/cloth-cotton-oxford-lecien-20260611.jpg",
        alt: "Cotton Oxford embroidery fabric",
      },
      {
        title: "Linen Oxford",
        description:
          "For counted stitch as well as freehand embroidery without counting threads.",
        img: "/images/cloth-linen-oxford-lecien-20260611.jpg",
        alt: "Linen Oxford embroidery fabric",
      },
      {
        title: "Swedish Cross",
        description:
          "Cotton fabric for Swedish embroidery worked by withdrawing vertical threads.",
        img: "/images/cloth-swedish-cross-lecien-20260611.jpg",
        alt: "Swedish Cross embroidery fabric",
      },
      {
        title: "Comb",
        description:
          "Even-weave fabric for cross stitch, counted stitch, and other counted techniques.",
        img: "/images/cloth-comb-lecien-20260611.jpg",
        alt: "Comb embroidery fabric",
      },
    ],
  },
  {
    id: "tape",
    navLabel: "Tape",
    title: "Tape",
    intro: [
      "Tape-format fabric for counted embroidery such as cross stitch and counted stitch.",
    ],
    items: [
      {
        title: "Linen Tape — 50 mm wide",
        img: "/images/cloth-linen-tape-50-lecien-20260611.jpg",
        alt: "Linen Tape 50 mm wide",
      },
      {
        title: "Linen Tape — 120 mm wide",
        img: "/images/cloth-linen-tape-120-lecien-20260611.jpg",
        alt: "Linen Tape 120 mm wide",
      },
      {
        title: "Cross Stitch Cotton Tape — 30 mm wide",
        img: "/images/cloth-cotton-tape-30-lecien-20260611.jpg",
        alt: "Cross Stitch Cotton Tape 30 mm wide",
      },
      {
        title: "Cross Stitch Cotton Tape — 100 mm wide",
        img: "/images/cloth-cotton-tape-100-lecien-20260611.jpg",
        alt: "Cross Stitch Cotton Tape 100 mm wide",
      },
    ],
  },
];

function ClothCard({ item }: { item: ClothItem }) {
  const preserve = item.preserveImage ?? false;

  return (
    <article className="cloth-card">
      <div
        className={`cloth-card-media${preserve ? " cloth-card-media--preserve" : ""}`}
      >
        <Image
          src={item.img}
          alt={item.alt}
          fill
          sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 33vw"
          style={{
            objectFit: preserve ? "contain" : "cover",
            objectPosition: item.imagePosition ?? "center center",
          }}
        />
      </div>
      <div className="cloth-card-body">
        <h3 className="cloth-card-title">{item.title}</h3>
        {item.description && (
          <p className="cloth-card-text">{item.description}</p>
        )}
        {item.sample && (
          <p className="cloth-card-meta">
            {item.sample.startsWith("Bolt:") ? item.sample : `Sample: ${item.sample}`}
          </p>
        )}
      </div>
    </article>
  );
}

export default function ClothContent() {
  return (
    <div className="cloth-page">
      <div className="cloth-banner">
        <Image
          src="/images/cloth-main-lecien-20260611.jpg"
          alt="COSMO embroidery cloth collection"
          width={1000}
          height={400}
          sizes="(max-width:1000px) 100vw, 1000px"
          className="cloth-banner-img"
          priority
        />
      </div>

      <div className="cloth-intro-block">
        <p className="cloth-intro-lead">{INTRO_LEAD}</p>
        {INTRO.map((line) => (
          <p key={line} className="cloth-intro-text">
            {line}
          </p>
        ))}
      </div>

      <nav className="cloth-section-nav" aria-label="Fabric categories">
        {SECTIONS.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="cloth-section-nav-link">
            {section.navLabel}
          </a>
        ))}
      </nav>

      {SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="cloth-section"
          aria-labelledby={`cloth-section-${section.id}`}
        >
          <h2 className="cloth-section-title" id={`cloth-section-${section.id}`}>
            {section.title}
          </h2>
          {section.intro?.map((line) => (
            <p key={line} className="cloth-section-intro">
              {line}
            </p>
          ))}
          {section.note && <p className="cloth-section-note">{section.note}</p>}
          {section.video && (
            <p className="cloth-section-video">
              <a href={section.video.href} target="_blank" rel="noopener noreferrer">
                {section.video.label}
                <span className="cloth-external-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </p>
          )}
          <div className="cloth-card-grid">
            {section.items.map((item) => (
              <ClothCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
