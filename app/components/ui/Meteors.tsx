import { cn } from "@/app/lib/utils";

/** Deterministic pseudo-random so server and client render identical meteors. */
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** Aceternity-style meteors — streaks that fall across a container. */
export function Meteors({ number = 14, className }: { number?: number; className?: string }) {
  const meteors = Array.from({ length: number }, (_, i) => ({
    left: `${Math.floor(seeded(i, 1) * 100)}%`,
    top: `${Math.floor(seeded(i, 2) * 40) - 10}%`,
    delay: `${(seeded(i, 3) * 6).toFixed(2)}s`,
    duration: `${Math.floor(seeded(i, 4) * 6 + 4)}s`,
  }));

  return (
    <>
      {meteors.map((m, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute h-0.5 w-0.5 rounded-full bg-cyan-200/70 shadow-[0_0_0_1px_#ffffff10] motion-safe:animate-meteor",
            "before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-cyan-300/60 before:to-transparent before:content-['']",
            className,
          )}
          style={{
            top: m.top,
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.duration,
            ["--angle" as string]: "215deg",
          }}
        />
      ))}
    </>
  );
}
