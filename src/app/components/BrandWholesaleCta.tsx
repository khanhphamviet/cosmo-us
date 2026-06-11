import Link from "next/link";

const FAIRE_STORE_URL = "https://lecien.faire.com";

export default function BrandWholesaleCta() {
  return (
    <section className="brand-wholesale-cta" aria-labelledby="brand-wholesale-cta-title">
      <div className="brand-wholesale-cta-inner">
        <div className="brand-wholesale-cta-copy">
          <p className="brand-wholesale-cta-eyebrow">COSMO × FAIRE</p>
          <h2 className="brand-wholesale-cta-title" id="brand-wholesale-cta-title">
            Wholesale for U.S. Retailers
          </h2>
          <p className="brand-wholesale-cta-summary">
            Available on Faire since May 2026 · U.S. warehouse in New Jersey
          </p>
        </div>
        <div className="brand-wholesale-cta-actions">
          <a
            href={FAIRE_STORE_URL}
            className="btn-solid brand-wholesale-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop on Faire
            <span className="brand-wholesale-cta-icon" aria-hidden="true">
              ↗
            </span>
          </a>
          <Link href="/wholesale" className="btn-outline brand-wholesale-cta-btn">
            Learn more
            <span className="brand-wholesale-cta-icon" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
