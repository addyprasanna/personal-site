import type { Accent } from "./principles";

export const nowUpdated = "May 2026";

export const nowItems: { label: string; items: string[]; accent: Accent }[] = [
  {
    label: "Building",
    items: [
      "Magellan — editable dashboarding system for construction operations",
      "Amber — AI analyst layer over enterprise operational data",
      "Customer deployment + onboarding pipelines at Kaya AI",
    ],
    accent: "cyan",
  },
  {
    label: "Thinking about",
    items: [
      "How operational AI systems earn trust with non-technical users",
      "The gap between what enterprises say they need and what they actually use",
      "Data model design for messy real-world workflows",
      "What forward-deployed engineering looks like at its best",
    ],
    accent: "warm",
  },
  {
    label: "Wrapping up",
    items: [
      "B.S. Computer Science & Engineering + B.S. Data Analytics at Ohio State",
      "NCAA Division I fencing — four years of varsity competition",
    ],
    accent: "green",
  },
];

export const interests = [
  {
    label: "AI systems",
    detail:
      "How LLMs integrate into production operational workflows — not demos, real deployments",
  },
  {
    label: "Operational intelligence",
    detail: "Turning messy real-world operations into structured, queryable data",
  },
  {
    label: "Data infrastructure",
    detail: "The pipes and models that make reliable data products possible",
  },
  {
    label: "Human-centered software",
    detail: "Tools built for people who don't have time to learn tools",
  },
  {
    label: "Supply chain + logistics",
    detail: "Physical world complexity at scale, ripe for better software",
  },
  {
    label: "Forward deployment",
    detail: "Engineering that lives at the boundary between product and customer",
  },
];
