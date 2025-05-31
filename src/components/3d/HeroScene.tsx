import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei';
import SketchfabModel from './SketchfabModel';
import LoadingSpinner from '../ui/LoadingSpinner';

const HeroScene: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Fonction pour gérer la fin du chargement du modèle
  const handleModelLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full h-[70vh] relative">
      {/* Affichage du spinner de chargement tant que le modèle n'est pas chargé */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <LoadingSpinner />
        </div>
      )}

      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[8, 8, 14]} fov={30} />
        <color attach="background" args={['#f8f9fa']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[10, 10, 5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <SketchfabModel 
            modelPath="/model.glb" 
            scale={0.3} 
            position={[-1, 0, -0.7]}
            onLoad={handleModelLoaded}
          />          
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;
