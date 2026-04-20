import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../lib/ThemeContext';

function AnimatedSphere({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color={isDark ? "#8b5cf6" : "#c4b5fd"}
          attach="material"
          distort={0.45}
          speed={2}
          roughness={isDark ? 0.1 : 0.3}
          metalness={isDark ? 0.9 : 0.6}
          emissive={isDark ? "#4c1d95" : "#a78bfa"}
          emissiveIntensity={isDark ? 0.5 : 0.2}
          transparent
          opacity={isDark ? 1 : 0.6}
        />
      </Sphere>
    </Float>
  );
}

function Particles({ count = 100, isDark }: { count?: number; isDark: boolean }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={isDark ? "#06b6d4" : "#8b5cf6"}
        transparent
        opacity={isDark ? 0.6 : 0.3}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 -z-10" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <Canvas dpr={[1, 2]} style={{ opacity: isDark ? 1 : 0.45 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={isDark ? 0.4 : 1.2} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 1.5 : 0.8} color={isDark ? "#8b5cf6" : "#a78bfa"} />
        <pointLight position={[-10, -10, -10]} intensity={isDark ? 1 : 0.5} color={isDark ? "#06b6d4" : "#67e8f9"} />
        {isDark && (
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        )}
        <AnimatedSphere isDark={isDark} />
        <Particles count={isDark ? 200 : 100} isDark={isDark} />
      </Canvas>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, transparent, rgba(2,6,23,0.5), rgba(2,6,23,1))'
            : 'linear-gradient(to bottom, rgba(248,250,252,0.3), rgba(248,250,252,0.7), rgba(248,250,252,1))',
        }}
      />
    </div>
  );
}
