"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

// ── CountUp ──────────────────────────────────────────────────────────────────
function CountUp({ to, duration = 700 }: { to: number; duration?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const steps = 40;
    const inc = to / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= to) {
        setN(to);
        clearInterval(id);
      } else {
        setN(Math.floor(cur));
      }
    }, duration / steps);
    return () => clearInterval(id);
  }, [to, duration]);
  return <>{n}</>;
}

// ── Kaya Dashboard ────────────────────────────────────────────────────────────
function KayaDashboard({ onClose }: { onClose: () => void }) {
  const metrics = [
    { label: "data sources",     value: 12, unit: "connected" },
    { label: "workflow nodes",   value: 847, unit: "mapped" },
    { label: "KPIs tracked",     value: 47, unit: "active" },
    { label: "analyst queries",  value: 3,  unit: "processing" },
  ];

  const systems = [
    { name: "Magellan", status: "online",      color: "#22d3ee" },
    { name: "Amber",    status: "processing",  color: "#f59e0b" },
    { name: "Pipeline", status: "nominal",     color: "#16a34a" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: -12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -8 }}
      transition={{ duration: 0.22, ease }}
      className="fixed left-1/2 top-[12vh] z-[70] w-full max-w-sm -translate-x-1/2 overflow-hidden rounded-xl border border-[#1e1e1e] bg-[#080808] shadow-[0_32px_96px_rgba(0,0,0,0.9)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#141414] bg-[#0a0a0a] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_6px_#22d3ee]" />
          <span className="font-mono text-[11px] text-[#22d3ee] tracking-wider uppercase">
            Kaya AI · Ops Dashboard
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#2a2a2a]">live</span>
      </div>

      {/* Metrics */}
      <div className="px-4 py-4 space-y-3">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#444]">{m.label}</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-sm text-[#c8c8c8]">
                <CountUp key={m.value} to={m.value} />
              </span>
              <span className="font-mono text-[10px] text-[#333]">{m.unit}</span>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#444]">last sync</span>
          <span className="font-mono text-[11px] text-[#555]">just now</span>
        </div>
      </div>

      {/* Systems */}
      <div className="border-t border-[#141414] px-4 py-3 space-y-2">
        {systems.map((s) => (
          <div key={s.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: s.color, boxShadow: `0 0 4px ${s.color}80` }}
              />
              <span className="font-mono text-[11px] text-[#555]">{s.name}</span>
            </div>
            <span className="font-mono text-[10px]" style={{ color: s.color }}>
              {s.status}
            </span>
          </div>
        ))}
      </div>

      {/* Flow text */}
      <div className="border-t border-[#141414] px-4 py-3">
        <p className="font-mono text-[10px] text-[#2a2a2a] leading-relaxed">
          messy workflows → structured data products
          <br />
          → operational intelligence
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-[#141414] px-4 py-2 flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#222]">
          advaith.prasanna / kaya-ai
        </span>
        <button
          onClick={onClose}
          className="font-mono text-[10px] text-[#333] hover:text-[#666] transition-colors"
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
    const t = setTimeout(onClose, 3200);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.35, ease }}
        className="text-center select-none"
      >
        <p className="font-mono text-[11px] text-[#444] tracking-widest uppercase mb-6">
          The Ohio State University
        </p>
        <p className="text-5xl mb-5 opacity-60">⚔</p>
        <h2 className="text-xl font-light text-[#e2e2e2] tracking-wide mb-2">
          NCAA Division I Fencing
        </h2>
        <p className="font-mono text-sm text-[#555] mb-8">
          Varsity Épée · 2022 — 2026
        </p>
        <p className="font-mono text-xs text-[#333] italic max-w-xs">
          &ldquo;The competitor&apos;s mindset doesn&apos;t stay on the strip.&rdquo;
        </p>

        <motion.div
          className="mt-10 mx-auto h-px bg-[#222] max-w-[120px]"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 3.2, ease: "linear" }}
          style={{ originX: "left" }}
        />
        <p className="mt-2 font-mono text-[10px] text-[#2a2a2a]">auto-closing</p>
      </motion.div>
    </motion.div>
  );
}

// ── EasterEggs (root handler) ─────────────────────────────────────────────────
export function EasterEggs() {
  const [kayaOpen, setKayaOpen] = useState(false);
  const [fencingOpen, setFencingOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't fire while typing or palette is open
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
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {kayaOpen && (
        <KayaDashboard key="kaya" onClose={() => setKayaOpen(false)} />
      )}
      {fencingOpen && (
        <FencingOverlay key="fencing" onClose={() => setFencingOpen(false)} />
      )}
    </AnimatePresence>
  );
}
