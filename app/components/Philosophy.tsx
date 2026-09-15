"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { BlurFade } from "./ui/BlurFade";
import { SpotlightCard } from "./ui/SpotlightCard";
import { cn, EASE, hexToRgba } from "@/app/lib/utils";
import { accentHex, principles } from "@/app/data/principles";

export function Philosophy() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );
    itemRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const current = principles[active];
  const color = accentHex[current.accent];

  return (
    <section className="section-padding relative border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader id="philosophy" label="// how I think" title="Technical philosophy" />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Sticky numeral (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-36">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.n}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <span
                    className="display block font-mono text-[10rem] leading-[0.9] text-ghost"
                    style={{ WebkitTextStrokeColor: hexToRgba(color, 0.35) }}
                    aria-hidden="true"
                  >
                    {current.n}
                  </span>
                  <h3 className="display mt-4 text-3xl font-medium text-[var(--color-text)]">{current.title}</h3>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center gap-2" aria-hidden="true">
                {principles.map((p, i) => (
                  <span
                    key={p.n}
                    className="h-1 rounded-full transition-all duration-500"
                    style={{
                      width: i === active ? 32 : 12,
                      background: i === active ? accentHex[p.accent] : "var(--color-border-hover)",
                      boxShadow: i === active ? `0 0 10px ${accentHex[p.accent]}` : "none",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling principles */}
          <div className="space-y-4 lg:space-y-8">
            {principles.map((item, i) => {
              const c = accentHex[item.accent];
              return (
                <div
                  key={item.n}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-index={i}
                  className="flex items-center lg:min-h-[44vh]"
                >
                  <BlurFade className="w-full" delay={i * 0.05}>
                    <SpotlightCard
                      glow={hexToRgba(c, 0.12)}
                      className={cn(
                        "w-full p-6 transition-opacity duration-500 md:p-8",
                        i === active ? "lg:opacity-100" : "lg:opacity-40 lg:hover:opacity-80",
                      )}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: c, boxShadow: `0 0 8px ${c}` }} />
                        <span className="font-mono text-[11px]" style={{ color: c }}>
                          {item.n}
                        </span>
                      </div>
                      <h3 className="display text-xl font-medium leading-snug text-[var(--color-text)]">{item.title}</h3>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)]">{item.body}</p>
                    </SpotlightCard>
                  </BlurFade>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
