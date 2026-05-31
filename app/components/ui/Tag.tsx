export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-muted)]">
      {children}
    </span>
  );
}
