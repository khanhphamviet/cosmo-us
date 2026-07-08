import Image from "next/image";
import { FAIRE_STORE_URL } from "../data/site";
import { WHOLESALE_INFO_CARDS } from "../data/wholesale";
import { WholesaleInfoIcon } from "./WholesaleInfoIcon";

const FAIRE_BENEFITS = [
  "50% off your first order (up to $150)*",
  "1 year of free shipping with us*",
  "60-day payment terms for eligible retailers",
  "Free returns on your first order",
];

export default function WholesaleContent() {
  return (
    <div className="wholesale-page">
      <section className="wholesale-hero" aria-labelledby="wholesale-hero-title">
        <div className="sashiko-hero-split wholesale-hero-split">
          <div className="sashiko-hero-copy wholesale-hero-copy">
            <p className="wholesale-announce">COSMO × FAIRE</p>
            <h1 className="sashiko-hero-title wholesale-hero-title" id="wholesale-hero-title">
              Unlock our wholesale catalog
            </h1>
            <p className="sashiko-hero-sub wholesale-hero-intro">
              LECIEN COSMO embroidery products are available for U.S. retailers
              through our official COSMO Faire wholesale store.
            </p>
            <ul className="wholesale-faire-benefits">
              {FAIRE_BENEFITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={FAIRE_STORE_URL}
              className="btn-solid wholesale-order-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop COSMO on Faire
              <span className="wholesale-cta-icon" aria-hidden="true">
                ↗
              </span>
            </a>
            <p className="wholesale-faire-note">
              *Available for retailers who are new to Faire
            </p>
          </div>
          <figure className="sashiko-hero-media wholesale-hero-media">
            <Image
              src="/images/brand-hero-floss.png"
              alt="COSMO embroidery floss skeins in shades of pink and red"
              fill
              sizes="(max-width:900px) 100vw, 58vw"
              className="sashiko-hero-img"
              style={{ objectPosition: "52% 44%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <section
        className="wholesale-info"
        aria-label="Wholesale fulfillment details"
      >
        <div className="wholesale-info-grid">
          {WHOLESALE_INFO_CARDS.map((card) => (
            <article key={card.id} className="wholesale-info-card">
              <WholesaleInfoIcon id={card.id} />
              <h2 className="wholesale-info-title">{card.title}</h2>
              <p className="wholesale-info-body">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="wholesale-footer-note">
        LECIEN COSMO wholesale on Faire &mdash; Operated by TANAAKK INC., US Seller
        of Record for LECIEN Corporation
      </p>
    </div>
  );
}
