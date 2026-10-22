export type Highlight = {
  title: string;
  org: string;
  body: string;
  tags: string[];
};

export const highlights: Highlight[] = [
  {
    title: "Customer-owned inventory product",
    org: "Kaya AI",
    body:
      "A yard operator was tracking material across six laydown yards with spreadsheets and manual counts. I built the MVP myself, ran discovery with the wider customer team, wrote the PRD, and led two engineers to production. It's now rolling out to a second six-yard site.",
    tags: ["Product ownership", "TypeScript", "Postgres"],
  },
  {
    title: "Dashboards and an AI analyst for construction ops",
    org: "Kaya AI",
    body:
      "Dashboards plus a natural-language-to-SQL analyst over construction operations data. I also own 10+ pilots across 8 enterprise accounts end to end, from onboarding through production.",
    tags: ["NL→SQL", "React", "Postgres"],
  },
  {
    title: "Snowflake audit dashboard",
    org: "NetJets",
    body:
      "Surfaced never-queried tables and query patterns across the whole Snowflake estate, so the data team could finally see what was actually used and cut compute spend.",
    tags: ["Snowflake", "SQL", "Python"],
  },
  {
    title: "Real-time anomaly detection on factory sensors",
    org: "Kalypso",
    body:
      "Real-time anomaly detection on manufacturing sensor data for a Fortune 50 automaker, built on Kafka and ML models.",
    tags: ["Kafka", "Python", "ML"],
  },
];

export const smallerThings: { title: string; body: string }[] = [
  { title: "Fin-OS", body: "personal finance app with ML forecasting." },
  { title: "NFL schedule optimization", body: "Gurobi model with travel, rest-day, and primetime constraints." },
  { title: "OSU Athletics ticket dashboard", body: "first analytics tool for the ticketing team." },
];

export const tools = "Python, SQL, TypeScript/React/Next.js, Postgres, Snowflake, AWS, and PyTorch";
