import Image from "next/image";
import SeasonsColorChart from "./SeasonsColorChart";
import SeasonsSeriesBlock from "./SeasonsSeriesBlock";
import ProductStoryLink from "./ProductStoryLink";

export default function SeasonsFlossContent() {
  return (
    <div className="sashiko-page floss-seasons-page">
      <div className="floss-seasons-hero-wordmark">
        <Image
          src="/images/floss-seasons-wordmark-trimmed-20260710-v2.jpg"
          alt="Seasons"
          width={800}
          height={168}
          sizes="(max-width:640px) 50vw, 180px"
          className="floss-seasons-hero-wordmark-img"
          priority
        />
      </div>
      <section className="sashiko-hero" aria-labelledby="floss-seasons-hero-title">
        <div className="sashiko-hero-split">
          <div className="sashiko-hero-copy">
            <h1 className="sashiko-hero-title" id="floss-seasons-hero-title">
              Seasons Variegated Floss
            </h1>
            <p className="sashiko-hero-sub">
              One length of thread, many tones.
              <br />
              140 variegated colors.
              <br />
              Made in Japan.
            </p>
          </div>
          <figure className="sashiko-hero-media">
            <Image
              src="/images/floss-seasons-20260610.jpg"
              alt="Close-up of COSMO Seasons variegated embroidery floss skeins in soft pink and white gradations"
              fill
              sizes="(max-width:900px) 100vw, 58vw"
              className="sashiko-hero-img"
              priority
            />
          </figure>
        </div>
      </section>

      <section
        id="series"
        className="sashiko-section"
        aria-labelledby="floss-seasons-series-title"
      >
        <h2 className="sashiko-section-title" id="floss-seasons-series-title">
          Three series, three rhythms
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          Seasons comes in three series that differ by how quickly the color
          changes. That rhythm of change is what makes each one suited to a
          different kind of stitching.
        </p>
        <SeasonsSeriesBlock />
      </section>

      <section
        id="colors"
        className="sashiko-section sashiko-section--last"
        aria-labelledby="floss-seasons-colors-title"
      >
        <h2 className="sashiko-section-title" id="floss-seasons-colors-title">
          Explore 140 variegated colors
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          The official Seasons color chart organizes every variegated shade by
          series—5000 for even gradations about every 8 cm, 8000 for long,
          gradual changes about every 30 cm, and 9000 for short, random shifts.
          Click the chart to enlarge and zoom.
        </p>
        <SeasonsColorChart />
        <ProductStoryLink
          href="/stories/seasons-variegated-floss"
          title="COSMO® Seasons: Variegated Floss That Shades as You Stitch"
        />
      </section>
    </div>
  );
}
