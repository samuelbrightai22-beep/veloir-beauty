import type { Metadata } from "next";
import { Inter, Bodoni_Moda, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VELOIR — Where Beauty Meets Mystery | Luxury Cosmetics, Skincare & Fragrance",
  description:
    "VELOIR is a Parisian-inspired luxury beauty house crafting high-performance cosmetics, skincare, and fragrance. Discover our collections of makeup, serums, and eau de parfum.",
  keywords: [
    "VELOIR",
    "luxury cosmetics",
    "skincare",
    "fragrance",
    "makeup",
    "Parisian beauty",
    "cruelty-free",
    "eau de parfum",
    "serum",
    "lipstick",
  ],
  authors: [{ name: "VELOIR" }],
  openGraph: {
    title: "VELOIR — Where Beauty Meets Mystery",
    description:
      "A Parisian-inspired luxury beauty house. Discover cosmetics, skincare, and fragrance crafted with intention.",
    url: "https://veloir.beauty",
    siteName: "VELOIR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELOIR — Where Beauty Meets Mystery",
    description: "Luxury cosmetics, skincare & fragrance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bodoni.variable} ${pinyon.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
