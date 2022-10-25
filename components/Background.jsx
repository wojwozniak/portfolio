import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Stars } from '@react-three/drei';

const Background = () => {
    return (
      <div id="canvas-container" className="h-full w-full absolute">
        <Canvas>
            <Suspense fallback={null}>
                <Stars radius={300} depth={60} count={20000} factor={7} saturation={ .01 } fade={true} />
            </Suspense>
        </Canvas>
      </div>
    
  )
}

export default Background


