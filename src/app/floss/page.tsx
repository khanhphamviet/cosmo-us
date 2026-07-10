// Floss index — aligned with cosmo, seasons, and nishikiito product pages
import type { Metadata } from "next";
import Link from "next/link";
import FlossIndexContent from "../components/FlossIndexContent";

export const metadata: Metadata = {
  title: "Embroidery Floss",
  description:
    "COSMO No. 25 embroidery floss (500 colors), Seasons variegated thread (140 colors), and Nishikiito metallic thread (48 colors). Made in Japan.",
  alternates: { canonical: "/floss" },
  openGraph: {
    title: "Embroidery Floss | COSMO Embroidery US",
    description:
      "Explore COSMO No. 25, Seasons variegated, and Nishikiito metallic thread—made in Japan since 1924.",
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
