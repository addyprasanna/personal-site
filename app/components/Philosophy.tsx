"use client";

import { FadeIn } from "./ui/FadeIn";

const principles = [
  {
    n: "01",
    title: "Systems over features",
    body: "A great feature built on a broken system is technical debt with a UI. I design for the whole — data models, state, API contracts, and UX together — because abstractions that don't compose eventually collapse.",
  },
  {
    n: "02",
    title: "Clarity is the product",
    body: "My job isn't to build software. It's to make complex operations legible. If a stakeholder can't act on what I shipped, something failed upstream — in the design, the framing, or the data model.",
  },
  {
    n: "03",
    title: "Customer proximity compounds",
    body: "The engineers who talk to customers write better code. I stay close to the problem by staying close to the people who have it. A single conversation often surfaces what months of spec work misses.",
  },
  {
    n: "04",
    title: "Ship early, stay curious",
    body: "Working software in front of real users beats perfect software in a PR. Feedback is the spec. Speed is a feature. But you only earn the right to iterate fast by being honest about what you don't know.",
  },
];

export function Philosophy() {
  return (
    <section className="px-6 py-28 border-t border-[#111]">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="font-mono text-[11px] text-[#444] tracking-widest uppercase">
            // how I think
          </span>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-[#e2e2e2]">
            Technical philosophy
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-px">
          {principles.map((p, i) => (
            <FadeIn key={p.n} delay={i * 0.07}>
              <div className="group flex gap-8 py-7 border-t border-[#111] hover:border-[#1a1a1a] transition-colors duration-300 first:border-t-0">
                <span className="font-mono text-[11px] text-[#2a2a2a] pt-0.5 shrink-0 w-6">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-medium text-[#c8c8c8] leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#555] leading-relaxed max-w-xl">
                    {p.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
