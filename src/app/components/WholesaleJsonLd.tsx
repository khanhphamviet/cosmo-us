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
              "Official LECIEN COSMO wholesale on Faire. Operated by TANAAKK INC., authorized U.S. seller for LECIEN COSMO, with New Jersey fulfillment.",
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
            name: "COSMO Embroidery on Faire",
            description:
              "Official COSMO Embroidery brand store on Faire, operated by TANAAKK INC.",
            isPartOf: { "@id": WEBSITE_ID },
          },
        ],
      }}
    />
  );
}
