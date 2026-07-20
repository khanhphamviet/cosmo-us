import type { Metadata } from "next";
import Link from "next/link";
import ToolsSuppliesContent from "../components/ToolsSuppliesContent";

export const metadata: Metadata = {
  title: "Tools & Supplies",
  description:
    "COSMO embroidery tools and supplies — needles, hoops, sashiko templates, copy paper, waste canvas, and ready-to-stitch blanks from LECIEN.",
  alternates: { canonical: "/tools-supplies" },
  openGraph: {
    title: "Tools & Supplies | COSMO Embroidery US",
    description:
      "Needles, hoops, marking tools, and ready-to-stitch bases for COSMO embroidery projects.",
    url: "/tools-supplies",
    images: [
      {
        url: "/images/blog-sashiko-hero-20260611.jpg",
        width: 2098,
        height: 2622,
        alt: "COSMO sashiko tools and supplies on a wooden work surface",
      },
    ],
  },
};

export default function ToolsSuppliesPage() {
  return (
    <>
      <div className="page-hero page-hero--compact page-hero--sashiko">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/">Embroidery</Link> / Tools
          &amp; Supplies
        </div>
      </div>

      <div className="page-container page-container--sashiko">
        <ToolsSuppliesContent />
      </div>
    </>
  );
}
