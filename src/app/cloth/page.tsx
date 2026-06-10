import type { Metadata } from "next";
import Link from "next/link";
import ClothContent from "../components/ClothContent";

export const metadata: Metadata = {
  title: "Embroidery Cloth",
  description:
    "COSMO embroidery cloth — even-weave Aida and specialty fabrics for cross stitch, kogin, and surface embroidery. Embroidery Cloth, Lame Cloth, Congress 70, and more. Made in Japan.",
  alternates: { canonical: "/cloth" },
  openGraph: {
    title: "Embroidery Cloth | COSMO Embroidery US",
    description:
      "Explore COSMO embroidery cloth: counted even-weave, free-stitch cotton, kogin fabrics, and tape. Japanese-made quality for every technique.",
    url: "/cloth",
    images: [
      {
        url: "/images/category-jp-cloth-20260610.jpg",
        width: 800,
        height: 800,
        alt: "COSMO embroidery cloth",
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
          Even-weave, specialty surfaces, and tape — made in Japan
        </p>
      </div>

      <div className="page-container">
        <ClothContent />
      </div>
    </>
  );
}
