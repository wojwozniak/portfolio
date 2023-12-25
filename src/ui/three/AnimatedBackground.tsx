import React from 'react';
import { Canvas } from '@react-three/fiber';
import CustomBlob from './CustomBlob';

const AnimatedBackground: React.FC = () => {
    return (
        <div className='absolute right-0 top-0 w-[40vw] h-full'>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <CustomBlob size={1.5} color={"#0000FF"} points={48} x={0} y={0} z={0} />
                <CustomBlob size={0.8} color={"#FF0000"} points={22} x={0} y={1} z={0} />
            </Canvas>
        </div>

    );
};

export default AnimatedBackground;