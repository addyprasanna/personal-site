export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  logo: string | null;
  logoText: string;
  current: boolean;
  description: string;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
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

export const education = [
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
