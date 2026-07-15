import JsonLd from "./JsonLd";
import { SITE_URL } from "../data/site";

type BreadcrumbItem = {
  name: string;
  href?: string;
};

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const listItems = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
  }));

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: listItems,
      }}
    />
  );
}
