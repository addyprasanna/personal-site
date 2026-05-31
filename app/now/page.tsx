import { Footer } from "../components/Footer";

const nowItems = [
  {
    label: "Building",
    items: [
      "Magellan — editable dashboarding system for construction operations",
      "Amber — AI analyst layer over enterprise operational data",
      "Customer deployment + onboarding pipelines at Kaya AI",
    ],
    accent: "cyan" as const,
  },
  {
    label: "Thinking about",
    items: [
      "How operational AI systems earn trust with non-technical users",
      "The gap between what enterprises say they need and what they actually use",
      "Data model design for messy real-world workflows",
      "What forward-deployed engineering looks like at its best",
    ],
    accent: "warm" as const,
  },
  {
    label: "Wrapping up",
    items: [
      "B.S. Computer Science & Engineering + B.S. Data Analytics at Ohio State",
      "NCAA Division I fencing — four years of varsity competition",
    ],
    accent: "green" as const,
  },
];

const accentDot = {
  cyan: "bg-[var(--color-accent)]",
  warm: "bg-[var(--color-accent-warm)]",
  green: "bg-[var(--color-accent-green)]",
};

export default function Now() {
  return (
    <>
      <main className="container-main section-padding pb-0 pt-28">
        <header className="mb-14">
          <span className="section-label">{"// status"}</span>
          <h1 className="mt-4 text-3xl font-light tracking-tight text-[var(--color-text)] md:text-4xl">
            Now
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
            What I&apos;m focused on right now. Updated May 2026.
          </p>
        </header>

        <div className="max-w-3xl space-y-8">
          {nowItems.map((section) => (
            <section
              key={section.label}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${accentDot[section.accent]}`}
                />
                <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
                  {section.label}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]"
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-[var(--color-text-subtle)]">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="border-t border-[var(--color-border)] pt-8">
            <p className="font-mono text-xs text-[var(--color-text-subtle)]">
              Inspired by{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                nownownow.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
