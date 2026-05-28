"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",            label: "Embroidery" },
  { href: "/floss",       label: "Floss" },
  { href: "/freepatterns",label: "Free Patterns" },
  { href: "/wholesale",   label: "Wholesale" },
  { href: "/company",     label: "Company" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button — visible only on mobile */}
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

      {/* Overlay */}
      {open && (
        <div
          className="nav-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <nav className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} aria-label="Mobile navigation">
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? "active" : ""}
                onClick={() => setOpen(false)}
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
