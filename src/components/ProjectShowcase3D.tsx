"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { useTexture, Html, Environment, PresentationControls, GradientTexture } from "@react-three/drei";
import * as THREE from "three";
import Image from "next/image";

// Extend Three.js objects
extend(THREE.Group);

// Background gradient colors
const gradientColors = ['#1a1a1a', '#2d1b69', '#1a1a1a'];

// Background component
function Background() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle movement based on time
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]} scale={[viewport.width * 2, viewport.height * 2, 1]}>
      <planeGeometry />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 0.5, 1]}
          colors={gradientColors}
          size={1024}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

// Animated particles component
function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particlesCount = 1000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particlesCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#4f46e5"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const projects = [
  {
    title: "Love Proposal Platform",
    description: "A beautiful platform for creating and sharing marriage proposals with interactive cards and animations.",
    image: "/love-propose.png",
    link: "https://www.lovepropose.fun/",
    github: "https://github.com/arpondark/love-propose",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    highlights: ["Interactive Cards", "Real-time Updates", "Custom Animations", "Responsive Design"]
  },
  {
    title: "Barta Test",
    description: "A news portal application with real-time updates and interactive features.",
    image: "/barta-test.png",
    link: "https://bartatest.netlify.app/",
    github: "https://github.com/arpondark/barta-test",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    highlights: ["Real-time News", "User Authentication", "Admin Dashboard", "Search Functionality"]
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with rich text editing and social features.",
    image: "https://placehold.co/600x400/1a1a1a/4f46e5?text=Blog+Platform",
    link: "https://blog-arpon007.netlify.app/",
    github: "https://github.com/arpondark/blog-platform",
    tech: ["React", "Firebase", "Material UI", "Redux"],
    highlights: ["Rich Text Editor", "Social Sharing", "Comment System", "User Profiles"]
  },
  {
    title: "Love Me Fun",
    description: "An interactive dating platform with modern UI and real-time chat features.",
    image: "https://placehold.co/600x400/1a1a1a/4f46e5?text=Love+Me+Fun",
    link: "https://love-mefun.netlify.app/",
    github: "https://github.com/arpondark/love-me",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    highlights: ["Real-time Chat", "User Matching", "Profile Customization", "Location-based Search"]
  },
  {
    title: "Todo App",
    description: "A feature-rich todo application with drag-and-drop functionality and task management.",
    image: "https://placehold.co/600x400/1a1a1a/4f46e5?text=Todo+App",
    link: "https://sage-tapioca-7c648d.netlify.app/",
    github: "https://github.com/arpondark/todo-app",
    tech: ["React", "TypeScript", "Tailwind CSS", "DnD Kit"],
    highlights: ["Drag & Drop", "Task Categories", "Progress Tracking", "Dark/Light Mode"]
  }
];

