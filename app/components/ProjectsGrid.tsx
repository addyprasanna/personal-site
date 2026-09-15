"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { SpotlightCard } from "./ui/SpotlightCard";
import { TiltCard } from "./ui/TiltCard";
import { Tag } from "./ui/Tag";
import { cn, EASE } from "@/app/lib/utils";
import type { Project } from "@/app/data/projects";

type Filter = "All" | Project["context"];
const FILTERS: Filter[] = ["All", "Internship", "Course"];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.context === filter)),
    [filter, projects],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <LayoutGroup id="project-filter">
          {FILTERS.map((f) => {
            const count = f === "All" ? projects.length : projects.filter((p) => p.context === f).length;
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "relative rounded-full border px-4 py-1.5 font-mono text-[11px] transition-colors",
                  active
                    ? "border-[var(--color-accent)]/40 text-[var(--color-text)]"
                    : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-secondary)]",
                )}
                aria-pressed={active}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-[var(--color-accent)]/[0.08]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative">
                  {f} <span className="text-[var(--color-text-subtle)]">{String(count).padStart(2, "0")}</span>
                </span>
              </button>
            );
          })}
        </LayoutGroup>
      </div>

      <motion.div layout className="grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { delay: i * 0.05, duration: 0.45, ease: EASE } }}
              exit={{ opacity: 0, scale: 0.97, filter: "blur(6px)", transition: { duration: 0.2 } }}
            >
              <TiltCard max={3} className="h-full">
                <SpotlightCard as="article" className="h-full p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-[var(--color-border)] bg-[rgba(255,255,255,0.03)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                      {p.category}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--color-text-subtle)]">{p.year}</span>
                    <span
                      className={cn(
                        "rounded-md px-2 py-0.5 font-mono text-[10px]",
                        p.context === "Internship"
                          ? "border border-[var(--color-accent)]/20 text-[var(--color-accent)]/90"
                          : "border border-[var(--color-accent-violet)]/25 text-[var(--color-accent-violet)]/90",
                      )}
                    >
                      {p.context}
                    </span>
                  </div>

                  <h2 className="display text-xl font-medium leading-snug text-[var(--color-text)]">{p.title}</h2>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{p.subtitle}</p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">{p.org}</p>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">{p.description}</p>

                  {p.impact && (
                    <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent-green)]">
                        → impact
                      </p>
                      <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{p.impact}</p>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
