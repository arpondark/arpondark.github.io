"use client";

import { motion } from "framer-motion";
import Section3DBackground from "./Section3DBackground";

export default function AboutSection() {
  return (
    <Section3DBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto px-4"
      >
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I&apos;m a passionate technology enthusiast with a keen interest in Fullstack Web Development, IoT, and AI. 
            My journey in tech has led me to explore various domains including Fullstack Web Development, 
            IoT, and AI. I love creating immersive digital experiences and solving complex problems 
            through code. When I&apos;m not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or sharing my knowledge with the tech community.
          </p>
        </div>
      </motion.div>
    </Section3DBackground>
  );
} 