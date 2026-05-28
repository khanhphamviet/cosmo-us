// Wholesale page
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wholesale",
  description:
    "COSMO Embroidery wholesale purchasing for corporate customers in the United States. Contact TANAAKK INC for pricing and availability.",
  alternates: { canonical: "/wholesale" },
  openGraph: {
    title: "Wholesale | COSMO Embroidery US",
    description:
      "Wholesale purchasing for retailers and corporate customers — COSMO floss, kits, and more. Contact us for details.",
    url: "/wholesale",
  },
};

export default function WholesalePage() {
  return (
    <>
      <nav className="sub-nav">
        <div className="sub-nav-inner">
          <Link href="/">TOP</Link>
          <Link href="/floss">Floss</Link>
          <Link href="/freepatterns">Free Patterns</Link>
          <Link href="/wholesale" className="active">Wholesale</Link>
        </div>
      </nav>

      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / Wholesale
        </div>
        <h1>Wholesale</h1>
      </div>

      <div className="page-container">
        <p style={{
          textAlign:"center",
          maxWidth:"560px",
          margin:"0 auto 48px",
          fontSize:"15px",
          lineHeight:1.8,
          color:"#444"
        }}>
          COSMO Embroidery products are available for wholesale purchase by qualified
          corporate customers in the United States. Products are shipped from our US
          warehouse operated by TANAAKK INC.
        </p>

        <div className="wholesale-box">
          <h2>Wholesale Inquiry</h2>
          <p>
            For pricing, minimum order quantities, and account setup, please contact
            the TANAAKK INC. US sales team.
          </p>
          <a
            href="mailto:support@lecien.com"
            className="btn-solid"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
