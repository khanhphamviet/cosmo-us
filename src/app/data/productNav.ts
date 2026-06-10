export type ProductNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const PRODUCT_NAV: ProductNavItem[] = [
  {
    label: "Floss",
    href: "/floss",
  },
  {
    label: "Cloth",
    href: "/cloth",
  },
  {
    label: "Sashiko",
    href: "/sashiko",
  },
  {
    label: "100 Ladies",
    href: "/100-ladies",
  },
  {
    label: "Crochet with Floss",
    href: "/crochet",
  },
];

export function isProductsPath(pathname: string) {
  return (
    pathname === "/floss" ||
    pathname.startsWith("/floss/") ||
    pathname === "/cloth" ||
    pathname === "/sashiko" ||
    pathname === "/100-ladies" ||
    pathname === "/crochet"
  );
}
