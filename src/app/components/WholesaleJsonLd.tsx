import JsonLd from "./JsonLd";
import {
  FAIRE_STORE_URL,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
} from "../data/site";

export default function WholesaleJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/wholesale#webpage`,
            url: `${SITE_URL}/wholesale`,
            name: "COSMO Wholesale on Faire | LECIEN COSMO",
            description:
              "LECIEN COSMO wholesale for U.S. retailers on Faire. Shop the official COSMO Faire store with fulfillment from New Jersey.",
            isPartOf: { "@id": WEBSITE_ID },
            about: {
              "@type": "Brand",
              name: "LECIEN COSMO",
            },
            publisher: { "@id": ORGANIZATION_ID },
          },
          {
            "@type": "WebPage",
            url: FAIRE_STORE_URL,
            name: "COSMO on Faire",
            description: "Official LECIEN COSMO wholesale store on Faire.",
            isPartOf: { "@id": WEBSITE_ID },
          },
        ],
      }}
    />
  );
}
