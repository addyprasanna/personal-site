"use client";

import { BlurFade } from "./BlurFade";
import { WordReveal } from "./WordReveal";

export function PageHeader({
  label,
  title,
  description,
  meta,
}: {
  label: string;
  title: string;
  description?: string;
  meta?: React.ReactNode;
}) {
  return (
    <header className="relative mb-14 md:mb-16">
      <BlurFade inView={false}>
        <span className="section-label flex items-center gap-3">
          <span className="h-px w-6 bg-[var(--color-text-subtle)]" aria-hidden="true" />
          {label}
        </span>
      </BlurFade>
      <h1 className="display mt-5 text-[clamp(2.5rem,6vw,4.25rem)] font-medium leading-[1.02] text-[var(--color-text)]">
        <WordReveal text={title} delay={0.1} as="span" />
      </h1>
      {description && (
        <BlurFade inView={false} delay={0.25}>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)]">
            {description}
          </p>
        </BlurFade>
      )}
      {meta && (
        <BlurFade inView={false} delay={0.35}>
          <div className="mt-6">{meta}</div>
        </BlurFade>
      )}
    </header>
  );
}
