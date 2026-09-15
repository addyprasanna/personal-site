"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

/** Splits a string into words and reveals each with a staggered blur-in. */
export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  as: Comp = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "p" | "h1" | "h2";
}) {
  const words = text.split(" ");
  const MotionComp = motion[Comp];
  return (
    <MotionComp
      className={cn("inline", className)}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block will-change-transform"
          variants={{
            hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
            },
          }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionComp>
  );
}
