"use client";

import { createSeededRandom } from "@/lib/seeded-random";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { readInitialDark, useBackgroundTheme } from "./use-background-theme";

/**
 * Star field rendered as a single GPU point cloud.
 *
 * Positions, sizes and twinkle phases are baked into buffer attributes, so the
 * whole sky is one draw call. A tiny custom shader keeps the stars round and
 * gives each one its own size, twinkle and occasional four-point sparkle
 * instead of one flat square size.
 */

const STAR_COUNT = 9000;
const RADIUS_MIN = 0.45;
const RADIUS_MAX = 2.4;

const DARK_STARS = { color: "#eef2ff", opacity: 0.9 } as const;
const LIGHT_STARS = { color: "#18181b", opacity: 0.4 } as const;

const VERTEX_SHADER = /* glsl */ `
  uniform float uPixelRatio;
  uniform float uSize;
  uniform float uTime;

  attribute float aSize;
  attribute float aPhase;
  attribute float aSparkle;

  varying float vTwinkle;
  varying float vSparkle;

  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;

    float depth = max(-viewPosition.z, 0.0001);

    // Most stars just shimmer. A subset glints with a short, bright pulse.
    float sparkleWave = max(
      0.0,
      sin(uTime * (0.8 + aSparkle * 1.4) + aPhase * 2.7)
    );
    vSparkle = pow(sparkleWave, 14.0) * aSparkle;
    vTwinkle = 0.72 + 0.28 * sin(uTime * 0.8 + aPhase);

    float baseSize = aSize * uSize * uPixelRatio / depth;
    gl_PointSize = clamp(baseSize * (1.0 + vSparkle * 4.0), 0.5, 28.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;

  varying float vTwinkle;
  varying float vSparkle;

  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float distanceToCenter = length(point);

    if (distanceToCenter > 0.5) {
      discard;
    }

    float core = pow(1.0 - distanceToCenter * 2.0, 2.0);

    // A thin horizontal and vertical streak, visible only while glinting.
    float spikeHorizontal = max(0.0, 1.0 - abs(point.y) * 14.0)
      * max(0.0, 1.0 - abs(point.x) * 2.0);
    float spikeVertical = max(0.0, 1.0 - abs(point.x) * 14.0)
      * max(0.0, 1.0 - abs(point.y) * 2.0);
    float spikes = (spikeHorizontal + spikeVertical) * vSparkle;

    float brightness = min(vTwinkle + vSparkle, 1.0);
    float alpha = core * brightness * uOpacity + spikes * uOpacity * 0.85;

    gl_FragColor = vec4(uColor, min(alpha, 1.0));
  }
`;

const createStarGeometry = () => {
  const random = createSeededRandom(0x5eed);

  const positions = new Float32Array(STAR_COUNT * 3);
  const sizes = new Float32Array(STAR_COUNT);
  const phases = new Float32Array(STAR_COUNT);
  const sparkles = new Float32Array(STAR_COUNT);

  for (let index = 0; index < STAR_COUNT; index += 1) {
    // Uniform random direction on a sphere, then push it out to a shell so
    // stars are spread through depth instead of clustering around the camera.
    const vertical = random() * 2 - 1;
    const angle = random() * Math.PI * 2;
    const ring = Math.sqrt(1 - vertical * vertical);
    const radius = RADIUS_MIN + random() * (RADIUS_MAX - RADIUS_MIN);

    positions[index * 3] = Math.cos(angle) * ring * radius;
    positions[index * 3 + 1] = vertical * radius;
    positions[index * 3 + 2] = Math.sin(angle) * ring * radius;

    // Most stars are faint pinpricks; a few are noticeably brighter.
    sizes[index] = 0.35 + Math.pow(random(), 2.4) * 1.65;
    phases[index] = random() * Math.PI * 2;

    // Roughly one in six stars is a strong sparkler; the rest barely glint.
    const sparkleRoll = random();
    sparkles[index] =
      sparkleRoll < 0.16 ? 0.55 + random() * 0.45 : sparkleRoll * 0.12;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aSparkle", new THREE.BufferAttribute(sparkles, 1));

  return geometry;
};

interface StarFieldProps {
  reducedMotion: boolean;
}

const StarField = ({ reducedMotion }: StarFieldProps) => {
  const parallaxGroup = useRef<THREE.Group>(null);
  const spinGroup = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const dpr = useThree((state) => state.viewport.dpr);
  const invalidate = useThree((state) => state.invalidate);

  const geometry = useMemo(() => createStarGeometry(), []);
  useEffect(() => () => geometry.dispose(), [geometry]);

  const uniforms = useMemo(() => {
    const initialIsDark = readInitialDark();
    const starTheme: { color: string; opacity: number } = initialIsDark
      ? DARK_STARS
      : LIGHT_STARS;

    return {
      uColor: { value: new THREE.Color(starTheme.color) },
      uOpacity: { value: starTheme.opacity },
      uPixelRatio: { value: 1 },
      uSize: { value: 2 },
      uTime: { value: 0 },
    };
  }, []);

  useEffect(() => {
    uniforms.uPixelRatio.value = dpr;
  }, [dpr, uniforms]);

  const { color: targetColor, opacity: targetOpacity } = useBackgroundTheme(
    DARK_STARS,
    LIGHT_STARS,
  );

  useEffect(() => {
    if (!reducedMotion) return;

    uniforms.uColor.value.copy(targetColor);
    uniforms.uOpacity.value = targetOpacity;
    invalidate();
  }, [invalidate, reducedMotion, targetColor, targetOpacity, uniforms]);

  useEffect(() => {
    if (reducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [reducedMotion]);

  useFrame((_, delta) => {
    if (reducedMotion) return;

    // Clamp the step so a long-gap frame can't jump the sky.
    const step = Math.min(delta, 0.05);

    if (spinGroup.current) {
      spinGroup.current.rotation.y += step * 0.008;
      spinGroup.current.rotation.z += step * 0.003;
    }

    if (parallaxGroup.current) {
      const damping = 3;
      parallaxGroup.current.rotation.x = THREE.MathUtils.damp(
        parallaxGroup.current.rotation.x,
        pointer.current.y * 0.05,
        damping,
        step,
      );
      parallaxGroup.current.rotation.y = THREE.MathUtils.damp(
        parallaxGroup.current.rotation.y,
        pointer.current.x * 0.07,
        damping,
        step,
      );
    }

    uniforms.uTime.value += step;
    uniforms.uColor.value.lerp(targetColor, 1 - Math.exp(-5 * step));
    uniforms.uOpacity.value = THREE.MathUtils.damp(
      uniforms.uOpacity.value,
      targetOpacity,
      5,
      step,
    );
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={parallaxGroup}>
      <group ref={spinGroup}>
        <points geometry={geometry} frustumCulled={false}>
          <shaderMaterial
            uniforms={uniforms}
            vertexShader={VERTEX_SHADER}
            fragmentShader={FRAGMENT_SHADER}
            transparent
            depthWrite={false}
            depthTest={false}
            toneMapped={false}
          />
        </points>
      </group>
    </group>
  );
};

export { StarField };
