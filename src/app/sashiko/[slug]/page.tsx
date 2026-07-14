import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SashikoProductDetail from "../../components/SashikoProductDetail";
import {
  getSashikoProduct,
  getSashikoProductSlugs,
} from "../../data/sashikoProducts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSashikoProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getSashikoProduct(slug);
  if (!product) return {};

  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/sashiko/${product.slug}` },
    openGraph: {
      title: `${product.title} | COSMO Embroidery US`,
      description: product.lead,
      url: `/sashiko/${product.slug}`,
      images: [{ url: product.img, alt: product.alt }],
    },
  };
}

export default async function SashikoProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getSashikoProduct(slug);
  if (!product) notFound();

  return (
    <>
      <div className="page-hero page-hero--compact page-hero--sashiko">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/">Embroidery</Link> /{" "}
          <Link href="/sashiko">Sashiko</Link> / {product.shortTitle}
        </div>
      </div>

      <div className="page-container page-container--sashiko">
        <SashikoProductDetail product={product} />
        <div className="sashiko-page-footer">
          <Link href="/sashiko#lineup" className="btn-outline">
            ← Back to Sashiko Lineup
          </Link>
        </div>
      </div>
    </>
  );
}
