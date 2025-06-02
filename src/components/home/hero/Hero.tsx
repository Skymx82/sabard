import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Import dynamique du composant de galerie pour éviter les problèmes de rendu côté serveur
const ProjectGallery = dynamic(() => import('./ProjectGallery'), { ssr: false });

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fond avec motif et dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 z-0" />
      
      {/* Motif de grille architectural subtil */}
      <div 
        className="absolute inset-0 opacity-5 z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230056b3' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} 
      />
      {/* Mise en page en deux colonnes */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 z-10">
        {/* Colonne de gauche pour le texte */}
        <div className="flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0056b3]">SABARD</span> BÂTIMENT
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Constructeur immobilier, l'entreprise SABARD développe depuis 2018 ses compétences 
            dans les métiers du gros œuvre à haute technicité et d'entreprise générale.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-[#0056b3] hover:bg-[#003d80] text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105">
              Découvrir nos projets
            </button>
          </motion.div>
        </div>
        
      </div>
      
      {/* Éléments décoratifs */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#0056b3] opacity-10 z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-[#0056b3] opacity-10 z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Galerie de projets uniquement à droite sur desktop */}
      <div className="absolute top-[14%] bottom-0 right-0 w-1/2 z-0 hidden md:block rounded-l-[2rem] overflow-hidden">
        <ProjectGallery />
      </div>
      
      {/* Version mobile de la galerie de projets */}
      <div className="absolute top-[60%] bottom-0 left-0 w-full h-[60vh] z-0 block md:hidden rounded-t-[2rem] overflow-hidden">
        <ProjectGallery />
      </div>
    </section>
  );
};

export default Hero;
