"use client";

import { FadeIn } from "./FadeIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  label,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <FadeIn>
        <div>
          <span className="section-label">{label}</span>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-[var(--color-text)] md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {description}
            </p>
          )}
        </div>
      </FadeIn>
      {action && <FadeIn delay={0.05}>{action}</FadeIn>}
    </div>
  );
}
