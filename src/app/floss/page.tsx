// Floss page — mirrors lecien.co.jp/en/embroidery/floss
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Floss",
  description:
    "COSMO embroidery floss — Size 25 & 5 cotton, Seasons variegated thread, and nishikiito Japanese gold thread. Made in Japan.",
  alternates: { canonical: "/floss" },
  openGraph: {
    title: "Floss | COSMO Embroidery US",
    description:
      "Explore COSMO embroidery floss: Size 25 & 5, Seasons variegated, and nishikiito gold thread. Made in Japan since 1924.",
    url: "/floss",
    images: [{ url: "/images/floss-cosmo-20260610.jpg", width: 800, height: 800, alt: "No. 25 Floss" }],
  },
};

const FLOSSES = [
  {
    id: "cosmo",
    title: "No. 25 Floss",
    img: "/images/floss-cosmo-20260610.jpg",
    desc: "One of our basic COSMO Embroidery flosses. Size 25 is made exclusively out of Extra-long staple cotton of top quality. Size 5 is best suited for embroidering, quilting, and making TEMARI (Japanese traditional handballs).",
  },
  {
    id: "seasons",
    title: "Seasons Variegated Floss",
    img: "/images/floss-seasons-20260610.jpg",
    desc: 'Gorgeous 140 variegated colors available in "Seasons". This beautiful variegated thread makes a complete color palette with solid Size 25 floss.',
  },
  {
    id: "nishikiito",
    title: "Nishikiito Metallic Thread",
    img: "/images/nishikiito-20260610.jpg",
    desc: "Made in Japan embroidery thread carefully crafted using the technique for Japanese Gold Thread from Kyoto's Wasou (traditional Japanese clothing). Five kinds of threads with different glosses.",
  },
];

export default function FlossPage() {
  return (
    <>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
