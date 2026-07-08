import type { Metadata } from "next";
import Link from "next/link";
import WholesaleContent from "../components/WholesaleContent";
import WholesaleJsonLd from "../components/WholesaleJsonLd";

export const metadata: Metadata = {
  title: "COSMO Wholesale on Faire | LECIEN COSMO",
  description:
    "Shop LECIEN COSMO wholesale on the official COSMO Embroidery Faire store. Operated by TANAAKK INC., authorized U.S. seller for LECIEN COSMO. Ships from New Jersey; international delivery depends on Faire.",
  alternates: { canonical: "/wholesale" },
  openGraph: {
    title: "COSMO Wholesale on Faire | LECIEN COSMO",
    description:
      "Official LECIEN COSMO wholesale on Faire — operated by TANAAKK INC., authorized U.S. seller for LECIEN COSMO. New Jersey fulfillment and restocking from Japan.",
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
