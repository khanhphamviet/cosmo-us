import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faire Wholesale — COSMO Embroidery",
  description: "COSMO Embroidery wholesale on Faire. Operated by TANAAKK INC.",
  alternates: { canonical: "/faire" },
};

export default function FairePage() {
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

      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
        }}
      >
        <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#aaa", marginBottom: "24px" }}>
          Wholesale · Faire
        </p>

        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: 300,
            letterSpacing: "0.05em",
            color: "#1a1a1a",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}
        >
          COSMO Embroidery on Faire
        </h1>

        <p
          style={{
            maxWidth: "440px",
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#666",
            marginBottom: "48px",
          }}
        >
          Order COSMO Embroidery wholesale directly through Faire.
          <br />
          Contact us for pricing and account setup.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="https://lecien.faire.com" className="btn-solid" target="_blank" rel="noopener noreferrer">
            Shop on Faire
          </a>
        </div>

        <p
          style={{
            marginTop: "64px",
            fontSize: "11px",
            color: "#bbb",
            letterSpacing: "0.05em",
          }}
        >
          Operated by TANAAKK INC. &mdash; US Seller of Record
        </p>
      </div>
    </>
  );
}
