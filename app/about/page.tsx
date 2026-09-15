import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/ui/PageHeader";
import { BlurFade } from "../components/ui/BlurFade";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { education } from "../data/experience";
import { interests } from "../data/now";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product engineer building AI-native operational tooling at Kaya AI. NCAA Division I fencer at Ohio State.",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="section-label flex items-center gap-3">
      <span className="h-px w-6 bg-[var(--color-text-subtle)]" aria-hidden="true" />
      {children}
    </span>
  );
}

export default function About() {
  return (
    <>
      <main className="container-main section-padding relative pb-0 pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-0 h-[420px] w-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,250,0.09),transparent)] blur-3xl"
        />
        <PageHeader label="// about" title="Advaith Prasanna" />

        <div className="max-w-3xl space-y-14">
          <section className="space-y-5 text-[1.02rem] leading-relaxed text-[var(--color-text-secondary)]">
            <BlurFade inView={false} delay={0.25}>
              <p>
                I&apos;m a product engineer building AI-native operational tooling at{" "}
                <span className="text-[var(--color-text)]">Kaya AI</span> — currently focused on
                construction and supply chain. My work sits at the intersection of data systems,
                applied AI, and customer-facing product.
              </p>
            </BlurFade>
            <BlurFade inView={false} delay={0.35}>
              <p>
                What I find most interesting isn&apos;t any single technology — it&apos;s the
                challenge of translating chaotic operational reality into something a software
                system can reason about. Construction sites, manufacturing floors, and logistics
                networks are messy. The data is fragmented, the workflows are informal, and the
                people doing the work often don&apos;t have time to learn new tools. I like solving
                that.
              </p>
            </BlurFade>
            <BlurFade inView={false} delay={0.45}>
              <p>
                Before Kaya, I spent time in aviation analytics at NetJets, industrial ML at
                Rockwell Automation, and operational analytics at Ohio State Athletics. Each role
                gave me a different vantage point on how organizations actually use data — often
                imperfectly and always under real constraints.
              </p>
            </BlurFade>
          </section>

          <BlurFade>
            <section className="border-t border-[var(--color-border)] pt-12">
              <Label>{"// athletics"}</Label>
              <SpotlightCard className="relative mt-6 overflow-hidden p-6 md:p-8">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-6 select-none text-[9rem] leading-none opacity-[0.06]"
                >
                  ⚔
                </span>
                <div className="relative">
                  <h2 className="display text-2xl font-medium text-[var(--color-text)]">
                    NCAA Division I Fencing
                  </h2>
                  <p className="mt-1 font-mono text-[11px] text-[var(--color-accent)]/80">
                    Varsity Épée · The Ohio State University
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)]">
                    I fenced varsity for Ohio State — one of the country&apos;s top fencing programs.
                    Four years of Division I competition gave me something no class or project could:
                    experience operating under genuine pressure with immediate feedback. The habits of
                    training — consistent preparation, honest self-assessment, and learning from
                    failure without dwelling on it — carry directly into how I approach engineering.
                  </p>
                </div>
              </SpotlightCard>
            </section>
          </BlurFade>

          <section className="border-t border-[var(--color-border)] pt-12">
            <BlurFade>
              <Label>{"// interests"}</Label>
            </BlurFade>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {interests.map(({ label, detail }, i) => (
                <BlurFade key={label} delay={i * 0.05}>
                  <SpotlightCard className="h-full p-5">
                    <p className="mb-1.5 font-mono text-xs text-[var(--color-text)]">{label}</p>
                    <p className="text-[12px] leading-relaxed text-[var(--color-text-muted)]">{detail}</p>
                  </SpotlightCard>
                </BlurFade>
              ))}
            </div>
          </section>

          <section className="border-t border-[var(--color-border)] pt-12">
            <BlurFade>
              <Label>{"// education"}</Label>
            </BlurFade>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {education.map((e, i) => (
                <BlurFade key={e.degree} delay={i * 0.06}>
                  <SpotlightCard className="h-full p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                        <Image src="/block-o.svg" alt="The Ohio State University" width={40} height={40} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm leading-snug text-[var(--color-text)]">{e.degree}</p>
                        <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                          {e.school} · {e.period}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </BlurFade>
              ))}
            </div>
          </section>
        </div>
      </main>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}
