import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SketchfabModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  onLoad?: () => void;
}

const SketchfabModel: React.FC<SketchfabModelProps> = ({ 
  modelPath, 
  scale = 0.5, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0],
  onLoad
}) => {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);
  
  // Cloner la scène pour éviter les problèmes de référence
  const clonedScene = React.useMemo(() => {
    const cloned = scene.clone();
    // Appeler le callback onLoad une fois le modèle prêt
    if (onLoad) {
      setTimeout(onLoad, 100); // Léger délai pour s'assurer que le rendu est complet
    }
    return cloned;
  }, [scene, onLoad]);
  
  // Animation de rotation lente
  useFrame((state) => {
    if (modelRef.current) {
      // Rotation douce autour de l'axe Y
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group 
      ref={modelRef} 
      position={new THREE.Vector3(...position)} 
      rotation={new THREE.Euler(...rotation)}
      scale={scale}
    >
      <primitive object={clonedScene} />
    </group>
  );
};

// Préchargement du modèle pour de meilleures performances
useGLTF.preload('/model.glb');

export default SketchfabModel;
