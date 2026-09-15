import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CommandPalette } from "./components/CommandPalette";
import { ScrollProgress } from "./components/ScrollProgress";
import { EasterEggs } from "./components/EasterEggs";
import { SmoothScroll } from "./components/ui/SmoothScroll";
import { site } from "./data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Advaith Prasanna",
    "Product Engineer",
    "Kaya AI",
    "forward deployed engineer",
    "operational intelligence",
    "applied AI",
    "Ohio State",
  ],
  openGraph: {
    title: site.name,
    description: "Product Engineer building AI-native operational systems.",
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Product Engineer building AI-native operational systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="grain">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-[var(--color-bg)] text-[var(--color-text)]`}
      >
        <SmoothScroll>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <div id="main-content">{children}</div>
          <CommandPalette />
          <EasterEggs />
        </SmoothScroll>
      </body>
    </html>
  );
}