function ProjectCard({ project, index, totalProjects, isSelected, onSelect }: { 
  project: typeof projects[0]; 
  index: number; 
  totalProjects: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useTexture(project.image);
  const [hovered, setHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Calculate position in a circle
  const angle = (index / totalProjects) * Math.PI * 2;
  const radius = isSelected ? 0 : 12;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const y = isSelected ? 0 : Math.sin(index * 0.5) * 2;

  useEffect(() => {
    if (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
      setIsLoaded(true);
    }
  }, [texture]);

  useFrame((state) => {
    if (meshRef.current && !isSelected) {
      // Smooth rotation to face center
      meshRef.current.lookAt(0, 0, 0);
      
      // Floating animation
      meshRef.current.position.y = y + Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.2;
      
      // Hover effect
      if (hovered) {
        meshRef.current.rotation.y += 0.02;
      }
    }
  });

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect();
  };

  return (
    <primitive
      object={new THREE.Group()}
      ref={meshRef}
      position={[x, y, z]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
      scale={hovered ? 1.1 : isSelected ? 1.5 : 1}
    >
      {/* Card background with gradient */}
      <mesh>
        <boxGeometry args={[4, 6, 0.1]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.95}
          envMapIntensity={1}
        />
      </mesh>

      {/* Project image with loading state */}
      <mesh position={[0, 0.5, 0.06]}>
        <planeGeometry args={[3.8, 2.5]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={isLoaded ? 0.9 : 0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Loading placeholder */}
      {!isLoaded && (
        <mesh position={[0, 0.5, 0.06]}>
          <planeGeometry args={[3.8, 2.5]} />
          <meshBasicMaterial color="#2d2d2d" />
        </mesh>
      )}

      {/* Project info with clickable links */}
      <Html
        position={[0, -2, 0.06]}
        style={{
          width: '300px',
          padding: '15px',
          color: 'white',
          textAlign: 'center',
          pointerEvents: 'auto',
          background: 'rgba(26, 26, 26, 0.95)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        transform
        occlude
      >
        <div 
          className="text-center space-y-3"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-bold text-purple-400 line-clamp-1">{project.title}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
          
          {/* Project highlights */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-2 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1 justify-center mt-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 justify-center mt-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors border border-purple-500/20 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.link, '_blank');
              }}
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, '_blank');
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </Html>

      {/* Enhanced glow effect */}
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[4.2, 6.2]} />
        <meshBasicMaterial
          color="#4f46e5"
          transparent
          opacity={hovered ? 0.4 : isSelected ? 0.3 : 0.1}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </primitive>
  );
}

// Card View Component
function ProjectCardView({ project }: { project: typeof projects[0] }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      className="relative group cursor-pointer"
    >
      <div 
        className="relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-white/10"
        onClick={() => window.open(project.link, '_blank')}
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
          )}
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onLoad={() => setIsImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-2 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={(e) => handleLinkClick(e, project.link)}
              className="flex-1 px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors border border-purple-500/20 text-center cursor-pointer"
            >
              Live Demo
            </button>
            <button
              onClick={(e) => handleLinkClick(e, project.github)}
              className="flex-1 px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 text-center cursor-pointer"
            >
              GitHub
            </button>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useFrame(() => {
    if (groupRef.current && !selectedProject) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <>
      {/* Background */}
      <Background />
      <Particles />

      {/* Enhanced lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#4f46e5" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#9333ea" />
      <spotLight
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.6}
        color="#ffffff"
      />

      {/* Environment for better reflections */}
      <Environment preset="city" />

      {/* Project cards with selection handling */}
      <primitive
        object={new THREE.Group()}
        ref={groupRef}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            totalProjects={projects.length}
            isSelected={selectedProject === index}
            onSelect={() => setSelectedProject(selectedProject === index ? null : index)}
          />
        ))}
      </primitive>
    </>
  );
}

export default function ProjectShowcase3D() {
  const [viewMode, setViewMode] = useState<'3d' | 'cards'>('3d');

  return (
    <div className="w-full min-h-[800px] relative">
      {/* View Mode Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex gap-2">
          <button
            onClick={() => setViewMode('3d')}
            className={`px-4 py-1 rounded-full text-sm transition-colors cursor-pointer ${
              viewMode === '3d'
                ? 'bg-purple-600 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            3D View
          </button>
          <button
            onClick={() => setViewMode('cards')}
            className={`px-4 py-1 rounded-full text-sm transition-colors cursor-pointer ${
              viewMode === 'cards'
                ? 'bg-purple-600 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Card View
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === '3d' ? (
          <motion.div
            key="3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-[800px]"
          >
            <Canvas
              camera={{ position: [0, 0, 20], fov: 45 }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
              }}
              dpr={[1, 2]}
            >
              <PresentationControls
                global
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
                enabled={true}
                snap={true}
              >
                <Scene />
              </PresentationControls>
            </Canvas>
            
            {/* Instructions overlay */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
              <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                <p className="text-gray-300 text-sm">
                  <span className="text-purple-400">Click</span> to focus • <span className="text-purple-400">Hover</span> to interact • <span className="text-purple-400">Drag</span> to rotate
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 py-8 relative"
          >
            {/* Background gradient for card view */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCardView key={project.title} project={project} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}