"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const LINES = [
  { type: "cmd",    text: "init operational-intelligence --env production" },
  { type: "log",    text: "scanning enterprise data sources..." },
  { type: "ok",     text: "connected: 3 sources · 847 workflow nodes mapped" },
  { type: "log",    text: "normalizing schema: Excel chaos → structured data" },
  { type: "ok",     text: "AI analyst layer online  [Amber v1.2.0]" },
  { type: "ok",     text: "dashboard sync: 47 KPIs tracked  [Magellan]" },
  { type: "ok",     text: "customer deployment: construction-ops-prod ✓" },
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
      <div className="rounded-xl border border-[#171717] bg-[#060606] overflow-hidden">
        {/* chrome bar */}
        <div className="flex items-center gap-2 border-b border-[#111] bg-[#0a0a0a] px-4 py-2.5">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-[#1e1e1e]" />
            ))}
          </div>
          <span className="ml-2 font-mono text-[10px] text-[#252525] tracking-wider">
            system.log — kaya-ops-prod
          </span>
        </div>

        {/* log lines */}
        <div className="px-5 py-4 font-mono text-[11px] space-y-1.5 min-h-[148px]">
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
                  <span className="shrink-0 text-[#22d3ee]">$</span>
                  <span className="text-[#666]">{line.text}</span>
                </>
              )}
              {line.type === "log" && (
                <>
                  <span className="shrink-0 text-[#2a2a2a]">▶</span>
                  <span className="text-[#363636]">{line.text}</span>
                </>
              )}
              {line.type === "ok" && (
                <>
                  <span className="shrink-0 text-[#16a34a]">✓</span>
                  <span className="text-[#4a4a4a]">{line.text}</span>
                </>
              )}
              {line.type === "status" && (
                <>
                  <span className="shrink-0 text-[#22d3ee]">◉</span>
                  <span className="text-[#22d3ee]">{line.text}</span>
                </>
              )}
            </motion.div>
          ))}

          {/* blinking cursor */}
          {done && (
            <div className="flex gap-3">
              <span className="text-[#22d3ee]">$</span>
              <span className="text-[#333] animate-pulse">█</span>
            </div>
          )}

          {/* placeholder lines to hold height before log starts */}
          {!isInView && (
            <div className="text-[#1a1a1a]">
              $ _
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
