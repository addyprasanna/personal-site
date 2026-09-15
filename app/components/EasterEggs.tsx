"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NumberTicker } from "./ui/NumberTicker";
import { BorderBeam } from "./ui/BorderBeam";
import { EASE } from "@/app/lib/utils";

// ── Kaya Dashboard (simulated) ────────────────────────────────────────────────
function KayaDashboard({ onClose }: { onClose: () => void }) {
  const metrics = [
    { label: "data sources", value: 12, unit: "connected" },
    { label: "workflow nodes", value: 847, unit: "mapped" },
    { label: "KPIs tracked", value: 47, unit: "active" },
    { label: "analyst queries", value: 3, unit: "processing" },
  ];

  const systems = [
    { name: "Magellan", status: "online", color: "#22d3ee" },
    { name: "Amber", status: "processing", color: "#f59e0b" },
    { name: "Pipeline", status: "nominal", color: "#22c55e" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: -12, filter: "blur(6px)" }}
      animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.96, y: -8, filter: "blur(6px)" }}
      transition={{ duration: 0.22, ease: EASE }}
      role="dialog"
      aria-label="Kaya AI ops dashboard (simulated)"
      className="fixed left-1/2 top-[12vh] z-[70] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--color-border-hover)] bg-[rgba(8,8,12,0.92)] shadow-[0_32px_96px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
    >
      <BorderBeam size={70} duration={7} />
      <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_6px_var(--color-accent)]" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent)]">
            Kaya AI · Ops Dashboard
          </span>
        </div>
        <span className="rounded border border-[var(--color-border)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-subtle)]">
          simulated
        </span>
      </div>

      <div className="space-y-3 px-4 py-4">
        {metrics.map((m, i) => (
          <div key={m.label} className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-[var(--color-text-muted)]">{m.label}</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-sm text-[var(--color-text)]">
                <NumberTicker value={m.value} delay={i * 0.08} />
              </span>
              <span className="font-mono text-[10px] text-[var(--color-text-subtle)]">{m.unit}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-[var(--color-text-muted)]">last sync</span>
          <span className="font-mono text-[11px] text-[var(--color-text-secondary)]">just now</span>
        </div>
      </div>

      <div className="space-y-2 border-t border-[var(--color-border)] px-4 py-3">
        {systems.map((s) => (
          <div key={s.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color, boxShadow: `0 0 6px ${s.color}80` }} />
              <span className="font-mono text-[11px] text-[var(--color-text-secondary)]">{s.name}</span>
            </div>
            <span className="font-mono text-[10px]" style={{ color: s.color }}>
              {s.status}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--color-border)] px-4 py-3">
        <p className="font-mono text-[10px] leading-relaxed text-[var(--color-text-subtle)]">
          messy workflows → structured data products
          <br />→ operational intelligence
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-[var(--color-border)] px-4 py-2">
        <span className="font-mono text-[10px] text-[var(--color-text-subtle)]">advaith.prasanna / kaya-ai</span>
        <button
          onClick={onClose}
          className="font-mono text-[10px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
        >
          [K] close
        </button>
      </div>
    </motion.div>
  );
}

// ── Fencing Overlay ───────────────────────────────────────────────────────────
function FencingOverlay({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3400);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-label="Fencing"
    >
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="select-none px-6 text-center"
      >
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
          The Ohio State University
        </p>
        <motion.p
          className="mb-5 text-6xl"
          initial={{ rotate: -20, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
          aria-hidden="true"
        >
          ⚔
        </motion.p>
        <h2 className="display mb-2 text-3xl font-medium tracking-wide text-[var(--color-text)]">
          NCAA Division I Fencing
        </h2>
        <p className="mb-8 font-mono text-sm text-[var(--color-text-secondary)]">Varsity Épée · 2022 — 2026</p>
        <p className="mx-auto max-w-xs font-mono text-xs italic text-[var(--color-text-muted)]">
          &ldquo;The competitor&apos;s mindset doesn&apos;t stay on the strip.&rdquo;
        </p>

        <motion.div
          className="mx-auto mt-10 h-px max-w-[140px] bg-[var(--color-accent)]"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 3.4, ease: "linear" }}
          style={{ originX: 0 }}
        />
        <p className="mt-2 font-mono text-[10px] text-[var(--color-text-subtle)]">auto-closing</p>
      </motion.div>
    </motion.div>
  );
}

// ── EasterEggs (root handler) ─────────────────────────────────────────────────
export function EasterEggs() {
  const [kayaOpen, setKayaOpen] = useState(false);
  const [fencingOpen, setFencingOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return;
      if (document.querySelector("[data-command-palette]")) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "k" || e.key === "K") {
        e.preventDefault();
        setFencingOpen(false);
        setKayaOpen((v) => !v);
      }
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        setKayaOpen(false);
        setFencingOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setKayaOpen(false);
        setFencingOpen(false);
      }
    };
    const onKaya = () => {
      setFencingOpen(false);
      setKayaOpen(true);
    };
    const onFencing = () => {
      setKayaOpen(false);
      setFencingOpen(true);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("egg:kaya", onKaya);
    window.addEventListener("egg:fencing", onFencing);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("egg:kaya", onKaya);
      window.removeEventListener("egg:fencing", onFencing);
    };
  }, []);

  return (
    <AnimatePresence>
      {kayaOpen && <KayaDashboard key="kaya" onClose={() => setKayaOpen(false)} />}
      {fencingOpen && <FencingOverlay key="fencing" onClose={() => setFencingOpen(false)} />}
    </AnimatePresence>
  );
}
