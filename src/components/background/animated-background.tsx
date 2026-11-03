"use client";

import { cn } from "@/lib/utils";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Meteors } from "./meteors";
import { StarField } from "./star-field";

/**
 * The site's decorative animated background: a drifting, twinkling star field
 * with a CSS meteor shower on top.
 *
 * Rendering stops entirely while the tab is hidden, and the whole scene is
 * frozen for visitors who prefer reduced motion. The canvas is capped at 1.5x
 * device pixels because soft stars gain nothing from a full retina buffer.
 */

const usePrefersReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return reducedMotion;
};

const useDocumentVisible = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const update = () => setVisible(document.visibilityState === "visible");

    update();
    document.addEventListener("visibilitychange", update);

    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  return visible;
};

interface AnimatedBackgroundProps {
  className?: string;
  meteorCount?: number;
}

const AnimatedBackground = ({
  className,
  meteorCount = 18,
}: AnimatedBackgroundProps) => {
  const reducedMotion = usePrefersReducedMotion();
  const documentVisible = useDocumentVisible();

  const frameloop = !documentVisible
    ? "never"
    : reducedMotion
      ? "demand"
      : "always";

  return (
    <div
      aria-hidden
      className={cn(
        "background-fade-in pointer-events-none fixed inset-0 z-0 overflow-hidden",
        className,
      )}
    >
      <Canvas
        className="!absolute inset-0"
        camera={{ position: [0, 0, 0], fov: 70, near: 0.1, far: 10 }}
        dpr={[1, 1.5]}
        flat
        frameloop={frameloop}
        gl={{
          alpha: true,
          antialias: false,
        }}
        fallback={null}
      >
        <StarField reducedMotion={reducedMotion} />
      </Canvas>

      <Meteors count={meteorCount} reducedMotion={reducedMotion} />
    </div>
  );
};

export { AnimatedBackground };
