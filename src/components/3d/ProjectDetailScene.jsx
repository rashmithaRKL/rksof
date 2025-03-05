import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Effects } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';

const LoadingPlaceholder = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">
      Loading...
    </div>
  </div>
);

const TechStack = ({ tech, index, totalTech }) => {
  const angle = (index / totalTech) * Math.PI * 2;
  const radius = 2.2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const color = new THREE.Color().setHSL(index * 0.1, 0.7, 0.6);

  return (
    <Float
      speed={0.5}
      rotationIntensity={0.3}
      floatIntensity={0.4}
      position={[x, 0, z]}
    >
      <group rotation={[0, -angle, 0]}>
        {/* Outer glow */}
        <mesh position={[0, 0, -0.02]}>
          <circleGeometry args={[0.6, 32]} />
          <meshBasicMaterial
            color={color}
            opacity={0.1}
            transparent
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Inner glow */}
        <mesh position={[0, 0, -0.01]}>
          <circleGeometry args={[0.5, 32]} />
          <meshBasicMaterial
            color={color}
            opacity={0.2}
            transparent
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Icon background */}
        <mesh>
          <circleGeometry args={[0.4, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Text Label with better visibility */}
        <group position={[0, -0.7, 0]}>
          {/* Text shadow for better readability */}
          <Text
            position={[0, 0, -0.01]}
            fontSize={0.2}
            color="black"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
            textAlign="center"
          >
            {tech.name}
          </Text>
          
          {/* Main text */}
          <Text
            position={[0, 0, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
            textAlign="center"
          >
            {tech.name}
          </Text>
        </group>

        {/* Connecting line with gradient */}
        <mesh position={[0, 0, -0.02]} rotation={[0, 0, Math.PI / 2]}>
          <planeGeometry args={[0.02, radius * 0.8]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </Float>
  );
};

const FloatingTechStack = ({ technologies }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center sphere with glow */}
      <group>
        <mesh position={[0, 0, -0.02]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshBasicMaterial
            color={new THREE.Color(0xffcc00)}
            opacity={0.1}
            transparent
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        <mesh position={[0, 0, -0.01]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshBasicMaterial
            color={new THREE.Color(0xffcc00)}
            opacity={0.3}
            transparent
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshBasicMaterial
            color={new THREE.Color(0xffcc00)}
            opacity={0.5}
            transparent
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      {technologies.map((tech, index) => (
        <TechStack
          key={tech.name}
          tech={tech}
          index={index}
          totalTech={technologies.length}
        />
      ))}
    </group>
  );
};

const FallbackView = ({ technologies }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl p-4 flex items-center justify-center group hover:scale-105 transition-transform duration-300"
        >
          <div className="text-center">
            <i className={`fas fa-${tech.icon} text-2xl mb-2 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}></i>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{tech.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Scene = ({ technologies }) => (
  <Canvas
    camera={{ position: [0, 2, 6], fov: 45 }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '60vh',
      zIndex: -1,
      background: 'transparent'
    }}
    dpr={1}
    gl={{
      antialias: false,
      alpha: true,
      powerPreference: "default",
      failIfMajorPerformanceCaveat: true
    }}
  >
    <color attach="background" args={['#000000']} />
    <fog attach="fog" args={['#000000', 5, 15]} />
    
    <ambientLight intensity={0.4} />
    <directionalLight position={[5, 5, 5]} intensity={0.6} />
    
    <motion.group
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <FloatingTechStack technologies={technologies} />
    </motion.group>
  </Canvas>
);

const ProjectDetailScene = ({ technologies }) => {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl', { failIfMajorPerformanceCaveat: true });
      setIsWebGLAvailable(!!gl);
    } catch {
      setIsWebGLAvailable(false);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingPlaceholder />;
  }

  if (!isWebGLAvailable) {
    return <FallbackView technologies={technologies} />;
  }

  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <Scene technologies={technologies} />
    </Suspense>
  );
};

export default ProjectDetailScene;
