"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/app/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: `${number}px`;
  blur?: string;
}

/** Magic UI blur-fade — content de-blurs and slides in, on mount or when scrolled into view. */
export function BlurFade({
  children,
  className,
  duration = 0.5,
  delay = 0,
  offset = 10,
  direction = "up",
  inView = true,
  inViewMargin = "-40px",
  blur = "8px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const horizontal = direction === "left" || direction === "right";
  const sign = direction === "right" || direction === "down" ? -1 : 1;

  const variants: Variants = {
    hidden: horizontal
      ? { x: sign * offset, opacity: 0, filter: `blur(${blur})` }
      : { y: sign * offset, opacity: 0, filter: `blur(${blur})` },
    visible: horizontal
      ? { x: 0, opacity: 1, filter: "blur(0px)", transitionEnd: { filter: "none" } }
      : { y: 0, opacity: 1, filter: "blur(0px)", transitionEnd: { filter: "none" } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay: 0.04 + delay, duration, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
