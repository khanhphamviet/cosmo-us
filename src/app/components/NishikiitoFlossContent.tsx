import Image from "next/image";
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
            </p>
            <p className="sashiko-hero-sub">
              Five distinctive finishes.
              <br />
              48 colors.
            </p>
            <p className="sashiko-hero-sub">
              Crafted using techniques inspired by Kyoto&rsquo;s kimono
              gold-thread craftsmanship.
            </p>
            <p className="sashiko-hero-sub sashiko-hero-sub--tagline">
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
        id="finishes"
        className="sashiko-section"
        aria-labelledby="floss-nishikiito-finishes-title"
      >
        <h2 className="sashiko-section-title" id="floss-nishikiito-finishes-title">
          Five Finishes, Five Distinctive Expressions
        </h2>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          Every metallic finish reflects light differently.
        </p>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          Nishikiito is available in five distinctive finishes, each designed
          to create a unique visual effect—from refined metallic sheen and
          brilliant sparkle to subtle iridescence, soft pastel shimmer, and
          vivid fluorescent color.
        </p>
        <p className="sashiko-section-intro sashiko-section-intro--tight">
          Choose the finish that best complements your embroidery.
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
