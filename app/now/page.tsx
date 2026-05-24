import { Footer } from "../components/Footer";

const nowItems = [
  {
    label: "Building",
    items: [
      "Magellan — editable dashboarding system for construction operations",
      "Amber — AI analyst layer over enterprise operational data",
      "Customer deployment + onboarding pipelines at Kaya AI",
    ],
  },
  {
    label: "Thinking about",
    items: [
      "How operational AI systems earn trust with non-technical users",
      "The gap between what enterprises say they need and what they actually use",
      "Data model design for messy real-world workflows",
      "What forward-deployed engineering looks like at its best",
    ],
  },
  {
    label: "Wrapping up",
    items: [
      "B.S. Computer Science & Engineering + B.S. Data Analytics at Ohio State",
      "NCAA Division I fencing — four years of varsity competition",
    ],
  },
];

export default function Now() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 pb-0 pt-28">
        <header className="mb-14">
          <span className="font-mono text-[11px] text-[#444] tracking-widest uppercase">
            // status
          </span>
          <h1 className="mt-4 text-3xl font-light tracking-tight text-[#e2e2e2]">
            Now
          </h1>
          <p className="mt-3 text-sm text-[#555] leading-relaxed max-w-md">
            What I&apos;m focused on right now. Updated May 2026.
          </p>
        </header>

        <div className="space-y-12 max-w-2xl">
          {nowItems.map((section) => (
            <section key={section.label} className="border-t border-[#111] pt-10 first:border-t-0 first:pt-0">
              <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-5">
                {section.label}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#666] leading-relaxed">
                    <span className="text-[#2a2a2a] font-mono mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="border-t border-[#111] pt-10">
            <p className="text-xs text-[#333] font-mono">
              Inspired by{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#444] hover:text-[#888] transition-colors"
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
