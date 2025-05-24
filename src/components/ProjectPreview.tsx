"use client";

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectPreviewProps {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tech: string[];
}

export default function ProjectPreview({ project }: { project: ProjectPreviewProps }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      x.set(0);
      y.set(0);
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsPreviewOpen(true)}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group cursor-pointer"
        whileHover={{ scale: isMobile ? 1 : 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative h-[400px] bg-black/40 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-purple-500/50">
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* 3D Preview Frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Project Image (Fallback) */}
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Live Preview */}
          <div className="relative h-full w-full">
            <iframe
              src={project.link}
              className={`w-full h-full transition-opacity duration-500 ${
                isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
              title={project.title}
              onLoad={handleIframeLoad}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading="lazy"
            />
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
            )}
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-z-50">
            <h3 className="text-2xl font-bold mb-2 gradient-text">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full Preview Modal */}
      {isPreviewOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setIsPreviewOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-6xl h-[80vh] bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <iframe
              src={project.link}
              className="w-full h-full"
              title={`${project.title} Preview`}
              onLoad={handleIframeLoad}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
              onClick={() => setIsPreviewOpen(false)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
} 