"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/app/lib/utils";

/** Subtle 3D tilt that follows the cursor. Wrap any card. */
export function TiltCard({
  children,
  className,
  max = 5,
  scale = 1.01,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  scale?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 220, damping: 22 });

  return (
    <div className={cn("[perspective:1200px]", className)}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - r.left) / r.width - 0.5);
          y.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
