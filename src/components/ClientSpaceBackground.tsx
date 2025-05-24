"use client";

import dynamic from 'next/dynamic';

const SpaceBackground3D = dynamic(() => import('./SpaceBackground3D'), {
  ssr: false,
});

export default function ClientSpaceBackground() {
  return <SpaceBackground3D />;
} 