import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type {
  BlogFigure,
  BlogPost,
  BlogSection,
  BlogSubsection,
  BlogTimelineStep,
} from "../data/blogPosts";
import { formatBlogDate } from "../data/blogPosts";
import type { WholesaleInfoCard } from "../data/wholesale";
import { BlogTableBlock } from "./BlogTable";
import BlogArticleGallery from "./BlogArticleGallery";
import { WholesaleInfoIcon } from "./WholesaleInfoIcon";
import SeasonsSeriesBlock from "./SeasonsSeriesBlock";

type Props = {
  post: BlogPost;
};

function renderRichText(text: string): ReactNode[] {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const [, label, href] = match;
    const isExternal = href.startsWith("http");

    nodes.push(
      isExternal ? (
        <a
          key={`${match.index}-${href}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      ) : (
        <Link key={`${match.index}-${href}`} href={href}>
          {label}
        </Link>
      ),
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}

function BlogRichText({ text }: { text: string }) {
  return <>{renderRichText(text)}</>;
}

function BlogFigureBlock({ figure }: { figure: BlogFigure }) {
  const width = figure.width ?? 1440;
  const height = figure.height ?? 960;
  const isContain = figure.fit === "contain";

  const media = (
    <div
      className={[
        "blog-article-figure-media",
        isContain ? "blog-article-figure-media--contain" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={figure.src}
        alt={figure.alt}
        width={width}
        height={height}
        quality={90}
        sizes="(max-width: 720px) 100vw, 720px"
        className="blog-article-figure-img"
      />
    </div>
  );

  return (
    <figure
      className={[
        "blog-article-figure",
        isContain ? "blog-article-figure--contain" : "",
        figure.href ? "blog-article-figure--linked" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {figure.href ? (
        <a
          href={figure.href}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-article-figure-link"
        >
          {media}
        </a>
      ) : (
        media
      )}
      {figure.caption ? (
        <figcaption className="blog-article-figure-caption">
          {figure.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function BlogTimelineBlock({ steps }: { steps: BlogTimelineStep[] }) {
  return (
    <ol className="blog-article-timeline">
      {steps.map((step, index) => (
        <li key={step.title} className="blog-article-timeline-step">
          <div className="blog-article-timeline-marker" aria-hidden="true">
            <span className="blog-article-timeline-dot" />
            {index < steps.length - 1 ? (
              <span className="blog-article-timeline-line" />
            ) : null}
          </div>
          <div className="blog-article-timeline-copy">
            <p className="blog-article-timeline-period">{step.period}</p>
            <p className="blog-article-timeline-title">{step.title}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function BlogInfoCards({ cards }: { cards: WholesaleInfoCard[] }) {
  return (
    <div className="blog-article-info-cards wholesale-info" aria-label="Key updates">
      <div className="wholesale-info-grid">
        {cards.map((card) => (
          <article key={card.id} className="wholesale-info-card">
            <WholesaleInfoIcon id={card.id} />
            <h3 className="wholesale-info-title">{card.title}</h3>
            <p className="wholesale-info-body">
              <BlogRichText text={card.body} />
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function BlogEmbedBlock({ embed }: { embed: NonNullable<BlogSection["embed"]> }) {
  if (embed === "seasons-series") {
    return <SeasonsSeriesBlock />;
  }
  return null;
}

function Subsection({ subsection }: { subsection: BlogSubsection }) {
  return (
    <div className="blog-article-subsection">
      <h3>{subsection.heading}</h3>
      {subsection.paragraphs.map((paragraph) => (
        <p key={paragraph}>
          <BlogRichText text={paragraph} />
        </p>
      ))}
      {subsection.table ? <BlogTableBlock table={subsection.table} /> : null}
    </div>
  );
}

function Section({
  section,
  isLead,
  isClosing,
}: {
  section: BlogSection;
  isLead?: boolean;
  isClosing?: boolean;
}) {
  const hasAsideFigure =
    Boolean(section.figure) && section.figurePosition === "aside";
  const hasAsideGallery =
    Boolean(section.gallery?.length) && section.galleryPosition === "aside";
  const isCenterLogo = section.asideImage?.position === "center";
  const isAsideLogo = Boolean(section.asideImage) && !isCenterLogo;

  const sectionClass = [
    "blog-article-section",
    section.bullets?.length ? "blog-article-section--highlight" : "",
    isAsideLogo || hasAsideFigure || hasAsideGallery
      ? "blog-article-section--with-aside"
      : "",
    hasAsideFigure ? "blog-article-section--figure-aside" : "",
    hasAsideGallery ? "blog-article-section--gallery-aside" : "",
    isClosing ? "blog-article-section--closing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const paragraphs = section.paragraphs?.map((paragraph, index) => (
    <p
      key={paragraph}
      className={isLead && index === 0 ? "blog-article-lead" : undefined}
    >
      <BlogRichText text={paragraph} />
    </p>
  ));

  const mediaBlocks = (
    <>
      {section.figure && section.figurePosition !== "aside" ? (
        <BlogFigureBlock figure={section.figure} />
      ) : null}
      {section.gallery?.length && section.galleryPosition !== "aside" ? (
        <BlogArticleGallery
          items={section.gallery}
          variant={section.galleryVariant}
          zoomable={section.galleryZoom}
        />
      ) : null}
      {section.embed ? <BlogEmbedBlock embed={section.embed} /> : null}
    </>
  );

  const bulletList = section.bullets?.length ? (
    <ul className="blog-article-bullets">
      {section.bullets.map((item) => (
        <li key={item}>
          <BlogRichText text={item} />
        </li>
      ))}
    </ul>
  ) : null;

  const bulletsBeforeGallery = section.galleryVariant === "hero";

  return (
    <section className={sectionClass}>
      {section.heading ? <h2>{section.heading}</h2> : null}
      {section.bulletsLabel ? (
        <p className="blog-article-bullets-label">{section.bulletsLabel}</p>
      ) : null}
      {section.mediaPosition === "top" ? mediaBlocks : null}
      {section.infoCards?.length && section.infoCardsPosition === "top" ? (
        <BlogInfoCards cards={section.infoCards} />
      ) : null}
      {isCenterLogo && section.asideImage ? (
        <div className="blog-article-section-logo-center">
          <Image
            src={section.asideImage.src}
            alt={section.asideImage.alt}
            width={974}
            height={184}
            className="blog-article-aside-logo"
          />
        </div>
      ) : null}
      {isAsideLogo && section.asideImage ? (
        <div className="blog-article-section-grid">
          <div className="blog-article-section-copy">{paragraphs}</div>
          <aside className="blog-article-section-aside">
            <Image
              src={section.asideImage.src}
              alt={section.asideImage.alt}
              width={280}
              height={120}
              className="blog-article-aside-logo"
            />
          </aside>
        </div>
      ) : hasAsideFigure && section.figure ? (
        <div className="blog-article-section-grid">
          <div className="blog-article-section-copy">{paragraphs}</div>
          <aside className="blog-article-section-aside">
            <BlogFigureBlock figure={section.figure} />
          </aside>
        </div>
      ) : hasAsideGallery && section.gallery ? (
        <div className="blog-article-section-grid">
          <div className="blog-article-section-copy">{paragraphs}</div>
          <aside className="blog-article-section-aside">
            <BlogArticleGallery
              items={section.gallery}
              variant={section.galleryVariant ?? "aside"}
              zoomable={section.galleryZoom}
            />
          </aside>
        </div>
      ) : (
        paragraphs
      )}
      {bulletsBeforeGallery ? bulletList : null}
      {section.mediaPosition !== "top" ? mediaBlocks : null}
      {!bulletsBeforeGallery ? bulletList : null}
      {section.table ? <BlogTableBlock table={section.table} /> : null}
      {section.timeline?.length ? (
        <BlogTimelineBlock steps={section.timeline} />
      ) : null}
      {section.infoCards?.length && section.infoCardsPosition !== "top" ? (
        <BlogInfoCards cards={section.infoCards} />
      ) : null}
      {section.linkCta ? (
        section.linkCta.href.startsWith("http") ? (
          <a
            href={section.linkCta.href}
            className="blog-article-cta blog-article-section-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {section.linkCta.label}
            <span aria-hidden="true"> →</span>
          </a>
        ) : (
          <Link
            href={section.linkCta.href}
            className="blog-article-cta blog-article-section-cta"
          >
            {section.linkCta.label}
            <span aria-hidden="true"> →</span>
          </Link>
        )
      ) : null}
      {section.subsections?.map((subsection) => (
        <Subsection key={subsection.heading} subsection={subsection} />
      ))}
    </section>
  );
}

export default function BlogArticle({ post }: Props) {
  return (
    <article
      className="blog-article"
      style={
        post.heroAspectRatio
          ? ({ "--blog-hero-aspect": post.heroAspectRatio } as CSSProperties)
          : undefined
      }
    >
      <div
        className={[
          "blog-article-hero",
          post.imageFit === "contain" ? "blog-article-hero--contain" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={
          post.heroAspectRatio ? { aspectRatio: post.heroAspectRatio } : undefined
        }
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          quality={90}
          sizes="(max-width: 720px) 100vw, 720px"
          priority
          style={{ objectFit: post.imageFit ?? "cover" }}
        />
      </div>

      <header className="blog-article-header">
        <time className="blog-article-date" dateTime={post.publishedAt}>
          {formatBlogDate(post.publishedAt)}
        </time>
        <h1 className="blog-article-title">{post.title}</h1>
      </header>

      <div className="blog-article-body">
        {post.sections.map((section, index) => (
          <Section
            key={
              section.heading ??
              section.paragraphs?.[0] ??
              section.bullets?.[0] ??
              section.gallery?.[0]?.src ??
              section.table?.headers[0]
            }
            section={section}
            isLead={index === 0}
            isClosing={index === post.sections.length - 1 && !section.heading}
          />
        ))}
      </div>

      <footer className="blog-article-footer">
        <p className="blog-article-cta-label">
          {post.ctaLabel ?? "Featured in this story"}
        </p>
        {post.ctaDescription ? (
          <p className="blog-article-cta-desc">
            <BlogRichText text={post.ctaDescription} />
          </p>
        ) : null}
        {post.cta.href.startsWith("http") ? (
          <a
            href={post.cta.href}
            className="blog-article-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.cta.label}
            <span aria-hidden="true"> →</span>
          </a>
        ) : (
          <Link href={post.cta.href} className="blog-article-cta">
            {post.cta.label}
            <span aria-hidden="true"> →</span>
          </Link>
        )}
        <Link href="/stories" className="blog-article-back">
          Back to Stories
        </Link>
      </footer>
    </article>
  );
}
