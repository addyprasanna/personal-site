"use client";

import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { EASE } from "@/app/lib/utils";
import { site } from "@/app/data/site";

let _setOpen: ((v: boolean) => void) | null = null;
export function openCommandPalette() {
  _setOpen?.(true);
}

function Hint({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-auto shrink-0 font-mono text-[10px] text-[var(--color-text-subtle)]">
      {children}
    </span>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-text-subtle)]">
      {children}
    </kbd>
  );
}

const sections = [
  { id: "building", label: "Currently building" },
  { id: "work", label: "Selected work" },
  { id: "stack", label: "Technical toolkit" },
  { id: "philosophy", label: "Technical philosophy" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Get in touch" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  _setOpen = setOpen;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const close = () => setOpen(false);

  const go = (href: string) => {
    close();
    router.push(href);
  };

  const jump = (id: string) => {
    close();
    const scrollTo = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      requestAnimationFrame(() => {
        if (lenis) {
          // Refresh Lenis' cached page height first — after a route change it may still
          // reflect the previous (shorter) page and would clamp the target.
          lenis.resize();
          lenis.scrollTo(el, { offset: -100, duration: 1.4 });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return true;
    };
    if (pathname !== "/") {
      router.push("/");
      let tries = 0;
      const poll = () => {
        if (scrollTo() || tries++ > 30) return;
        setTimeout(poll, 100);
      };
      setTimeout(poll, 250);
    } else {
      scrollTo();
    }
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(site.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const egg = (name: "kaya" | "fencing") => {
    close();
    setTimeout(() => window.dispatchEvent(new CustomEvent(`egg:${name}`)), 120);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            data-command-palette
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.97, y: -12, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.97, y: -8, filter: "blur(6px)" }}
            transition={{ duration: 0.2, ease: EASE }}
            role="dialog"
            aria-label="Command palette"
            className="fixed left-1/2 top-[14vh] z-[60] w-[calc(100%-2rem)] max-w-[560px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--color-border-hover)] bg-[rgba(9,9,13,0.92)] shadow-[0_40px_120px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl"
          >
            <Command label="Command palette" loop>
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4 py-3.5">
                <span className="shrink-0 font-mono text-sm text-[var(--color-accent)]">›</span>
                <Command.Input
                  autoFocus
                  placeholder="Search, jump, or run…"
                  className="flex-1 bg-transparent text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-subtle)]"
                />
                <Kbd>esc</Kbd>
              </div>

              <Command.List className="max-h-[380px] overflow-y-auto p-2">
                <Command.Empty>no results</Command.Empty>

                <Command.Group heading="Navigate">
                  <Command.Item value="home" keywords={["index", "start"]} onSelect={() => go("/")}>
                    Home <Hint>/</Hint>
                  </Command.Item>
                  <Command.Item value="work projects" onSelect={() => go("/projects")}>
                    Work <Hint>/projects</Hint>
                  </Command.Item>
                  <Command.Item value="now" keywords={["status", "focus"]} onSelect={() => go("/now")}>
                    Now <Hint>/now</Hint>
                  </Command.Item>
                  <Command.Item value="about" keywords={["bio", "fencing"]} onSelect={() => go("/about")}>
                    About <Hint>/about</Hint>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Jump to">
                  {sections.map((s) => (
                    <Command.Item key={s.id} value={`jump ${s.label}`} onSelect={() => jump(s.id)}>
                      {s.label} <Hint>#{s.id}</Hint>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Contact">
                  <Command.Item value="copy email" keywords={["mail", "gmail"]} onSelect={copyEmail}>
                    <span className="flex items-center gap-2">
                      <HiOutlineMail size={14} className="text-[var(--color-text-muted)]" />
                      {copied ? "Copied!" : "Copy email"}
                    </span>
                    <Hint>{site.email}</Hint>
                  </Command.Item>
                  <Command.Item
                    value="github"
                    onSelect={() => {
                      close();
                      window.open(site.github, "_blank", "noopener,noreferrer");
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <FaGithub size={14} className="text-[var(--color-text-muted)]" />
                      GitHub
                    </span>
                    <Hint>{site.githubHandle}</Hint>
                  </Command.Item>
                  <Command.Item
                    value="linkedin"
                    onSelect={() => {
                      close();
                      window.open(site.linkedin, "_blank", "noopener,noreferrer");
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <FaLinkedin size={14} className="text-[var(--color-text-muted)]" />
                      LinkedIn
                    </span>
                    <Hint>{site.linkedinHandle}</Hint>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Easter eggs">
                  <Command.Item value="kaya ops dashboard" keywords={["magellan", "amber"]} onSelect={() => egg("kaya")}>
                    Kaya ops dashboard <Hint>K</Hint>
                  </Command.Item>
                  <Command.Item value="fencing" keywords={["epee", "ncaa", "ohio state"]} onSelect={() => egg("fencing")}>
                    En garde <Hint>F</Hint>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="flex items-center justify-between border-t border-[var(--color-border)] px-4 py-2.5">
                <div className="flex items-center gap-4 font-mono text-[10px] text-[var(--color-text-subtle)]">
                  <span>↑↓ navigate</span>
                  <span>↵ select</span>
                </div>
                <span className="font-mono text-[10px] text-[var(--color-text-subtle)]">
                  {"// cmdk"}
                </span>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
