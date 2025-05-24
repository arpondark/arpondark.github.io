"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Technology logos data
const techLogos = [
  { name: 'React', icon: '/tech/react.svg', size: 0.5, speed: 0.2 },
  { name: 'Next.js', icon: '/tech/nextjs.svg', size: 0.5, speed: 0.25 },
  { name: 'Node.js', icon: '/tech/nodejs.svg', size: 0.5, speed: 0.3 },
  { name: 'TypeScript', icon: '/tech/typescript.svg', size: 0.5, speed: 0.15 },
  { name: 'Python', icon: '/tech/python.svg', size: 0.5, speed: 0.22 },
  { name: 'TensorFlow', icon: '/tech/tensorflow.svg', size: 0.5, speed: 0.18 },
  { name: 'Docker', icon: '/tech/docker.svg', size: 0.5, speed: 0.28 },
  { name: 'MongoDB', icon: '/tech/mongodb.svg', size: 0.5, speed: 0.23 },
  { name: 'VS Code', icon: '/tech/vscode.svg', size: 0.5, speed: 0.17 },
  { name: 'Git', icon: '/tech/git.svg', size: 0.5, speed: 0.21 },
];

// Individual floating logo component
const FloatingLogo = ({ logo, index }: { logo: typeof techLogos[0], index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(logo.icon);
  
  // Calculate initial position in a sphere
  const position = useMemo(() => {
    const radius = 8 + Math.random() * 4; // Random radius between 8 and 12
    const theta = (index / techLogos.length) * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    return {
      x: radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi)
    };
  }, [index]);

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Rotate around its own axis
      meshRef.current.rotation.y += 0.01;
      
      // Floating motion
      meshRef.current.position.y = position.y + Math.sin(time * logo.speed) * 0.5;
      
      // Orbital motion
      const orbitSpeed = 0.1;
      const orbitRadius = 0.5;
      meshRef.current.position.x = position.x + Math.cos(time * orbitSpeed) * orbitRadius;
      meshRef.current.position.z = position.z + Math.sin(time * orbitSpeed) * orbitRadius;
    }
  });

  return (
    <mesh ref={meshRef} position={[position.x, position.y, position.z]}>
      <planeGeometry args={[logo.size, logo.size]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Main component
export default function TechLogos3D() {
  return (
    <group>
      {techLogos.map((logo, index) => (
        <FloatingLogo key={logo.name} logo={logo} index={index} />
      ))}
    </group>
  );
} 