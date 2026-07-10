import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CosmoFlossContent from "../../components/CosmoFlossContent";
import SeasonsFlossContent from "../../components/SeasonsFlossContent";
import NishikiitoFlossContent from "../../components/NishikiitoFlossContent";

/* ── Data ─────────────────────────────────────────────────────── */

const FLOSS_DATA = {
  cosmo: {
    title: "COSMO No. 25 Embroidery Floss",
    img: "/images/floss-cosmo-500-color-chart-tight-20260710.jpg",
    intro:
      "COSMO® No. 25 Embroidery Floss—Made in Japan, designed in Kyoto. Extra-long staple cotton, silk-like luster, lasting color, and a palette of 500 solid colors.",
    sections: [] as {
      heading: string;
      body: string;
      specs: { label: string; value: string }[];
    }[],
    features: [] as { heading: string; body: string }[],
  },

  seasons: {
    title: "Seasons Variegated Floss",
    img: "/images/floss-seasons-20260610.jpg",
    intro:
      "Beautiful gradation No. 25 embroidery thread. A color range designed to complement 500 solid No. 25 embroidery thread colors. Three series with different color-change lengths enable even richer expression.",
    sections: [],
    features: [],
  },

  nishikiito: {
    title: "Nishikiito Metallic Thread",
    img: "/images/floss-nishikiito-hero-catalog-20260710-v2.jpg",
    intro:
      "Japanese-made metallic thread for hand embroidery, crafted with Kyoto kimono gold-thread technique. Five finishes—Nishiki, Mirror, Iridescent, Champagni, and Neoni—with 48 colors for embroidery accents.",
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
    title:
      slug === "cosmo"
        ? "COSMO No. 25 Embroidery Floss | 500 Colors"
        : slug === "seasons"
          ? "Seasons Variegated Floss | 140 Colors"
          : slug === "nishikiito"
            ? "Nishikiito Metallic Thread | 48 Colors"
            : data.title,
    description: data.intro,
    alternates: { canonical: `/floss/${slug}` },
    openGraph: {
      title:
        slug === "cosmo"
          ? "COSMO No. 25 Embroidery Floss | 500 Colors"
          : slug === "seasons"
            ? "Seasons Variegated Floss | 140 Colors"
            : slug === "nishikiito"
              ? "Nishikiito Metallic Thread | 48 Colors"
              : `${data.title} | COSMO Embroidery US`,
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
      {slug === "cosmo" || slug === "seasons" || slug === "nishikiito" ? (
        <>
          <div className="page-hero page-hero--compact page-hero--sashiko">
            <div className="breadcrumb">
              <Link href="/">HOME</Link> / <Link href="/floss">Floss</Link> /{" "}
              {slug === "cosmo"
                ? "No. 25 Floss"
                : slug === "seasons"
                  ? "Seasons"
                  : "Nishikiito"}
            </div>
          </div>

          <div className="page-container page-container--sashiko">
            {slug === "cosmo" ? (
              <CosmoFlossContent />
            ) : slug === "seasons" ? (
              <SeasonsFlossContent />
            ) : (
              <NishikiitoFlossContent />
            )}
            <div className="sashiko-page-footer">
              <Link href="/floss" className="btn-outline">
                ← Back to Floss
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/floss">Floss</Link> / {data.title}
        </div>
        <h1>{data.title}</h1>
      </div>

      <div className="page-container">
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
              Features
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

      </div>
        </>
      )}
    </>
  );
}
