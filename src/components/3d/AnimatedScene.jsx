import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingShapes = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    groupRef.current.rotation.y = Math.cos(time * 0.2) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Floating Rings */}
      {[...Array(3)].map((_, i) => (
        <Float
          key={`ring-${i}`}
          speed={(1 + i) * 2}
          rotationIntensity={1.5}
          floatIntensity={2}
          position={[i * 2 - 2, i * 0.5, 0]}
        >
          <Torus args={[1 - i * 0.2, 0.2, 16, 32]}>
            <MeshDistortMaterial
              color={i === 0 ? "#ff4444" : i === 1 ? "#ffd700" : "#4444ff"}
              speed={4}
              distort={0.4}
              radius={1}
              metalness={0.8}
              roughness={0.2}
            />
          </Torus>
        </Float>
      ))}

      {/* Floating Cubes */}
      {[...Array(4)].map((_, i) => (
        <Float
          key={`cube-${i}`}
          speed={(1 + i) * 1.5}
          rotationIntensity={2}
          floatIntensity={3}
          position={[Math.sin(i * Math.PI / 2) * 3, Math.cos(i * Math.PI / 2) * 3, i - 2]}
        >
          <Box args={[0.6, 0.6, 0.6]}>
            <MeshDistortMaterial
              color={new THREE.Color().setHSL(i * 0.25, 0.8, 0.5)}
              speed={2}
              distort={0.3}
              metalness={0.9}
              roughness={0.2}
            />
          </Box>
        </Float>
      ))}

      {/* Central Sphere */}
      <Float speed={4} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[0.8, 32, 32]}>
          <MeshDistortMaterial
            color="#ffd700"
            speed={2}
            distort={0.4}
            radius={1}
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </Sphere>
      </Float>
    </group>
  );
};

const AnimatedScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(to bottom, #000000, #1a1a1a)'
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[-10, -10, -5]} intensity={0.5} />

      <motion.group
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <FloatingShapes />
      </motion.group>

      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default AnimatedScene;
