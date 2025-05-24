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
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arpon007.me',
    siteName: "MD SHAZAN MAHMUD ARPON - Portfolio",
    title: "MD SHAZAN MAHMUD ARPON - Portfolio",
    description: "Fullstack Developer | IoT Enthusiast | AI Passionate | Building innovative web solutions with modern technologies",
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
    'linkedin:title': 'MD SHAZAN MAHMUD ARPON - Portfolio',
    'linkedin:description': 'Fullstack Developer | IoT Enthusiast | AI Passionate | Building innovative web solutions with modern technologies',
    'linkedin:image': 'https://arpon007.me/og-image.png',
    'linkedin:profile': 'https://www.linkedin.com/in/md-shazan-mahmud-arpon/',
    'linkedin:author': 'https://www.linkedin.com/in/md-shazan-mahmud-arpon/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MD SHAZAN MAHMUD ARPON - Portfolio",
    description: "Fullstack Developer | IoT Enthusiast | AI Passionate | Building innovative web solutions with modern technologies",
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
