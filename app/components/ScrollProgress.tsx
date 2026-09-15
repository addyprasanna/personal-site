"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-violet)] to-[var(--color-accent-warm)]"
      style={{ scaleX, opacity: scrollYProgress }}
    />
  );
}
