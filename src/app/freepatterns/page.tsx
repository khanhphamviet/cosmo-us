// Free Patterns — mirrors lecien.co.jp/en/embroidery/freepatterns
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Free Patterns",
  description:
    "Free embroidery patterns using COSMO floss — download and stitch beautiful seasonal bouquet designs. New arrivals regularly added.",
  alternates: { canonical: "/freepatterns" },
  openGraph: {
    title: "Free Patterns | COSMO Embroidery US",
    description:
      "Download free embroidery patterns using COSMO floss — sky, spring, summer, autumn, and Christmas rose bouquet designs.",
    url: "/freepatterns",
    images: [{ url: "/images/pattern-sun.jpg", width: 670, height: 670, alt: "Free COSMO Embroidery Patterns" }],
  },
};

const PATTERNS = [
  {
    slug: "sky-embroidery-floss",
    title: "Sky Embroidery Floss",
    img: "/images/pattern-sun.jpg",
  },
  {
    slug: "fragrant-spring-bouquet",
    title: "Fragrant Spring Bouquet",
    img: "/images/pattern-spring.jpg",
  },
  {
    slug: "summers-garden-bouquet",
    title: "Summer's Garden Bouquet",
    img: "/images/pattern-summer.jpg",
  },
  {
    slug: "autumns-beauty-bouquet",
    title: "Autumn's Beauty Bouquet",
    img: "/images/pattern-autumn.jpg",
  },
  {
    slug: "christmas-rose-bouquet",
    title: "Christmas Rose Bouquet",
    img: "/images/pattern-winter.jpg",
  },
];

export default function FreePatternsPage() {
  return (
    <>
      <nav className="sub-nav">
        <div className="sub-nav-inner">
          <Link href="/">TOP</Link>
          <Link href="/floss">Floss</Link>
          <Link href="/freepatterns" className="active">Free Patterns</Link>
          <Link href="/wholesale">Wholesale</Link>
        </div>
      </nav>

      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/">Embroidery</Link> / Free Patterns
        </div>
        <h1>Free Patterns</h1>
      </div>

      <div className="page-container">
        <p style={{textAlign:"center",color:"#888",marginBottom:"40px"}}>
          Free Patterns with COSMO floss — New Arrivals
        </p>

        <div className="pattern-grid">
          {PATTERNS.map((p) => (
            <a
              key={p.slug}
              href={`https://www.lecien.co.jp/en/emb_freepatterns/${p.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pattern-card"
            >
              <div className="pattern-thumb" style={{position:"relative"}}>
                {p.img ? (
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:900px) 33vw, 20vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span style={{fontSize:"0.75rem",color:"#aaa",padding:"8px",textAlign:"center"}}>{p.title}</span>
                )}
              </div>
              <p>{p.title}</p>
            </a>
          ))}
        </div>

        <div className="view-more" style={{marginTop:"48px"}}>
          <a
            href="https://www.lecien.co.jp/en/embroidery/freepatterns/catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            VIEW MORE
          </a>
        </div>
      </div>
    </>
  );
}
