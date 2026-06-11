import JsonLd from "./JsonLd";
import {
  FAIRE_STORE_URL,
  INSTAGRAM_URL,
  LECIEN_EMBROIDERY_URL,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "../data/site";

export default function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": ORGANIZATION_ID,
            name: "COSMO Embroidery",
            alternateName: ["LECIEN COSMO", "COSMO", "COSMO Embroidery", SITE_NAME],
            url: SITE_URL,
            logo: `${SITE_URL}/opengraph-image.jpg`,
            parentOrganization: {
              "@type": "Organization",
              name: "LECIEN Corporation",
              url: "https://www.lecien.co.jp",
            },
            sameAs: [LECIEN_EMBROIDERY_URL, FAIRE_STORE_URL, INSTAGRAM_URL],
          },
          {
            "@type": "WebSite",
            "@id": WEBSITE_ID,
            url: SITE_URL,
            name: SITE_NAME,
            inLanguage: "en-US",
            publisher: { "@id": ORGANIZATION_ID },
          },
        ],
      }}
    />
  );
}
