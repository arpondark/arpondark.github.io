"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Tech logos data
const techLogos = [
  { name: 'React', path: '/tech/react.svg', speed: 0.02 },
  { name: 'Next.js', path: '/tech/nextjs.svg', speed: 0.03 },
  { name: 'Node.js', path: '/tech/nodejs.svg', speed: 0.025 },
  { name: 'TypeScript', path: '/tech/typescript.svg', speed: 0.015 },
  { name: 'Python', path: '/tech/python.svg', speed: 0.022 },
  { name: 'TensorFlow', path: '/tech/tensorflow.svg', speed: 0.018 },
  { name: 'Docker', path: '/tech/docker.svg', speed: 0.028 },
  { name: 'MongoDB', path: '/tech/mongodb.svg', speed: 0.023 },
  { name: 'VS Code', path: '/tech/vscode.svg', speed: 0.017 },
  { name: 'Git', path: '/tech/git.svg', speed: 0.021 }
];

// Type for logo instance
type LogoInstance = {
  logo: typeof techLogos[0];
  speed: number;
  position: THREE.Vector3;
};

// Floating logo component
function FloatingLogo({ logo, position, speed }: { 
  logo: typeof techLogos[0]; 
  position: THREE.Vector3; 
  speed: number;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useTexture(logo.path);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Move logo from top to bottom
      meshRef.current.position.y -= speed;
      
      // Reset position when logo goes below viewport
      if (meshRef.current.position.y < -10) {
        meshRef.current.position.y = 10;
        meshRef.current.position.x = (Math.random() - 0.5) * 20;
        meshRef.current.position.z = (Math.random() - 0.5) * 8;
      }
      
      // Rotate the logo
      meshRef.current.rotation.y += 0.01;
      
      // Add slight wobble
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      meshRef.current.rotation.z = Math.cos(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 2.4 : 2}
    >
      {/* Logo plane */}
      <mesh>
        <planeGeometry args={[1.5, 1.5]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={hovered ? 1 : 0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh>
        <planeGeometry args={[1.8, 1.8]} />
        <meshBasicMaterial
          color="#4f46e5"
          transparent
          opacity={hovered ? 0.3 : 0.1}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// Main scene component
function SectionScene() {
  // Create multiple instances of each logo at different positions
  const logoInstances = useMemo(() => {
    const instances: LogoInstance[] = [];
    techLogos.forEach((logo) => {
      // Create 3 instances of each logo
      for (let i = 0; i < 3; i++) {
        instances.push({
          logo,
          speed: logo.speed * (0.8 + Math.random() * 0.4), // Vary speed slightly
          position: new THREE.Vector3(
            (Math.random() - 0.5) * 20,
            10 + Math.random() * 10,
            (Math.random() - 0.5) * 8
          )
        });
      }
    });
    return instances;
  }, []);

  return (
    <>
      {/* Stars background */}
      <Stars
        radius={50}
        depth={30}
        count={3000}
        factor={3}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Floating tech logos */}
      {logoInstances.map((instance, index) => (
        <FloatingLogo
          key={`${instance.logo.name}-${index}`}
          logo={instance.logo}
          position={instance.position}
          speed={instance.speed}
        />
      ))}
      
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#4f46e5" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#9333ea" />
      <spotLight
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.3}
        color="#ffffff"
      />
    </>
  );
}

// Main component
export default function Section3DBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 20], fov: 60 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <SectionScene />
        </Canvas>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
} 