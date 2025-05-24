"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-black/80 backdrop-blur-lg border-t border-white/10">
      {/* 3D Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="AR Portfolio"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold gradient-text">MD. SHAZAN MAHMUD ARPON</span>
            </div>
            <p className="text-gray-400">
              Building innovative solutions with modern technologies.
              Passionate about web development, IoT, and AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#skills">Skills</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Connect With Me</h3>
            <div className="flex flex-col space-y-4">
              <SocialLink
                href="https://github.com/arpondark"
                icon={<FaGithub />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/md-shazan-mahmud-arpon"
                icon={<FaLinkedin />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.facebook.com/arpon11241"
                icon={<FaFacebook />}
                label="Facebook"
              />
              <SocialLink
                href="mailto:arpon11241@gmail.com"
                icon={<FaEnvelope />}
                label="Email"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} MD SHAZAN MAHMUD ARPON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.li whileHover={{ x: 5 }}>
      <a
        href={href}
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        {children}
      </a>
    </motion.li>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
      whileHover={{ x: 5 }}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </motion.a>
  );
} 