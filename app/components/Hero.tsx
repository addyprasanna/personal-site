"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { openCommandPalette } from "./CommandPalette";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pb-16 pt-28">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #1c1c1c 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 0%, transparent 100%)",
        }}
      />

      {/* Animated glow — breathes subtly */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(34,211,238,0.04) 0%, transparent 100%)",
            "radial-gradient(ellipse 65% 45% at 52% 28%, rgba(34,211,238,0.055) 0%, transparent 100%)",
            "radial-gradient(ellipse 58% 38% at 48% 32%, rgba(34,211,238,0.035) 0%, transparent 100%)",
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(34,211,238,0.04) 0%, transparent 100%)",
          ],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-full max-w-3xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-[#444] tracking-widest uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_6px_#22d3ee]" />
            Advaith Prasanna — Product Engineer, Kaya AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease }}
          className="mt-7 text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.08] tracking-tight"
        >
          <span className="text-[#e2e2e2]">I build systems</span>
          <br />
          <span className="text-[#e2e2e2]">that bring </span>
          <span className="text-[#444]">clarity</span>
          <br />
          <span className="text-[#e2e2e2]">to complex operations.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease }}
          className="mt-8 max-w-md text-[#666] leading-relaxed text-[0.95rem]"
        >
          Building AI-native operational tooling for construction and supply
          chain at Kaya AI. Previously: aviation analytics at NetJets, industrial
          ML at Rockwell Automation. NCAA Division I fencer at Ohio State.
        </motion.p>

        {/* Social + ⌘K hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="https://github.com/addyprasanna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#444] hover:text-[#e2e2e2] transition-colors duration-200"
          >
            <FaGithub size={15} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/advaith-prasanna/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#444] hover:text-[#e2e2e2] transition-colors duration-200"
          >
            <FaLinkedin size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:advaith.prasanna@gmail.com"
            className="flex items-center gap-2 text-sm text-[#444] hover:text-[#e2e2e2] transition-colors duration-200"
          >
            <HiOutlineMail size={16} />
            <span>Email</span>
          </a>

          {/* Command palette hint */}
          <button
            onClick={openCommandPalette}
            className="ml-auto flex items-center gap-1.5 rounded-md border border-[#1a1a1a] bg-[#0d0d0d] px-2.5 py-1 font-mono text-[11px] text-[#333] hover:border-[#2a2a2a] hover:text-[#666] transition-all duration-200"
            aria-label="Open command palette"
          >
            <span>⌘K</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="h-8 w-px bg-gradient-to-b from-[#2a2a2a] to-transparent" />
        <span className="font-mono text-[9px] text-[#2a2a2a] tracking-[0.25em] uppercase">
          scroll
        </span>
      </motion.div>
    </section>
  );
}
