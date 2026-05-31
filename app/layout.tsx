import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CommandPalette } from "./components/CommandPalette";
import { ScrollProgress } from "./components/ScrollProgress";
import { EasterEggs } from "./components/EasterEggs";

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
  title: "Advaith Prasanna",
  description:
    "Product Engineer building AI-native operational systems at Kaya AI.",
  openGraph: {
    title: "Advaith Prasanna",
    description: "Product Engineer building AI-native operational systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-[var(--color-bg)] text-[var(--color-text)]`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <div id="main-content">{children}</div>
        <CommandPalette />
        <EasterEggs />
      </body>
    </html>
  );
}
