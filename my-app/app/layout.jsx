import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Ritesh Biswas",
  description: "Full-stack engineer specializing in AI-driven web apps",
  icons: {
    icon: [
      { url: "/favicons/icons8-notion-color-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/icons8-notion-color-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/icons8-notion-color-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/icons8-notion-color-120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicons/icons8-notion-color-72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicons/icons8-notion-color-144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicons/icons8-notion-color-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/icons8-notion-color-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/icons8-notion-color-57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicons/icons8-notion-color-60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicons/icons8-notion-color-72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicons/icons8-notion-color-76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicons/icons8-notion-color-114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicons/icons8-notion-color-120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicons/icons8-notion-color-144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicons/icons8-notion-color-152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicons/icons8-notion-color-180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicons/icons8-notion-color-48.svg", color: "#26E07F" },
    ],
  },
  other: {
    "msapplication-square70x70logo": "/favicons/icons8-notion-color-70.png",
    "msapplication-TileImage": "/favicons/icons8-notion-color-144.png",
    "msapplication-square150x150logo": "/favicons/icons8-notion-color-150.png",
    "msapplication-square310x310logo": "/favicons/icons8-notion-color-310.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable}`}>
        {children}
        <Analytics />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
