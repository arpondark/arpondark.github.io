import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientSpaceBackground from "@/components/ClientSpaceBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD SHAZAN MAHMUD ARPON - Portfolio",
  description: "Fullstack Developer | IoT Enthusiast | AI Passionate",
  keywords: [
    "MD SHAZAN MAHMUD ARPON",
    "Fullstack Developer",
    "Web Developer",
    "IoT Developer",
    "UIU",
    "Bangladesh",
    "React",
    "Next.js",
    "Three.js",
  ],
  icons: {
    icon: [
      {
        url: '/logo.png',
        type: 'image/png',
      }
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
  manifest: '/manifest.json',
  themeColor: '#4f46e5',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white min-h-screen relative`}>
        {/* 3D Space Background */}
        <ClientSpaceBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
