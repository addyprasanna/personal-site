"use client";

import { motion } from "framer-motion";
import { useEffect, useId, useRef, useState, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/app/lib/utils";

interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<"svg"> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
}

type Square = { id: number; pos: [number, number] };

/** Magic UI-style grid with squares that randomly light up. Squares generate client-side only. */
export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  numSquares = 40,
  className,
  maxOpacity = 0.4,
  duration = 4,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const dims = useRef({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Square[]>([]);

  const randomPos = (): [number, number] => [
    Math.floor((Math.random() * dims.current.width) / width),
    Math.floor((Math.random() * dims.current.height) / height),
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        dims.current = { width: e.contentRect.width, height: e.contentRect.height };
        if (dims.current.width && dims.current.height) {
          setSquares(Array.from({ length: numSquares }, (_, i) => ({ id: i, pos: randomPos() })));
        }
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numSquares, width, height]);

  const move = (sqId: number) =>
    setSquares((cur) => cur.map((s) => (s.id === sqId ? { ...s, pos: randomPos() } : s)));

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-white/[0.04] stroke-white/[0.05]",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [px, py], id: sqId }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{ duration, repeat: 1, delay: index * 0.1, repeatType: "reverse" }}
            onAnimationComplete={() => move(sqId)}
            key={`${px}-${py}-${index}`}
            width={width - 1}
            height={height - 1}
            x={px * width + 1}
            y={py * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
