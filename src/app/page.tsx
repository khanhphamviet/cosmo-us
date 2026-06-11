// Homepage — brand hero + product qualities

import BrandHero from "./components/BrandHero";
import BrandPillars from "./components/BrandPillars";
import BrandCategoryGrid from "./components/BrandCategoryGrid";
import BrandWholesaleCta from "./components/BrandWholesaleCta";

export default function Home() {
  return (
    <>
      <BrandHero />
      <BrandPillars />
      <BrandCategoryGrid />
      <BrandWholesaleCta />
    </>
  );
}
