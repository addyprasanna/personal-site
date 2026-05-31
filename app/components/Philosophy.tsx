"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeader } from "./ui/SectionHeader";

const principles = [
  {
    n: "01",
    title: "Systems over features",
    body: "A great feature built on a broken system is technical debt with a UI. I design for the whole — data models, state, API contracts, and UX together — because abstractions that don't compose eventually collapse.",
    accent: "cyan" as const,
  },
  {
    n: "02",
    title: "Clarity is the product",
    body: "My job isn't to build software. It's to make complex operations legible. If a stakeholder can't act on what I shipped, something failed upstream — in the design, the framing, or the data model.",
    accent: "warm" as const,
  },
  {
    n: "03",
    title: "Customer proximity compounds",
    body: "The engineers who talk to customers write better code. I stay close to the problem by staying close to the people who have it. A single conversation often surfaces what months of spec work misses.",
    accent: "green" as const,
  },
  {
    n: "04",
    title: "Ship early, stay curious",
    body: "Working software in front of real users beats perfect software in a PR. Feedback is the spec. Speed is a feature. But you only earn the right to iterate fast by being honest about what you don't know.",
    accent: "cyan" as const,
  },
];

const accentStyles = {
  cyan: {
    dot: "bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]",
    num: "text-[var(--color-accent)]/40",
  },
  warm: {
    dot: "bg-[var(--color-accent-warm)] shadow-[0_0_8px_var(--color-accent-warm)]",
    num: "text-[var(--color-accent-warm)]/40",
  },
  green: {
    dot: "bg-[var(--color-accent-green)] shadow-[0_0_8px_var(--color-accent-green)]",
    num: "text-[var(--color-accent-green)]/40",
  },
};

export function Philosophy() {
  return (
    <section className="section-padding border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader
          label="// how I think"
          title="Technical philosophy"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {principles.map((p, i) => {
            const style = accentStyles[p.accent];
            return (
              <FadeIn key={p.n} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="glass glass-hover group h-full rounded-2xl p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                    />
                    <span
                      className={`font-mono text-[11px] ${style.num}`}
                    >
                      {p.n}
                    </span>
                  </div>
                  <h3 className="text-base font-medium leading-snug text-[var(--color-text)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {p.body}
                  </p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
