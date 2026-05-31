"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const LINES = [
  { type: "cmd", text: "init operational-intelligence --env production" },
  { type: "log", text: "scanning enterprise data sources..." },
  { type: "ok", text: "connected: 3 sources · 847 workflow nodes mapped" },
  { type: "log", text: "normalizing schema: Excel chaos → structured data" },
  { type: "ok", text: "AI analyst layer online  [Amber v1.2.0]" },
  { type: "ok", text: "dashboard sync: 47 KPIs tracked  [Magellan]" },
  { type: "ok", text: "customer deployment: construction-ops-prod ✓" },
  { type: "status", text: "all systems operational" },
];

const DELAY_MS = 520;

export function SystemLog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || count >= LINES.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), DELAY_MS);
    return () => clearTimeout(t);
  }, [isInView, count]);

  const done = count >= LINES.length;

  return (
    <div ref={ref} className="mt-8 mb-2">
      <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[#040406]">
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 font-mono text-[10px] tracking-wider text-[var(--color-text-subtle)]">
            system.log — kaya-ops-prod
          </span>
        </div>

        <div className="min-h-[148px] space-y-1.5 px-5 py-4 font-mono text-[11px]">
          {LINES.slice(0, count).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="flex gap-3"
            >
              {line.type === "cmd" && (
                <>
                  <span className="shrink-0 text-[var(--color-accent)]">$</span>
                  <span className="text-[var(--color-text-muted)]">
                    {line.text}
                  </span>
                </>
              )}
              {line.type === "log" && (
                <>
                  <span className="shrink-0 text-[var(--color-text-subtle)]">
                    ▶
                  </span>
                  <span className="text-[var(--color-text-subtle)]">
                    {line.text}
                  </span>
                </>
              )}
              {line.type === "ok" && (
                <>
                  <span className="shrink-0 text-[var(--color-accent-green)]">
                    ✓
                  </span>
                  <span className="text-[var(--color-text-secondary)]">
                    {line.text}
                  </span>
                </>
              )}
              {line.type === "status" && (
                <>
                  <span className="shrink-0 text-[var(--color-accent)]">◉</span>
                  <span className="text-[var(--color-accent)]">{line.text}</span>
                </>
              )}
            </motion.div>
          ))}

          {done && (
            <div className="flex gap-3">
              <span className="text-[var(--color-accent)]">$</span>
              <span className="animate-pulse text-[var(--color-text-subtle)]">
                █
              </span>
            </div>
          )}

          {!isInView && (
            <div className="text-[var(--color-text-subtle)]">$ _</div>
          )}
        </div>
      </div>
    </div>
  );
}
