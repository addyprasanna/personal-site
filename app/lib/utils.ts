import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EASE = [0.21, 0.47, 0.32, 0.98] as const;
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

function hexToRgbArr(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Interpolate across an array of hex color stops at t ∈ [0, 1]. */
export function lerpColor(stops: string[], t: number): string {
  if (stops.length === 1) return stops[0];
  const clamped = Math.min(Math.max(t, 0), 1);
  const seg = clamped * (stops.length - 1);
  const i = Math.min(Math.floor(seg), stops.length - 2);
  const f = seg - i;
  const a = hexToRgbArr(stops[i]);
  const b = hexToRgbArr(stops[i + 1]);
  const c = a.map((v, k) => Math.round(v + (b[k] - v) * f));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

export function hexToRgba(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgbArr(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
