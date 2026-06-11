import Image from "next/image";
import Link from "next/link";

type Category = {
  title: string;
  image: string;
  alt: string;
  href: string;
  external?: boolean;
  compactTitle?: boolean;
};

const CATEGORIES: Category[] = [
  {
    title: "Floss",
    image: "/images/category-jp-floss-20260610.jpg",
    alt: "COSMO embroidery floss",
    href: "/floss",
  },
  {
    title: "Cloth",
    image: "/images/category-jp-cloth-20260610.jpg",
    alt: "Embroidery cloth and Aida fabric",
    href: "/cloth",
  },
  {
    title: "Sashiko",
    image: "/images/category-jp-sashiko-20260610.jpg",
    alt: "COSMO sashiko thread and fabric",
    href: "/sashiko",
  },
  {
    title: "100 Ladies",
    image: "/images/category-jp-100ladies-20260610.jpg",
    alt: "100ladies embroidery kits and fabric",
    href: "/100-ladies",
  },
  {
    title: "Crochet with Floss",
    image: "/images/category-jp-crochet-20260610b.jpg",
    alt: "Crochet projects made with COSMO floss",
    href: "/crochet",
    compactTitle: true,
  },
  {
    title: "Tools & Supplies",
    image: "/images/category-jp-tools-20260610.jpg",
    alt: "COSMO embroidery needles and stitching tools",
    href: "/tools-supplies",
    compactTitle: true,
  },
];

function CategoryTile({ category }: { category: Category }) {
  const content = (
    <>
      <div className="brand-category-media">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes="(max-width:640px) 50vw, 20vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="brand-category-caption">
        <p
          className={`brand-category-title${category.compactTitle ? " brand-category-title--compact" : ""}`}
        >
          {category.title}
        </p>
        <span className="brand-category-btn">VIEW MORE</span>
      </div>
    </>
  );

  if (category.external) {
    return (
      <a
        href={category.href}
        className="brand-category-tile"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={category.href} className="brand-category-tile">
      {content}
    </Link>
  );
}

export default function BrandCategoryGrid() {
  return (
    <section className="brand-categories">
      <div className="brand-categories-inner">
        {CATEGORIES.map((category) => (
          <CategoryTile key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
