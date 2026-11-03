"use client";

import { createSeededRandom } from "@/lib/seeded-random";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { readInitialDark, useBackgroundTheme } from "./use-background-theme";

/**
 * Meteor shower rendered inside the same WebGL scene as the star field.
 *
 * Each meteor follows a quadratic Bézier path. Its tail is drawn as a short
 * chain of soft points sampled backwards along that path, so the streak bends
 * with the curve instead of staying a straight line. Everything is baked into
 * buffer attributes and animated in the vertex shader: the whole shower is one
 * draw call and costs no per-frame JavaScript.
 */

const METEOR_COUNT = 18;
const TRAIL_SAMPLES = 72;
const METEOR_DEPTH = 1.2;
const METEOR_FOV_FALLBACK = 70;

const DARK_METEORS = { color: "#d4d4d8", opacity: 0.9 } as const;
const LIGHT_METEORS = { color: "#52525b", opacity: 0.75 } as const;

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;

  attribute vec3 aStart;
  attribute vec3 aControl;
  attribute vec3 aEnd;
  attribute float aOffset;
  attribute float aSpeed;
  attribute float aPhase;
  attribute float aTail;
  attribute float aSize;
  attribute float aAlpha;

  varying float vAlpha;

  void main() {
    float progress = fract(uTime * aSpeed + aPhase);
    float curveT = clamp(progress - aOffset * aTail, 0.0, 1.0);
    float inverseT = 1.0 - curveT;

    // Quadratic Bézier from the start, around the control point, to the end.
    vec3 pathPosition = inverseT * inverseT * aStart
      + 2.0 * inverseT * curveT * aControl
      + curveT * curveT * aEnd;

    vec4 viewPosition = modelViewMatrix * vec4(pathPosition, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = aSize * uPixelRatio;

    float fadeIn = smoothstep(0.0, 0.04, progress);
    float fadeOut = 1.0 - smoothstep(0.82, 1.0, progress);
    float tailFade = pow(1.0 - aOffset, 1.5);
    float behindStart = smoothstep(0.0, 0.01, progress - aOffset * aTail);

    vAlpha = fadeIn * fadeOut * tailFade * behindStart * aAlpha;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;

  varying float vAlpha;

  void main() {
    float distanceToCenter = length(gl_PointCoord - 0.5);

    if (distanceToCenter > 0.5) {
      discard;
    }

    float glow = pow(1.0 - distanceToCenter * 2.0, 1.8);
    gl_FragColor = vec4(uColor, glow * vAlpha * uOpacity);
  }
`;

interface MeteorGeometryOptions {
  count: number;
  halfWidth: number;
  halfHeight: number;
}

const createMeteorGeometry = ({
  count,
  halfWidth,
  halfHeight,
}: MeteorGeometryOptions) => {
  const random = createSeededRandom(0xbeef);
  const verticesPerMeteor = TRAIL_SAMPLES + 1;
  const vertexCount = count * verticesPerMeteor;

  const starts = new Float32Array(vertexCount * 3);
  const controls = new Float32Array(vertexCount * 3);
  const ends = new Float32Array(vertexCount * 3);
  const offsets = new Float32Array(vertexCount);
  const speeds = new Float32Array(vertexCount);
  const phases = new Float32Array(vertexCount);
  const tails = new Float32Array(vertexCount);
  const sizes = new Float32Array(vertexCount);
  const alphas = new Float32Array(vertexCount);

  for (let meteor = 0; meteor < count; meteor += 1) {
    const startX = (-1.05 + random() * 1.9) * halfWidth;
    const startY = (1 + random() * 0.18) * halfHeight;
    const travelX = (0.7 + random() * 0.6) * 2 * halfHeight;
    const travelY = (0.25 + random() * 0.55) * 2 * halfHeight;

    // Pull the control point toward the horizontal, so the path leaves the
    // start shallow and steepens as it falls.
    const endX = startX + travelX;
    const endY = startY - travelY;
    const controlX = startX + travelX * 0.6;
    const controlY = startY - travelY * 0.15;

    const speed = 1 / (3 + random() * 8);
    const phase = random();
    const tail = 0.05 + random() * 0.045;
    const alpha = 0.45 + random() * 0.35;
    const headSize = 7 + random() * 3;

    const base = meteor * verticesPerMeteor;

    for (let vertex = 0; vertex < verticesPerMeteor; vertex += 1) {
      const index = base + vertex;
      const isHead = vertex === 0;
      // The head is duplicated at offset 0 so it can use a larger point size;
      // trail samples start one step behind it.
      const offset = isHead ? 0 : vertex / TRAIL_SAMPLES;

      const positionIndex = index * 3;
      starts[positionIndex] = startX;
      starts[positionIndex + 1] = startY;
      starts[positionIndex + 2] = -METEOR_DEPTH;

      controls[positionIndex] = controlX;
      controls[positionIndex + 1] = controlY;
      controls[positionIndex + 2] = -METEOR_DEPTH;

      ends[positionIndex] = endX;
      ends[positionIndex + 1] = endY;
      ends[positionIndex + 2] = -METEOR_DEPTH;

      offsets[index] = offset;
      speeds[index] = speed;
      phases[index] = phase;
      tails[index] = tail;
      alphas[index] = alpha;
      sizes[index] = isHead ? headSize : 3.2 * (1 - offset * 0.5);
    }
  }

  const geometry = new THREE.BufferGeometry();
  const startAttribute = new THREE.BufferAttribute(starts, 3);
  geometry.setAttribute("position", startAttribute);
  geometry.setAttribute("aStart", startAttribute);
  geometry.setAttribute("aControl", new THREE.BufferAttribute(controls, 3));
  geometry.setAttribute("aEnd", new THREE.BufferAttribute(ends, 3));
  geometry.setAttribute("aOffset", new THREE.BufferAttribute(offsets, 1));
  geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
  geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aTail", new THREE.BufferAttribute(tails, 1));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute("aAlpha", new THREE.BufferAttribute(alphas, 1));

  return geometry;
};

interface MeteorFieldProps {
  count?: number;
}

const MeteorField = ({ count = METEOR_COUNT }: MeteorFieldProps) => {
  const size = useThree((state) => state.size);
  const camera = useThree((state) => state.camera);
  const dpr = useThree((state) => state.viewport.dpr);

  const { color: targetColor, opacity: targetOpacity } = useBackgroundTheme(
    DARK_METEORS,
    LIGHT_METEORS,
  );

  const halfHeight = useMemo(() => {
    const fov =
      camera instanceof THREE.PerspectiveCamera
        ? camera.fov
        : METEOR_FOV_FALLBACK;

    return Math.tan(THREE.MathUtils.degToRad(fov / 2)) * METEOR_DEPTH;
  }, [camera]);

  const aspect = size.height > 0 ? size.width / size.height : 1;
  const halfWidth = halfHeight * aspect;

  const uniforms = useMemo(() => {
    const initialTheme: { color: string; opacity: number } = readInitialDark()
      ? DARK_METEORS
      : LIGHT_METEORS;

    return {
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uColor: { value: new THREE.Color(initialTheme.color) },
      uOpacity: { value: initialTheme.opacity },
    };
  }, []);

  const geometry = useMemo(
    () => createMeteorGeometry({ count, halfWidth, halfHeight }),
    [count, halfHeight, halfWidth],
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  useEffect(() => {
    uniforms.uPixelRatio.value = dpr;
  }, [dpr, uniforms]);

  useFrame((_, delta) => {
    const step = Math.min(delta, 0.05);

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
    <points geometry={geometry} frustumCulled={false} renderOrder={1}>
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
  );
};

export { MeteorField };
