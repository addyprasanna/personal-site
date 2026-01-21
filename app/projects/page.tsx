type Project = {
  title: string;
  subtitle: string;
  org: string; // company / class / org
  context: "Internship" | "Class Project";
  tags: string[];
  description: string;
  href?: string; // optional link later
};

const projects: Project[] = [
  {
    title: "Snowflake Usage Audit Dashboard",
    subtitle: "Data transparency + cost/usage visibility for analysts",
    org: "NetJets",
    context: "Internship",
    tags: ["Snowflake", "SQL", "Python", "Tableau"],
    description:
      "Built a daily-refresh audit system to surface table usage, never-queried assets, and query patterns so analysts could reduce data debt and improve transparency.",
  },
  {
    title: "Ticket Traffic Dashboard",
    subtitle: "Operational dashboarding for athletics ticketing",
    org: "Ohio State Department of Athletics",
    context: "Internship",
    tags: ["SQL", "Dashboarding", "Analytics", "Stakeholders"],
    description:
      "Created a ticket-traffic dashboard to track demand and performance trends, making it easier for non-technical stakeholders to monitor activity and act quickly.",
  },
  {
    title: "Manufacturing ML Feature Pipeline",
    subtitle: "Applied ML support for enterprise manufacturing workflows",
    org: "Kalypso (Rockwell Automation)",
    context: "Internship",
    tags: ["Python", "Feature Engineering", "ML", "Evaluation"],
    description:
      "Designed and implemented a feature engineering pipeline to support model development and evaluation for real operational decision-making in a manufacturing context.",
  },
  {
    title: "Dallas Cowboys Schedule Optimization",
    subtitle: "Optimization model to improve win probability under constraints",
    org: "Systems Modeling & Optimization (Coursework)",
    context: "Class Project",
    tags: ["Optimization", "Gurobi", "Python", "Modeling"],
    description:
      "Formulated and solved an optimization model (with realistic constraints) to generate an “optimal” schedule strategy and analyze tradeoffs that influence outcomes.",
  },
  {
    title: "Emotion Recognition",
    subtitle: "Computer vision model training + evaluation",
    org: "Neural Networks (Coursework)",
    context: "Class Project",
    tags: ["PyTorch", "CNNs", "Deep Learning", "Error Analysis"],
    description:
      "Trained and compared deep learning models for facial emotion recognition with clear metrics, error analysis, and practical tradeoffs around performance and complexity.",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 text-neutral-600 leading-relaxed">
          A small selection of things I’ve built. I care about problem framing,
          tradeoffs, and measurable impact—not just tools.
        </p>
      </header>

      <section className="mt-10 space-y-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  {p.title}
                </h2>
                <p className="mt-1 text-sm text-neutral-600">{p.subtitle}</p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Badge>{p.org}</Badge>
                  <Badge>{p.context}</Badge>
                </div>
              </div>

              {p.href ? (
                <a
                  href={p.href}
                  className="text-sm text-neutral-700 hover:text-neutral-900"
                >
                  View →
                </a>
              ) : (
                <span className="text-sm text-neutral-400">Writeup soon</span>
              )}
            </div>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
