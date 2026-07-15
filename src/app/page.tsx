import type { Metadata } from "next";
import BrandHero from "./components/BrandHero";
import BrandNewsBanner from "./components/BrandNewsBanner";
import BrandCategoryGrid from "./components/BrandCategoryGrid";
import BrandStories from "./components/BrandStories";
import BrandWholesaleCta from "./components/BrandWholesaleCta";
import BrandAbout from "./components/BrandAbout";
import BreadcrumbJsonLd from "./components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "LECIEN COSMO Embroidery | US Official Website",
  description:
    "Discover LECIEN COSMO embroidery floss, sashiko thread, fabric, kits, and tools. Official US website with COSMO wholesale on Faire for retailers.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "LECIEN COSMO Embroidery | US Official Website",
    description:
      "Official US website for LECIEN COSMO embroidery products and COSMO Faire wholesale.",
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
