import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

function AnimatedGeometry() {
  const meshRef = useRef();

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#FF0000"
          roughness={0.2}
          metalness={0.8}
          emissive="#FFD700"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function AnimatedScene() {
  return (
    <div className="h-screen w-full absolute top-0 left-0 -z-10">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          castShadow
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        {/* Main Geometry */}
        <AnimatedGeometry />

        {/* Background */}
        <color attach="background" args={['#000000']} />
      </Canvas>
    </div>
  );
}

export default AnimatedScene;
