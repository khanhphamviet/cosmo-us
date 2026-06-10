import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SeasonsFlossContent from "../../components/SeasonsFlossContent";
import NishikiitoFlossContent from "../../components/NishikiitoFlossContent";

/* ── Data ─────────────────────────────────────────────────────── */

const FLOSS_DATA = {
  cosmo: {
    title: "No. 25 Floss",
    img: "/images/floss-cosmo-20260610.jpg",
    intro:
      "In 1950, COSMO Embroidery Floss was launched with a wide assortment of 195 colors. Since then, our collection has been expanded to 501 beautiful colors. COSMO products are renowned and beloved in Japan and all over the world including North America, Asia, Europe and Australia.",
    sections: [
      {
        heading: "COSMO Size 25 Floss",
        body: "One of our basic COSMO Embroidery flosses, Size 25 is made exclusively out of Extra-long staple cotton of top quality.",
        specs: [
          { label: "Material",       value: "100% Cotton" },
          { label: "Length",         value: "8.75 yard / 8 meter" },
          { label: "Colors",         value: "501 solid colors" },
          { label: "Per box",        value: "6 skeins" },
          { label: "Strands",        value: "6" },
          { label: "Yarn count",     value: "30 cotton, 2 ply" },
        ],
      },
    ],
    features: [
      {
        heading: "① Quality Cotton",
        body: "We use only the highest quality Extra-long staple cotton — just 1.8% of global cotton production — blended in our own original ratio for the best quality texture and resilience.",
      },
      {
        heading: "② Elegant Luster",
        body: "The vivid silky shine of COSMO Embroidery Floss brings out brighter and eye-catching color in every stitch.",
      },
      {
        heading: "③ Long-lasting Colors",
        body: "Our 501 colors all resist fading and discoloring due to the advanced craftsmanship of our special processing techniques.",
      },
      {
        heading: "④ Quality You Can Trust",
        body: "Through our strict inspection and testing processes, our customers are guaranteed consistently high quality products.",
      },
    ],
  },

  seasons: {
    title: "Seasons Variegated Floss",
    img: "/images/floss-seasons-5000-lecien.jpg",
    intro:
      "Beautiful gradation No. 25 embroidery thread. A color range designed to complement 462 solid No. 25 embroidery thread colors. Three series with different color-change lengths enable even richer expression.",
    sections: [],
    features: [],
  },

  nishikiito: {
    title: "Nishikiito Metallic Thread",
    img: "/images/nishikiito-20260610.jpg",
    intro:
      "Japanese-made metallic embroidery thread crafted with gold-thread techniques from Kyoto. Five styles with distinct luster for embroidery accents.",
    sections: [],
    features: [],
  },
};

type Slug = keyof typeof FLOSS_DATA;

export function generateStaticParams() {
  return (Object.keys(FLOSS_DATA) as Slug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = FLOSS_DATA[slug as Slug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.intro,
    alternates: { canonical: `/floss/${slug}` },
    openGraph: {
      title: `${data.title} | COSMO Embroidery US`,
      description: data.intro,
      url: `/floss/${slug}`,
      images: [{ url: data.img, alt: data.title }],
    },
  };
}

/* ── Spec table ────────────────────────────────────────────────── */

function SpecTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <table className="company-table" style={{ marginTop: "16px", marginBottom: "8px" }}>
      <tbody>
        {specs.map((s) => (
          <tr key={s.label}>
            <th>{s.label}</th>
            <td>{s.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default async function FlossDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = FLOSS_DATA[slug as Slug];
  if (!data) notFound();

  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/floss">Floss</Link> / {data.title}
        </div>
        <h1>{data.title}</h1>
      </div>

      <div className="page-container">

        {slug === "seasons" ? (
          <>
            <SeasonsFlossContent />
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
              <Link href="/floss" className="btn-outline">← Back to Floss</Link>
            </div>
          </>
        ) : slug === "nishikiito" ? (
          <>
            <NishikiitoFlossContent />
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
              <Link href="/floss" className="btn-outline">← Back to Floss</Link>
            </div>
          </>
        ) : (
          <>
        {/* Hero image + intro */}
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", marginBottom: "56px", alignItems: "flex-start" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "420px", aspectRatio: "4/3", flexShrink: 0, background: "var(--bg-light)", border: "1px solid var(--border)", overflow: "hidden" }}>
            <Image src={data.img} alt={data.title} fill sizes="(max-width:640px) 100vw, 420px" style={{ objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1, minWidth: "240px" }}>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>{data.intro}</p>
          </div>
        </div>

        {/* Sub-sections */}
        {data.sections.length > 0 && (
          <div style={{ marginBottom: "56px" }}>
            {data.sections.map((sec) => (
              <div key={sec.heading} className="company-block">
                <h2>{sec.heading}</h2>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>{sec.body}</p>
                {sec.specs.length > 0 && <SpecTable specs={sec.specs} />}
              </div>
            ))}
          </div>
        )}

        {/* Features / quality points */}
        {data.features.length > 0 && (
          <div style={{ marginBottom: "56px" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 400, letterSpacing: ".08em", marginBottom: "28px", paddingBottom: "14px", borderBottom: "2px solid #1a1a1a" }}>
              {slug === "cosmo" ? "Secrets of Success" : "Features"}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "28px" }}>
              {data.features.map((f) => (
                <div key={f.heading} style={{ borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                  <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: "10px", letterSpacing: ".04em" }}>{f.heading}</h3>
                  <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, margin: 0 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
          <Link href="/floss" className="btn-outline">← Back to Floss</Link>
        </div>
          </>
        )}

      </div>
    </>
  );
}
