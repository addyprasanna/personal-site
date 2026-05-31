"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiBitbucket,
  SiC,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiJupyter,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiOpenjdk,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiR,
  SiReact,
  SiRubyonrails,
  SiScikitlearn,
  SiSnowflake,
  SiSpring,
  SiTableau,
  SiTypescript,
  SiWireshark,
} from "react-icons/si";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeader } from "./ui/SectionHeader";

type Tool = { name: string; icon?: IconType; color?: string };

type Category = {
  id: string;
  label: string;
  accent: string;
  span?: boolean;
  tools: Tool[];
};

const categories: Category[] = [
  {
    id: "languages",
    label: "Languages",
    accent: "#22d3ee",
    tools: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: SiOpenjdk, color: "#E76F00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "SQL" },
      { name: "R", icon: SiR, color: "#276DC3" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "XML" },
    ],
  },
  {
    id: "data-ml",
    label: "Data / ML / AI",
    accent: "#f59e0b",
    span: true,
    tools: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "pandas", icon: SiPandas, color: "#D9D9F3" },
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "JupyterLab", icon: SiJupyter, color: "#F37626" },
      { name: "Tableau", icon: SiTableau, color: "#E97627" },
      { name: "JAGS" },
      { name: "rjags" },
      { name: "Snowpark" },
      { name: "Statistical modeling" },
      { name: "Machine learning" },
      { name: "Neural networks" },
      { name: "Transformers" },
      { name: "LSTMs" },
      { name: "Logistic regression" },
      { name: "PCA" },
      { name: "Bayesian modeling" },
    ],
  },
  {
    id: "web",
    label: "Web / App Development",
    accent: "#67e8f9",
    tools: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Rails", icon: SiRubyonrails, color: "#D30001" },
      { name: "Spring", icon: SiSpring, color: "#6DB33F" },
      { name: "Java Servlets" },
      { name: "JSP" },
      { name: "JSTL" },
      { name: "MVC" },
      { name: "REST APIs" },
      { name: "Ajax" },
    ],
  },
  {
    id: "databases",
    label: "Databases / Data Engineering",
    accent: "#22c55e",
    tools: [
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQL databases" },
      { name: "Data warehousing" },
      { name: "ETL pipelines" },
      { name: "Data modeling" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud / DevOps",
    accent: "#a78bfa",
    tools: [
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    ],
  },
  {
    id: "bi",
    label: "Analytics / BI",
    accent: "#f59e0b",
    tools: [
      { name: "Tableau", icon: SiTableau, color: "#E97627" },
      { name: "Dashboards" },
      { name: "Data visualization" },
      { name: "Audit dashboards" },
      { name: "Trend analysis" },
      { name: "Reporting" },
    ],
  },
  {
    id: "other",
    label: "Systems / Security",
    accent: "#22d3ee",
    span: true,
    tools: [
      { name: "Linux / Unix CLI", icon: SiLinux, color: "#FCC624" },
      { name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
      { name: "Networking" },
      { name: "HTTP" },
      { name: "DNS" },
      { name: "SSL / security basics" },
      { name: "SQL injection awareness" },
      { name: "Cross-site scripting awareness" },
    ],
  },
];

function ToolChip({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <span className="group/chip inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-xs text-[var(--color-text-secondary)] transition-colors duration-200 hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]">
      {Icon ? (
        <span
          className="transition-transform duration-200 group-hover/chip:scale-110"
          style={{ color: tool.color }}
        >
          <Icon className="h-4 w-4" />
        </span>
      ) : (
        <span
          className="h-1.5 w-1.5 rounded-full bg-[var(--color-text-subtle)]"
          aria-hidden="true"
        />
      )}
      {tool.name}
    </span>
  );
}

export function TechStack() {
  return (
    <section className="section-padding border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader
          label="// stack"
          title="Technical toolkit"
          description="Tools, languages, and concepts I've worked with across roles, coursework, and projects — grouped by where they live. Familiarity ranges from daily drivers to tools used on specific projects."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <FadeIn
              key={cat.id}
              delay={i * 0.05}
              className={cat.span ? "sm:col-span-2" : ""}
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="glass glass-hover h-full rounded-2xl p-6"
              >
                <div className="mb-5 flex items-center gap-2.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: cat.accent,
                      boxShadow: `0 0 8px ${cat.accent}`,
                    }}
                  />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-secondary)]">
                    {cat.label}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-[var(--color-text-subtle)]">
                    {String(cat.tools.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <ToolChip key={tool.name} tool={tool} />
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
