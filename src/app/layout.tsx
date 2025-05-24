import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientSpaceBackground from "@/components/ClientSpaceBackground";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://arpon007.me'),
  title: "MD SHAZAN MAHMUD ARPON - Fullstack Developer Portfolio",
  description: "Fullstack Developer | IoT Enthusiast | AI Passionate | Building innovative web solutions with modern technologies. Specializing in React, Next.js, Three.js, and TypeScript.",
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
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Software Engineer",
    "UI/UX Developer",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "MD SHAZAN MAHMUD ARPON", url: "https://arpon007.me" }],
  creator: "MD SHAZAN MAHMUD ARPON",
  publisher: "MD SHAZAN MAHMUD ARPON",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  // Open Graph metadata
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://arpon007.me',
    siteName: "MD SHAZAN MAHMUD ARPON - Portfolio",
    title: "MD SHAZAN MAHMUD ARPON - Fullstack Developer Portfolio",
    description: "Fullstack Developer | IoT Enthusiast | AI Passionate | Building innovative web solutions with modern technologies. Specializing in React, Next.js, Three.js, and TypeScript.",
    images: [
      {
        url: 'https://arpon007.me/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MD SHAZAN MAHMUD ARPON - Portfolio Preview',
      }
    ],
  },
  // Additional metadata for better social sharing
  alternates: {
    canonical: 'https://arpon007.me',
  },
  // LinkedIn specific metadata
  other: {
    'linkedin:card': 'summary_large_image',
    'linkedin:title': 'MD SHAZAN MAHMUD ARPON - Fullstack Developer Portfolio',
    'linkedin:description': 'Fullstack Developer | IoT Enthusiast | AI Passionate | Building innovative web solutions with modern technologies. Specializing in React, Next.js, Three.js, and TypeScript.',
    'linkedin:image': 'https://arpon007.me/og-image.png',
    'linkedin:profile': 'https://www.linkedin.com/in/md-shazan-mahmud-arpon/',
    'linkedin:author': 'https://www.linkedin.com/in/md-shazan-mahmud-arpon/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MD SHAZAN MAHMUD ARPON - Fullstack Developer Portfolio",
    description: "Fullstack Developer | IoT Enthusiast | AI Passionate | Building innovative web solutions with modern technologies. Specializing in React, Next.js, Three.js, and TypeScript.",
    images: ['https://arpon007.me/og-image.png'],
    creator: '@arpondark',
    site: '@arpondark',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pEKet2CZDqwJIZaPi402jgemA81QDg4CbmErc0o8CFI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
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
