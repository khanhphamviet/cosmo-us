import type { Metadata } from "next";
import Link from "next/link";
import CrochetContent from "../components/CrochetContent";

export const metadata: Metadata = {
  title: "Crochet with Floss",
  description:
    "Small pouches crocheted with COSMO embroidery floss. Series 1 food motifs and Series 2 animal pouches — simple patterns, soft thread, endless color.",
  alternates: { canonical: "/crochet" },
  openGraph: {
    title: "Crochet with Floss | COSMO Embroidery US",
    description:
      "Playful crochet kits made with COSMO embroidery floss. Food and animal pouches you can arrange into accessories, brooches, and more.",
    url: "/crochet",
    images: [
      {
        url: "/images/crochet-hero-20260617.png",
        width: 1024,
        height: 655,
        alt: "Small food-themed crochet pouches on a glass stand",
      },
    ],
  },
};

export default function CrochetPage() {
  return (
    <>
      <div className="page-hero page-hero--compact page-hero--sashiko">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/">Embroidery</Link> /
          Crochet with Floss
        </div>
      </div>

      <div className="page-container page-container--sashiko">
        <CrochetContent />
      </div>
    </>
  );
}
