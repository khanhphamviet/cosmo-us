import Image from "next/image";

const TOOLS_SUPPLIES_CATALOGUE_PDF =
  "/pdfs/tools-supplies-catalogue-20260719.pdf";

type LineupItem = {
  title: string;
  body: string;
  img: string;
  alt: string;
  imagePosition?: string;
  mediaClass?: string;
};

const CONCEPTS = [
  {
    title: "Needles & Hoops",
    body:
      "From cross-stitch and sashiko to surface embroidery — find the right needle and frame for every technique.",
  },
  {
    title: "Mark & Transfer",
    body:
      "Water-soluble pens, pattern transfer paper, and sashiko templates help you lay out designs with confidence before you stitch.",
  },
  {
    title: "Stitch & Display",
    body:
      "Waste canvas makes it easy to stitch on everyday fabrics, while wall hangers showcase finished embroidery and fabric art.",
  },
];

const LINEUP: LineupItem[] = [
  {
    title: "Sashiko Template",
    body:
      "Plate with guide holes for evenly spaced stitch marks. Square and diagonal grids in 1 mm increments help you draw ideal sashiko patterns.",
    img: "/images/tools-lineup-sashiko-template-20260610.jpg",
    alt: "Sashiko template plates with grid hole patterns",
  },
  {
    title: "Embroidery Needles",
    body:
      "A range of needles suited to cross-stitch, French embroidery, sashiko, and other stitching styles — each selected for smooth passage through COSMO thread.",
    img: "/images/tools-lineup-needles-20260610.jpg",
    alt: "Assorted COSMO embroidery needles",
  },
  {
    title: "Water Soluble Pen",
    body:
      "Mark fabric and remove lines with water. The extra-fine tip is ideal for delicate motifs and detailed layout work.",
    img: "/images/tools-lineup-chaco-paper-20260610.jpg",
    alt: "Water soluble marking pen for embroidery",
  },
  {
    title: "Pattern Transfer Paper",
    body:
      "Transfer embroidery designs onto fabric with soft ink that transfers easily. Wide sizes are available for larger motifs.",
    img: "/images/tools-lineup-copy-paper-20260610.jpg",
    alt: "Pattern transfer paper sheets for embroidery",
  },
  {
    title: "Waste Canvas",
    body:
      "Stitch cross-stitch motifs on handkerchiefs, T-shirts, and other items — then pull away the canvas when you are finished.",
    img: "/images/tools-lineup-waste-canvas-20260610.jpg",
    alt: "Waste canvas for cross-stitch on garments",
  },
  {
    title: "One-Touch Embroidery Hoop",
    body:
      "Spring-loaded inner ring for quick fabric mounting. No outer screws means fewer snags — stitch smoothly from start to finish.",
    img: "/images/tools-lineup-embroidery-hoop-20260610.jpg",
    alt: "One-touch spring embroidery hoop",
  },
  {
    title: "Embroidery Wall Hanger",
    body:
      "Designed for displaying embroidery or fabric art. Natural wood bars with a warm, organic texture clamp fabric with neodymium magnets, while a genuine leather strap and non-slip grip keep your finished piece secure and beautifully presented.",
    img: "/images/tools-lineup-wall-hanger-20260611b.png",
    alt: "Christmas tree cross-stitch displayed on a wooden embroidery wall hanger",
    imagePosition: "center 18%",
  },
];

export default function ToolsSuppliesContent() {
  return (
    <div className="sashiko-page tools-supplies-page">
      <section
        className="sashiko-hero tools-supplies-hero"
        aria-labelledby="tools-supplies-hero-title"
      >
        <div className="sashiko-hero-split">
          <div className="sashiko-hero-copy tools-supplies-hero-copy">
            <h1
              className="sashiko-hero-title tools-supplies-hero-title"
              id="tools-supplies-hero-title"
            >
              Tools &amp; Supplies
            </h1>
            <p className="tools-supplies-hero-tagline">
              Everything You Need to Stitch.
            </p>
            <p className="sashiko-hero-sub tools-supplies-hero-sub">
              Needles, hoops, marking tools, and ready-to-stitch bases — curated
              to support every COSMO embroidery project.
            </p>
          </div>
          <figure className="sashiko-hero-media">
            <Image
              src="/images/tools-hero-20260610.jpg"
              alt="COSMO embroidery hoop and stitching supplies"
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
        className="sashiko-section tools-supplies-about-section"
        aria-labelledby="tools-supplies-about-title"
      >
        <h2
          className="sashiko-section-title sashiko-section-title--center"
          id="tools-supplies-about-title"
        >
          Stitch with the Right Tools
        </h2>
        <div className="sashiko-concepts tools-supplies-concepts">
          {CONCEPTS.map((item) => (
            <div key={item.title} className="tools-supplies-concept">
              <h3 className="tools-supplies-concept-title">{item.title}</h3>
              <p className="sashiko-concept-body">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="lineup"
        className="sashiko-section sashiko-section--last"
        aria-labelledby="tools-supplies-lineup-title"
      >
        <h2 className="sashiko-section-title" id="tools-supplies-lineup-title">
          Product Lineup
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          Essential embroidery tools and ready-to-stitch bases from LECIEN — designed
          to pair with COSMO floss, sashiko thread, and cloth.
        </p>
        <p className="sashiko-lineup-catalog">
          <a
            href={TOOLS_SUPPLIES_CATALOGUE_PDF}
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
              <div
                className={`sashiko-lineup-media${item.mediaClass ? ` ${item.mediaClass}` : ""}`}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 20vw"
                  className="sashiko-lineup-img"
                  style={
                    item.imagePosition
                      ? { objectPosition: item.imagePosition }
                      : undefined
                  }
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
