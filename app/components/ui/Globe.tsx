"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";

/** Longitude/latitude → cobe phi/theta so the globe starts facing a location. */
function locationToAngles(lat: number, lng: number): [number, number] {
  return [Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
}

interface GlobeProps {
  className?: string;
  /** [lat, lng] of the marker + initial focus */
  marker: [number, number];
  config?: Partial<COBEOptions>;
}

/** WebGL globe (cobe v2) with a glowing marker, slow auto-rotate, and drag-to-spin. */
export function Globe({ className, marker, config }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerStart = useRef<number | null>(null);
  const dragOffset = useRef(0); // committed rotation from previous drags
  const dragDelta = useRef(0); // rotation from the in-progress drag
  const velocity = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const [startPhi, startTheta] = locationToAngles(marker[0], marker[1]);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = canvas.offsetWidth;
    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    let phi = 0;
    let raf = 0;
    let running = true;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: startPhi,
      theta: Math.min(startTheta, 0.42),
      dark: 1,
      diffuse: 1.6,
      mapSamples: 18000,
      mapBrightness: 2.6,
      baseColor: [0.16, 0.16, 0.2],
      markerColor: [0.13, 0.83, 0.93],
      glowColor: [0.05, 0.06, 0.09],
      opacity: 0.9,
      markers: [{ location: marker, size: 0.07 }],
      ...config,
    });

    const frame = () => {
      if (!running) return;
      if (pointerStart.current === null) {
        if (!reduced) phi += 0.0026;
        // ease out any leftover drag velocity
        if (Math.abs(velocity.current) > 0.0002) {
          dragOffset.current += velocity.current;
          velocity.current *= 0.94;
        }
      }
      globe.update({
        phi: startPhi + phi + dragOffset.current + dragDelta.current,
        width: width * 2,
        height: width * 2,
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const fade = setTimeout(() => {
      canvas.style.opacity = "1";
    }, 80);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      clearTimeout(fade);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [marker, config]);

  const endDrag = () => {
    if (pointerStart.current === null) return;
    dragOffset.current += dragDelta.current;
    dragDelta.current = 0;
    pointerStart.current = null;
  };

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      <canvas
        ref={canvasRef}
        className="size-full cursor-grab opacity-0 transition-opacity duration-1000 ease-out active:cursor-grabbing [contain:layout_paint_size]"
        aria-label="Interactive globe marking Columbus, Ohio"
        onPointerDown={(e) => {
          pointerStart.current = e.clientX;
          velocity.current = 0;
          canvasRef.current?.setPointerCapture(e.pointerId);
        }}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onPointerMove={(e) => {
          if (pointerStart.current === null) return;
          const next = (e.clientX - pointerStart.current) / 220;
          velocity.current = (next - dragDelta.current) * 0.6;
          dragDelta.current = next;
        }}
      />
    </div>
  );
}
