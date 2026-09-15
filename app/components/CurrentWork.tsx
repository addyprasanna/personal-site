"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { BlurFade } from "./ui/BlurFade";
import { SpotlightCard } from "./ui/SpotlightCard";
import { AnimatedBeam } from "./ui/AnimatedBeam";
import { Tag } from "./ui/Tag";
import { SystemLog } from "./SystemLog";
import { cn, EASE } from "@/app/lib/utils";

/* ───────────────────────── Magellan: animated mini dashboard (illustrative) ───────────────────────── */
function MagellanPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const bars = [0.42, 0.58, 0.5, 0.72, 0.64, 0.8, 0.7, 0.9, 0.82, 1, 0.88, 0.94];
  const kpis = [
    { label: "schedule", fill: 0.78, color: "var(--color-accent)" },
    { label: "deliveries", fill: 0.62, color: "var(--color-accent-green)" },
    { label: "crew", fill: 0.9, color: "var(--color-accent-violet)" },
  ];
  // sparkline through the bar tops
  const w = 100;
  const pts = bars.map((b, i) => `${(i / (bars.length - 1)) * w},${(1 - b) * 40 + 2}`).join(" ");

  return (
    <div ref={ref} className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[#07070a]">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_6px_var(--color-accent)]" />
          <span className="font-mono text-[10px] text-[var(--color-text-muted)]">magellan / site-ops</span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-subtle)]">
          illustrative
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 p-3">
        {kpis.map((k, i) => (
          <div key={k.label} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2.5">
            <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-subtle)]">{k.label}</p>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
              <motion.div
                className="h-full rounded-full"
                style={{ background: k.color, boxShadow: `0 0 8px ${k.color}` }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${k.fill * 100}%` } : {}}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: EASE }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative px-3 pb-3">
        <div className="flex h-20 items-end gap-1">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-[var(--color-accent)]/55 to-[var(--color-accent)]/5"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: h } : {}}
              style={{ originY: 1, height: "100%" }}
              transition={{ duration: 0.8, delay: 0.35 + i * 0.045, ease: EASE }}
            />
          ))}
        </div>
        <svg
          viewBox="0 0 100 44"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-3 top-0 h-20 w-[calc(100%-1.5rem)]"
          aria-hidden="true"
        >
          <motion.polyline
            points={pts}
            fill="none"
            stroke="#e0fbff"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 0.9 } : {}}
            transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
          />
        </svg>
      </div>
    </div>
  );
}

/* ───────────────────────── Amber: NL → SQL → answer (illustrative) ───────────────────────── */
const QUESTION = "which sites had deliveries slip this week?";
const SQL = [
  "SELECT site, count(*) AS slipped",
  "FROM deliveries",
  "WHERE status = 'late'",
  "  AND week = date_trunc('week', now())",
  "GROUP BY site ORDER BY slipped DESC;",
];
const ROWS: [string, number][] = [
  ["Site A", 1],
  ["Site B", 0.62],
  ["Site C", 0.3],
];

function AmberPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [typed, setTyped] = useState(0);
  const [sqlLines, setSqlLines] = useState(0);
  const [rows, setRows] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setTyped(0);
    setSqlLines(0);
    setRows(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 300;
    for (let i = 1; i <= QUESTION.length; i++) {
      timers.push(setTimeout(() => setTyped(i), t));
      t += 28;
    }
    t += 350;
    for (let i = 1; i <= SQL.length; i++) {
      timers.push(setTimeout(() => setSqlLines(i), t));
      t += 220;
    }
    t += 350;
    for (let i = 1; i <= ROWS.length; i++) {
      timers.push(setTimeout(() => setRows(i), t));
      t += 220;
    }
    timers.push(setTimeout(() => setCycle((c) => c + 1), t + 9000));
    return () => timers.forEach(clearTimeout);
  }, [inView, cycle]);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[#07070a] font-mono text-[10.5px] leading-relaxed">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-warm)] shadow-[0_0_6px_var(--color-accent-warm)]" />
          <span className="text-[10px] text-[var(--color-text-muted)]">amber / analyst</span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-[var(--color-text-subtle)]">illustrative</span>
      </div>

      <div className="min-h-[252px] space-y-3 p-3">
        <div className="flex gap-2">
          <span className="shrink-0 text-[var(--color-accent-warm)]">?</span>
          <span className="text-[var(--color-text)]">
            {QUESTION.slice(0, typed)}
            {typed < QUESTION.length && <span className="animate-caret text-[var(--color-accent-warm)]">▍</span>}
          </span>
        </div>

        {sqlLines > 0 && (
          <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2.5 py-2 text-[var(--color-text-muted)]">
            {SQL.slice(0, sqlLines).map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} className="whitespace-pre">
                {l.split(/(\bSELECT\b|\bFROM\b|\bWHERE\b|\bAND\b|\bGROUP BY\b|\bORDER BY\b|\bAS\b|\bDESC\b)/).map((part, j) =>
                  /^(SELECT|FROM|WHERE|AND|GROUP BY|ORDER BY|AS|DESC)$/.test(part) ? (
                    <span key={j} className="text-[var(--color-accent)]">{part}</span>
                  ) : (
                    <span key={j}>{part}</span>
                  ),
                )}
              </motion.div>
            ))}
          </div>
        )}

        {rows > 0 && (
          <div className="space-y-1.5">
            {ROWS.slice(0, rows).map(([name, v], i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
                <span className="w-12 shrink-0 text-[var(--color-text-secondary)]">{name}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--color-border)]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent-warm)] to-[#fbbf24]"
                    initial={{ width: 0 }}
                    animate={{ width: `${v * 100}%` }}
                    transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Flow: messy → structured → intelligence ───────────────────────── */
const FlowNode = forwardRef<
  HTMLDivElement,
  { label: string; sub: string; accent?: string; icon: React.ReactNode }
>(function FlowNode({ label, sub, accent = "#22d3ee", icon }, ref) {
  return (
    <div ref={ref} className="relative z-10 flex w-full max-w-[220px] flex-col items-center text-center">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl border bg-[var(--color-bg)] shadow-[0_0_30px_-10px_var(--glow)]"
        style={{ borderColor: `${accent}44`, ["--glow" as string]: accent, color: accent }}
      >
        {icon}
      </div>
      <p className="mt-3 text-sm font-medium text-[var(--color-text)]">{label}</p>
      <p className="mt-1 font-mono text-[10px] text-[var(--color-text-muted)]">{sub}</p>
    </div>
  );
});

function FlowBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const c = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-between gap-8 py-2 md:flex-row md:gap-4">
      <FlowNode
        ref={a}
        label="messy workflows"
        sub="fragmented · informal"
        accent="#9a9aa6"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M4 6h6M4 12h10M4 18h7M16 5l4 4-4 4M14 17l3 3" strokeLinecap="round" />
          </svg>
        }
      />
      <FlowNode
        ref={b}
        label="structured data products"
        sub="schemas · pipelines · models"
        accent="#22d3ee"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <ellipse cx="12" cy="6" rx="7" ry="3" />
            <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
          </svg>
        }
      />
      <FlowNode
        ref={c}
        label="operational intelligence"
        sub="dashboards + AI analyst"
        accent="#a78bfa"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M4 19h16M6 16V9M10 16V5M14 16v-6M18 16v-3" strokeLinecap="round" />
          </svg>
        }
      />
      <AnimatedBeam containerRef={containerRef} fromRef={a} toRef={b} duration={4} startYOffset={-20} endYOffset={-20} gradientStartColor="#9a9aa6" gradientStopColor="#22d3ee" />
      <AnimatedBeam containerRef={containerRef} fromRef={b} toRef={c} duration={4} delay={1.6} startYOffset={-20} endYOffset={-20} gradientStartColor="#22d3ee" gradientStopColor="#a78bfa" />
    </div>
  );
}

/* ───────────────────────── Section ───────────────────────── */
const ownership = [
  { label: "Product", detail: "Roadmap, UX decisions, prioritization" },
  { label: "Engineering", detail: "Full-stack, architecture, data pipelines" },
  { label: "Customer", detail: "Enterprise onboarding and deployment" },
  { label: "Strategy", detail: "Workflows → structured data products" },
];

export function CurrentWork() {
  return (
    <section className="section-padding relative border-t border-[var(--color-border)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10%] top-0 h-[400px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.07),transparent)] blur-3xl"
      />
      <div className="container-main relative">
        <SectionHeader
          id="building"
          label="// currently building"
          title="Kaya AI"
          description="AI-native operational platform for construction and supply chain teams."
        />

        <BlurFade>
          <p className="max-w-2xl text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
            I lead development across the full stack — from customer-facing dashboards to the AI
            analyst layer underneath. Working directly with enterprise customers to translate
            fragmented workflows into structured data products.
          </p>
        </BlurFade>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {/* Magellan */}
          <BlurFade className="lg:col-span-2" delay={0.05}>
            <SpotlightCard className="h-full p-6 md:p-7">
              <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-center">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                    <span className="font-mono text-[11px] tracking-wider text-[var(--color-accent)]">Magellan</span>
                  </div>
                  <h3 className="text-lg font-medium text-[var(--color-text)]">
                    Dashboarding + Operational Intelligence
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    Editable KPI dashboards, real-time data sync, and AI-powered workflow tooling for
                    enterprise construction teams. Built for non-technical operators who need to own
                    their data.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    <Tag>React</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>PostgreSQL</Tag>
                    <Tag>Real-time sync</Tag>
                  </div>
                </div>
                <MagellanPreview />
              </div>
            </SpotlightCard>
          </BlurFade>

          {/* Amber */}
          <BlurFade delay={0.1}>
            <SpotlightCard glow="rgba(245, 158, 11, 0.12)" className="h-full p-6 md:p-7">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent-warm)] shadow-[0_0_8px_var(--color-accent-warm)]" />
                <span className="font-mono text-[11px] tracking-wider text-[var(--color-accent-warm)]">Amber</span>
              </div>
              <h3 className="text-lg font-medium text-[var(--color-text)]">AI Analyst Layer</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Conversational AI analyst over enterprise operational data — surfacing insights from
                fragmented construction workflows. Natural language to structured operational
                intelligence.
              </p>
              <div className="mt-5">
                <AmberPreview />
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                <Tag>LLMs</Tag>
                <Tag>RAG</Tag>
                <Tag>Data pipelines</Tag>
                <Tag>NL→SQL</Tag>
              </div>
            </SpotlightCard>
          </BlurFade>

          {/* Flow */}
          <BlurFade className="lg:col-span-2" delay={0.15}>
            <SpotlightCard glow="rgba(167, 139, 250, 0.10)" className="h-full p-6 md:p-8">
              <p className="mb-6 font-mono text-[11px] tracking-wider text-[var(--color-text-subtle)]">
                → the thesis
              </p>
              <FlowBeam />
            </SpotlightCard>
          </BlurFade>

          {/* Ownership */}
          <BlurFade delay={0.2}>
            <SpotlightCard className="h-full p-6">
              <p className="mb-5 font-mono text-[11px] tracking-wider text-[var(--color-text-subtle)]">
                → what I actually own
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                {ownership.map(({ label, detail }, i) => (
                  <div key={label} className={cn("border-l pl-3", i % 2 === 0 ? "border-[var(--color-accent)]/40" : "border-[var(--color-accent-violet)]/40")}>
                    <div className="mb-1 font-mono text-xs text-[var(--color-text)]">{label}</div>
                    <div className="text-[11px] leading-relaxed text-[var(--color-text-muted)]">{detail}</div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </BlurFade>

          {/* Log */}
          <BlurFade className="lg:col-span-3" delay={0.25}>
            <SystemLog />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
