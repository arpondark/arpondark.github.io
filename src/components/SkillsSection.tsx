"use client";

import { motion } from 'framer-motion';
import SkillLogo from './SkillLogo';
import Section3DBackground from "./Section3DBackground";

const skills = {
  web: {
    title: "Web Development",
    icon: "🌐",
    items: [
      { 
        name: "HTML5", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
        fallback: "🌐", 
        level: 90 
      },
      { 
        name: "CSS3", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
        fallback: "🎨", 
        level: 85 
      },
      { 
        name: "JavaScript", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
        fallback: "📜", 
        level: 88 
      },
      { 
        name: "React.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
        fallback: "⚛️", 
        level: 85 
      },
      { 
        name: "Next.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
        fallback: "▲", 
        level: 80 
      },
      { 
        name: "Node.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
        fallback: "🟢", 
        level: 82 
      },
      { 
        name: "Express.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", 
        fallback: "🚂", 
        level: 80 
      },
      { 
        name: "PHP", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", 
        fallback: "🐘", 
        level: 75 
      },
      { 
        name: "Laravel", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg", 
        fallback: "🪶", 
        level: 70 
      },
      { 
        name: "Spring Boot", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", 
        fallback: "🌱", 
        level: 65 
      }
    ]
  },
  languages: {
    title: "Programming Languages",
    icon: "💻",
    items: [
      { 
        name: "C", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", 
        fallback: "🔷", 
        level: 85 
      },
      { 
        name: "C++", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", 
        fallback: "🔶", 
        level: 80 
      },
      { 
        name: "Java", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
        fallback: "☕", 
        level: 82 
      },
      { 
        name: "Python", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
        fallback: "🐍", 
        level: 75 
      },
      { 
        name: "TypeScript", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", 
        fallback: "📘", 
        level: 80 
      },
      { 
        name: "C#", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", 
        fallback: "🎯", 
        level: 70 
      },
      { 
        name: "Embedded C", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", 
        fallback: "🔌", 
        level: 75 
      }
    ]
  },
  iot: {
    title: "IoT & AI",
    icon: "🤖",
    items: [
      { 
        name: "Arduino", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", 
        fallback: "🔌", 
        level: 85 
      },
      { 
        name: "ESP32", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", 
        fallback: "📡", 
        level: 80 
      },
      { 
        name: "Raspberry Pi", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", 
        fallback: "🍓", 
        level: 75 
      },
      { 
        name: "OpenCV", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", 
        fallback: "👁️", 
        level: 70 
      },
      { 
        name: "PyTorch", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", 
        fallback: "🔥", 
        level: 65 
      },
      { 
        name: "Sensor Integration", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", 
        fallback: "📊", 
        level: 80 
      },
      { 
        name: "Wireless Comms", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", 
        fallback: "📶", 
        level: 75 
      }
    ]
  }
};

export default function SkillsSection() {
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          >
            Skills & Expertise
          </motion.h2>

          {Object.entries(skills).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-semibold gradient-text">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <SkillLogo skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section3DBackground>
  );
} 