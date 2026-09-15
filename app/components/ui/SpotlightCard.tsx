"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: string;
  radius?: number;
  as?: "div" | "article";
}

/** Card with a mouse-tracking radial glow and a 1px gradient border that follows the cursor. */
export function SpotlightCard({
  children,
  className,
  glow = "rgba(34, 211, 238, 0.12)",
  radius = 360,
  as = "div",
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const bg = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${glow}, transparent 70%)`;
  const border = useMotionTemplate`radial-gradient(${Math.round(radius * 0.7)}px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.32), transparent 70%)`;
  const Comp = as;

  return (
    <Comp
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - r.left);
        mouseY.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        mouseX.set(-1000);
        mouseY.set(-1000);
      }}
      className={cn("group/spot card-surface relative overflow-hidden rounded-2xl", className)}
      {...props}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background: border,
          padding: 1,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{ background: bg }}
      />
      <div className="relative h-full">{children}</div>
    </Comp>
  );
}
