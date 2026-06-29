import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

export const brandSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-brand-serif",
  display: "swap",
});

export const brandSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-brand-sans",
  display: "swap",
});
