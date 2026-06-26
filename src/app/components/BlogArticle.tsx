import Image from "next/image";
import Link from "next/link";
import type { BlogPost, BlogSection, BlogSubsection } from "../data/blogPosts";
import { formatBlogDate } from "../data/blogPosts";
import { BlogTableBlock } from "./BlogTable";

type Props = {
  post: BlogPost;
};

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
  const sectionClass = [
    "blog-article-section",
    section.bullets?.length ? "blog-article-section--highlight" : "",
    section.asideImage ? "blog-article-section--with-aside" : "",
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

  return (
    <section className={sectionClass}>
      {section.heading ? <h2>{section.heading}</h2> : null}
      {section.bulletsLabel ? (
        <p className="blog-article-bullets-label">{section.bulletsLabel}</p>
      ) : null}
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
      ) : (
        paragraphs
      )}
      {section.bullets?.length ? (
        <ul className="blog-article-bullets">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.table ? <BlogTableBlock table={section.table} /> : null}
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
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
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
