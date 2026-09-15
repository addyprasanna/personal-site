"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { cn, lerpColor } from "@/app/lib/utils";

/**
 * Aceternity flip words — cycles through words with a per-letter blur-in and a blur-out exit.
 * Letters are individually colored along `gradient`, so the word reads as a gradient without
 * relying on background-clip (which breaks across transformed children).
 */
export function FlipWords({
  words,
  duration = 3000,
  className,
  gradient = ["#67e8f9", "#22d3ee", "#a78bfa"],
}: {
  words: string[];
  duration?: number;
  className?: string;
  gradient?: string[];
}) {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (isAnimating) return;
    const t = setTimeout(startAnimation, duration);
    return () => clearTimeout(t);
  }, [isAnimating, duration, startAnimation]);

  const letters = currentWord.split("");
  const total = letters.length;

  return (
    <span className="relative inline-block">
      <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          exit={{
            opacity: 0,
            y: -30,
            x: 30,
            filter: "blur(8px)",
            scale: 1.5,
            position: "absolute",
          }}
          className={cn("relative z-10 inline-block whitespace-nowrap text-left", className)}
          key={currentWord}
        >
          {letters.map((letter, li) => (
            <motion.span
              key={currentWord + li}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: li * 0.035, duration: 0.25 }}
              className="inline-block"
              style={{ color: lerpColor(gradient, total > 1 ? li / (total - 1) : 0) }}
            >
              {letter === " " ? " " : letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
