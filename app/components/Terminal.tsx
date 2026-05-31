"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Line =
  | { kind: "input"; text: string }
  | { kind: "output"; text: string; tone?: "default" | "accent" | "warn" | "ok" };

const BOOT: Line[] = [
  { kind: "output", text: "operator-console v2.6 — booting...", tone: "accent" },
  { kind: "output", text: "session: guest@advaith.dev", tone: "default" },
  { kind: "output", text: "type 'help' to list commands.", tone: "ok" },
];

const HELP = [
  "available commands:",
  "  whoami      who is this",
  "  stack       tools I build with",
  "  work        selected projects",
  "  experience  where I've worked",
  "  now         what I'm doing now",
  "  about       longer bio",
  "  contact     how to reach me",
  "  github      open github",
  "  linkedin    open linkedin",
  "  fencing     a non-technical fact",
  "  clear       wipe the screen",
];

export function Terminal() {
  const [lines, setLines] = useState<Line[]>(BOOT);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [, setHistIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const print = (out: Line[]) => setLines((prev) => [...prev, ...out]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    print([{ kind: "input", text: raw }]);
    if (!cmd) return;

    setHistory((h) => [raw, ...h]);
    setHistIdx(-1);

    switch (cmd) {
      case "help":
      case "?":
        print(HELP.map((text) => ({ kind: "output", text } as Line)));
        break;
      case "whoami":
        print([
          {
            kind: "output",
            text: "advaith prasanna — product engineer @ Kaya AI.",
            tone: "accent",
          },
          {
            kind: "output",
            text: "I build AI-native operational systems for construction & supply chain.",
          },
        ]);
        break;
      case "stack":
        print([
          { kind: "output", text: "languages   TypeScript · Python · SQL" },
          { kind: "output", text: "frontend    React · Next.js · Tailwind" },
          { kind: "output", text: "data & ml   PyTorch · scikit-learn · LLMs/RAG · Gurobi" },
          { kind: "output", text: "infra       PostgreSQL · Snowflake · Tableau" },
        ]);
        break;
      case "work":
      case "projects":
        print([{ kind: "output", text: "→ routing to /projects", tone: "ok" }]);
        setTimeout(() => router.push("/projects"), 450);
        break;
      case "experience":
        print([
          { kind: "output", text: "Kaya AI            Product Engineer        2025 — now" },
          { kind: "output", text: "Rockwell (Kalypso) Data Science Intern      Summer 2025" },
          { kind: "output", text: "NetJets            Data Analytics Intern    Summer 2024" },
          { kind: "output", text: "Ohio State Athl.   Analytics Intern         Summer 2023" },
        ]);
        break;
      case "now":
        print([{ kind: "output", text: "→ routing to /now", tone: "ok" }]);
        setTimeout(() => router.push("/now"), 450);
        break;
      case "about":
        print([{ kind: "output", text: "→ routing to /about", tone: "ok" }]);
        setTimeout(() => router.push("/about"), 450);
        break;
      case "contact":
      case "email":
        print([
          { kind: "output", text: "advaith.prasanna@gmail.com", tone: "accent" },
          { kind: "output", text: "copied to clipboard ✓", tone: "ok" },
        ]);
        navigator.clipboard?.writeText("advaith.prasanna@gmail.com").catch(() => {});
        break;
      case "github":
        print([{ kind: "output", text: "→ opening github.com/addyprasanna", tone: "ok" }]);
        window.open("https://github.com/addyprasanna", "_blank");
        break;
      case "linkedin":
        print([{ kind: "output", text: "→ opening linkedin", tone: "ok" }]);
        window.open("https://www.linkedin.com/in/advaith-prasanna/", "_blank");
        break;
      case "fencing":
        print([
          {
            kind: "output",
            text: "NCAA Division I épée @ Ohio State — 4 varsity seasons.",
            tone: "accent",
          },
          { kind: "output", text: "the competitor's mindset doesn't stay on the strip." },
        ]);
        break;
      case "sudo":
      case "sudo su":
        print([
          { kind: "output", text: "nice try. you already have everything you need.", tone: "warn" },
        ]);
        break;
      case "clear":
      case "cls":
        setLines([]);
        break;
      case "ls":
        print([{ kind: "output", text: "home  work  experience  about  now  contact" }]);
        break;
      default:
        print([
          {
            kind: "output",
            text: `command not found: ${cmd}. type 'help'.`,
            tone: "warn",
          },
        ]);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistIdx((i) => {
        const next = Math.min(i + 1, history.length - 1);
        if (history[next] !== undefined) setValue(history[next]);
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistIdx((i) => {
        const next = Math.max(i - 1, -1);
        setValue(next === -1 ? "" : history[next] ?? "");
        return next;
      });
    }
  };

  const toneClass = (tone?: string) => {
    switch (tone) {
      case "accent":
        return "text-[var(--color-accent)]";
      case "ok":
        return "text-[var(--color-accent-green)]";
      case "warn":
        return "text-[var(--color-accent-warm)]";
      default:
        return "text-[var(--color-text-secondary)]";
    }
  };

  return (
    <div
      className="gradient-border glow-cyan rounded-2xl"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[#040406]">
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 font-mono text-[10px] text-[var(--color-text-subtle)]">
            guest@advaith.dev — interactive
          </span>
        </div>

        <div
          ref={scrollRef}
          className="h-[300px] space-y-1 overflow-y-auto px-5 py-4 font-mono text-[12px] leading-relaxed"
        >
          {lines.map((line, i) =>
            line.kind === "input" ? (
              <div key={i} className="flex gap-2">
                <span className="shrink-0 text-[var(--color-accent)]">›</span>
                <span className="text-[var(--color-text)]">{line.text}</span>
              </div>
            ) : (
              <div
                key={i}
                className={`whitespace-pre-wrap ${toneClass(line.tone)}`}
              >
                {line.text}
              </div>
            ),
          )}

          <div className="flex items-center gap-2">
            <span className="shrink-0 text-[var(--color-accent)]">›</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoComplete="off"
              aria-label="Interactive terminal input"
              className="w-full bg-transparent text-[var(--color-text)] caret-[var(--color-accent)] outline-none placeholder:text-[var(--color-text-subtle)]"
              placeholder="type a command…"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
