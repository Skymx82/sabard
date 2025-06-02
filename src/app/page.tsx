"use client";

import dynamic from 'next/dynamic';

// Import dynamique des composants pour éviter les problèmes de rendu côté serveur
const Hero = dynamic(() => import('../components/home/hero/Hero'), { ssr: false });
const AboutSection = dynamic(() => import('../components/home/about/AboutSection'), { ssr: false });
const PartnersSection = dynamic(() => import('../components/home/partners/PartnersSection'), { ssr: false });
const ContactSection = dynamic(() => import('../components/home/contact/ContactSection'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
    </main>
  );
}
