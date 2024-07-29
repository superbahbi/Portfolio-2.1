"use client";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere as randomInSphere } from "maath/random";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { type Mesh } from "three";

const sphere = randomInSphere(new Float32Array(35000), { radius: 1 });

const Stars = (props: any) => {
  const ref = useRef<Mesh>();
  const { theme } = useTheme();
  const [color, setColor] = useState("");
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 300;
      ref.current.rotation.z += delta / 300;
    }
  });
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const appliedTheme = theme === "system" ? systemTheme : theme;
    setColor(appliedTheme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color={color}
          size={0.001}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const BackgroundCanvas = ({ className }: { className?: string }) => {
  return (
    <Canvas
      className={`animated-fade-in fixed inset-0 z-0 ${className}`}
      camera={{ position: [0, 0, 0] }}
    >
      <Stars />
    </Canvas>
  );
};

export { BackgroundCanvas };
