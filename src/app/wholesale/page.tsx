import type { Metadata } from "next";
import Link from "next/link";
import WholesaleContent from "../components/WholesaleContent";

export const metadata: Metadata = {
  title: "COSMO Wholesale on Faire",
  description:
    "Unlock the COSMO wholesale catalog on Faire. Available since May 2026 with U.S. fulfillment from New Jersey and restocking from Japan. Operated by TANAAKK INC.",
  alternates: { canonical: "/wholesale" },
  openGraph: {
    title: "Unlock Our Wholesale Catalog | COSMO on Faire",
    description:
      "Shop COSMO wholesale on Faire — 50% off your first order, free shipping, and 60-day payment terms for eligible retailers.",
    url: "/wholesale",
    images: [
      {
        url: "/images/brand-hero-floss.png",
        width: 1200,
        height: 800,
        alt: "COSMO embroidery floss wholesale",
      },
    ],
  },
};

export default function WholesalePage() {
  return (
    <>
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
