import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Return Policy",
  description:
    "Return and refund policy for COSMO Embroidery US. Returns are handled by TANAAKK INC., the Seller of Record.",
  alternates: { canonical: "/returns" },
};

const EFFECTIVE_DATE = "June 1, 2026";

export default function ReturnsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / Return Policy
        </div>
        <h1>Return Policy</h1>
      </div>

      <div className="page-container" style={{ maxWidth: "720px" }}>
        <p style={{ fontSize: "13px", color: "#999", marginBottom: "40px" }}>
          Effective date: {EFFECTIVE_DATE}
        </p>

        <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          All returns and refunds are handled by <strong>TANAAKK INC.</strong>, the
          Seller of Record for COSMO products in the United States. Please read the
          policy below before initiating a return.
        </p>

        <div className="company-block">
          <h2>Return Window</h2>
          <p>
            You may request a return within <strong>30 days</strong> of the delivery date.
            Items must be unused, in their original condition, and in original packaging.
          </p>
        </div>

        <div className="company-block">
          <h2>Eligible Items</h2>
          <p>The following items are eligible for return:</p>
          <ul style={{ paddingLeft: "20px", lineHeight: 2, fontSize: "14px", color: "#444" }}>
            <li>Unopened embroidery floss (all COSMO sizes and product lines)</li>
            <li>Unopened embroidery kits</li>
            <li>Defective or damaged items (see below)</li>
          </ul>
          <p style={{ marginTop: "16px" }}>The following items are <strong>not eligible</strong> for return:</p>
          <ul style={{ paddingLeft: "20px", lineHeight: 2, fontSize: "14px", color: "#444" }}>
            <li>Opened or used thread/floss</li>
            <li>Downloadable or digital products</li>
            <li>Items marked as final sale</li>
          </ul>
        </div>

        <div className="company-block">
          <h2>Damaged or Defective Items</h2>
          <p>
            If you receive a damaged or defective item, please contact us within{" "}
            <strong>7 days</strong> of delivery at{" "}
            <a href="mailto:support@lecien.com">support@lecien.com</a> with your order
            number and a photo of the issue. TANAAKK INC. will arrange a replacement
            or full refund at no cost to you.
          </p>
        </div>

        <div className="company-block">
          <h2>How to Return</h2>
          <p>
            To initiate a return, email{" "}
            <a href="mailto:support@lecien.com">support@lecien.com</a> with:
          </p>
          <ul style={{ paddingLeft: "20px", lineHeight: 2, fontSize: "14px", color: "#444" }}>
            <li>Your order number</li>
            <li>The item(s) you wish to return</li>
            <li>Reason for return</li>
          </ul>
          <p style={{ marginTop: "16px" }}>
            Our team will respond within 2 business days with return instructions and
            a prepaid shipping label where applicable.
          </p>
        </div>

        <div className="company-block">
          <h2>Refunds</h2>
          <p>
            Once your return is received and inspected, TANAAKK INC. will process your
            refund within <strong>5–7 business days</strong>. Refunds are issued to
            the original payment method. Shipping costs are non-refundable unless the
            return is due to our error.
          </p>
        </div>

        <div className="company-block">
          <h2>Wholesale Orders (Faire)</h2>
          <p>
            Returns for wholesale orders placed through Faire are subject to{" "}
            <a
              href="https://www.faire.com/brand-faq"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              Faire's return policy
            </a>
            . Please contact TANAAKK INC. at{" "}
            <a href="mailto:support@lecien.com">support@lecien.com</a> for assistance.
          </p>
        </div>

        <div className="company-block">
          <h2>Contact</h2>
          <p>
            For all return inquiries, please contact TANAAKK INC.:<br />
            <a href="mailto:support@lecien.com">support@lecien.com</a>
          </p>
          <p style={{ marginTop: "16px" }}>
            See also: <Link href="/terms" style={{ textDecoration: "underline" }}>Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </>
  );
}
