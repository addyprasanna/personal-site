"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { openCommandPalette } from "./CommandPalette";
import { cn, EASE } from "@/app/lib/utils";
import { site } from "@/app/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/now", label: "Now" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 32));

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={cn(
          "glass mx-auto flex items-center justify-between rounded-2xl px-4 py-2.5 transition-[max-width,box-shadow,background] duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]",
          scrolled ? "max-w-3xl shadow-[0_12px_48px_rgba(0,0,0,0.55)]" : "max-w-6xl",
        )}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[11px] text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-accent)]/40">
            ap
            <span
              className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-green)] shadow-[0_0_6px_var(--color-accent-green)]"
              aria-hidden="true"
            />
          </span>
          <span className="hidden sm:inline">{site.handle}</span>
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-sm transition-colors duration-200",
                  isActive
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg border border-[var(--color-border)] bg-[rgba(255,255,255,0.05)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}

          <button
            onClick={openCommandPalette}
            aria-label="Open command palette"
            className="ml-1.5 hidden items-center gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-subtle)] transition-all duration-200 hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-muted)] sm:flex"
          >
            <span className="text-[11px]">⌘</span>K
          </button>
        </div>
      </motion.nav>
    </header>
  );
}
