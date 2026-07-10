import { Cormorant_Garamond, Inter } from "next/font/google";

export const brandSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-brand-serif",
  display: "swap",
});

export const brandSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-brand-sans",
  display: "swap",
});
