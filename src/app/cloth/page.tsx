import type { Metadata } from "next";
import Link from "next/link";
import ClothContent from "../components/ClothContent";

export const metadata: Metadata = {
  title: "Embroidery Cloth",
  description:
    "COSMO embroidery fabrics — Aida, evenweave, Congress cloth, huck, and surface embroidery grounds for cross stitch, kogin, and freehand work. Made in Japan.",
  alternates: { canonical: "/cloth" },
  openGraph: {
    title: "Embroidery Cloth | COSMO Embroidery US",
    description:
      "Explore COSMO Aida, evenweave, Congress cloth, huck for Swedish weaving, and surface embroidery fabrics. Japanese-made quality for every technique.",
    url: "/cloth",
    images: [
      {
        url: "/images/category-jp-cloth-20260610.jpg",
        width: 800,
        height: 800,
        alt: "COSMO embroidery fabrics",
      },
    ],
  },
};

export default function ClothPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/">Embroidery</Link> / Cloth
        </div>
        <h1>Cloth</h1>
        <p className="page-hero-sub">
          Aida, evenweave, specialty surfaces, and tape — made in Japan
        </p>
      </div>

      <div className="page-container">
        <ClothContent />
      </div>
    </>
  );
}
