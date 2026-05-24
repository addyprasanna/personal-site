"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type Cmd = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  action: () => void;
};

const ease = [0.21, 0.47, 0.32, 0.98] as const;

// Global open state accessible to other components
let _setOpen: ((v: boolean) => void) | null = null;
export function openCommandPalette() {
  _setOpen?.(true);
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  _setOpen = setOpen;

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setCursor(0);
  }, []);

  const commands: Cmd[] = [
    {
      id: "home",
      label: "Home",
      group: "Navigate",
      action: () => { router.push("/"); close(); },
    },
    {
      id: "work",
      label: "Work",
      group: "Navigate",
      action: () => { router.push("/projects"); close(); },
    },
    {
      id: "now",
      label: "Now",
      group: "Navigate",
      action: () => { router.push("/now"); close(); },
    },
    {
      id: "about",
      label: "About",
      group: "Navigate",
      action: () => { router.push("/about"); close(); },
    },
    {
      id: "email",
      label: copied ? "Copied!" : "Copy email",
      hint: "advaith.prasanna@gmail.com",
      group: "Contact",
      action: () => {
        navigator.clipboard.writeText("advaith.prasanna@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: "github",
      label: "GitHub",
      hint: "addyprasanna",
      group: "Contact",
      action: () => {
        window.open("https://github.com/addyprasanna", "_blank");
        close();
      },
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      hint: "advaith-prasanna",
      group: "Contact",
      action: () => {
        window.open("https://www.linkedin.com/in/advaith-prasanna/", "_blank");
        close();
      },
    },
  ];

  const filtered = query.trim()
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.hint?.toLowerCase().includes(query.toLowerCase()) ||
          c.group.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  const grouped = filtered.reduce<Record<string, Cmd[]>>((acc, cmd) => {
    acc[cmd.group] ??= [];
    acc[cmd.group].push(cmd);
    return acc;
  }, {});

  // Global keyboard: open with ⌘K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        if (!open) { setQuery(""); setCursor(0); }
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 40);
  }, [open]);

  // Arrow key + Enter navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => Math.min(c + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) => Math.max(c - 1, 0));
      }
      if (e.key === "Enter") {
        filtered[cursor]?.action();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, cursor]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            data-command-palette
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
            onClick={close}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.18, ease }}
            className="fixed left-1/2 top-[18vh] z-[201] w-full max-w-[480px] -translate-x-1/2 overflow-hidden rounded-xl border border-[#222] bg-[#0c0c0c] shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
          >
            {/* Search row */}
            <div className="flex items-center gap-3 border-b border-[#181818] px-4 py-3">
              <span className="shrink-0 font-mono text-sm text-[#333]">⌘</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => { setQuery(e.target.value); setCursor(0); }}
                placeholder="Search or jump to..."
                className="flex-1 bg-transparent text-sm text-[#e2e2e2] placeholder-[#383838] outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="shrink-0 font-mono text-[11px] text-[#383838] hover:text-[#666] transition-colors"
                >
                  clear
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-72 overflow-y-auto py-1">
              {Object.entries(grouped).map(([group, items]) => (
                <div key={group}>
                  <p className="px-4 pb-1 pt-3 font-mono text-[10px] text-[#2e2e2e] tracking-widest uppercase">
                    {group}
                  </p>
                  {items.map((cmd) => {
                    const idx = filtered.indexOf(cmd);
                    return (
                      <button
                        key={cmd.id}
                        onClick={cmd.action}
                        onMouseEnter={() => setCursor(idx)}
                        className={`flex w-full items-center justify-between px-4 py-2.5 text-left transition-colors duration-100 ${
                          cursor === idx ? "bg-[#141414]" : ""
                        }`}
                      >
                        <span className="text-sm text-[#c0c0c0]">{cmd.label}</span>
                        {cmd.hint && (
                          <span className="ml-3 shrink-0 font-mono text-[11px] text-[#333]">
                            {cmd.hint}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}

              {filtered.length === 0 && (
                <p className="px-4 py-8 text-center font-mono text-xs text-[#2e2e2e]">
                  no results
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-[#181818] px-4 py-2">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-[#272727]">↑↓ navigate</span>
                <span className="font-mono text-[10px] text-[#272727]">↵ select</span>
                <span className="font-mono text-[10px] text-[#272727]">esc close</span>
              </div>
              <span className="font-mono text-[10px] text-[#222]">// try pressing K</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
