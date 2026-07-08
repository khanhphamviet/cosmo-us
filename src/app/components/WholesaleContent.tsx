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
              LECIEN COSMO wholesale is available through our official COSMO
              Embroidery brand store on Faire, operated by TANAAKK INC.—the
              authorized U.S. seller for LECIEN COSMO.
            </p>
            <p className="wholesale-hero-fulfillment">
              This is a U.S.-based store with primary fulfillment from New
              Jersey. Retailers in other countries can also order on Faire when
              shipping is available for their destination.
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
            <p className="wholesale-faire-note wholesale-faire-note--secondary">
              U.S.-based store · Ships from New Jersey · International delivery
              depends on Faire
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

      <section className="wholesale-verify" aria-labelledby="wholesale-verify-title">
        <h2 className="wholesale-verify-title" id="wholesale-verify-title">
          Before you order
        </h2>
        <dl className="wholesale-verify-list">
          <div className="wholesale-verify-item">
            <dt>Who operates this Faire store?</dt>
            <dd>
              This store is operated by TANAAKK INC., the authorized U.S. seller
              for LECIEN COSMO.
            </dd>
          </div>
          <div className="wholesale-verify-item">
            <dt>Who fulfills the order?</dt>
            <dd>
              Orders ship primarily from our New Jersey warehouse. Product is
              made by LECIEN in Japan and restocked from Japan as needed.
            </dd>
          </div>
          <div className="wholesale-verify-item">
            <dt>Can I order from outside the United States?</dt>
            <dd>
              Yes, when Faire offers shipping to your destination. Our store is
              U.S.-based and fulfills primarily from New Jersey; checkout will
              show whether delivery is available for your location.
            </dd>
          </div>
        </dl>
      </section>

      <p className="wholesale-footer-note">
        LECIEN COSMO wholesale on Faire &mdash; Operated by TANAAKK INC.,
        Authorized U.S. Seller for LECIEN COSMO
      </p>
    </div>
  );
}
