import { Footer } from "../components/Footer";
import { Tag } from "../components/ui/Tag";

type Project = {
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

const projects: Project[] = [
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

export default function Projects() {
  return (
    <>
      <main className="container-main section-padding pb-0 pt-28">
        <header className="mb-14">
          <span className="section-label">{"// selected work"}</span>
          <h1 className="mt-4 text-3xl font-light tracking-tight text-[var(--color-text)] md:text-4xl">
            Projects
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
            A collection of work spanning data infrastructure, applied ML, and
            operational systems. I care about problem framing, tradeoffs under
            constraints, and measurable impact — not just tooling.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glass glass-hover h-full rounded-2xl p-6"
            >
              <div className="mb-1 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-[var(--color-bg-elevated)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-subtle)]">
                      {p.category}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--color-text-subtle)]">
                      {p.year}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--color-text-subtle)]">
                      · {p.context}
                    </span>
                  </div>
                  <h2 className="font-medium leading-snug text-[var(--color-text)]">
                    {p.title}
                  </h2>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                    {p.org}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {p.description}
              </p>

              {p.impact && (
                <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3">
                  <p className="mb-1 font-mono text-[11px] text-[var(--color-text-subtle)]">
                    → impact
                  </p>
                  <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {p.impact}
                  </p>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
