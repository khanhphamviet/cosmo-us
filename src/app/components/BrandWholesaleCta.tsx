import Link from "next/link";
import { FAIRE_STORE_URL } from "../data/site";

export default function BrandWholesaleCta() {
  return (
    <section className="brand-wholesale-cta" aria-labelledby="brand-wholesale-cta-title">
      <div className="brand-wholesale-cta-inner">
        <div className="brand-wholesale-cta-copy">
          <p className="brand-wholesale-cta-eyebrow">COSMO × FAIRE</p>
          <h2 className="brand-wholesale-cta-title" id="brand-wholesale-cta-title">
            LECIEN COSMO Wholesale on Faire
          </h2>
          <p className="brand-wholesale-cta-summary">
            Official LECIEN COSMO wholesale on Faire · Operated by TANAAKK INC.
            New Jersey fulfillment · Restocking from Japan
          </p>
          <p className="brand-wholesale-cta-authority">
            Authorized U.S. seller · Official brand store
          </p>
        </div>
        <div className="brand-wholesale-cta-actions">
          <a
            href={FAIRE_STORE_URL}
            className="btn-solid brand-wholesale-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop COSMO on Faire
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
