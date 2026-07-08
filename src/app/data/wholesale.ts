import type { WholesaleInfoIconId } from "../components/WholesaleInfoIcon";

export type WholesaleInfoCard = {
  id: WholesaleInfoIconId;
  title: string;
  body: string;
};

/** Visual pillars shared by /wholesale and Stories (U.S. fulfillment chapter). */
export const WHOLESALE_INFO_CARDS: WholesaleInfoCard[] = [
  {
    id: "availability",
    title: "Available on Faire since May 2026",
    body:
      "LECIEN COSMO products are available on Faire for U.S. retailers since May 2026.",
  },
  {
    id: "warehouse",
    title: "U.S. Warehouse in New Jersey",
    body:
      "Selected inventory ships from our New Jersey warehouse for faster domestic fulfillment.",
  },
  {
    id: "restocking",
    title: "Restocking from Japan",
    body:
      "Out-of-stock items are replenished from Japan on a rolling basis.",
  },
];
