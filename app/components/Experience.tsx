"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { BlurFade } from "./ui/BlurFade";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Tag } from "./ui/Tag";
import { cn } from "@/app/lib/utils";
import { education, experiences, type ExperienceItem } from "@/app/data/experience";

function Logo({ exp, size = 40 }: { exp: ExperienceItem; size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
      style={{ width: size, height: size }}
    >
      {exp.logo ? (
        <Image src={exp.logo} alt={exp.org} width={size} height={size} className="h-full w-full object-cover" />
      ) : (
        <span className="font-mono text-[11px] text-[var(--color-accent)]">{exp.logoText}</span>
      )}
    </div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setHeight(el.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 70%", "end 60%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <section className="section-padding relative border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader id="experience" label="// background" title="Experience" />

        <div ref={containerRef} className="relative">
          {experiences.map((exp, i) => (
            <div
              key={exp.org + exp.period}
              className={cn("relative grid gap-5 md:grid-cols-[240px_1fr] md:gap-10", i < experiences.length - 1 ? "pb-12 md:pb-16" : "")}
            >
              {/* Left rail: dot + sticky label */}
              <div className="flex items-start gap-4 self-start md:sticky md:top-36">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]">
                  <span
                    className={cn(
                      "h-2.5 w-2.5 rounded-full",
                      exp.current
                        ? "bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]"
                        : "bg-[var(--color-border-hover)]",
                    )}
                  />
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full border border-[var(--color-accent)]/40 motion-safe:animate-pulse-ring" aria-hidden="true" />
                  )}
                </div>
                <div className="pt-1.5 md:pt-2">
                  <p className="font-mono text-[11px] tracking-wider text-[var(--color-text-muted)]">{exp.period}</p>
                  <p className="display mt-1 text-lg font-medium leading-snug text-[var(--color-text)] md:text-xl">{exp.org}</p>
                  {exp.current && (
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/[0.06] px-2 py-0.5 font-mono text-[10px] text-[var(--color-accent)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                      current
                    </span>
                  )}
                </div>
              </div>

              {/* Card */}
              <div>
                <BlurFade>
                  <SpotlightCard className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <Logo exp={exp} />
                      <div className="min-w-0">
                        <h3 className="text-base font-medium leading-snug text-[var(--color-text)]">{exp.title}</h3>
                        <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{exp.org}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.highlights.map((h) => (
                        <Tag key={h}>{h}</Tag>
                      ))}
                    </div>
                  </SpotlightCard>
                </BlurFade>
              </div>
            </div>
          ))}

          {/* Vertical line + scroll-driven beam */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--color-border)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_92%,transparent_100%)] md:block"
          >
            <motion.div
              style={{ height: lineHeight, opacity: lineOpacity }}
              className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-violet)] to-transparent shadow-[0_0_12px_var(--color-accent)]"
            />
          </div>
        </div>

        <BlurFade delay={0.1}>
          <div className="mt-20">
            <span className="section-label flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--color-text-subtle)]" aria-hidden="true" />
              {"// education"}
            </span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {education.map((e) => (
                <SpotlightCard key={e.degree} className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                      <Image src="/block-o.svg" alt="The Ohio State University" width={40} height={40} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm leading-snug text-[var(--color-text)]">{e.degree}</p>
                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">{e.school}</p>
                      {e.note && <p className="mt-2 font-mono text-[11px] text-[var(--color-accent)]/80">{e.note}</p>}
                      <p className="mt-3 font-mono text-[11px] text-[var(--color-text-subtle)]">{e.period}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
