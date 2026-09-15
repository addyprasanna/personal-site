export type Accent = "cyan" | "warm" | "green" | "violet";

export const principles: {
  n: string;
  title: string;
  body: string;
  accent: Accent;
}[] = [
  {
    n: "01",
    title: "Systems over features",
    body: "A great feature built on a broken system is technical debt with a UI. I design for the whole — data models, state, API contracts, and UX together — because abstractions that don't compose eventually collapse.",
    accent: "cyan",
  },
  {
    n: "02",
    title: "Clarity is the product",
    body: "My job isn't to build software. It's to make complex operations legible. If a stakeholder can't act on what I shipped, something failed upstream — in the design, the framing, or the data model.",
    accent: "warm",
  },
  {
    n: "03",
    title: "Customer proximity compounds",
    body: "The engineers who talk to customers write better code. I stay close to the problem by staying close to the people who have it. A single conversation often surfaces what months of spec work misses.",
    accent: "green",
  },
  {
    n: "04",
    title: "Ship early, stay curious",
    body: "Working software in front of real users beats perfect software in a PR. Feedback is the spec. Speed is a feature. But you only earn the right to iterate fast by being honest about what you don't know.",
    accent: "violet",
  },
];

export const accentHex: Record<Accent, string> = {
  cyan: "#22d3ee",
  warm: "#f59e0b",
  green: "#22c55e",
  violet: "#a78bfa",
};
