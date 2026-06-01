// Floss page — mirrors lecien.co.jp/en/embroidery/floss
import type { Metadata } from "next";
import Link from "next/link";
import { SHOPIFY_URL, SHOPIFY_ENABLED } from "@/config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Floss",
  description:
    "COSMO embroidery floss — Size 25 & 5 cotton, Seasons variegated thread, nishikiito Japanese gold thread, and hidamari sashiko thread. Made in Japan.",
  alternates: { canonical: "/floss" },
  openGraph: {
    title: "Floss | COSMO Embroidery US",
    description:
      "Explore COSMO embroidery floss: Size 25 & 5, Seasons variegated, nishikiito gold thread, and hidamari sashiko. Made in Japan since 1933.",
    url: "/floss",
    images: [{ url: "/images/floss-cosmo.jpg", width: 455, height: 300, alt: "COSMO Embroidery Floss" }],
  },
};

const FLOSSES = [
  {
    id: "cosmo",
    title: "COSMO Size 25 & 5 Floss",
    img: "/images/floss-cosmo.jpg",
    desc: "One of our basic COSMO Embroidery flosses. Size 25 is made exclusively out of Extra-long staple cotton of top quality. Size 5 is best suited for embroidering, quilting, and making TEMARI (Japanese traditional handballs).",
  },
  {
    id: "seasons",
    title: "Seasons",
    img: "/images/floss-seasons.jpg",
    desc: 'Gorgeous 140 variegated colors available in "Seasons". This beautiful variegated thread makes a complete color palette with solid Size 25 floss.',
  },
  {
    id: "nishikiito",
    title: "nishikiito",
    img: "/images/nishikiito.jpg",
    desc: "Made in Japan embroidery thread carefully crafted using the technique for Japanese Gold Thread from Kyoto's Wasou (traditional Japanese clothing). Five kinds of threads with different glosses.",
  },
  {
    id: "hidamari",
    title: "hidamari",
    img: "/images/hidamari.jpg",
    desc: '"hidamari" is COSMO sashiko thread meaning "sunny spot". Our hidamari thread brings a fun, bright, warm and happy experience to your sashiko projects.',
  },
];

export default function FlossPage() {
  return (
    <>
      <nav className="sub-nav">
        <div className="sub-nav-inner">
          <Link href="/">TOP</Link>
          <Link href="/floss" className="active">Floss</Link>
          <Link href="/freepatterns">Free Patterns</Link>
          <Link href="/wholesale">Wholesale</Link>
        </div>
      </nav>

      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/">Embroidery</Link> / Floss
        </div>
        <h1>Floss</h1>
      </div>

      <div className="page-container">
        <div className="card-grid">
          {FLOSSES.map((f) => (
            <div key={f.id} id={f.id} className="card" style={{textAlign:"left"}}>
              <Link href={`/floss/${f.id}`} style={{display:"block"}}>
                <div className="card-thumb" style={{position:"relative"}}>
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:900px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 style={{textAlign:"left"}}>{f.title}</h3>
                <p>{f.desc}</p>
              </Link>
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"auto",paddingTop:"16px"}}>
                <Link href={`/floss/${f.id}`} className="btn-outline" style={{fontSize:"11px",padding:"7px 14px"}}>
                  Details
                </Link>
                {SHOPIFY_ENABLED ? (
                  <a
                    href={SHOPIFY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid"
                    style={{fontSize:"11px",padding:"7px 14px"}}
                  >
                    Shop Now
                  </a>
                ) : (
                  <span className="btn-solid" style={{fontSize:"11px",padding:"7px 14px",opacity:0.4,cursor:"not-allowed"}}>
                    Shop Now
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
