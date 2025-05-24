"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import TechLogos3D from './TechLogos3D';

// Nebula effect component
const Nebula = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create a sphere of particles
      const radius = 15 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Create purple-blue gradient colors
      colors[i * 3] = 0.5 + Math.random() * 0.2;     // R
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.1; // G
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B
    }
    
    return { positions, colors };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0001;
      meshRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
          count={particles.positions.length / 3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
          count={particles.colors.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Main background component
const SpaceScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <>
      {/* Stars */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Nebula effect */}
      <Nebula />
      
      {/* Floating Tech Logos */}
      <TechLogos3D />
      
      {/* Ambient light */}
      <ambientLight intensity={0.1} />
      
      {/* Distant light source */}
      <pointLight position={[10, 10, 10]} intensity={0.2} color="#4f46e5" />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#9333ea" />
    </>
  );
};

// Main component
export default function SpaceBackground3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <SpaceScene />
      </Canvas>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
    </div>
  );
} 