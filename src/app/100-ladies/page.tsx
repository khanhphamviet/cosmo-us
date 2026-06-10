import type { Metadata } from "next";
import Link from "next/link";
import Ladies100Content from "../components/Ladies100Content";

export const metadata: Metadata = {
  title: "100 Ladies",
  description:
    "Design your own fashion story with 100 Ladies embroidery fabric from COSMO. Dress, stitch, and style 100 unique characters like a coloring book—with needle and thread.",
  alternates: { canonical: "/100-ladies" },
  openGraph: {
    title: "100 Ladies | COSMO Embroidery US",
    description:
      "Free-form embroidery fabric featuring 100 cool ladies. Stitch, style, and make charms, totes, and more.",
    url: "/100-ladies",
    images: [
      {
        url: "/images/ladies100-hero-20260616.jpg",
        width: 1400,
        height: 934,
        alt: "100 Ladies embroidery fabric",
      },
    ],
  },
};

export default function Ladies100Page() {
  return (
    <>
      <div className="page-hero page-hero--compact page-hero--sashiko">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/">Embroidery</Link> / 100
          Ladies
        </div>
      </div>

      <div className="page-container page-container--sashiko">
        <Ladies100Content />
      </div>
    </>
  );
}
