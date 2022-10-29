import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Stars, useCamera, OrbitControls } from '@react-three/drei';

const Background = () => {
    return (
      <div id="canvas-container" className="h-full w-full absolute">
        <Canvas>
            <Suspense fallback={null}>
                    <Stars radius={300} depth={60} count={20000} factor={7} saturation={.01} fade={true} />
                    <mesh>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshPhongMaterial />
                    </mesh>
                    <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={.6} panSpeed={.5} rotateSpeed={.4} />
                    <ambientLight intensity={0.1} />
                    <directionalLight color="red" position={[0, 0, 5]} />
            </Suspense>
        </Canvas>
      </div>
    
  )
}

export default Background


