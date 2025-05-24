"use client";

import { motion } from "framer-motion";
import Section3DBackground from "./Section3DBackground";
import ProjectShowcase3D from "./ProjectShowcase3D";

export default function ProjectsSection() {
  return (
    <Section3DBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4"
      >
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <ProjectShowcase3D />
        </div>
      </motion.div>
    </Section3DBackground>
  );
} 