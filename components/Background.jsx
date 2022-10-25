import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';

const Background = () => {
  return (
    <Canvas>
        <Suspense fallback={null}>

        </Suspense>
    </Canvas>
  )
}

export default Background


