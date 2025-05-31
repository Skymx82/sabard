"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Fond avec motif et dégradé similaire au Hero mais inversé */}
      <div className="absolute inset-0 bg-gradient-to-tl from-white via-gray-50 to-blue-50 z-0" />
      
      {/* Motif de grille architectural subtil */}
      <div 
        className="absolute inset-0 opacity-5 z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230056b3' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} 
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section d'introduction avec storytelling */}
        <div className="mb-20">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image avec effet de profondeur */}
            <div className="w-full md:w-1/2 relative">
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full bg-[#0056b3] rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 w-full h-[350px] relative">
                  <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
                    <p className="text-sm text-gray-500">Image de bâtiment SABARD</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Texte de storytelling */}
            <div className="w-full md:w-1/2">
              <motion.span 
                className="text-[#0056b3] font-semibold text-lg block mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Notre Histoire
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Bâtir l'avenir depuis 2018
              </motion.h2>
              
              <motion.div 
                className="space-y-4 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>
                  <span className="font-semibold">SABARD</span> est née d'une vision : celle de créer des espaces qui transforment positivement la vie des gens. Fondée en 2018, notre entreprise s'est rapidement imposée comme un acteur incontournable du bâtiment dans la région.  
                </p>
                <p>
                  Notre équipe de <span className="text-[#0056b3] font-semibold">130 collaborateurs passionnés</span>, dont des experts en main d'œuvre et des encadrants chevronnés, travaille en parfaite synergie pour délivrer des projets d'exception.
                </p>
                <p>
                  Chaque construction que nous réalisons raconte une histoire unique, celle d'un savoir-faire technique alliant tradition et innovation, pour des réalisations qui traverseront les époques.
                </p>
              </motion.div>
              
              <motion.div 
                className="mt-8 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="mr-4 p-2 bg-blue-50 rounded-full">
                  <svg className="w-6 h-6 text-[#0056b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-medium text-[#0056b3]">Plus de 50 projets réalisés avec succès</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Section des projets phares avec images */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nos <span className="text-[#0056b3]">Réalisations</span> Phares
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-[#0056b3] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Crédit Agricole Business Center",
                location: "Orléans",
                description: "Un bâtiment moderne alliant fonctionnalité et design pour le siège régional du Crédit Agricole."
              },
              {
                title: "Les Jardins d'Idyllis",
                location: "Chartres",
                description: "Ensemble résidentiel de 81 logements intégrant des espaces verts et un parc de stationnement."
              },
              {
                title: "Gendarmerie de Gien",
                location: "Orléans",
                description: "Construction d'une gendarmerie alliant sécurité, fonctionnalité et intégration paysagère."
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
                    <p className="text-sm text-gray-500">Image du projet {project.title}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-[#0056b3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-500">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-[#0056b3] font-medium flex items-center group-hover:underline">
                    En savoir plus
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="bg-[#0056b3] hover:bg-[#003d80] text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105">
              Voir tous nos projets
            </button>
          </motion.div>
        </motion.div>
        
        {/* Section des valeurs avec chiffres clés */}
        <motion.div 
          className="py-16 px-6 md:px-12 bg-white rounded-xl shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Motif décoratif */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 opacity-50" />
          
          <div className="relative">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Pourquoi Choisir <span className="text-[#0056b3]">SABARD</span> ?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "130+",
                  label: "Collaborateurs",
                  description: "Une équipe d'experts passionnés"
                },
                {
                  number: "50+",
                  label: "Projets Réalisés",
                  description: "Des références dans tous types de bâtiments"
                },
                {
                  number: "5",
                  label: "Années d'Expérience",
                  description: "Une entreprise jeune et dynamique"
                },
                {
                  number: "100%",
                  label: "Satisfaction",
                  description: "Notre engagement quotidien"
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <h3 className="text-3xl font-bold text-[#0056b3] mb-2">{stat.number}</h3>
                  <p className="font-semibold text-gray-800 mb-1">{stat.label}</p>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="bg-[#0056b3] hover:bg-[#003d80] text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105">
                Contactez-nous
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
