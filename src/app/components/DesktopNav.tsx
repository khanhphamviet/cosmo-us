"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isProductsPath, PRODUCT_NAV } from "../data/productNav";

function ProductMenuLink({
  label,
  href,
  external,
  className,
}: {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
}) {
  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
        <span className="nav-external-mark" aria-hidden="true">
          ↗
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function DesktopNav() {
  const pathname = usePathname();
  const productsActive = isProductsPath(pathname);

  return (
    <nav className="desktop-nav" aria-label="Main navigation">
      <ul className="main-nav">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            TOP
          </Link>
        </li>
        <li className="nav-dropdown">
          <button
            type="button"
            className={`nav-dropdown-trigger${productsActive ? " active" : ""}`}
            aria-haspopup="true"
          >
            Products
          </button>
          <ul className="nav-dropdown-menu" role="menu">
            {PRODUCT_NAV.map((item) => (
              <li key={item.label} role="none">
                <ProductMenuLink
                  {...item}
                  className={
                    !item.external && pathname === item.href ? "active" : undefined
                  }
                />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link href="/wholesale" className={pathname === "/wholesale" ? "active" : ""}>
            Wholesale
          </Link>
        </li>
        <li>
          <Link href="/company" className={pathname === "/company" ? "active" : ""}>
            Company
          </Link>
        </li>
      </ul>
    </nav>
  );
}
