import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for COSMO Embroidery US. Your data is handled by TANAAKK INC., the Seller of Record.",
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE_DATE = "June 1, 2026";

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / Privacy Policy
        </div>
        <h1>Privacy Policy</h1>
      </div>

      <div className="page-container" style={{ maxWidth: "720px" }}>
        <p style={{ fontSize: "13px", color: "#999", marginBottom: "40px" }}>
          Effective date: {EFFECTIVE_DATE}
        </p>

        <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          This Privacy Policy describes how <strong>TANAAKK INC.</strong> ("we", "us",
          "our") collects, uses, and protects your personal information when you use
          cosmo-us.lecien.com or make a purchase from us.
        </p>

        <div className="company-block">
          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul style={{ paddingLeft: "20px", lineHeight: 2, fontSize: "14px", color: "#444" }}>
            <li>
              <strong>Order information</strong> — name, billing/shipping address, email
              address, phone number, and payment details (processed by Shopify Payments;
              we do not store card numbers)
            </li>
            <li>
              <strong>Account information</strong> — if you create a store account
            </li>
            <li>
              <strong>Device &amp; browsing data</strong> — IP address, browser type,
              pages visited, and referral source via cookies and analytics tools
            </li>
            <li>
              <strong>Communications</strong> — emails or messages you send to our
              support team
            </li>
          </ul>
        </div>

        <div className="company-block">
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul style={{ paddingLeft: "20px", lineHeight: 2, fontSize: "14px", color: "#444" }}>
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Handle returns and customer support requests</li>
            <li>Improve our website and product offerings</li>
            <li>Comply with legal and tax obligations</li>
            <li>Send marketing emails (only with your consent)</li>
          </ul>
        </div>

        <div className="company-block">
          <h2>3. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We share data only with trusted
            service providers who help us operate our business:
          </p>
          <ul style={{ paddingLeft: "20px", lineHeight: 2, fontSize: "14px", color: "#444" }}>
            <li><strong>Shopify</strong> — e-commerce platform and payment processing</li>
            <li><strong>3PL warehouse partner</strong> — for order fulfillment and shipping</li>
            <li><strong>Faire</strong> — for wholesale order management</li>
            <li><strong>Email providers</strong> — for transactional and marketing emails</li>
          </ul>
          <p style={{ marginTop: "16px" }}>
            We may also share information when required by law or to protect our
            legal rights.
          </p>
        </div>

        <div className="company-block">
          <h2>4. Cookies</h2>
          <p>
            We use cookies and similar technologies to operate our website, remember
            your preferences, and analyze traffic. You can control cookies through your
            browser settings. Disabling cookies may affect certain site functionality.
          </p>
        </div>

        <div className="company-block">
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill
            the purposes described in this policy, comply with legal obligations, and
            resolve disputes. Order records are typically retained for 7 years for
            tax and accounting purposes.
          </p>
        </div>

        <div className="company-block">
          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete,
            or restrict the use of your personal data. To exercise these rights, contact
            us at{" "}
            <a href="mailto:support@lecien.com">support@lecien.com</a>. We will respond
            within 30 days.
          </p>
        </div>

        <div className="company-block">
          <h2>7. Security</h2>
          <p>
            We implement industry-standard security measures to protect your data.
            Payment information is encrypted and processed by Shopify Payments — we
            never store raw card details on our servers.
          </p>
        </div>

        <div className="company-block">
          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites (e.g. lecien.co.jp,
            Faire). We are not responsible for the privacy practices of those sites.
          </p>
        </div>

        <div className="company-block">
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you
            of significant changes by posting the new policy on this page with an
            updated effective date.
          </p>
        </div>

        <div className="company-block">
          <h2>10. Contact</h2>
          <p>
            For privacy-related questions, please contact TANAAKK INC.:<br />
            <a href="mailto:support@lecien.com">support@lecien.com</a>
          </p>
          <p style={{ marginTop: "16px" }}>
            See also:{" "}
            <Link href="/terms" style={{ textDecoration: "underline" }}>Terms &amp; Conditions</Link>
            {" · "}
            <Link href="/returns" style={{ textDecoration: "underline" }}>Return Policy</Link>
          </p>
        </div>
      </div>
    </>
  );
}
