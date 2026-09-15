"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Terminal } from "./Terminal";
import { openCommandPalette } from "./CommandPalette";
import { AnimatedGridPattern } from "./ui/AnimatedGridPattern";
import { Particles } from "./ui/Particles";
import { BlurFade } from "./ui/BlurFade";
import { WordReveal } from "./ui/WordReveal";
import { FlipWords } from "./ui/FlipWords";
import { NumberTicker } from "./ui/NumberTicker";
import { Magnetic } from "./ui/Magnetic";
import { EASE } from "@/app/lib/utils";
import { heroStats, site } from "@/app/data/site";

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
  const mouseX = useMotionValue(-2000);
  const mouseY = useMotionValue(-2000);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${mouseX}px ${mouseY}px, rgba(34,211,238,0.075), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="section-padding relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-32"
    >
      {/* ── Background layers ── */}
      <AnimatedGridPattern
        numSquares={34}
        maxOpacity={0.22}
        duration={3.2}
        width={48}
        height={48}
        className="fill-[#22d3ee]/10 stroke-white/[0.045] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
      />
      <Particles className="absolute inset-0" quantity={70} ease={80} staticity={40} color="#67e8f9" size={0.5} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.13),transparent)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[-12%] h-[460px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,250,0.10),transparent)] blur-3xl"
      />
      {!prefersReducedMotion && (
        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
      )}

      {/* ── Status HUD ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="container-main relative mb-10"
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-[var(--color-text-muted)]">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-green)] opacity-60 motion-safe:animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-green)] shadow-[0_0_8px_var(--color-accent-green)]" />
            </span>
            status: building
          </span>
          <span className="text-[var(--color-text-subtle)]">·</span>
          <span>OSU {site.gradYear}</span>
          <span className="text-[var(--color-text-subtle)]">·</span>
          <span>{site.location}</span>
          <span className="ml-auto hidden items-center gap-2 sm:inline-flex">
            <span className="text-[var(--color-text-subtle)]">local</span>
            <StatusClock />
          </span>
        </div>
        <div className="mt-3 h-px w-full bg-gradient-to-r from-[var(--color-border)] via-[var(--color-accent)]/25 to-transparent" />
      </motion.div>

      <div className="container-main relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ── Left: identity ── */}
          <div>
            <BlurFade inView={false} delay={0.05}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 px-3.5 py-1.5 font-mono text-[11px] text-[var(--color-text-muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-60 motion-safe:animate-pulse-ring" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                </span>
                {site.role} · {site.company}
              </span>
            </BlurFade>

            <h1 className="display mt-8 text-[clamp(2.75rem,6.4vw,4.75rem)] font-medium leading-[1.02] text-[var(--color-text)]">
              <WordReveal text="I build useful" delay={0.15} />{" "}
              <FlipWords words={["systems", "products", "dashboards", "data tools"]} duration={2800} />
              <br />
              <WordReveal text="with data, AI & product sense." delay={0.4} />
            </h1>

            <BlurFade inView={false} delay={0.55}>
              <p className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)]">
                Building AI-native operational tooling for construction and supply chain at Kaya AI.
                Previously: aviation analytics at NetJets, industrial ML at Rockwell Automation. NCAA
                Division I fencer at Ohio State.
              </p>
            </BlurFade>

            <BlurFade inView={false} delay={0.65}>
              <div className="mt-8 flex flex-wrap gap-3">
                {heroStats.map((s, i) => (
                  <div
                    key={s.label}
                    className="card-surface rounded-xl px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-[var(--color-border-hover)]"
                  >
                    <span className="font-mono text-lg text-[var(--color-text)]">
                      <NumberTicker value={s.value} delay={0.6 + i * 0.12} />
                    </span>
                    <span className="ml-2 text-[11px] text-[var(--color-text-muted)]">{s.label}</span>
                  </div>
                ))}
              </div>
            </BlurFade>

            <BlurFade inView={false} delay={0.75}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Link
                    href="/projects"
                    className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
                  >
                    View work
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <button
                    onClick={openCommandPalette}
                    className="btn-secondary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                  >
                    <span className="font-mono text-xs text-[var(--color-text-subtle)]">⌘K</span>
                    Quick nav
                  </button>
                </Magnetic>
              </div>
            </BlurFade>

            <BlurFade inView={false} delay={0.85}>
              <div className="mt-9 flex flex-wrap items-center gap-5 border-t border-[var(--color-border)] pt-7">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
                >
                  <FaGithub size={15} />
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
                >
                  <FaLinkedin size={15} />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
                >
                  <HiOutlineMail size={16} />
                  Email
                </a>
              </div>
            </BlurFade>
          </div>

          {/* ── Right: interactive terminal ── */}
          <motion.div
            initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
            transition={{ duration: 0.85, delay: 0.35, ease: EASE }}
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
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden="true"
      >
        <motion.div
          className="h-10 w-px bg-gradient-to-b from-[var(--color-accent)]/50 to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-text-subtle)]">
          scroll
        </span>
      </motion.div>
    </section>
  );
}
