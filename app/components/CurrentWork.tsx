"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { SystemLog } from "./SystemLog";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const tags = (items: string[]) =>
  items.map((t) => (
    <span
      key={t}
      className="rounded px-2 py-0.5 text-[11px] font-mono text-[#4a4a4a] bg-[#111] border border-[#1c1c1c]"
    >
      {t}
    </span>
  ));

export function CurrentWork() {
  const [showFlow, setShowFlow] = useState(false);

  return (
    <section className="relative px-6 py-28 border-t border-[#111]">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="font-mono text-[11px] text-[#444] tracking-widest uppercase">
            // currently building
          </span>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div
            onMouseEnter={() => setShowFlow(true)}
            onMouseLeave={() => setShowFlow(false)}
          >
            <h2 className="mt-5 text-3xl font-light tracking-tight text-[#e2e2e2]">
              Kaya AI
            </h2>

            {/* Hover reveal — flow text */}
            <AnimatePresence>
              {showFlow && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  transition={{ duration: 0.2, ease }}
                  className="mt-1.5 font-mono text-[11px] tracking-wider"
                  style={{
                    background:
                      "linear-gradient(90deg, #444 0%, #22d3ee 50%, #444 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  messy workflows → structured data products → operational intelligence
                </motion.p>
              )}
            </AnimatePresence>

            <p className="mt-3 max-w-lg text-[#666] leading-relaxed text-sm">
              AI-native operational platform for construction and supply chain teams.
              I lead development across the full stack — from customer-facing
              dashboards to the AI analyst layer underneath. Working directly with
              enterprise customers to translate fragmented workflows into structured
              data products.
            </p>
          </div>
        </FadeIn>

        {/* System log */}
        <FadeIn delay={0.1}>
          <SystemLog />
        </FadeIn>

        {/* Project cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FadeIn delay={0.12}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease }}
              className="group rounded-xl border border-[#171717] bg-[#0d0d0d] p-5 hover:border-[#242424] transition-colors duration-300 cursor-default"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_6px_#22d3ee80]" />
                <span className="font-mono text-[11px] text-[#22d3ee] tracking-wider">
                  Magellan
                </span>
              </div>
              <h3 className="font-medium text-[#d8d8d8] text-sm">
                Dashboarding + Operational Intelligence
              </h3>
              <p className="mt-2 text-xs text-[#555] leading-relaxed">
                Editable KPI dashboards, real-time data sync, and AI-powered
                workflow tooling for enterprise construction teams. Built for
                non-technical operators who need to own their data.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags(["React", "TypeScript", "PostgreSQL", "Real-time sync"])}
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.17}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease }}
              className="group rounded-xl border border-[#171717] bg-[#0d0d0d] p-5 hover:border-[#242424] transition-colors duration-300 cursor-default"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_6px_#f59e0b80]" />
                <span className="font-mono text-[11px] text-[#f59e0b] tracking-wider">
                  Amber
                </span>
              </div>
              <h3 className="font-medium text-[#d8d8d8] text-sm">
                AI Analyst Layer
              </h3>
              <p className="mt-2 text-xs text-[#555] leading-relaxed">
                Conversational AI analyst over enterprise operational data —
                surfacing insights from fragmented construction workflows. Natural
                language to structured operational intelligence.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags(["LLMs", "RAG", "Data pipelines", "NL→SQL"])}
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Role breakdown */}
        <FadeIn delay={0.22}>
          <div className="mt-3 rounded-xl border border-[#171717] bg-[#0d0d0d] p-5">
            <p className="text-[11px] text-[#333] font-mono mb-4 tracking-wider">
              → what I actually own
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                { label: "Product",     detail: "Roadmap, UX decisions, prioritization" },
                { label: "Engineering", detail: "Full-stack, architecture, data pipelines" },
                { label: "Customer",    detail: "Enterprise onboarding and deployment" },
                { label: "Strategy",    detail: "Workflows → structured data products" },
              ].map(({ label, detail }) => (
                <div key={label}>
                  <div className="text-xs font-mono text-[#aaa] mb-1.5">{label}</div>
                  <div className="text-[11px] text-[#444] leading-relaxed">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
