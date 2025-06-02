import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';

// Données des projets avec les images réelles
const projectsData = [
  {
    id: 1,
    title: "Crédit Agricole Business Center",
    description: "Bâtiment R+2 à usage de bureaux avec auditorium de 134 places",
    category: "Tertiaire",
    location: "Orléans (45)",
    imageUrl: "/images/projects/credit-agricole.jpg"
  },
  {
    id: 2,
    title: "Les Jardins d'Idyllis",
    description: "Construction d'un ensemble de 81 logements et d'un parc de stationnement",
    category: "Logements",
    location: "Chartres (28)",
    imageUrl: "/images/projects/jardins-idyllis.jpg"
  },
  {
    id: 3,
    title: "Symbiose",
    description: "Construction de 40 logements collectifs",
    category: "Logements",
    location: "Saint-Jean-de-Braye (45)",
    imageUrl: "/images/projects/symbiose.jpg"
  },
  {
    id: 4,
    title: "Convergence",
    description: "Construction d'une résidence de 17 logements, un commerce et un local d'activité",
    category: "Mixte",
    location: "Orléans (45)",
    imageUrl: "/images/projects/convergence.jpg"
  },
  {
    id: 5,
    title: "Coligny",
    description: "Construction d'un immeuble de 50 logements et bureaux",
    category: "Mixte",
    location: "Orléans (45)",
    imageUrl: "/images/projects/coligny.jpg"
  }
];

// Composant principal de la galerie
const ProjectGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Effet de parallaxe sur le défilement
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Changer de projet
  const changeProject = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  // Projet suivant
  const nextProject = () => {
    const newIndex = (activeIndex + 1) % projectsData.length;
    changeProject(newIndex);
  };

  // Projet précédent
  const prevProject = () => {
    const newIndex = (activeIndex - 1 + projectsData.length) % projectsData.length;
    changeProject(newIndex);
  };

  // Changement automatique toutes les 5 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      nextProject();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Variantes d'animation pour les projets
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    })
  };

  // Variantes d'animation pour les indicateurs
  const indicatorVariants = {
    inactive: { scale: 1, opacity: 0.5 },
    active: { 
      scale: 1.2, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  // Variantes d'animation pour les détails du projet
  const detailsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[70vh] overflow-hidden"
    >
      
      
      {/* Galerie principale */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* Image du projet avec coins arrondis */}
            <div className="relative w-full h-full overflow-hidden rounded-b-[2rem]">
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y }}
              >
                <div className="relative w-full h-full rounded-b-[1rem] overflow-hidden">
                  <Image
                    src={projectsData[activeIndex].imageUrl}
                    alt={projectsData[activeIndex].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                    quality={90}
                  />
                </div>
              </motion.div>
              
              {/* Overlay dégradé plus prononcé pour améliorer la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 rounded-b-[1rem]" />
              
            </div>
            
            {/* Détails du projet */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
              <motion.div
                initial="hidden"
                animate="visible"
                className="max-w-3xl mx-auto"
              >
                <motion.div 
                  custom={0} 
                  variants={detailsVariants}
                  className="mb-1 text-sm font-medium tracking-wider text-blue-300 drop-shadow-lg"
                  style={{ textShadow: '0 0 8px rgba(0,0,0,0.8)' }}
                >
                  {projectsData[activeIndex].category} - {projectsData[activeIndex].location}
                </motion.div>
                
                <motion.h2 
                  custom={1} 
                  variants={detailsVariants}
                  className="text-4xl font-bold mb-2 drop-shadow-xl"
                  style={{ textShadow: '0 0 12px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)' }}
                >
                  {projectsData[activeIndex].title}
                </motion.h2>
                
                <motion.p 
                  custom={2} 
                  variants={detailsVariants}
                  className="text-lg text-gray-200 mb-4 drop-shadow-lg"
                  style={{ textShadow: '0 0 10px rgba(0,0,0,0.8)' }}
                >
                  {projectsData[activeIndex].description}
                </motion.p>
                
                <motion.div 
                  custom={3} 
                  variants={detailsVariants}
                >
                  <button 
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-lg"
                    style={{ textShadow: '0 0 6px rgba(0,0,0,0.5)' }}
                  >
                    Voir le projet
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Contrôles de navigation avec z-index élevé pour garantir le clic */}
      <div className="absolute bottom-8 right-8 z-50 flex items-center space-x-4 pointer-events-auto">
        <button 
          onClick={prevProject}
          className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white hover:bg-opacity-30 transition-all cursor-pointer"
          aria-label="Projet précédent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <div className="flex items-center space-x-2">
          {projectsData.map((_, index) => (
            <motion.button
              key={index}
              variants={indicatorVariants}
              initial="inactive"
              animate={activeIndex === index ? "active" : "inactive"}
              onClick={() => changeProject(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${activeIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextProject}
          className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white hover:bg-opacity-30 transition-all cursor-pointer"
          aria-label="Projet suivant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      

    </div>
  );
};

export default ProjectGallery;
