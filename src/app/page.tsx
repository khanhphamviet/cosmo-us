import type { Metadata } from "next";
import BrandHero from "./components/BrandHero";
import BrandNewsBanner from "./components/BrandNewsBanner";
import BrandCategoryGrid from "./components/BrandCategoryGrid";
import BrandStories from "./components/BrandStories";
import BrandWholesaleCta from "./components/BrandWholesaleCta";
import BrandAbout from "./components/BrandAbout";
import BreadcrumbJsonLd from "./components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "COSMO Embroidery Floss | Official US Site by LECIEN",
  },
  description:
    "Japanese-made COSMO embroidery floss, sashiko thread, and kits — 500+ colors with roots dating back to 1924. Official U.S. website for LECIEN COSMO.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "COSMO Embroidery Floss | Official US Site by LECIEN",
    description:
      "Japanese-made COSMO embroidery floss, sashiko thread, and kits — 500+ colors. Official U.S. website for LECIEN COSMO.",
    url: "/",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "LECIEN COSMO embroidery floss",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home" }]} />
      <BrandHero />
      <BrandNewsBanner />
      <BrandCategoryGrid />
      <BrandStories />
      <BrandWholesaleCta />
      <BrandAbout />
    </>
  );
}
