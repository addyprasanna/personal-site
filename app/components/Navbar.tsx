import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-neutral-900">
          Advaith
        </Link>

        <div className="flex items-center gap-6 text-sm text-neutral-700">
          <Link href="/projects" className="hover:text-neutral-900">
            Projects
          </Link>
          <Link href="/about" className="hover:text-neutral-900">
            About
          </Link>
          <Link href="/now" className="hover:text-neutral-900">
            Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
