import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/ui/PageHeader";
import { BlurFade } from "../components/ui/BlurFade";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { hexToRgba } from "../lib/utils";
import { nowItems, nowUpdated } from "../data/now";
import { accentHex } from "../data/principles";

export const metadata: Metadata = {
  title: "Now",
  description: "What Advaith is focused on right now.",
};

export default function Now() {
  return (
    <>
      <main className="container-main section-padding relative pb-0 pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-0 h-[420px] w-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.09),transparent)] blur-3xl"
        />
        <PageHeader
          label="// status"
          title="Now"
          description={`What I'm focused on right now. Updated ${nowUpdated}.`}
          meta={
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 px-3 py-1.5 font-mono text-[11px] text-[var(--color-text-muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-green)] opacity-60 motion-safe:animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-green)] shadow-[0_0_8px_var(--color-accent-green)]" />
              </span>
              status: building
            </span>
          }
        />

        <div className="grid max-w-5xl gap-4 lg:grid-cols-3">
          {nowItems.map((section, si) => {
            const c = accentHex[section.accent];
            return (
              <BlurFade key={section.label} delay={si * 0.08} className="h-full">
                <SpotlightCard glow={hexToRgba(c, 0.12)} className="h-full p-6 md:p-7">
                  <div className="mb-5 flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full" style={{ background: c, boxShadow: `0 0 8px ${c}` }} />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
                      {section.label}
                    </h2>
                    <span className="ml-auto font-mono text-[10px] text-[var(--color-text-subtle)]">
                      {String(section.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="space-y-3.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        <span className="mt-0.5 shrink-0 font-mono" style={{ color: c }}>
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </BlurFade>
            );
          })}
        </div>

        <BlurFade delay={0.3}>
          <section className="mt-12 max-w-5xl border-t border-[var(--color-border)] pt-8">
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
        </BlurFade>
      </main>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}
