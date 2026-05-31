"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Terminal } from "./Terminal";
import { openCommandPalette } from "./CommandPalette";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const stats = [
  { value: "4", label: "D1 fencing seasons" },
  { value: "2", label: "B.S. degrees" },
  { value: "4", label: "domains shipped in" },
];

function StatusClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time || "--:--:--"}</span>;
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(34,211,238,0.07), transparent 72%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden section-padding pt-32 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlight }}
        />
      )}

      {/* Status HUD */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="container-main relative mb-10"
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-[var(--color-text-muted)]">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-green)] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-green)] shadow-[0_0_8px_var(--color-accent-green)]" />
            </span>
            status: building
          </span>
          <span className="text-[var(--color-text-subtle)]">·</span>
          <span>OSU &rsquo;26</span>
          <span className="text-[var(--color-text-subtle)]">·</span>
          <span>Columbus, OH</span>
          <span className="ml-auto hidden items-center gap-2 sm:inline-flex">
            <span className="text-[var(--color-text-subtle)]">local</span>
            <StatusClock />
          </span>
        </div>
        <div className="mt-3 h-px w-full bg-gradient-to-r from-[var(--color-border)] via-[var(--color-accent)]/20 to-transparent" />
      </motion.div>

      <div className="container-main relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — identity */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 px-3.5 py-1.5 font-mono text-[11px] text-[var(--color-text-muted)] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                </span>
                Product Engineer · Kaya AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease }}
              className="mt-8 text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-tight"
            >
              <span className="text-[var(--color-text)]">I build useful </span>
              <span className="gradient-text">systems</span>
              <br />
              <span className="text-[var(--color-text)]">
                with data, AI &amp; product sense.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease }}
              className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)]"
            >
              Building AI-native operational tooling for construction and supply
              chain at Kaya AI. Previously: aviation analytics at NetJets,
              industrial ML at Rockwell Automation. NCAA Division I fencer at
              Ohio State.
            </motion.p>

            {/* Real-stat signal strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 px-4 py-2.5 backdrop-blur-sm"
                >
                  <span className="font-mono text-lg text-[var(--color-text)]">
                    {s.value}
                  </span>
                  <span className="ml-2 text-[11px] text-[var(--color-text-muted)]">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[#060608] transition-all duration-200 hover:bg-[#67e8f9] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
              >
                View work
                <span aria-hidden="true">→</span>
              </Link>
              <button
                onClick={openCommandPalette}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-2.5 text-sm text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]"
              >
                <span className="font-mono text-xs text-[var(--color-text-subtle)]">
                  ⌘K
                </span>
                Quick nav
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.46 }}
              className="mt-9 flex flex-wrap items-center gap-5 border-t border-[var(--color-border)] pt-7"
            >
              <a
                href="https://github.com/addyprasanna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
              >
                <FaGithub size={15} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/advaith-prasanna/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
              >
                <FaLinkedin size={15} />
                LinkedIn
              </a>
              <a
                href="mailto:advaith.prasanna@gmail.com"
                className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
              >
                <HiOutlineMail size={16} />
                Email
              </a>
            </motion.div>
          </div>

          {/* Right — interactive terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          >
            <Terminal />
            <p className="mt-3 text-center font-mono text-[10px] text-[var(--color-text-subtle)]">
              ↑ this terminal is real — try{" "}
              <span className="text-[var(--color-text-muted)]">whoami</span>,{" "}
              <span className="text-[var(--color-text-muted)]">stack</span>, or{" "}
              <span className="text-[var(--color-text-muted)]">help</span>
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden="true"
      >
        <div className="h-10 w-px bg-gradient-to-b from-[var(--color-border-hover)] to-transparent" />
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-text-subtle)]">
          scroll
        </span>
      </motion.div>
    </section>
  );
}
