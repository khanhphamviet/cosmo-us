// Floss index — aligned with cosmo, seasons, and nishikiito product pages
import type { Metadata } from "next";
import Link from "next/link";
import FlossIndexContent from "../components/FlossIndexContent";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "COSMO Embroidery Floss | No. 25, Seasons & Nishikiito",
  },
  description:
    "Explore COSMO No. 25 (500 colors), Seasons variegated floss, and Nishikiito metallic thread. Made in Japan — official U.S. site.",
  alternates: { canonical: "/floss" },
  openGraph: {
    title: "COSMO Embroidery Floss | No. 25, Seasons & Nishikiito",
    description:
      "Explore COSMO No. 25 (500 colors), Seasons variegated floss, and Nishikiito metallic thread. Made in Japan.",
    url: "/floss",
    images: [
      {
        url: "/images/blog-embroidery-floss-qualities-hero-lce200214-671-20260708.jpg",
        width: 2400,
        height: 1597,
        alt: "COSMO No. 25 embroidery floss",
      },
    ],
  },
};

export default function FlossPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Floss" },
        ]}
      />
      <div className="page-hero page-hero--compact page-hero--sashiko">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / Floss
        </div>
      </div>

      <div className="page-container page-container--sashiko">
        <FlossIndexContent />
      </div>
    </>
  );
}
