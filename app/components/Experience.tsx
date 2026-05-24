"use client";

import Image from "next/image";
import { FadeIn } from "./ui/FadeIn";

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
    <section className="px-6 py-28 border-t border-[#111]">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="font-mono text-[11px] text-[#444] tracking-widest uppercase">
            // background
          </span>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-[#e2e2e2]">
            Experience
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-px">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.org + exp.period} delay={i * 0.07}>
              <div className="group flex gap-5 py-8 border-t border-[#111] first:border-t-0">
                {/* Logo */}
                <div className="shrink-0 pt-0.5">
                  <div className="h-9 w-9 rounded-lg border border-[#1a1a1a] bg-[#0d0d0d] overflow-hidden flex items-center justify-center">
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={exp.org}
                        width={36}
                        height={36}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="font-mono text-[10px] text-[#444]">
                        {exp.logoText}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-[#d0d0d0] text-sm leading-snug">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#0d1f1f] border border-[#1a3333] px-2 py-0.5 text-[10px] font-mono text-[#22d3ee]">
                            <span className="h-1 w-1 rounded-full bg-[#22d3ee]" />
                            current
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#555] mt-0.5">{exp.org}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-[#333]">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-[#555] leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded px-2 py-0.5 text-[11px] font-mono text-[#3a3a3a] bg-[#0f0f0f] border border-[#191919]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education */}
        <FadeIn delay={0.1}>
          <div className="mt-16">
            <span className="font-mono text-[11px] text-[#444] tracking-widest uppercase">
              // education
            </span>
            <div className="mt-6 space-y-4">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="flex items-start justify-between gap-4 py-4 border-t border-[#111]"
                >
                  <div>
                    <p className="text-sm text-[#c0c0c0] leading-snug">
                      {e.degree}
                    </p>
                    <p className="text-xs text-[#555] mt-1">{e.school}</p>
                    {e.note && (
                      <p className="text-[11px] text-[#3a3a3a] font-mono mt-1">
                        {e.note}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 font-mono text-[11px] text-[#333]">
                    {e.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
