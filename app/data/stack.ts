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

export type Tool = { name: string; icon?: IconType; color?: string };

export type StackCategory = {
  id: string;
  label: string;
  accent: string;
  span?: boolean;
  tools: Tool[];
};

export const stackCategories: StackCategory[] = [
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

/** Every tool that has a brand icon, de-duplicated — used for the marquee strip. */
export const iconTools: Tool[] = (() => {
  const seen = new Set<string>();
  const out: Tool[] = [];
  for (const cat of stackCategories) {
    for (const t of cat.tools) {
      if (t.icon && !seen.has(t.name)) {
        seen.add(t.name);
        out.push(t);
      }
    }
  }
  return out;
})();
