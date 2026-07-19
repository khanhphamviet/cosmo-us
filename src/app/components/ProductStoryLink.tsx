import Link from "next/link";

type StoryItem = {
  href: string;
  title: string;
};

type Props = {
  href?: string;
  title?: string;
  stories?: StoryItem[];
};

export default function ProductStoryLink({ href, title, stories }: Props) {
  const items =
    stories ?? (href && title ? [{ href, title }] : []);

  if (items.length === 0) return null;

  return (
    <aside className="product-story-cta" aria-label="Related stories">
      <p className="product-story-cta-eyebrow">From Stories</p>
      <ul className="product-story-cta-list">
        {items.map((item) => (
          <li key={item.href} className="product-story-cta-item">
            <p className="product-story-cta-title">{item.title}</p>
            <Link href={item.href} className="btn-outline product-story-cta-btn">
              Read the story
              <span aria-hidden="true"> →</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
