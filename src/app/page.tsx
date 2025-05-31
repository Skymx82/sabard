"use client";

import dynamic from 'next/dynamic';

// Import dynamique des composants pour éviter les problèmes de rendu côté serveur
const Hero = dynamic(() => import('../components/ui/Hero'), { ssr: false });
const AboutSection = dynamic(() => import('../components/ui/AboutSection'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
    </main>
  );
}
