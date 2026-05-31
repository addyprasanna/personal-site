"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeader } from "./ui/SectionHeader";
import { Tag } from "./ui/Tag";
import { SystemLog } from "./SystemLog";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function CurrentWork() {
  const [showFlow, setShowFlow] = useState(false);

  return (
    <section className="section-padding border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader
          label="// currently building"
          title="Kaya AI"
          description="AI-native operational platform for construction and supply chain teams."
        />

        <FadeIn delay={0.08}>
          <div
            onMouseEnter={() => setShowFlow(true)}
            onMouseLeave={() => setShowFlow(false)}
            className="gradient-border glow-cyan rounded-2xl"
          >
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 md:p-8">
              <AnimatePresence>
                {showFlow && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.2, ease }}
                    className="mb-4 font-mono text-[11px] tracking-wider gradient-text"
                  >
                    messy workflows → structured data products → operational
                    intelligence
                  </motion.p>
                )}
              </AnimatePresence>

              <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
                I lead development across the full stack — from customer-facing
                dashboards to the AI analyst layer underneath. Working directly
                with enterprise customers to translate fragmented workflows into
                structured data products.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SystemLog />
        </FadeIn>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <FadeIn delay={0.12}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease }}
              className="glass glass-hover glow-cyan-hover h-full rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                <span className="font-mono text-[11px] tracking-wider text-[var(--color-accent)]">
                  Magellan
                </span>
              </div>
              <h3 className="text-base font-medium text-[var(--color-text)]">
                Dashboarding + Operational Intelligence
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Editable KPI dashboards, real-time data sync, and AI-powered
                workflow tooling for enterprise construction teams. Built for
                non-technical operators who need to own their data.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                <Tag>React</Tag>
                <Tag>TypeScript</Tag>
                <Tag>PostgreSQL</Tag>
                <Tag>Real-time sync</Tag>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.17}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease }}
              className="glass glass-hover h-full rounded-2xl p-6"
              style={{
                boxShadow: "0 0 40px rgba(245, 158, 11, 0.04)",
              }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent-warm)] shadow-[0_0_8px_var(--color-accent-warm)]" />
                <span className="font-mono text-[11px] tracking-wider text-[var(--color-accent-warm)]">
                  Amber
                </span>
              </div>
              <h3 className="text-base font-medium text-[var(--color-text)]">
                AI Analyst Layer
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Conversational AI analyst over enterprise operational data —
                surfacing insights from fragmented construction workflows.
                Natural language to structured operational intelligence.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                <Tag>LLMs</Tag>
                <Tag>RAG</Tag>
                <Tag>Data pipelines</Tag>
                <Tag>NL→SQL</Tag>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn delay={0.22}>
          <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
            <p className="mb-5 font-mono text-[11px] tracking-wider text-[var(--color-text-subtle)]">
              → what I actually own
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                {
                  label: "Product",
                  detail: "Roadmap, UX decisions, prioritization",
                },
                {
                  label: "Engineering",
                  detail: "Full-stack, architecture, data pipelines",
                },
                {
                  label: "Customer",
                  detail: "Enterprise onboarding and deployment",
                },
                {
                  label: "Strategy",
                  detail: "Workflows → structured data products",
                },
              ].map(({ label, detail }) => (
                <div key={label}>
                  <div className="mb-1.5 font-mono text-xs text-[var(--color-text-secondary)]">
                    {label}
                  </div>
                  <div className="text-[11px] leading-relaxed text-[var(--color-text-muted)]">
                    {detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
