import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./components/MobileMenu";
import DesktopNav from "./components/DesktopNav";
import SiteJsonLd from "./components/SiteJsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { brandSans, brandSerif } from "./fonts";
import { PRODUCT_NAV } from "./data/productNav";
import { SITE_NAME, SITE_URL } from "./data/site";

const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  /* ── Base ── */
  title: {
    default: "COSMO Embroidery Floss | Official US Site by LECIEN",
    template: "%s | COSMO Embroidery US",
  },
  description:
    "Japanese-made COSMO embroidery floss, sashiko thread, and kits — 500+ colors with roots dating back to 1924. Official U.S. website for LECIEN COSMO.",
  keywords: [
    "LECIEN COSMO",
    "COSMO Faire",
    "COSMO wholesale",
    "COSMO embroidery",
    "LECIEN embroidery",
    "embroidery floss",
    "hidamari sashiko",
    "nishikiito",
    "LECIEN Corporation",
  ],
  authors: [{ name: "LECIEN Corporation", url: "https://www.lecien.co.jp" }],
  creator: "LECIEN Corporation",

  /* ── Canonical ── */
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "COSMO Embroidery Floss | Official US Site by LECIEN",
    description:
      "Japanese-made COSMO embroidery floss, sashiko thread, and kits — 500+ colors. Official U.S. website for LECIEN COSMO.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "COSMO Embroidery by LECIEN Corporation",
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    title: "COSMO Embroidery Floss | Official US Site by LECIEN",
    description:
      "Japanese-made COSMO embroidery floss, sashiko thread, and kits — 500+ colors. Official U.S. site.",
    images: ["/opengraph-image.jpg"],
  },

  /* ── Icons (Next.js reads icon.png & apple-icon.png automatically) ── */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  /* ── Search engine verification ── */
  verification: {
    google: "gMSbJpacA5XYmppuOeEDnua2U3GQ0klPwTBOXD_vu3A",
    ...(bingVerification
      ? { other: { "msvalidate.01": bingVerification } }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${brandSerif.variable} ${brandSans.variable}`}
    >
      <body>
        <SiteJsonLd />
        {/* ── US OFFICIAL STORE BANNER — required every page (PE compliance) ── */}
        <div className="us-banner">
          Operated by TANAAKK INC., Authorized U.S. Seller for LECIEN COSMO
        </div>

        {/* ── HEADER ── */}
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="logo" aria-label="COSMO since 1924 — Home">
              <Image
                src="/images/cosmo1924-logo-guideline-20260703.png"
                alt="COSMO since 1924"
                width={519}
                height={216}
                priority
                className="logo-image"
              />
            </Link>

            <DesktopNav />

            {/* Mobile hamburger + drawer (client component) */}
            <MobileMenu />
          </div>
        </header>

        {/* ── MAIN ── */}
        <main>{children}</main>

        {/* ── FOOTER ── */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-top">
              <div className="footer-brand">
                <h2>COSMO</h2>
                <p>Embroidery by <a href="https://www.lecien.co.jp/embroidery" target="_blank" rel="noopener noreferrer">LECIEN Corporation</a></p>
              </div>
              <nav className="footer-nav">
                <div className="footer-col">
                  <h3>Products</h3>
                  <ul>
                    {PRODUCT_NAV.map((item) => (
                      <li key={item.label}>
                        {item.external ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            {item.label}
                          </a>
                        ) : (
                          <Link href={item.href}>{item.label}</Link>
                        )}
                      </li>
                    ))}
                    <li><Link href="/wholesale">Wholesale</Link></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h3>Company</h3>
                  <ul>
                    <li><Link href="/stories">Stories</Link></li>
                    <li><Link href="/company">Company Profile</Link></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h3>Legal</h3>
                  <ul>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                  </ul>
                </div>
              </nav>
              <div className="footer-social">
                <h3 style={{fontSize:"10px",letterSpacing:".1em",textTransform:"uppercase",color:"#999",margin:"0 0 12px",fontWeight:400}}>Social</h3>
                <a
                  href="https://instagram.com/lecien_cosmo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  LECIEN COSMO
                </a>
              </div>
            </div>

            <div className="footer-bottom">
              {/* SOR notice — required every page (PE compliance) */}
              <p className="sor-notice">
                COSMO is a trademark of LECIEN Corporation.<br />
                The seller of record for products sold in the United States is TANAAKK INC.
              </p>
              <nav style={{display:"flex",justifyContent:"center",gap:"20px",flexWrap:"wrap",marginBottom:"16px"}}>
                <Link href="/privacy" style={{fontSize:"11px",color:"#666",letterSpacing:".04em"}}>Privacy Policy</Link>
              </nav>
              <p className="footer-copy">
                &copy; {new Date().getFullYear()} LECIEN Corporation. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
