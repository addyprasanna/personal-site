"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { openCommandPalette } from "./CommandPalette";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/now", label: "Now" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4">
      <nav
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[10px] text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-accent)]/30">
            ap
          </span>
          <span className="hidden sm:inline">advaith</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)]"
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
            className="ml-1 hidden items-center gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-subtle)] transition-all duration-200 hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-muted)] sm:flex"
          >
            ⌘K
          </button>
        </div>
      </nav>
    </header>
  );
}
