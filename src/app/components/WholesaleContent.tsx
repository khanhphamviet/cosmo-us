import Image from "next/image";

const FAIRE_STORE_URL = "https://www.faire.com/brand/bw_9fjrhm875z";

const FAIRE_BENEFITS = [
  "50% off your first order (up to $150)*",
  "1 year of free shipping with us*",
  "60-day payment terms for eligible retailers",
  "Free returns on your first order",
];

const INFO_CARDS = [
  {
    id: "availability" as const,
    title: "Available on Faire since May 2026",
    body:
      "COSMO products are available on Faire for U.S. retailers since May 2026.",
  },
  {
    id: "warehouse" as const,
    title: "U.S. Warehouse in New Jersey",
    body:
      "Selected inventory ships from our New Jersey warehouse for faster domestic fulfillment.",
  },
  {
    id: "restocking" as const,
    title: "Restocking from Japan",
    body:
      "Out-of-stock items are replenished from Japan on a rolling basis.",
  },
];

function InfoIcon({ id }: { id: (typeof INFO_CARDS)[number]["id"] }) {
  return (
    <div className="wholesale-info-icon" aria-hidden="true">
      {id === "availability" && (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="10" y="12" width="28" height="26" rx="2" />
          <path d="M10 20h28M18 8v8M30 8v8" />
          <path d="M16 28h6M16 32h10" />
        </svg>
      )}
      {id === "warehouse" && (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 34h32" />
          <path d="M12 34V18l12-8 12 8v16" />
          <path d="M20 34v-10h8v10" />
          <path d="M12 22h24" />
        </svg>
      )}
      {id === "restocking" && (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 30h36l-4-12H10L6 30z" />
          <path d="M14 30V22M22 30V22M30 30V22" />
          <path d="M4 34h40" />
          <path d="M36 18l4-6M38 8v6" />
        </svg>
      )}
    </div>
  );
}

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
          {INFO_CARDS.map((card) => (
            <article key={card.id} className="wholesale-info-card">
              <InfoIcon id={card.id} />
              <h2 className="wholesale-info-title">{card.title}</h2>
              <p className="wholesale-info-body">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="wholesale-footer-note">
        COSMO wholesale on Faire &mdash; Operated by TANAAKK INC., US Seller of
        Record for LECIEN Corporation
      </p>
    </div>
  );
}
