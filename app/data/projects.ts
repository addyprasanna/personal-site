export type Project = {
  title: string;
  subtitle: string;
  org: string;
  context: "Internship" | "Course";
  year: string;
  category: string;
  tags: string[];
  description: string;
  impact?: string;
};

export const projects: Project[] = [
  {
    title: "AI Operational Platform",
    subtitle: "Magellan + Amber — dashboarding and AI analyst systems",
    org: "Kaya AI",
    context: "Internship",
    year: "2025",
    category: "AI Systems",
    tags: ["React", "TypeScript", "PostgreSQL", "LLMs", "RAG", "NL→SQL"],
    description:
      "Leading development of two interconnected systems: Magellan, a real-time editable dashboarding platform for construction and supply chain operations; and Amber, an AI analyst layer that enables natural language querying over enterprise operational data. Both systems are deployed with live enterprise customers.",
    impact:
      "Translating fragmented construction workflows into structured, queryable data products used by non-technical operators daily.",
  },
  {
    title: "Snowflake Usage Audit Dashboard",
    subtitle: "Data transparency and cost visibility at scale",
    org: "NetJets",
    context: "Internship",
    year: "2024",
    category: "Data Infrastructure",
    tags: ["Snowflake", "SQL", "Python", "Tableau"],
    description:
      "Built a daily-refresh audit system to surface table usage patterns, never-queried assets, and compute costs across the entire Snowflake estate at one of the world's largest private aviation companies. Gave analysts and leadership real transparency into data health for the first time.",
    impact:
      "Identified significant compute waste from abandoned tables and unused queries. Enabled data team to prioritize cleanup and reduce Snowflake spend.",
  },
  {
    title: "Manufacturing ML Feature Pipeline",
    subtitle: "Applied ML for real-time industrial decision-making",
    org: "Kalypso × Rockwell Automation",
    context: "Internship",
    year: "2025",
    category: "Applied ML",
    tags: ["Python", "Feature Engineering", "Scikit-learn", "Industrial ML"],
    description:
      "Designed and implemented a feature engineering pipeline to support model development for real operational decision-making in a manufacturing environment. Built to operate within actual industrial automation constraints — not a sandbox dataset.",
    impact:
      "Pipeline supported model evaluation across multiple manufacturing use cases in Rockwell Automation's production environment.",
  },
  {
    title: "Ticket Traffic Dashboard",
    subtitle: "Operational dashboarding for Division I athletics ticketing",
    org: "Ohio State Department of Athletics",
    context: "Internship",
    year: "2023",
    category: "Analytics",
    tags: ["SQL", "Dashboarding", "Analytics", "Stakeholder design"],
    description:
      "Created a ticket-traffic dashboard to track demand trends and performance patterns across athletic events. Designed specifically for non-technical stakeholders who needed to monitor activity and make decisions without analyst support.",
    impact:
      "First dedicated analytics tool for the athletics ticketing operations team. Enabled self-serve monitoring and faster response to demand signals.",
  },
  {
    title: "NFL Schedule Optimization Model",
    subtitle: "Optimization under realistic operational constraints",
    org: "Systems Modeling & Optimization",
    context: "Course",
    year: "2024",
    category: "Operations Research",
    tags: ["Gurobi", "Linear Programming", "Python", "Constraint modeling"],
    description:
      "Formulated and solved a schedule optimization model for NFL game planning. Encoded real constraints — travel distance, rest days, primetime slot allocation, and divisional game balance — then analyzed the tradeoffs that influence projected win probability.",
    impact:
      "Demonstrated that naive scheduling leaves 8–12% win probability on the table relative to optimized schedules under the same constraints.",
  },
  {
    title: "Facial Emotion Recognition",
    subtitle: "Deep learning model training and error analysis",
    org: "Neural Networks — OSU CSE",
    context: "Course",
    year: "2024",
    category: "Deep Learning",
    tags: ["PyTorch", "CNNs", "Transfer learning", "Error analysis"],
    description:
      "Trained and compared CNN architectures for facial emotion recognition. The project focused on rigorous evaluation: confusion matrices, per-class error rates, and tradeoff analysis between model complexity and performance under compute constraints.",
    impact:
      "Established that transfer learning with lightweight fine-tuning outperformed from-scratch training by ~14% accuracy at fraction of the training cost.",
  },
];

// Home-page "selected work" — same projects, with the insight / decision layer.
export type SelectedProject = {
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

export const selectedWork: SelectedProject[] = [
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
