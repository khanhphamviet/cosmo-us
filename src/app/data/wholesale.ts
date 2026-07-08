import type { WholesaleInfoIconId } from "../components/WholesaleInfoIcon";
import { FAIRE_STORE_URL } from "./site";

export type WholesaleInfoCard = {
  id: WholesaleInfoIconId;
  title: string;
  body: string;
};

/** Visual pillars shared by /wholesale and Stories (U.S. fulfillment chapter). */
export const WHOLESALE_INFO_CARDS: WholesaleInfoCard[] = [
  {
    id: "availability",
    title: "Official COSMO store on Faire",
    body: `Shop the official COSMO Embroidery brand store at ${FAIRE_STORE_URL.replace("https://", "")}, operated by TANAAKK INC. Available since May 2026.`,
  },
  {
    id: "warehouse",
    title: "Ships from New Jersey",
    body:
      "Selected inventory ships from our New Jersey warehouse. U.S. orders move quickly; destination availability outside the U.S. follows Faire at checkout.",
  },
  {
    id: "restocking",
    title: "Made in Japan, restocked from LECIEN",
    body:
      "Out-of-stock items are replenished from Japan on a rolling basis—craftsmanship stays with LECIEN.",
  },
];
