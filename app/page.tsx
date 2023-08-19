'use client';

import Image from 'next/image'
import NavMenu from './NavMenu'
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const Model = () => {
  const gltf = useLoader(GLTFLoader, "/frame.gltf");

  return (
    <>
      <primitive object={gltf.scene} scale={0.02} />
  </>
  );
};

export default function Home() {
  return (
    
    <div className="container flex items-center mx-auto justify-between p-26">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50, near: 0.1, far: 100000 }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
  </div>
  
    
  )
}