"use client";

import { cn } from "@/lib/utils";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { MeteorField } from "./meteor-field";
import { StarField } from "./star-field";

/**
 * The site's decorative animated background: a drifting, twinkling star field
 * with a curved meteor shower, both rendered in the same WebGL scene.
 *
 * Rendering stops entirely while the tab is hidden. The canvas is capped at
 * 1.5x device pixels because soft stars gain nothing from a full retina buffer.
 */

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
  const documentVisible = useDocumentVisible();

  const frameloop = documentVisible ? "always" : "never";

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
        <StarField />
        <MeteorField count={meteorCount} />
      </Canvas>
    </div>
  );
};

export { AnimatedBackground };
