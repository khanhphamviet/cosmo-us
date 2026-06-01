// Homepage — mirrors lecien.co.jp/en/embroidery
// Super Delivery section intentionally removed for US store

import Link from "next/link";
import { SHOPIFY_URL, SHOPIFY_ENABLED } from "@/config";
import Image from "next/image";
import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <>
      {/* Sub-nav */}
      <nav className="sub-nav">
        <div className="sub-nav-inner">
          <Link href="/" className="active">TOP</Link>
          <Link href="/floss">Floss</Link>
          <Link href="/freepatterns">Free Patterns</Link>
          <Link href="/wholesale">Wholesale</Link>
        </div>
      </nav>

      {/* Hero Slider */}
      <HeroSlider />

      {/* ── Floss section ── */}
      <section className="section">
        <div className="section-inner">
          <h2 className="section-title">Floss</h2>
          <div className="card-grid">
            <Link href="/floss/hidamari" className="card">
              <div className="card-thumb">
                <Image src="/images/hidamari.jpg" alt="hidamari" fill sizes="(max-width:640px) 50vw, 25vw" style={{objectFit:"cover"}} />
              </div>
              <h3>hidamari</h3>
              <p>COSMO sashiko thread — warm, bright, and joyful</p>
            </Link>
            <Link href="/floss/nishikiito" className="card">
              <div className="card-thumb">
                <Image src="/images/nishikiito.jpg" alt="nishikiito" fill sizes="(max-width:640px) 50vw, 25vw" style={{objectFit:"cover"}} />
              </div>
              <h3>nishikiito</h3>
              <p>Made in Japan thread crafted with Kyoto gold thread technique</p>
            </Link>
            <Link href="/floss" className="card">
              <div className="card-thumb">
                <Image src="/images/kits.jpg" alt="Embroidery Kits" fill sizes="(max-width:640px) 50vw, 25vw" style={{objectFit:"cover"}} />
              </div>
              <h3>Kits</h3>
              <p>Complete embroidery kits for all skill levels</p>
            </Link>
            <Link href="/floss" className="card">
              <div className="card-thumb">
                <Image src="/images/100-ladies.jpg" alt="100 Ladies Embroidery" fill sizes="(max-width:640px) 50vw, 25vw" style={{objectFit:"cover",objectPosition:"top"}} />
              </div>
              <h3>100 Ladies</h3>
              <p>The beloved 100 Ladies embroidery series</p>
            </Link>
          </div>
          <div className="view-more" style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/floss" className="btn-outline">VIEW MORE</Link>
            {SHOPIFY_ENABLED ? (
              <a
                href={SHOPIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid"
              >
                Shop All Floss
              </a>
            ) : (
              <span className="btn-solid" style={{ opacity: 0.4, cursor: "not-allowed" }}>
                Shop All Floss
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── Free Patterns section ── */}
      <section className="section">
        <div className="section-inner">
          <h2 className="section-title">Free Patterns</h2>
          <p style={{textAlign:"center",color:"#888",marginBottom:"32px"}}>
            Free Patterns with COSMO floss
          </p>
          <div className="card-grid" style={{maxWidth:"560px",margin:"0 auto"}}>
            <a
              href="https://www.lecien.co.jp/en/emb_freepatterns/sky-embroidery-floss"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <div className="card-thumb card-thumb--square">
                <Image src="/images/pattern-sun.jpg" alt="Sky Embroidery Floss" fill sizes="(max-width:640px) 50vw, 25vw" style={{objectFit:"cover"}} />
              </div>
              <h3>Sky Embroidery Floss</h3>
            </a>
            <a
              href="https://www.lecien.co.jp/en/emb_freepatterns/fragrant-spring-bouquet"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <div className="card-thumb card-thumb--square">
                <Image src="/images/pattern-spring.jpg" alt="Fragrant Spring Bouquet" fill sizes="(max-width:640px) 50vw, 25vw" style={{objectFit:"cover"}} />
              </div>
              <h3>Fragrant Spring Bouquet</h3>
            </a>
          </div>
          <div className="view-more">
            <Link href="/freepatterns" className="btn-outline">VIEW MORE</Link>
          </div>
        </div>
      </section>

      {/* ── Wholesale section ── */}
      <section className="section">
        <div className="section-inner">
          <h2 className="section-title">Wholesale</h2>
          <p style={{textAlign:"center",color:"#888",marginBottom:"24px"}}>
            Wholesale and purchasing site for corporate customers
          </p>
          <div className="view-more" style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/wholesale" className="btn-outline">VIEW MORE</Link>
            <Link href="/faire" className="btn-solid">
              Buy on Faire
            </Link>
          </div>
        </div>
      </section>

      {/* NOTE: Super Delivery section removed intentionally — US store only */}
    </>
  );
}
