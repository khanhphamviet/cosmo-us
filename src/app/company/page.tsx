/**
 * Company page — two-layer structure per 海外HP運用方針
 *
 * Layer 1: TANAAKK INC  (US Seller of Record)   ← main focus
 * Layer 2: LECIEN Corporation (Brand Owner / Manufacturer)
 *
 * Source: lecien.co.jp/en/company/profile
 * TODO (Furuya): Update TANAAKK INC section with official US address,
 *               directors, and any additional company details.
 */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company",
  description:
    "TANAAKK INC is the US Seller of Record for COSMO Embroidery products. LECIEN Corporation is the brand owner and manufacturer. COSMO embroidery thread heritage since 1924.",
  alternates: { canonical: "/company" },
  openGraph: {
    title: "Company | COSMO Embroidery US",
    description:
      "Learn about TANAAKK INC (US Seller of Record) and LECIEN Corporation (brand owner), the companies behind COSMO Embroidery in the United States.",
    url: "/company",
  },
};

export default function CompanyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / Company
        </div>
        <h1>Company</h1>
      </div>

      <div className="page-container">
        {/* ── LAYER 1: TANAAKK INC (US Seller of Record) ── */}
        <div className="company-block">
          <h2>About TANAAKK INC (US Seller of Record)</h2>
          <p
            style={{
              fontSize: "14px",
              color: "#444",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            TANAAKK INC is the exclusive Seller of Record for COSMO embroidery
            products sold in the United States. All purchases, sales contracts,
            and customer relationships in the US are conducted by TANAAKK INC.
          </p>
          <table className="company-table">
            <tbody>
              <tr>
                <th>Company Name</th>
                <td>TANAAKK INC.</td>
              </tr>
              <tr>
                <th>Parent Company</th>
                <td>TANAAKK K.K.</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>
                  Seller of Record for COSMO products sold in the United States
                </td>
              </tr>
              <tr>
                <th>US Support</th>
                <td>
                  <a href="mailto:support@lecien.com">support@lecien.com</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── LAYER 2: LECIEN Corporation (Brand Owner) ── */}
        <div className="company-block">
          <h2>About LECIEN Corporation (Brand Owner)</h2>
          <p
            style={{
              fontSize: "14px",
              color: "#444",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            LECIEN Corporation is the manufacturer and brand owner of COSMO
            embroidery products. Honoring the rich lace-making traditions born
            in Europe, LECIEN integrates the aesthetic of Kyoto to create its
            brands.
          </p>
          <table className="company-table">
            <tbody>
              <tr>
                <th>Company Name</th>
                <td>Lecien Corporation</td>
              </tr>
              <tr>
                <th>Founded</th>
                <td>February, 1933</td>
              </tr>
              <tr>
                <th>Capital</th>
                <td>90 million yen</td>
              </tr>
              <tr>
                <th>Registered Office</th>
                <td>
                  Wacoal Kyoto Bldg., 103 Shichijo Goshonouchi Minami-machi,
                  <br />
                  Shimogyo-ku, Kyoto 600-8864 Japan
                </td>
              </tr>
              <tr>
                <th>Business Office</th>
                <td>
                  [Kyoto office]
                  <br />
                  Wacoal Kyoto Bldg., 103 Shichijo Goshonouchi Minami-machi,
                  <br />
                  Shimogyo-ku, Kyoto 600-8864 Japan
                  <br />
                  TEL +81-50-3188-4870
                </td>
              </tr>
              <tr>
                <th>Core Business</th>
                <td>
                  Manufacturing and wholesale of ladies&apos; intimate apparels,
                  lace fabrics, cotton fabrics and embroidery goods.
                </td>
              </tr>
              <tr>
                <th>President &amp; CEO</th>
                <td>Wataru Asada</td>
              </tr>
              <tr>
                <th>Directors</th>
                <td>Masayoshi Aoki / Taro Shimizu</td>
              </tr>
              <tr>
                <th>Auditor</th>
                <td>Seiro Hirata</td>
              </tr>
              <tr>
                <th>Parent Company</th>
                <td>
                  <a
                    href="https://www.tanaakk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TANAAKK K.K.
                  </a>
                </td>
              </tr>
              <tr>
                <th>Group Companies</th>
                <td>
                  LECIEN (VIETNAM) CO., LTD.
                  <br />
                  Lecien (Cambodia) Corporation
                  <br />
                  Shanghai Lecien Co., Ltd.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
