import Link from "next/link";

export default function BrandNewsBanner() {
  return (
    <section className="brand-news-banner" aria-label="News">
      <div className="brand-news-banner-inner">
        <span className="brand-news-banner-label">News</span>
        <p className="brand-news-banner-text">
          New for retailers: COSMO wholesale on Faire
          <span className="brand-news-banner-sep" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          New Jersey fulfillment
          <Link href="/wholesale" className="brand-news-banner-link">
            Learn more
            <span aria-hidden="true"> →</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
