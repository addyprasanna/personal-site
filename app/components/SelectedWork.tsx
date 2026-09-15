"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { BlurFade } from "./ui/BlurFade";
import { SpotlightCard } from "./ui/SpotlightCard";
import { TiltCard } from "./ui/TiltCard";
import { Tag } from "./ui/Tag";
import { cn, EASE } from "@/app/lib/utils";
import { selectedWork } from "@/app/data/projects";

export function SelectedWork() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toggle = (title: string) => setExpandedId((v) => (v === title ? null : title));

  return (
    <section className="section-padding relative border-t border-[var(--color-border)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,250,0.07),transparent)] blur-3xl"
      />
      <div className="container-main relative">
        <SectionHeader
          id="work"
          label="// selected work"
          title="Projects"
          action={
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
              all work
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {selectedWork.map((p, i) => {
            const expanded = expandedId === p.title;
            const isFeatured = p.featured;

            return (
              <BlurFade key={p.title} delay={i * 0.06} className={isFeatured ? "md:col-span-2" : ""}>
                <TiltCard max={isFeatured ? 2.5 : 4} className="h-full">
                  <SpotlightCard
                    as="article"
                    onClick={() => toggle(p.title)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(p.title);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={expanded}
                    className={cn(
                      "h-full cursor-pointer p-6 transition-colors",
                      expanded && "border-[var(--color-border-hover)]",
                      isFeatured && "md:p-8",
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-md border border-[var(--color-border)] bg-[rgba(255,255,255,0.03)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                            {p.category}
                          </span>
                          <span className="font-mono text-[10px] text-[var(--color-text-subtle)]">{p.year}</span>
                          {isFeatured && (
                            <span className="rounded-md border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/[0.06] px-2 py-0.5 font-mono text-[10px] text-[var(--color-accent)]">
                              featured
                            </span>
                          )}
                        </div>
                        <h3 className={cn("display font-medium leading-snug text-[var(--color-text)]", isFeatured ? "text-2xl" : "text-lg")}>
                          {p.title}
                        </h3>
                        <p className="mt-1 text-xs text-[var(--color-text-muted)]">{p.org}</p>
                      </div>

                      <motion.span
                        animate={{ rotate: expanded ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] font-mono text-xs text-[var(--color-text-subtle)]"
                        aria-hidden="true"
                      >
                        ↓
                      </motion.span>
                    </div>

                    <p className={cn("mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]", isFeatured && "max-w-3xl")}>
                      {p.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>

                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className={cn("mt-5 grid gap-5 border-t border-[var(--color-border)] pt-5", isFeatured && "md:grid-cols-2")}>
                            <div className="rounded-xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] p-4">
                              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)]">
                                {"// insight"}
                              </p>
                              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{p.insight}</p>
                            </div>
                            <div className="rounded-xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] p-4">
                              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent-violet)]">
                                {"// key decision"}
                              </p>
                              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{p.decision}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!expanded && (
                      <p className="mt-4 font-mono text-[10px] text-[var(--color-text-subtle)]">
                        click to expand →
                      </p>
                    )}
                  </SpotlightCard>
                </TiltCard>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
