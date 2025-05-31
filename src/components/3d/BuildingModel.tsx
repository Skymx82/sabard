import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Cone, Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const BuildingModel: React.FC = () => {
  const buildingRef = useRef<THREE.Group>(null);
  const craneRef = useRef<THREE.Group>(null);
  
  // Animation de rotation lente et mouvement de la grue
  useFrame((state) => {
    if (buildingRef.current) {
      // Rotation douce autour de l'axe Y
      buildingRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      
      // Léger mouvement vertical pour effet de flottement
      const time = state.clock.getElapsedTime();
      buildingRef.current.position.y = Math.sin(time * 0.2) * 0.05;
    }
    
    // Animation de la grue
    if (craneRef.current) {
      const time = state.clock.getElapsedTime();
      craneRef.current.rotation.y = Math.sin(time * 0.2) * 0.5;
    }
  });

  return (
    <group ref={buildingRef} position={[0, 0, 0]}>
      {/* Terrain et environnement */}
      <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
        <meshStandardMaterial color="#e0e0e0" />
      </Plane>
      
      {/* Base du complexe industriel */}
      <Box args={[10, 0.5, 8]} position={[0, -2.25, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#e0e0e0" />
      </Box>
      
      {/* Bâtiment principal (entrepôt) */}
      <Box args={[8, 3, 6]} position={[0, -0.5, 0]} castShadow>
        <meshStandardMaterial 
          color="#f5f5f5" 
          metalness={0.2}
          roughness={0.3}
        />
      </Box>
      
      {/* Toit de l'entrepôt (en dents de scie) */}
      {[-2.5, -1, 0.5, 2].map((x, index) => (
        <React.Fragment key={`roof-${index}`}>
          <Box 
            args={[1.5, 0.2, 6]} 
            position={[x, 1, 0]} 
            castShadow
          >
            <meshStandardMaterial color="#0056b3" />
          </Box>
          <Box 
            args={[0.5, 1.2, 6]} 
            position={[x + 0.75, 0.5, 0]} 
            castShadow
          >
            <meshStandardMaterial color="#0056b3" />
          </Box>
        </React.Fragment>
      ))}
      
      {/* Bâtiment administratif (plus petit, à côté) */}
      <Box args={[3, 4, 3]} position={[4.5, 0, -3]} castShadow>
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.2}
          roughness={0.1}
        />
      </Box>
      
      {/* Bandes décoratives sur le bâtiment administratif */}
      {[-1, 0, 1].map((y, index) => (
        <Box 
          key={`band-${index}`}
          args={[3.02, 0.2, 3.02]} 
          position={[4.5, y, -3]} 
          castShadow
        >
          <meshStandardMaterial color="#0056b3" />
        </Box>
      ))}
      
      {/* Fenêtres du bâtiment administratif */}
      {[-0.5, 0.5].map((y, yIndex) => (
        [-1, 0, 1].map((x, xIndex) => (
          <Box 
            key={`admin-window-${xIndex}-${yIndex}`}
            args={[0.6, 0.6, 0.1]} 
            position={[4.5 + x, y, -1.5]} 
            castShadow
          >
            <meshStandardMaterial 
              color="#a0d8ef" 
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.9}
            />
          </Box>
        ))
      ))}
      
      {/* Toit du bâtiment administratif */}
      <Box args={[3.5, 0.3, 3.5]} position={[4.5, 2, -3]} castShadow>
        <meshStandardMaterial color="#0056b3" />
      </Box>
      
      {/* Portes industrielles sur l'entrepôt */}
      {[-2, 0, 2].map((x, index) => (
        <Box 
          key={`door-${index}`}
          args={[1.5, 2, 0.1]} 
          position={[x, -1, 3.01]} 
          castShadow
        >
          <meshStandardMaterial color="#0056b3" />
        </Box>
      ))}
      
      {/* Cheminée industrielle */}
      <group position={[-3, 1, -2]}>
        <Cylinder 
          args={[0.6, 0.8, 4, 16]} 
          position={[0, 1.5, 0]} 
          castShadow
        >
          <meshStandardMaterial color="#d0d0d0" />
        </Cylinder>
        <Cylinder 
          args={[0.7, 0.9, 0.3, 16]} 
          position={[0, 3.5, 0]} 
          castShadow
        >
          <meshStandardMaterial color="#0056b3" />
        </Cylinder>
      </group>
      
      {/* Grue de chantier */}
      <group ref={craneRef} position={[5, 0, 2]}>
        {/* Base de la grue */}
        <Box args={[1.5, 0.5, 1.5]} position={[0, -2, 0]} castShadow>
          <meshStandardMaterial color="#0056b3" />
        </Box>
        
        {/* Mât principal */}
        <Box args={[0.5, 6, 0.5]} position={[0, 1, 0]} castShadow>
          <meshStandardMaterial color="#d0d0d0" />
        </Box>
        
        {/* Flèche horizontale */}
        <Box args={[5, 0.3, 0.3]} position={[2, 4, 0]} castShadow>
          <meshStandardMaterial color="#d0d0d0" />
        </Box>
        
        {/* Contrepoids */}
        <Box args={[1.5, 0.8, 0.8]} position={[-1, 4, 0]} castShadow>
          <meshStandardMaterial color="#0056b3" />
        </Box>
        
        {/* Câble */}
        <Cylinder args={[0.03, 0.03, 3, 8]} position={[3, 2.5, 0]} castShadow>
          <meshStandardMaterial color="#202020" />
        </Cylinder>
        
        {/* Crochet */}
        <Box args={[0.2, 0.4, 0.2]} position={[3, 1, 0]} castShadow>
          <meshStandardMaterial color="#0056b3" />
        </Box>
      </group>
      
      {/* Panneaux solaires sur le toit de l'entrepôt */}
      {[-1.5, 0, 1.5].map((x, index) => (
        <Box 
          key={`solar-${index}`}
          args={[1, 0.1, 2]} 
          position={[x, 1.6, -2]} 
          rotation={[0.2, 0, 0]}
          castShadow
        >
          <meshStandardMaterial 
            color="#1a3c6e" 
            metalness={0.9}
            roughness={0.2}
          />
        </Box>
      ))}
      
      {/* Logo SABARD (simplifié) */}
      <Box args={[1.5, 1, 0.1]} position={[4.5, 0, -1.5]} castShadow>
        <meshStandardMaterial color="#0056b3" />
      </Box>
    </group>
  );
};

export default BuildingModel;
