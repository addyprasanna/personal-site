"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeader } from "./ui/SectionHeader";
import { Tag } from "./ui/Tag";

const experiences = [
  {
    title: "Product Engineer",
    org: "Kaya AI",
    period: "2025 — Present",
    logo: null,
    logoText: "K",
    current: true,
    description:
      "Building AI-native operational tooling for construction and supply chain teams. Leading development of Magellan (dashboarding + operational intelligence) and Amber (AI analyst over enterprise data). Direct enterprise customer work — from onboarding to deployment.",
    highlights: [
      "AI dashboarding system (Magellan)",
      "AI analyst layer (Amber)",
      "Enterprise customer deployment",
      "Full-stack + data architecture",
    ],
  },
  {
    title: "Data Science Analyst Intern",
    org: "Kalypso × Rockwell Automation",
    period: "Summer 2025",
    logo: "/kalypso.jpeg",
    logoText: "KA",
    current: false,
    description:
      "Feature engineering pipeline supporting ML model development for real operational decision-making in manufacturing environments. Industrial automation at scale.",
    highlights: [
      "Manufacturing ML pipeline",
      "Feature engineering",
      "Model evaluation",
    ],
  },
  {
    title: "Data Analytics Intern",
    org: "NetJets",
    period: "Summer 2024",
    logo: "/netjets.jpeg",
    logoText: "NJ",
    current: false,
    description:
      "Snowflake audit dashboard and usage transparency system for one of the world's largest private aviation companies. Surfaced data debt and query patterns across the entire Snowflake estate.",
    highlights: [
      "Snowflake audit dashboard",
      "Aviation data infrastructure",
      "Cost + usage transparency",
    ],
  },
  {
    title: "Analytics Intern",
    org: "Ohio State Department of Athletics",
    period: "Summer 2023",
    logo: "/block-o.svg",
    logoText: "OS",
    current: false,
    description:
      "Ticket traffic dashboard and stakeholder reporting for Division I NCAA athletics. First analytics tooling for a non-technical operations team.",
    highlights: ["Ticket traffic dashboard", "Stakeholder reporting"],
  },
];

const education = [
  {
    degree: "B.S. Computer Science & Engineering — Artificial Intelligence",
    school: "The Ohio State University",
    period: "2022 — 2026",
    note: "NCAA Division I Varsity Fencer",
  },
  {
    degree: "B.S. Data Analytics — Computational Analytics",
    school: "The Ohio State University",
    period: "2022 — 2026",
    note: "",
  },
];

export function Experience() {
  return (
    <section className="section-padding border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader label="// background" title="Experience" />

        <div className="relative">
          <div className="timeline-line hidden sm:block" aria-hidden="true" />

          <div className="space-y-2">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.org + exp.period} delay={i * 0.07}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex gap-5 py-6 sm:pl-10"
                >
                  <div className="absolute left-0 top-8 hidden h-9 w-9 sm:flex sm:items-center sm:justify-center">
                    <span
                      className={`h-2.5 w-2.5 rounded-full border-2 border-[var(--color-bg)] ${
                        exp.current
                          ? "bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"
                          : "bg-[var(--color-border-hover)]"
                      }`}
                    />
                  </div>

                  <div className="shrink-0 pt-0.5 sm:hidden">
                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={exp.org}
                          width={36}
                          height={36}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="font-mono text-[10px] text-[var(--color-text-muted)]">
                          {exp.logoText}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="glass glass-hover min-w-0 flex-1 rounded-2xl p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="hidden h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] sm:flex sm:items-center sm:justify-center">
                          {exp.logo ? (
                            <Image
                              src={exp.logo}
                              alt={exp.org}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <span className="font-mono text-[10px] text-[var(--color-text-muted)]">
                              {exp.logoText}
                            </span>
                          )}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-medium leading-snug text-[var(--color-text)]">
                              {exp.title}
                            </h3>
                            {exp.current && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-2 py-0.5 font-mono text-[10px] text-[var(--color-accent)]">
                                <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                                current
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                            {exp.org}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 font-mono text-[11px] text-[var(--color-text-subtle)]">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.highlights.map((h) => (
                        <Tag key={h}>{h}</Tag>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-16">
            <span className="section-label">{"// education"}</span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5"
                >
                  <p className="text-sm leading-snug text-[var(--color-text)]">
                    {e.degree}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    {e.school}
                  </p>
                  {e.note && (
                    <p className="mt-2 font-mono text-[11px] text-[var(--color-text-subtle)]">
                      {e.note}
                    </p>
                  )}
                  <p className="mt-3 font-mono text-[11px] text-[var(--color-text-subtle)]">
                    {e.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
