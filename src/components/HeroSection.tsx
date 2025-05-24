"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Dynamically import the 3D component
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-black to-slate-900" />}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">MD SHAZAN MAHMUD ARPON</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Fullstack Developer | IoT Enthusiast | AI Passionate
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Computer Science Student at United International University, Bangladesh
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/arpondark"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-2xl hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-shazan-mahmud-arpon"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-2xl hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/arpon11241"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-2xl hover:scale-110 transition-transform"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-2 bg-white/50 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 