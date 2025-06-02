import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

// Logos des partenaires
const partners = [
  { name: 'Crédit Agricole Centre Loire', logo: '/images/partners/credit-agricole-centre-loir.jpg', color: '#00A651' },
  { name: 'Loiret Département', logo: '/images/partners/loiret-departement.jpg', color: '#F39200' },
  { name: 'Orléans Métropole', logo: '/images/partners/orleans-metropole.jpg', color: '#D4007A' },
  { name: 'Eure-et-Loir', logo: '/images/partners/eure-et-loir.jpg', color: '#009FE3' },
  { name: 'Chartres', logo: '/images/partners/chartes.jpg', color: '#00AEEF' },
  { name: 'Bouygues Immobilier', logo: '/images/partners/bouygue-imobilier.jpg', color: '#0056b3' },
  { name: 'Groupe Interpromotion', logo: '/images/partners/groupe-interpromotion.jpg', color: '#E63312' },
  { name: 'Sedelka Europrom', logo: '/images/partners/sedelka-europrom.jpg', color: '#8CC63F' },
  { name: 'Ministère de la Défense', logo: '/images/partners/ministere-de-la-defense.jpg', color: '#000080' },
  { name: 'Groupe Aviron Immobilier', logo: '/images/partners/groupe-aviron-immobilier.jpg', color: '#FF5733' },
  { name: 'BFP Immobilier', logo: '/images/partners/bfp-imobilier.jpg', color: '#4B0082' },
  { name: 'Réalités', logo: '/images/partners/realites.jpg', color: '#2E8B57' },
  { name: 'Xaintrailles SARL', logo: '/images/partners/xaintraileles-sarl.jpg', color: '#800000' },
  { name: 'SEMDO', logo: '/images/partners/semdo.jpg', color: '#4682B4' },
  { name: 'Charte Développement', logo: '/images/partners/charte-developpement.jpg', color: '#228B22' },
];

const PartnersSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Titre et introduction */}
      <div className="container mx-auto px-4 mb-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font <span className="text-[#0056b3]">confiance</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#0056b3] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous sommes fiers de collaborer avec des partenaires de renom qui nous font confiance pour leurs projets de construction.
          </p>
        </motion.div>
      </div>
      
      {/* Section des carrousels avec dégradés sur les bords */}
      <div className="relative overflow-hidden" ref={containerRef}>
        {/* Dégradés sur les côtés */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Premier carrousel - défilement automatique vers la droite */}
        <motion.div 
          className="flex py-8 mb-8"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "loop", 
            duration: 30, 
            ease: "linear" 
          }}
        >
          {/* Duplication des éléments pour créer un effet de défilement infini */}
          {[...partners, ...partners].map((partner, index) => (
            <motion.div
              key={`row1-${index}`}
              className="relative flex-shrink-0 w-48 h-32 mx-6 bg-white rounded-xl shadow-md p-4 flex items-center justify-center"
              initial={{ opacity: 0.8, scale: 0.95 }}
              whileHover={{ 
                opacity: 1,
                scale: 1.05,
                boxShadow: `0 10px 25px -5px rgba(${partner.color ? hexToRgb(partner.color) : '0, 86, 179'}, 0.3)`,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                
                
                {/* Image réelle du logo */}
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  fill
                  sizes="(max-width: 768px) 120px, 180px"
                  style={{ objectFit: 'contain' }}
                  className="p-2"
                />
              </div>
              <div 
                className="absolute -bottom-2 left-0 right-0 text-center"
                style={{ opacity: 0.9 }}
              >
                <span 
                  className="text-white text-xs py-1 px-3 rounded-full inline-block shadow-sm"
                  style={{ backgroundColor: partner.color || '#0056b3' }}
                >
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Deuxième carrousel - défilement automatique vers la gauche */}
        <motion.div 
          className="flex py-8"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "loop", 
            duration: 35, 
            ease: "linear" 
          }}
        >
          {/* Duplication des éléments pour créer un effet de défilement infini */}
          {[...partners.reverse(), ...partners].map((partner, index) => (
            <motion.div
              key={`row2-${index}`}
              className="relative flex-shrink-0 w-48 h-32 mx-6 bg-white rounded-xl shadow-md p-4 flex items-center justify-center"
              initial={{ opacity: 0.8, scale: 0.95 }}
              whileHover={{ 
                opacity: 1,
                scale: 1.05,
                boxShadow: `0 10px 25px -5px rgba(${partner.color ? hexToRgb(partner.color) : '0, 86, 179'}, 0.3)`,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                
                
                {/* Image réelle du logo */}
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  fill
                  sizes="(max-width: 768px) 120px, 180px"
                  style={{ objectFit: 'contain' }}
                  className="p-2"
                />
              </div>
              <div 
                className="absolute -bottom-2 left-0 right-0 text-center"
                style={{ opacity: 0.9 }}
              >
                <span 
                  className="text-white text-xs py-1 px-3 rounded-full inline-block shadow-sm"
                  style={{ backgroundColor: partner.color || '#0056b3' }}
                >
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Bouton d'action */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="inline-block bg-[#0056b3] hover:bg-[#004494] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Rejoignez nos partenaires
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Fonction utilitaire pour convertir une couleur hexadécimale en RGB
function hexToRgb(hex: string): string {
  // Supprimer le # si présent
  hex = hex.replace('#', '');
  
  // Convertir en RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}

export default PartnersSection;
