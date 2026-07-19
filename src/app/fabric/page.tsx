import type { Metadata } from "next";
import Link from "next/link";
import ClothContent from "../components/ClothContent";

export const metadata: Metadata = {
  title: "Embroidery Fabric",
  description:
    "COSMO embroidery fabrics — Aida, evenweave, Congress cloth, huck, and surface embroidery grounds for cross stitch, kogin, and freehand work. Made in Japan.",
  alternates: { canonical: "/fabric" },
  openGraph: {
    title: "Embroidery Fabric | COSMO Embroidery US",
    description:
      "Explore COSMO Aida, evenweave, Congress cloth, huck for Swedish weaving, and surface embroidery fabrics. Japanese-made quality for every technique.",
    url: "/fabric",
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

export default function FabricPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/">Embroidery</Link> / Fabric
        </div>
        <h1>Fabric</h1>
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
