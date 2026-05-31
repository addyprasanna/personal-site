import { Footer } from "../components/Footer";

export default function About() {
  return (
    <>
      <main className="container-main section-padding pb-0 pt-28">
        <header className="mb-14">
          <span className="section-label">{"// about"}</span>
          <h1 className="mt-4 text-3xl font-light tracking-tight text-[var(--color-text)] md:text-4xl">
            Advaith Prasanna
          </h1>
        </header>

        <div className="max-w-3xl space-y-12">
          <section>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              <p>
                I&apos;m a product engineer building AI-native operational
                tooling at{" "}
                <span className="text-[var(--color-text)]">Kaya AI</span> —
                currently focused on construction and supply chain. My work sits
                at the intersection of data systems, applied AI, and
                customer-facing product.
              </p>
              <p>
                What I find most interesting isn&apos;t any single technology —
                it&apos;s the challenge of translating chaotic operational
                reality into something a software system can reason about.
                Construction sites, manufacturing floors, and logistics networks
                are messy. The data is fragmented, the workflows are informal,
                and the people doing the work often don&apos;t have time to
                learn new tools. I like solving that.
              </p>
              <p>
                Before Kaya, I spent time in aviation analytics at NetJets,
                industrial ML at Rockwell Automation, and operational analytics
                at Ohio State Athletics. Each role gave me a different vantage
                point on how organizations actually use data — often imperfectly
                and always under real constraints.
              </p>
            </div>
          </section>

          <section className="border-t border-[var(--color-border)] pt-10">
            <span className="section-label">{"// athletics"}</span>
            <h2 className="mt-4 text-lg font-medium text-[var(--color-text)]">
              NCAA Division I Fencing
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              I fenced varsity for Ohio State — one of the country&apos;s top
              fencing programs. Four years of Division I competition gave me
              something no class or project could: experience operating under
              genuine pressure with immediate feedback. The habits of training
              — consistent preparation, honest self-assessment, and learning
              from failure without dwelling on it — carry directly into how I
              approach engineering.
            </p>
          </section>

          <section className="border-t border-[var(--color-border)] pt-10">
            <span className="section-label">{"// interests"}</span>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  label: "AI systems",
                  detail:
                    "How LLMs integrate into production operational workflows — not demos, real deployments",
                },
                {
                  label: "Operational intelligence",
                  detail:
                    "Turning messy real-world operations into structured, queryable data",
                },
                {
                  label: "Data infrastructure",
                  detail:
                    "The pipes and models that make reliable data products possible",
                },
                {
                  label: "Human-centered software",
                  detail:
                    "Tools built for people who don't have time to learn tools",
                },
                {
                  label: "Supply chain + logistics",
                  detail:
                    "Physical world complexity at scale, ripe for better software",
                },
                {
                  label: "Forward deployment",
                  detail:
                    "Engineering that lives at the boundary between product and customer",
                },
              ].map(({ label, detail }) => (
                <div
                  key={label}
                  className="glass glass-hover rounded-2xl p-4"
                >
                  <p className="mb-1.5 font-mono text-xs text-[var(--color-text-secondary)]">
                    {label}
                  </p>
                  <p className="text-[11px] leading-relaxed text-[var(--color-text-muted)]">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-[var(--color-border)] pt-10">
            <span className="section-label">{"// education"}</span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
                <p className="text-sm text-[var(--color-text)]">
                  B.S. Computer Science & Engineering — Artificial Intelligence
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  The Ohio State University · 2022–2026
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
                <p className="text-sm text-[var(--color-text)]">
                  B.S. Data Analytics — Computational Analytics
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  The Ohio State University · 2022–2026
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
