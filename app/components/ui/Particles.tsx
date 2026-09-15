"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  color?: string;
  vx?: number;
  vy?: number;
}

/** Magic UI-style canvas particles with gentle mouse parallax. */
export function Particles({
  className,
  quantity = 80,
  staticity = 50,
  ease = 50,
  size = 0.4,
  color = "#22d3ee",
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rgb = hexToRgb(color);
    const circles: Circle[] = [];
    const mouse = { x: 0, y: 0 };
    const canvasSize = { w: 0, h: 0 };
    let raf = 0;

    const circleParams = (): Circle => ({
      x: Math.floor(Math.random() * canvasSize.w),
      y: Math.floor(Math.random() * canvasSize.h),
      translateX: 0,
      translateY: 0,
      size: Math.floor(Math.random() * 2) + size,
      alpha: 0,
      targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
      magnetism: 0.1 + Math.random() * 4,
    });

    const drawCircle = (circle: Circle, update = false) => {
      const dpr = window.devicePixelRatio || 1;
      const { x, y, translateX, translateY, size: s, alpha } = circle;
      ctx.translate(translateX, translateY);
      ctx.beginPath();
      ctx.arc(x, y, s, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
      ctx.fill();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!update) circles.push(circle);
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      circles.length = 0;
      canvasSize.w = container.offsetWidth;
      canvasSize.h = container.offsetHeight;
      canvas.width = canvasSize.w * dpr;
      canvas.height = canvasSize.h * dpr;
      canvas.style.width = `${canvasSize.w}px`;
      canvas.style.height = `${canvasSize.h}px`;
      ctx.scale(dpr, dpr);
      for (let i = 0; i < quantity; i++) drawCircle(circleParams());
    };

    const remap = (v: number, a1: number, a2: number, b1: number, b2: number) =>
      Math.max(((v - a1) * (b2 - b1)) / (a2 - a1) + b1, 0);

    const animate = () => {
      ctx.clearRect(0, 0, canvasSize.w, canvasSize.h);
      for (let i = circles.length - 1; i >= 0; i--) {
        const circle = circles[i];
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasSize.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.h - circle.y - circle.translateY - circle.size,
        ];
        const closest = edge.reduce((a, b) => Math.min(a, b));
        const remapped = parseFloat(remap(closest, 0, 20, 0, 1).toFixed(2));
        if (remapped > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
        } else {
          circle.alpha = circle.targetAlpha * remapped;
        }
        circle.x += circle.dx + vx;
        circle.y += circle.dy + vy;
        circle.translateX += (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease;
        circle.translateY += (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease;
        drawCircle(circle, true);
        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.h + circle.size
        ) {
          circles.splice(i, 1);
          drawCircle(circleParams());
        }
      }
      raf = window.requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const { w, h } = canvasSize;
      const x = e.clientX - rect.left - w / 2;
      const y = e.clientY - rect.top - h / 2;
      if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
        mouse.x = x;
        mouse.y = y;
      }
    };

    resize();
    animate();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [color, ease, quantity, size, staticity, vx, vy]);

  return (
    <div ref={containerRef} className={cn("pointer-events-none", className)} aria-hidden="true">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
