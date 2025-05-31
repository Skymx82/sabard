import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SketchfabModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const SketchfabModel: React.FC<SketchfabModelProps> = ({ 
  modelPath, 
  scale = 0.5, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0] 
}) => {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);
  
  // Cloner la scène pour éviter les problèmes de référence
  const clonedScene = React.useMemo(() => {
    return scene.clone();
  }, [scene]);
  
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
