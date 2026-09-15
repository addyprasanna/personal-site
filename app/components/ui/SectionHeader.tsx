"use client";

import { BlurFade } from "./BlurFade";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  id?: string;
}

export function SectionHeader({ label, title, description, action, id }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-12 flex scroll-mt-28 flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-14">
      <div>
        <BlurFade>
          <span className="section-label flex items-center gap-3">
            <span className="h-px w-6 bg-[var(--color-text-subtle)]" aria-hidden="true" />
            {label}
          </span>
        </BlurFade>
        <BlurFade delay={0.06}>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] text-[var(--color-text)]">
            {title}
          </h2>
        </BlurFade>
        {description && (
          <BlurFade delay={0.12}>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)]">
              {description}
            </p>
          </BlurFade>
        )}
      </div>
      {action && <BlurFade delay={0.1}>{action}</BlurFade>}
    </div>
  );
}
