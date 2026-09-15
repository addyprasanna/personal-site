"use client";

import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { createContext, useContext, useRef } from "react";
import { cn } from "@/app/lib/utils";

const DockCtx = createContext<{
  mouseX: MotionValue<number>;
  size: number;
  magnification: number;
  distance: number;
} | null>(null);

interface DockProps {
  className?: string;
  children: React.ReactNode;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
}

/** Magic UI dock — macOS-style magnifying icon bar. */
export function Dock({
  className,
  children,
  iconSize = 40,
  iconMagnification = 58,
  iconDistance = 130,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  return (
    <DockCtx.Provider value={{ mouseX, size: iconSize, magnification: iconMagnification, distance: iconDistance }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "glass mx-auto flex h-[60px] w-max items-end justify-center gap-3 rounded-2xl px-3 pb-2",
          className,
        )}
        role="toolbar"
        aria-label="Links"
      >
        {children}
      </motion.div>
    </DockCtx.Provider>
  );
}

export function DockIcon({
  className,
  children,
  label,
  href,
  external,
}: {
  className?: string;
  children: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
}) {
  const ctx = useContext(DockCtx);
  const fallback = useMotionValue(Infinity);
  const mouseX = ctx?.mouseX ?? fallback;
  const size = ctx?.size ?? 40;
  const magnification = ctx?.magnification ?? 58;
  const distance = ctx?.distance ?? 130;
  const ref = useRef<HTMLAnchorElement>(null);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distanceCalc, [-distance, 0, distance], [size, magnification, size]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 160, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      style={{ width, height: width }}
      className={cn(
        "group/dock relative flex aspect-square items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]",
        className,
      )}
    >
      {children}
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2 py-1 font-mono text-[10px] text-[var(--color-text-secondary)] opacity-0 transition-opacity group-hover/dock:opacity-100">
        {label}
      </span>
    </motion.a>
  );
}
