import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faire Wholesale — COSMO Embroidery",
  description: "COSMO Embroidery wholesale on Faire. Operated by TANAAKK INC.",
  alternates: { canonical: "/faire" },
};

export default function FairePage() {
  return (
    <>
      <div className="faire-widget-section">
        <div className="faire-widget-wrap">
          <iframe
            src="https://www.faire.com/embed/bw_9fjrhm875z"
            title="COSMO wholesale on Faire"
            className="faire-widget"
            scrolling="no"
          />
        </div>

        <p className="faire-widget-footer">
          Operated by TANAAKK INC. &mdash; US Seller of Record
        </p>
      </div>
    </>
  );
}
