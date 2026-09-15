import { cn } from "@/app/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-[var(--color-border)] bg-[rgba(255,255,255,0.025)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-secondary)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
