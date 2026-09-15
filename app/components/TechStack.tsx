"use client";

import { SectionHeader } from "./ui/SectionHeader";
import { BlurFade } from "./ui/BlurFade";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Marquee } from "./ui/Marquee";
import { cn, hexToRgba } from "@/app/lib/utils";
import { iconTools, stackCategories, type Tool } from "@/app/data/stack";

function ToolChip({ tool, size = "sm" }: { tool: Tool; size?: "sm" | "md" }) {
  const Icon = tool.icon;
  return (
    <span
      className={cn(
        "group/chip inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]",
        size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm",
      )}
      style={{ ["--brand" as string]: tool.color ?? "#9a9aa6" }}
    >
      {Icon ? (
        <span
          className="transition-transform duration-200 group-hover/chip:scale-110 group-hover/chip:drop-shadow-[0_0_6px_var(--brand)]"
          style={{ color: tool.color }}
        >
          <Icon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
        </span>
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-text-subtle)]" aria-hidden="true" />
      )}
      {tool.name}
    </span>
  );
}

export function TechStack() {
  const half = Math.ceil(iconTools.length / 2);
  const rowA = iconTools.slice(0, half);
  const rowB = iconTools.slice(half);

  return (
    <section className="section-padding relative border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader
          id="stack"
          label="// stack"
          title="Technical toolkit"
          description="Tools, languages, and concepts I've worked with across roles, coursework, and projects — grouped by where they live. Familiarity ranges from daily drivers to tools used on specific projects."
        />
      </div>

      {/* Full-bleed marquee strip */}
      <BlurFade>
        <div className="relative mb-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee pauseOnHover className="[--duration:48s] [--gap:0.75rem]">
            {rowA.map((t) => (
              <ToolChip key={t.name} tool={t} size="md" />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:56s] [--gap:0.75rem]">
            {rowB.map((t) => (
              <ToolChip key={t.name} tool={t} size="md" />
            ))}
          </Marquee>
        </div>
      </BlurFade>

      <div className="container-main">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stackCategories.map((cat, i) => (
            <BlurFade key={cat.id} delay={i * 0.05} className={cat.span ? "sm:col-span-2" : ""}>
              <SpotlightCard glow={hexToRgba(cat.accent, 0.1)} className="h-full p-6">
                <div className="mb-5 flex items-center gap-2.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }}
                  />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-secondary)]">
                    {cat.label}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-[var(--color-text-subtle)]">
                    {String(cat.tools.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <ToolChip key={tool.name} tool={tool} />
                  ))}
                </div>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
