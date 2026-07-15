import Image from "next/image";
import Link from "next/link";
import NishikiitoAccentGallery from "./NishikiitoAccentGallery";
import NishikiitoSeriesBlock from "./NishikiitoSeriesBlock";


export default function NishikiitoFlossContent() {
  return (
    <div className="sashiko-page floss-nishikiito-page">
      <div className="floss-nishikiito-hero-wordmark">
        <Image
          src="/images/floss-nishikiito-wordmark-catalog-20260710-v4.jpg"
          alt="Nishikiito"
          width={560}
          height={161}
          sizes="(max-width:640px) 70vw, 280px"
          className="floss-nishikiito-hero-wordmark-img"
          priority
        />
      </div>

      <section
        className="sashiko-hero"
        aria-labelledby="floss-nishikiito-hero-title"
      >
        <div className="sashiko-hero-split">
          <div className="sashiko-hero-copy">
            <h1 className="sashiko-hero-title" id="floss-nishikiito-hero-title">
              Nishikiito Metallic Thread
            </h1>
            <p className="sashiko-hero-sub">
              Japanese-made metallic embroidery thread.
              <br />
              Five distinctive finishes. Forty-eight colors.
              <br />
              Inspired by Kyoto&rsquo;s gold-thread craftsmanship.
              <br />
              Sometimes only a few stitches are enough to transform an entire
              design.
            </p>
          </div>
          <figure className="sashiko-hero-media">
            <Image
              src="/images/floss-nishikiito-hero-catalog-20260710-v2.jpg"
              alt="Colorful COSMO Nishikiito metallic thread spools"
              fill
              sizes="(max-width:900px) 100vw, 58vw"
              className="sashiko-hero-img"
              style={{ objectPosition: "50% 45%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <section
        id="about"
        className="sashiko-section"
        aria-labelledby="floss-nishikiito-about-title"
      >
        <h2
          className="sashiko-section-title sashiko-section-title--center"
          id="floss-nishikiito-about-title"
        >
          Nishikiito in Embroidery
        </h2>
        <NishikiitoAccentGallery />
        <p className="sashiko-section-footnote floss-nishikiito-story-footnote">
          Read the full story in{" "}
          <Link href="/stories/nishikiito-metallic-thread">
            A Little Sparkle, Made in Japan
          </Link>
          .
        </p>
      </section>

      <section
        id="finishes"
        className="sashiko-section"
        aria-labelledby="floss-nishikiito-finishes-title"
      >
        <h2 className="sashiko-section-title" id="floss-nishikiito-finishes-title">
          Five finishes, five kinds of luster
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          Metallic embroidery thread is not simply brighter than ordinary
          thread. Different constructions reflect light in different
          ways—from refined metallic sheen to brilliant sparkle, subtle
          iridescence, and vivid fluorescent color. Understanding these
          differences makes it easier to choose the finish that best suits
          your project.
        </p>
        <NishikiitoSeriesBlock />
        <div className="floss-nishikiito-closing">
          <p className="floss-nishikiito-closing-text">
            Every metallic finish reflects light differently. Explore the
            Nishikiito collection and discover the finish that best complements
            your next embroidery project.
          </p>
          <p className="floss-nishikiito-catalogue-link">
            <a href="/pdfs/nishikiito-catalogue-20260715.pdf" target="_blank" rel="noopener noreferrer">
              Browse the Full Nishikiito Catalogue
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
