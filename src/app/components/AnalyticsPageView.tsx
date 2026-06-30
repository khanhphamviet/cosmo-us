"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "../data/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || typeof window.gtag !== "function") return;

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
    });
  }, [pathname, searchParams]);

  return null;
}
