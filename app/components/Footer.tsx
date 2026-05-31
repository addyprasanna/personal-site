import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export function Footer() {
  return (
    <footer className="section-padding border-t border-[var(--color-border)] pb-12">
      <div className="container-main">
        {/* Contact CTA */}
        <div className="gradient-border glow-cyan mb-16 rounded-2xl">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="section-label mb-3">{"// get in touch"}</p>
                <h2 className="text-2xl font-light tracking-tight text-[var(--color-text)] md:text-3xl">
                  Let&apos;s build something useful.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Open to conversations about product engineering, operational
                  AI, and building systems that make messy work legible.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:advaith.prasanna@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[#060608] transition-all duration-200 hover:bg-[#67e8f9] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                >
                  <HiOutlineMail size={16} />
                  Email me
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-3 text-sm text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]"
                >
                  Read more about me
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="mailto:advaith.prasanna@gmail.com"
              className="text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
            >
              advaith.prasanna@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/addyprasanna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-text-subtle)] transition-colors duration-200 hover:text-[var(--color-text-secondary)]"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/advaith-prasanna/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-text-subtle)] transition-colors duration-200 hover:text-[var(--color-text-secondary)]"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:advaith.prasanna@gmail.com"
              aria-label="Email"
              className="text-[var(--color-text-subtle)] transition-colors duration-200 hover:text-[var(--color-text-secondary)]"
            >
              <HiOutlineMail size={19} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-[var(--color-text-subtle)]">
            Advaith Prasanna · 2026
          </p>
          <p className="font-mono text-[11px] text-[var(--color-text-subtle)]">
            Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
