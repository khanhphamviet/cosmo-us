import Image from "next/image";

export default function BrandHero() {
  return (
    <section className="brand-hero">
      <Image
        src="/images/brand-hero-floss.png"
        alt="COSMO embroidery floss skein"
        fill
        priority
        sizes="100vw"
        className="brand-hero-bg"
      />
      <div className="brand-hero-overlay" aria-hidden="true" />
      <div className="brand-hero-inner">
        <div className="brand-hero-copy">
          <h1 className="brand-hero-title">
            <span className="brand-hero-title-line">
              Japanese Embroidery Thread
            </span>
            <span className="brand-hero-title-line">
              Since 1933<span className="brand-hero-period">.</span>
            </span>
          </h1>
          <p className="brand-hero-subtitle">
            <span className="brand-hero-subtitle-line">Designed in Kyoto,</span>
            <span className="brand-hero-subtitle-line">
              Crafted with Care in Japan.
            </span>
          </p>
          <hr className="brand-hero-rule" />
          <p className="brand-hero-body">
            For over 90 years, COSMO has been creating beautiful embroidery
            threads known for their rich colors, smooth texture, and exceptional
            quality.
          </p>
        </div>
      </div>
    </section>
  );
}
