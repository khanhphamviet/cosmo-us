import type { Metadata } from "next";
import Link from "next/link";
import WholesaleContent from "../components/WholesaleContent";
import WholesaleJsonLd from "../components/WholesaleJsonLd";

export const metadata: Metadata = {
  title: "COSMO Wholesale on Faire | LECIEN COSMO",
  description:
    "Shop LECIEN COSMO wholesale on Faire. Official COSMO Faire store for U.S. retailers with New Jersey fulfillment and restocking from Japan. Operated by TANAAKK INC.",
  alternates: { canonical: "/wholesale" },
  openGraph: {
    title: "COSMO Wholesale on Faire | LECIEN COSMO",
    description:
      "LECIEN COSMO wholesale on Faire — 50% off your first order, free shipping, and 60-day payment terms for eligible retailers.",
    url: "/wholesale",
    images: [
      {
        url: "/images/brand-hero-floss.png",
        width: 1200,
        height: 800,
        alt: "LECIEN COSMO embroidery floss wholesale on Faire",
      },
    ],
  },
};

export default function WholesalePage() {
  return (
    <>
      <WholesaleJsonLd />
      <div className="page-hero page-hero--compact page-hero--sashiko">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / Wholesale
        </div>
      </div>

      <div className="page-container page-container--wholesale">
        <WholesaleContent />
      </div>
    </>
  );
}
