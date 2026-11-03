"use client";

import { createSeededRandom } from "@/lib/seeded-random";
import { type CSSProperties, useMemo } from "react";

/**
 * Lightweight CSS meteor shower.
 *
 * Every meteor is a single element animated with the compositor-friendly
 * `.meteor` keyframes in globals.css. Layout values are seeded so server and
 * client render the same positions, and negative delays start the shower
 * mid-flight instead of leaving the sky empty on load.
 */

type MeteorStyle = CSSProperties & {
  [variable: `--meteor-${string}`]: string;
};

interface MeteorsProps {
  count?: number;
  reducedMotion?: boolean;
}

const createMeteorStyles = (count: number): MeteorStyle[] => {
  const random = createSeededRandom(0xbeef);

  return Array.from({ length: count }, () => {
    const duration = 3 + random() * 8;
    const delay = -random() * duration;
    const opacity = 0.45 + random() * 0.35;

    return {
      "--meteor-left": `${(random() * 100).toFixed(2)}%`,
      "--meteor-top": `${(-10 + random() * 25).toFixed(2)}%`,
      "--meteor-duration": `${duration.toFixed(2)}s`,
      "--meteor-delay": `${delay.toFixed(2)}s`,
      "--meteor-opacity": opacity.toFixed(2),
    };
  });
};

const Meteors = ({ count = 18, reducedMotion = false }: MeteorsProps) => {
  const styles = useMemo(() => createMeteorStyles(count), [count]);

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {styles.map((style, index) => (
        <span key={index} aria-hidden className="meteor" style={style} />
      ))}
    </div>
  );
};

export { Meteors };
