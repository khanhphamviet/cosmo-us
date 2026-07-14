import type { Metadata } from "next";
import Link from "next/link";
import HidamariSashikoContent from "../components/HidamariSashikoContent";

export const metadata: Metadata = {
  title: "Hidamari Sashiko Thread",
  description:
    "Discover sashiko — a traditional Japanese running-stitch craft — and Hidamari sashiko thread. 60 colors, smooth low-fuzz cotton, made in Japan.",
  alternates: { canonical: "/sashiko" },
  openGraph: {
    title: "Hidamari Sashiko Thread | COSMO Embroidery US",
    description:
      "The thread for modern sashiko. 60 colors of Japanese-made cotton for makers who love mindful stitching.",
    url: "/sashiko",
    images: [
      {
        url: "/images/sashiko-intro-supplies-20260611.jpg",
        width: 900,
        height: 900,
        alt: "hidamari sashiko thread and stitching supplies",
      },
    ],
  },
};

export default function SashikoPage() {
  return (
    <>
      <div className="page-hero page-hero--compact page-hero--sashiko">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/">Embroidery</Link> / Sashiko
        </div>
      </div>

      <div className="page-container page-container--sashiko">
        <HidamariSashikoContent />
      </div>
    </>
  );
}
