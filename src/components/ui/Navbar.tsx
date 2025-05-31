"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effet pour détecter le défilement et changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-white/30 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-32">
            <Image 
              src="/logo-sabard.jpg" 
              alt="SABARD Bâtiment" 
              width={120} 
              height={40} 
              className="object-contain" 
              priority 
            />
          </div>
        </Link>

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {['Accueil', 'Groupe', 'Actualités', 'Projets'].map((item, i) => (
            <div key={item}>
              <Link
                href={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
                className={`font-medium text-base hover:text-[#0056b3] transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                {item}
              </Link>
            </div>
          ))}
          <div>
            <Link
              href="/contact"
              className="bg-[#0056b3] hover:bg-[#003d80] text-white px-5 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              CONTACTEZ-NOUS
            </Link>
          </div>
        </div>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white shadow-lg rounded-b-lg mx-4 mt-2 p-4 flex flex-col space-y-4">
          {['Accueil', 'Groupe', 'Projets', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
              className="font-medium text-gray-800 hover:text-[#0056b3] py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#0056b3] hover:bg-[#003d80] text-white px-5 py-2 rounded-md transition-all duration-300 text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACTEZ-NOUS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;