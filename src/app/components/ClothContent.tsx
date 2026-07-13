import Image from "next/image";

const INTRO_LEAD =
  "Japanese-made embroidery fabrics with smooth needle passage — from Aida and evenweave to specialty surfaces.";

const INTRO = [
  "Choosing the right fabric is essential to any embroidery project.",
  "Color, texture, and fiber all shape how your stitching looks and feels.",
  "COSMO fabrics are tightly woven for durability and consistency, stitch after stitch.",
];

type ClothItem = {
  title: string;
  description?: string;
  sample?: string;
  img: string;
  alt: string;
  /** Keep Lecien thumbnail framing — no crop (369×241) */
  preserveImage?: boolean;
  /** Show low-res/detail swatches smaller, without upscaling to full card width */
  compactImage?: boolean;
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
      "Aida and evenweave fabrics for cross stitch, counted stitch, and other techniques worked by counting fabric threads.",
      "Finished size varies with fabric count even when using the same pattern — see the sample photos (stitched on 35 mm covered buttons).",
    ],
    note:
      "In the descriptions below, “X strands” indicates how many strands of No. 25 embroidery floss were used; “X ct” is the fabric count (threads or stitch blocks per inch).",
    video: {
      label: "Watch the COSMO Aida Fabric introduction video",
      href: "https://www.youtube.com/watch?v=CXrvucg3asQ",
    },
    items: [
      {
        title: "COSMO Aida Fabric – 16 ct",
        description:
          "The finest count in the COSMO Aida range — ideal for delicate detail.",
        sample: "2 strands",
        img: "/images/cloth-java-65-lecien-20260611.jpg",
        alt: "COSMO Aida Fabric – 16 ct",
        preserveImage: true,
      },
      {
        title: "COSMO Aida Fabric – 14 ct",
        description:
          "A long-time favorite among stitchers, available in a wide range of colors.",
        sample: "3 strands",
        img: "/images/cloth-java-55-lecien-20260611.jpg",
        alt: "COSMO Aida Fabric – 14 ct",
        preserveImage: true,
      },
      {
        title: "COSMO Aida Fabric – 11 ct",
        description:
          "An easy-to-see weave that makes stitching straightforward — great for beginners. Also offered as COSMO Precut Aida Fabric – 11 ct.",
        sample: "4 strands",
        img: "/images/cloth-java-45-lecien-20260611.jpg",
        alt: "COSMO Aida Fabric – 11 ct",
        preserveImage: true,
      },
      {
        title: "COSMO Aida Fabric – 9 ct",
        description:
          "Works well with heavier thread for bold stitching — ideal for beginners and children.",
        sample: "6 strands",
        img: "/images/cloth-java-35-lecien-20260611.jpg",
        alt: "COSMO Aida Fabric – 9 ct",
        preserveImage: true,
      },
      {
        title: "COSMO Aida Fabric – 6 ct",
        description:
          "Our coarsest Aida count — enjoy relaxed, textured stitching.",
        sample: "8 strands",
        img: "/images/cloth-java-25-lecien-20260611.jpg",
        alt: "COSMO Aida Fabric – 6 ct",
        preserveImage: true,
      },
      {
        title: "COSMO Cotton Evenweave Fabric – 13 ct",
        description:
          "Cotton evenweave with a distinct hand from Aida, suited to the same counted techniques.",
        sample: "3 strands · 13 ct",
        img: "/images/cloth-cotton-evenweave-13ct-20260713.jpg",
        alt: "COSMO Cotton Evenweave Fabric – 13 ct",
        preserveImage: true,
      },
      {
        title: "COSMO Lamé Aida Fabric – 14 ct",
        description:
          "Metallic thread is woven into the weft for a soft hand with an elegant sparkle.",
        img: "/images/cloth-lame-14ct-20260616.jpg",
        alt: "COSMO Lamé Aida Fabric – 14 ct",
        preserveImage: true,
      },
    ],
  },
  {
    id: "kogin",
    navLabel: "Kogin",
    title: "Kogin",
    intro: [
      "Firm counted fabrics for kogin stitch, Hardanger, and other counted thread techniques.",
    ],
    items: [
      {
        title: "COSMO Congress Cloth – 18 ct",
        description:
          "Medium-weight Japanese cotton with a firm, easy-to-count grid — also recommended for kogin.",
        sample: "6 strands (No. 25 floss)",
        img: "/images/cloth-congress-70-cosmo-floss-20260713.jpg",
        alt: "COSMO Congress Cloth – 18 ct with COSMO embroidery floss",
      },
    ],
  },
  {
    id: "free-stitch",
    navLabel: "Free Stitch",
    title: "Free-Stitch & Surface Embroidery",
    intro: [
      "Surface embroidery fabrics with excellent needle glide. Also suitable for cutwork and sashiko.",
    ],
    items: [
      {
        title: "COSMO Cotton Surface Embroidery Fabric",
        description: "100% cotton with smooth needle passage — ideal for surface embroidery.",
        img: "/images/cloth-free-cotton-lecien-20260611.jpg",
        alt: "COSMO Cotton Surface Embroidery Fabric",
      },
      {
        title: "COSMO Linen Classy Fabric for Surface Embroidery",
        description:
          "A classic teaching cloth with the weight and body suited to freehand embroidery.",
        img: "/images/cloth-linen-classy-lecien-20260611.jpg",
        alt: "COSMO Linen Classy Fabric for Surface Embroidery",
      },
    ],
  },
  {
    id: "other",
    navLabel: "Other Fabrics",
    title: "Other Fabrics",
    items: [
      {
        title: "COSMO Cotton Oxford Evenweave Fabric – 23 ct",
        description:
          "Oxford-weave evenweave for counted stitch as well as freehand embroidery.",
        img: "/images/cloth-cotton-oxford-lecien-20260611.jpg",
        alt: "COSMO Cotton Oxford Evenweave Fabric – 23 ct",
      },
      {
        title: "COSMO Linen Oxford Evenweave Fabric – 22 ct",
        description:
          "Oxford-weave evenweave for counted stitch as well as freehand embroidery.",
        img: "/images/cloth-linen-oxford-lecien-20260611.jpg",
        alt: "COSMO Linen Oxford Evenweave Fabric – 22 ct",
      },
      {
        title: "COSMO Huck Fabric for Swedish Weaving – 15 × 11 Count",
        description:
          "Huck fabric with surface floats for Swedish weaving (15 × 11 count per inch; directions are not interchangeable).",
        img: "/images/cloth-huck-swedish-weaving-6000-20260713.jpg",
        alt: "COSMO Huck Fabric for Swedish Weaving – 15 × 11 Count",
        preserveImage: true,
        compactImage: true,
      },
      {
        title: "COSMO Linen Evenweave Fabric – 34 ct",
        description:
          "Fine linen evenweave for cross stitch, counted stitch, and other detailed counted techniques.",
        img: "/images/cloth-comb-lecien-20260611.jpg",
        alt: "COSMO Linen Evenweave Fabric – 34 ct",
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
  const compact = item.compactImage ?? false;

  return (
    <article className="cloth-card">
      <div
        className={[
          "cloth-card-media",
          preserve ? "cloth-card-media--preserve" : "",
          compact ? "cloth-card-media--compact" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {compact ? (
          <Image
            src={item.img}
            alt={item.alt}
            width={180}
            height={180}
            sizes="180px"
            className="cloth-card-img--compact"
            style={{
              objectFit: "contain",
              objectPosition: item.imagePosition ?? "center center",
            }}
          />
        ) : (
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
        )}
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
