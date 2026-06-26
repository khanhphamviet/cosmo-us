"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isProductsPath, PRODUCT_NAV } from "../data/productNav";

const UTILITY_LINKS = [
  { href: "/blog", label: "Stories" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/company", label: "Company" },
];

function ProductMenuLink({
  label,
  href,
  external,
  active,
  onNavigate,
}: {
  label: string;
  href: string;
  external?: boolean;
  active?: boolean;
  onNavigate: () => void;
}) {
  const className = active ? "active" : undefined;

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        {label}
        <span className="nav-external-mark" aria-hidden="true">
          ↗
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onNavigate}>
      {label}
    </Link>
  );
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open && isProductsPath(pathname)) {
      setProductsOpen(true);
    }
  }, [open, pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span className={`ham-line ${open ? "open" : ""}`} />
        <span className={`ham-line ${open ? "open" : ""}`} />
        <span className={`ham-line ${open ? "open" : ""}`} />
      </button>

      {open && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <nav
        className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "active" : ""}
              onClick={closeMenu}
            >
              TOP
            </Link>
          </li>
          <li className="mobile-nav-group">
            <button
              type="button"
              className={`mobile-nav-group-trigger${isProductsPath(pathname) ? " active" : ""}`}
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((value) => !value)}
            >
              Products
              <span className="mobile-nav-group-icon" aria-hidden="true">
                {productsOpen ? "−" : "+"}
              </span>
            </button>
            {productsOpen && (
              <ul className="mobile-nav-sub">
                {PRODUCT_NAV.map((item) => (
                  <li key={item.label}>
                    <ProductMenuLink
                      {...item}
                      active={!item.external && pathname === item.href}
                      onNavigate={closeMenu}
                    />
                  </li>
                ))}
              </ul>
            )}
          </li>
          {UTILITY_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={
                  pathname === href || (href === "/blog" && pathname.startsWith("/blog/"))
                    ? "active"
                    : ""
                }
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
