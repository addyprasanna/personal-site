"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-neutral-900"
        >
          AP
        </Link>

        <div className="flex items-center gap-6 text-sm">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
