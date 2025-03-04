import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const FloatingRings = () => {
  const ringRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ringRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    ringRef.current.rotation.y = Math.cos(time * 0.2) * 0.2;
  });

  return (
    <group ref={ringRef}>
      {[...Array(3)].map((_, i) => (
        <Float
          key={i}
          speed={(1 + i) * 2}
          rotationIntensity={1.5}
          floatIntensity={2}
          position={[i * 2 - 2, 0, 0]}
        >
          <mesh>
            <torusGeometry args={[1 - i * 0.2, 0.2, 16, 32]} />
            <MeshDistortMaterial
              color={i === 0 ? "#ff0000" : i === 1 ? "#ffd700" : "#000000"}
              speed={4}
              distort={0.4}
              radius={1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const AnimatedScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <motion.group
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <FloatingRings />
        <Float speed={4} rotationIntensity={2} floatIntensity={2}>
          <Sphere args={[0.8, 32, 32]}>
            <MeshDistortMaterial
              color="#ffd700"
              speed={2}
              distort={0.4}
              radius={1}
            />
          </Sphere>
        </Float>
      </motion.group>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default AnimatedScene;
