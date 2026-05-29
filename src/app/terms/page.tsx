import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for purchases made on COSMO Embroidery US. The seller of record is TANAAKK INC.",
  alternates: { canonical: "/terms" },
};

const EFFECTIVE_DATE = "June 1, 2026";

export default function TermsPage() {
  return (
    <>
      <nav className="sub-nav">
        <div className="sub-nav-inner">
          <Link href="/">TOP</Link>
          <Link href="/floss">Floss</Link>
          <Link href="/freepatterns">Free Patterns</Link>
          <Link href="/wholesale">Wholesale</Link>
          <Link href="/company">Company</Link>
        </div>
      </nav>

      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / Terms &amp; Conditions
        </div>
        <h1>Terms &amp; Conditions</h1>
      </div>

      <div className="page-container" style={{ maxWidth: "720px" }}>
        <p style={{ fontSize: "13px", color: "#999", marginBottom: "40px" }}>
          Effective date: {EFFECTIVE_DATE}
        </p>

        <div className="company-block">
          <h2>1. Seller of Record</h2>
          <p>
            All products sold through this website (cosmo-us.lecien.com) are sold by{" "}
            <strong>TANAAKK INC.</strong> ("Seller"), the exclusive Seller of Record for
            COSMO embroidery products in the United States. Your purchase contract is
            formed with TANAAKK INC., not with LECIEN Corporation.
          </p>
          <p>
            COSMO is a trademark of LECIEN Corporation. TANAAKK INC. is authorized
            by LECIEN Corporation to sell COSMO products in the United States.
          </p>
        </div>

        <div className="company-block">
          <h2>2. Eligibility</h2>
          <p>
            This store serves customers in the United States. By placing an order you
            confirm that you are at least 18 years of age and are providing a valid
            US delivery address.
          </p>
        </div>

        <div className="company-block">
          <h2>3. Pricing &amp; Payment</h2>
          <p>
            All prices are listed in US dollars (USD) and are inclusive of applicable
            taxes where required. TANAAKK INC. reserves the right to update prices at
            any time without prior notice. Payment is processed securely at checkout
            via Shopify Payments.
          </p>
        </div>

        <div className="company-block">
          <h2>4. Orders &amp; Fulfillment</h2>
          <p>
            Orders are fulfilled from our US warehouse. An order confirmation email
            will be sent from TANAAKK INC. after your purchase. Title to goods transfers
            from LECIEN Corporation to TANAAKK INC. at the point of shipment from the
            warehouse, and then from TANAAKK INC. to you upon delivery.
          </p>
        </div>

        <div className="company-block">
          <h2>5. Shipping</h2>
          <p>
            Shipping rates and estimated delivery times are displayed at checkout.
            TANAAKK INC. is responsible for arranging delivery to the address you
            provide. Risk of loss passes to you upon delivery.
          </p>
        </div>

        <div className="company-block">
          <h2>6. Returns &amp; Refunds</h2>
          <p>
            Please see our <Link href="/returns" style={{ textDecoration: "underline" }}>Return Policy</Link> for
            full details. All return and refund requests are handled by TANAAKK INC.
          </p>
        </div>

        <div className="company-block">
          <h2>7. Intellectual Property</h2>
          <p>
            COSMO and all related trademarks, logos, and product names are trademarks
            of LECIEN Corporation. All content on this website is used under license.
            You may not reproduce or redistribute any content without written permission.
          </p>
        </div>

        <div className="company-block">
          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, TANAAKK INC. shall not be liable
            for any indirect, incidental, or consequential damages arising from your
            use of this website or our products.
          </p>
        </div>

        <div className="company-block">
          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United States and the state
            in which TANAAKK INC. is incorporated, without regard to conflict of law
            principles.
          </p>
        </div>

        <div className="company-block">
          <h2>10. Contact</h2>
          <p>
            For any questions regarding these Terms, please contact TANAAKK INC. at{" "}
            <a href="mailto:support@lecien.com">support@lecien.com</a>.
          </p>
        </div>
      </div>
    </>
  );
}
