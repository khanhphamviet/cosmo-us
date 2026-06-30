import Image from "next/image";
import Link from "next/link";
import type {
  BlogFigure,
  BlogPost,
  BlogSection,
  BlogSubsection,
  BlogTimelineStep,
} from "../data/blogPosts";
import { formatBlogDate } from "../data/blogPosts";
import { BlogTableBlock } from "./BlogTable";

type Props = {
  post: BlogPost;
};

function BlogFigureBlock({ figure }: { figure: BlogFigure }) {
  const width = figure.width ?? 1440;
  const height = figure.height ?? 960;
  const isContain = figure.fit === "contain";

  return (
    <figure
      className={[
        "blog-article-figure",
        isContain ? "blog-article-figure--contain" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
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
      {figure.caption ? (
        <figcaption className="blog-article-figure-caption">
          {figure.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function BlogGalleryBlock({
  items,
  variant = "row",
}: {
  items: BlogFigure[];
  variant?: BlogSection["galleryVariant"];
}) {
  const isAside = variant === "aside";

  return (
    <div
      className={[
        "blog-article-gallery",
        variant === "comparison" ? "blog-article-gallery--comparison" : "",
        variant === "row" ? "blog-article-gallery--row" : "",
        variant === "patterns" ? "blog-article-gallery--patterns" : "",
        isAside ? "blog-article-gallery--aside" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item) => {
        const width = item.width ?? 900;
        const height = item.height ?? 900;

        return (
          <figure key={`${item.src}-${item.caption ?? item.alt}`} className="blog-article-gallery-item">
            <div
              className={[
                "blog-article-gallery-media",
                item.fit === "contain" ? "blog-article-gallery-media--contain" : "",
                isAside && item.fit === "contain"
                  ? "blog-article-gallery-media--aside-fill"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {isAside && item.fit === "contain" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 45vw, 180px"
                  className="blog-article-gallery-img"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={width}
                  height={height}
                  quality={90}
                  sizes={
                    variant === "comparison"
                      ? "(max-width: 640px) 100vw, 50vw"
                      : "(max-width: 640px) 100vw, 33vw"
                  }
                  className="blog-article-gallery-img"
                />
              )}
            </div>
            {item.caption ? (
              <figcaption className="blog-article-gallery-caption">
                {item.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
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

function Subsection({ subsection }: { subsection: BlogSubsection }) {
  return (
    <div className="blog-article-subsection">
      <h3>{subsection.heading}</h3>
      {subsection.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
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

  const sectionClass = [
    "blog-article-section",
    section.bullets?.length ? "blog-article-section--highlight" : "",
    section.asideImage || hasAsideFigure || hasAsideGallery
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
      {paragraph}
    </p>
  ));

  const mediaBlocks = (
    <>
      {section.figure && section.figurePosition !== "aside" ? (
        <BlogFigureBlock figure={section.figure} />
      ) : null}
      {section.gallery?.length && section.galleryPosition !== "aside" ? (
        <BlogGalleryBlock
          items={section.gallery}
          variant={section.galleryVariant}
        />
      ) : null}
    </>
  );

  return (
    <section className={sectionClass}>
      {section.heading ? <h2>{section.heading}</h2> : null}
      {section.bulletsLabel ? (
        <p className="blog-article-bullets-label">{section.bulletsLabel}</p>
      ) : null}
      {section.mediaPosition === "top" ? mediaBlocks : null}
      {section.asideImage ? (
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
            <BlogGalleryBlock
              items={section.gallery}
              variant={section.galleryVariant ?? "aside"}
            />
          </aside>
        </div>
      ) : (
        paragraphs
      )}
      {section.mediaPosition !== "top" ? mediaBlocks : null}
      {section.bullets?.length ? (
        <ul className="blog-article-bullets">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.table ? <BlogTableBlock table={section.table} /> : null}
      {section.timeline?.length ? (
        <BlogTimelineBlock steps={section.timeline} />
      ) : null}
      {section.subsections?.map((subsection) => (
        <Subsection key={subsection.heading} subsection={subsection} />
      ))}
    </section>
  );
}

export default function BlogArticle({ post }: Props) {
  return (
    <article className="blog-article">
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
          <p className="blog-article-cta-desc">{post.ctaDescription}</p>
        ) : null}
        <Link href={post.cta.href} className="blog-article-cta">
          {post.cta.label}
          <span aria-hidden="true"> →</span>
        </Link>
        <Link href="/stories" className="blog-article-back">
          Back to Stories
        </Link>
      </footer>
    </article>
  );
}
