"use client";

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-bold text-2xl text-[#0056b3] mb-4">SABARD</div>
            <p className="text-gray-600 mb-4">
              Constructeur immobilier, l'entreprise SABARD développe depuis 2018 ses compétences 
              dans les métiers du gros œuvre à haute technicité et d'entreprise générale.
            </p>
          </div>
          
          {/* Liens rapides */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Liens rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'Groupe', 'Projets', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#0056b3] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Nos projets */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Nos projets</h3>
            <ul className="space-y-2">
              {['Logements collectifs', 'Établissements publics', 'Rénovations', 'Bâtiments industriels'].map((item) => (
                <li key={item}>
                  <Link 
                    href="/projets"
                    className="text-gray-600 hover:text-[#0056b3] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#0056b3] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">
                  Adresse de l'entreprise, 45000 Orléans
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#0056b3] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">
                  contact@sabard.fr
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#0056b3] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">
                  +33 (0)2 XX XX XX XX
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Ligne de séparation */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SABARD Bâtiment. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <Link href="/mentions-legales" className="text-gray-500 text-sm hover:text-[#0056b3] transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-500 text-sm hover:text-[#0056b3] transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;