import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const AnimatedCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#0088ff"
          emissiveIntensity={0.2}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00ffff" size={0.02} />
    </points>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#00ffff" intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={0.5} />
          <AnimatedCube />
          <ParticleField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Matrix Rain Effect */}
      <div className="matrix-rain absolute inset-0 z-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-matrix-green text-sm font-mono opacity-20"
            style={{
              left: `${(i * 5) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              animation: "matrix-fall 3s linear infinite",
            }}
          >
            {Math.random().toString(36).substring(2, 8)}
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch-text">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              DEVELOPER
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            &gt; Full-Stack Software Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technology and innovative solutions. 
            Specializing in modern web development and system architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-gradient-primary text-background font-bold rounded-lg shadow-neon-cyan hover:shadow-neon-purple transition-all duration-300 transform hover:scale-105">
            View Projects
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-background transition-all duration-300 transform hover:scale-105">
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2 font-mono">&gt; scroll_down</p>
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};