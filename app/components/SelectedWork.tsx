"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

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
    <section className="px-6 py-28 border-t border-[#111]">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-end justify-between mb-10">
          <FadeIn>
            <div>
              <span className="font-mono text-[11px] text-[#444] tracking-widest uppercase">
                // selected work
              </span>
              <h2 className="mt-4 text-3xl font-light tracking-tight text-[#e2e2e2]">
                Projects
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Link
              href="/projects"
              className="text-xs text-[#444] hover:text-[#aaa] transition-colors duration-200 font-mono"
            >
              all work →
            </Link>
          </FadeIn>
        </div>

        <div className="space-y-3">
          {projects.map((p, i) => {
            const expanded = expandedId === p.title;
            return (
              <FadeIn key={p.title} delay={i * 0.06}>
                <motion.article
                  layout
                  onClick={() => toggle(p.title)}
                  className={`group rounded-xl border bg-[#0d0d0d] p-6 cursor-pointer transition-colors duration-300 ${
                    expanded
                      ? "border-[#262626] bg-[#0f0f0f]"
                      : "border-[#171717] hover:border-[#222]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[10px] text-[#333] tracking-widest uppercase">
                          {p.category}
                        </span>
                        <span className="text-[#2a2a2a]">·</span>
                        <span className="font-mono text-[10px] text-[#333]">
                          {p.year}
                        </span>
                      </div>
                      <h3 className="font-medium text-[#d8d8d8] leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#555] mt-0.5">{p.org}</p>
                    </div>

                    {/* Expand chevron */}
                    <motion.span
                      animate={{ rotate: expanded ? 180 : 0 }}
                      transition={{ duration: 0.22, ease }}
                      className="shrink-0 mt-0.5 font-mono text-xs text-[#2e2e2e] group-hover:text-[#444] transition-colors"
                    >
                      ↓
                    </motion.span>
                  </div>

                  <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded px-2 py-0.5 text-[11px] font-mono text-[#444] bg-[#111] border border-[#1c1c1c]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expanded content */}
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
                        <div className="mt-5 pt-5 border-t border-[#191919] space-y-4">
                          <div>
                            <p className="font-mono text-[10px] text-[#333] tracking-widest uppercase mb-2">
                              // insight
                            </p>
                            <p className="text-sm text-[#555] leading-relaxed">
                              {p.insight}
                            </p>
                          </div>
                          <div>
                            <p className="font-mono text-[10px] text-[#333] tracking-widest uppercase mb-2">
                              // key decision
                            </p>
                            <p className="text-sm text-[#4a4a4a] leading-relaxed">
                              {p.decision}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!expanded && (
                    <p className="mt-3 font-mono text-[10px] text-[#252525] group-hover:text-[#333] transition-colors duration-200">
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
