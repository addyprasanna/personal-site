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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#161616] bg-[#080808]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm text-[#666] hover:text-[#e2e2e2] transition-colors duration-200"
        >
          ap
        </Link>

        <div className="flex items-center gap-7 text-sm">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-[#e2e2e2]"
                    : "text-[#4a4a4a] hover:text-[#aaa]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Command palette trigger */}
          <button
            onClick={openCommandPalette}
            aria-label="Open command palette"
            className="hidden sm:flex items-center gap-1 rounded border border-[#1a1a1a] bg-[#0d0d0d] px-2 py-0.5 font-mono text-[10px] text-[#2e2e2e] hover:border-[#2a2a2a] hover:text-[#555] transition-all duration-200"
          >
            ⌘K
          </button>
        </div>
      </nav>
    </header>
  );
}
