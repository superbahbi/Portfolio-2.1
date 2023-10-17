"use client";
import { PointMaterial, Points, Trail } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere as randomInSphere } from "maath/random";
import { useRef } from "react";
import { Color, type Mesh } from "three";

const sphere = randomInSphere(new Float32Array(35000), { radius: 1 });

const Stars = (props: any) => {
  const ref = useRef<Mesh>();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 300;
      ref.current.rotation.z += delta / 300;
    }
  });
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
          color="#ffffff"
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

function ShootingStar({
  delay = 0,
  starting = 0,
  velocity = 1,
}: {
  delay?: number;
  starting?: number;
  velocity?: number;
}) {
  const ref = useRef<any>();
  // useFrame is a hook from react-three/fiber that allows us to run a function on every frame
  useFrame((state) => {
    // Get the elapsed time from the start of the animation and scale it down by half
    const t = state.clock.getElapsedTime() * 0.5;

    // Check if the ref is currently pointing to an object
    if (ref.current) {
      // Set the position of the object the ref is pointing to
      // The x position is set to the sine of the elapsed time multiplied by 4
      // The y position is set to the arctangent of the elapsed time multiplied by the cosine of half the elapsed time, all multiplied by 2
      // The z position is set to the cosine of the elapsed time multiplied by 4
      let x = Math.sin(t) * 4;
      let y = Math.atan(t) * Math.cos(t / 2) * 2;
      let z = Math.cos(t) * 4;
      if ((x > 3 || x > -3) && (y > -1 || y > 1) && z > -3) {
        x = 0;
        z = 0;
        y = 0;
      }
      ref.current.position.set(x, y, z);
    }
  });
  return (
    // Create a Trail component with specific properties
    <Trail
      // Set the width of the trail to 0.05
      width={0.05}
      // Set the length of the trail to 8
      length={8}
      // Set the color of the trail to a new Color instance with RGB values (2, 1, 10)
      color={new Color(2, 1, 10)}
      // Set the attenuation of the trail to a function that squares the input time (t)
      attenuation={(t) => t * t}
    >
      {/* // Create a mesh component and assign the ref to it */}
      <mesh ref={ref}>
        {/* // Set the geometry of the mesh to a sphere with radius 0.005 */}
        <sphereGeometry args={[0.005]} />
        {/* // Set the material of the mesh to a basic material with color RGB values (10, 1, 10) and disable tone mapping */}
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </Trail>
  );
}

const BackgroundCanvas = (className: any) => {
  return (
    <Canvas
      className="animated-fade-in fixed inset-0 z-0"
      camera={{ position: [0, 0, 0] }}
    >
      {/* <ShootingStar delay={4} starting={0.4} velocity={2} /> */}
      <Stars />
    </Canvas>
  );
};
export { BackgroundCanvas };
