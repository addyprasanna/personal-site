import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BlurFade } from "./ui/BlurFade";
import { ShineBorder } from "./ui/ShineBorder";
import { Meteors } from "./ui/Meteors";
import { Globe } from "./ui/Globe";
import { Dock, DockIcon } from "./ui/Dock";
import { Magnetic } from "./ui/Magnetic";
import { site } from "@/app/data/site";

export function Footer() {
  return (
    <footer className="section-padding relative border-t border-[var(--color-border)] pb-10">
      <div className="container-main">
        <BlurFade>
          <div id="contact" className="card-surface relative scroll-mt-28 overflow-hidden rounded-3xl">
            <ShineBorder borderWidth={1} duration={12} />
            <Meteors number={10} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.14),transparent)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(167,139,250,0.12),transparent)] blur-2xl"
            />

            <div className="relative grid items-center gap-10 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12">
              <div>
                <p className="section-label mb-4 flex items-center gap-3">
                  <span className="h-px w-6 bg-[var(--color-text-subtle)]" aria-hidden="true" />
                  {"// get in touch"}
                </p>
                <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] text-[var(--color-text)]">
                  Let&apos;s build something useful.
                </h2>
                <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)]">
                  Open to conversations about product engineering, operational AI, and building systems
                  that make messy work legible.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Magnetic>
                    <a
                      href={`mailto:${site.email}`}
                      className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium"
                    >
                      <HiOutlineMail size={16} />
                      Email me
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <Link
                      href="/about"
                      className="btn-secondary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                    >
                      Read more about me
                    </Link>
                  </Magnetic>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[340px]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.18),transparent)] blur-2xl"
                />
                <Globe marker={site.coords} />
                <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
                  <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10px] text-[var(--color-text-secondary)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_6px_var(--color-accent)]" />
                    {site.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        <div className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
          >
            {site.email}
          </a>

          <Dock>
            <DockIcon label="GitHub" href={site.github} external>
              <FaGithub size={18} />
            </DockIcon>
            <DockIcon label="LinkedIn" href={site.linkedin} external>
              <FaLinkedin size={18} />
            </DockIcon>
            <DockIcon label="Email" href={`mailto:${site.email}`}>
              <HiOutlineMail size={19} />
            </DockIcon>
          </Dock>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-[var(--color-text-subtle)]">{site.name} · 2026</p>
          <p className="font-mono text-[11px] text-[var(--color-text-subtle)]">
            Next.js · Tailwind · Motion · cobe · Lenis
          </p>
        </div>
      </div>
    </footer>
  );
}
