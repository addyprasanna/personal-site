import { Footer } from "../components/Footer";

export default function About() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 pb-0 pt-28">
        <header className="mb-14">
          <span className="font-mono text-[11px] text-[#444] tracking-widest uppercase">
            // about
          </span>
          <h1 className="mt-4 text-3xl font-light tracking-tight text-[#e2e2e2]">
            Advaith Prasanna
          </h1>
        </header>

        <div className="space-y-12 max-w-2xl">
          {/* Bio */}
          <section>
            <div className="space-y-4 text-sm text-[#666] leading-relaxed">
              <p>
                I&apos;m a product engineer building AI-native operational
                tooling at{" "}
                <span className="text-[#aaa]">Kaya AI</span> — currently
                focused on construction and supply chain. My work sits at the
                intersection of data systems, applied AI, and customer-facing
                product.
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

          {/* Athletics */}
          <section className="border-t border-[#111] pt-10">
            <span className="font-mono text-[11px] text-[#444] tracking-widest uppercase">
              // athletics
            </span>
            <h2 className="mt-4 text-lg font-medium text-[#d0d0d0]">
              NCAA Division I Fencing
            </h2>
            <p className="mt-3 text-sm text-[#555] leading-relaxed">
              I fenced varsity for Ohio State — one of the country&apos;s top
              fencing programs. Four years of Division I competition gave me
              something no class or project could: experience operating under
              genuine pressure with immediate feedback. The habits of training
              — consistent preparation, honest self-assessment, and learning
              from failure without dwelling on it — carry directly into how I
              approach engineering.
            </p>
          </section>

          {/* What I think about */}
          <section className="border-t border-[#111] pt-10">
            <span className="font-mono text-[11px] text-[#444] tracking-widest uppercase">
              // interests
            </span>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="rounded-lg border border-[#171717] bg-[#0d0d0d] p-4"
                >
                  <p className="text-xs font-mono text-[#888] mb-1.5">
                    {label}
                  </p>
                  <p className="text-[11px] text-[#444] leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="border-t border-[#111] pt-10">
            <span className="font-mono text-[11px] text-[#444] tracking-widest uppercase">
              // education
            </span>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-[#c0c0c0]">
                  B.S. Computer Science & Engineering — Artificial Intelligence
                </p>
                <p className="text-xs text-[#555] mt-1">
                  The Ohio State University · 2022–2026
                </p>
              </div>
              <div>
                <p className="text-sm text-[#c0c0c0]">
                  B.S. Data Analytics — Computational Analytics
                </p>
                <p className="text-xs text-[#555] mt-1">
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
