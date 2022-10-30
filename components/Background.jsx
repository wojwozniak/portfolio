import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Stars, useCamera, OrbitControls } from '@react-three/drei';

const Background = () => {
    return (
      <div id="canvas-container" className="h-[200vh] w-full absolute">
        <Canvas>
            <Suspense fallback={null}>
                    <Stars radius={300} depth={100} count={30000} factor={9} saturation={.02} fade={true} />
                   {/* <mesh>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshPhongMaterial />
                    </mesh>
                  */}
                    <ambientLight intensity={0.1} />
                    <directionalLight color="blue" position={[0, 0, 5]} />
            </Suspense>
        </Canvas>
      </div>
    
  )
}

export default Background


