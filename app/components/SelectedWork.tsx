"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeader } from "./ui/SectionHeader";
import { Tag } from "./ui/Tag";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

type Project = {
  title: string;
  org: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  insight: string;
  decision: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Snowflake Audit Dashboard",
    org: "NetJets",
    year: "2024",
    category: "Data Infrastructure",
    description:
      "Surfaced data debt, query patterns, and never-queried assets across the entire Snowflake estate at one of the world's largest private aviation companies. Daily-refresh system — direct compute cost savings.",
    tags: ["Snowflake", "SQL", "Python", "Tableau"],
    insight:
      "The estate had 400+ tables. Nobody knew which ones were actually used. Reverse-engineering usage from query logs was the right call — the org had no documentation worth trusting.",
    decision:
      "Built the refresh pipeline in Python over Snowflake's information_schema rather than pure SQL — edge cases in nested CTEs across the full schema wouldn't compose cleanly.",
    featured: true,
  },
  {
    title: "Manufacturing ML Feature Pipeline",
    org: "Kalypso × Rockwell Automation",
    year: "2025",
    category: "Applied ML",
    description:
      "Designed a feature engineering pipeline supporting real-time model decisions in production manufacturing. Built to operate within the constraints of actual industrial automation — not a toy dataset.",
    tags: ["Python", "Feature engineering", "ML evaluation", "Industrial"],
    insight:
      "Real-time ML in manufacturing means your features have to arrive before the decision window closes — often under 100ms. Feature engineering here is a latency problem as much as an accuracy problem.",
    decision:
      "Used windowed time-based aggregations rather than point-in-time joins for the feature store. The right tradeoff given sensor update frequency and the cost of a stale feature.",
  },
  {
    title: "Ticket Traffic Dashboard",
    org: "Ohio State Athletics",
    year: "2023",
    category: "Analytics",
    description:
      "Operational dashboarding for Division I athletics ticketing. Translated raw event and sales data into demand signals stakeholders could actually act on. First analytics tool for a non-technical team.",
    tags: ["SQL", "Analytics", "Stakeholder design"],
    insight:
      "The team had been copy-pasting numbers into Excel for years. The first tool a non-technical team uses shapes their mental model of what data can do. Designed for action, not analysis.",
    decision:
      "Prioritized real-time ticket availability over historical trends in v1. Stakeholders needed to react to demand spikes, not run retrospective reports.",
  },
  {
    title: "Schedule Optimization Model",
    org: "Systems Modeling",
    year: "2024",
    category: "Operations Research",
    description:
      "Formulated and solved an NFL schedule optimization problem with realistic constraints — travel distance, rest days, primetime slot allocation. Analyzed tradeoffs influencing win probability.",
    tags: ["Gurobi", "Optimization", "Python", "Modeling"],
    insight:
      "Encoding the problem took 3x longer than solving it. The NFL has 200+ scheduling constraints — some in the CBA, some informal team preferences. Formalizing informal knowledge is the hard part of operations research.",
    decision:
      "Used a weighted objective function with calibrated weights rather than pure win-maximization, because maximizing wins ignores fan experience and revenue constraints that teams actually optimize for.",
  },
];

export function SelectedWork() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (title: string) =>
    setExpandedId((v) => (v === title ? null : title));

  return (
    <section className="section-padding border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader
          label="// selected work"
          title="Projects"
          action={
            <Link
              href="/projects"
              className="font-mono text-xs text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
              all work →
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((p, i) => {
            const expanded = expandedId === p.title;
            const isFeatured = p.featured;

            return (
              <FadeIn
                key={p.title}
                delay={i * 0.06}
                className={isFeatured ? "md:col-span-2" : ""}
              >
                <motion.article
                  layout
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
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease }}
                  className={`card-interactive glass glass-hover h-full rounded-2xl p-6 ${
                    expanded
                      ? "border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)]"
                      : ""
                  } ${isFeatured ? "md:p-8" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-[var(--color-bg-elevated)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)]">
                          {p.category}
                        </span>
                        <span className="font-mono text-[10px] text-[var(--color-text-subtle)]">
                          {p.year}
                        </span>
                        {isFeatured && (
                          <span className="rounded-md border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-2 py-0.5 font-mono text-[10px] text-[var(--color-accent)]">
                            featured
                          </span>
                        )}
                      </div>
                      <h3
                        className={`font-medium leading-snug text-[var(--color-text)] ${isFeatured ? "text-lg" : "text-base"}`}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                        {p.org}
                      </p>
                    </div>

                    <motion.span
                      animate={{ rotate: expanded ? 180 : 0 }}
                      transition={{ duration: 0.22, ease }}
                      className="mt-0.5 shrink-0 font-mono text-xs text-[var(--color-text-subtle)]"
                      aria-hidden="true"
                    >
                      ↓
                    </motion.span>
                  </div>

                  <p
                    className={`mt-4 leading-relaxed text-[var(--color-text-secondary)] ${isFeatured ? "text-sm max-w-3xl" : "text-sm"}`}
                  >
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
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 space-y-4 border-t border-[var(--color-border)] pt-5">
                          <div>
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)]">
                              {"// insight"}
                            </p>
                            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                              {p.insight}
                            </p>
                          </div>
                          <div>
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)]">
                              {"// key decision"}
                            </p>
                            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                              {p.decision}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!expanded && (
                    <p className="mt-3 font-mono text-[10px] text-[var(--color-text-subtle)]">
                      click to expand →
                    </p>
                  )}
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
