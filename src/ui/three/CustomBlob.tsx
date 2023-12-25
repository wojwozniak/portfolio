import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BlobProps {
    size: number;
    color: string;
    points: number;
    x: number;
    y: number;
    z: number;

}
const CustomBlob: React.FC<BlobProps> = ({ size, color, points, x, y, z }) => {
    const pointsRef = useRef<THREE.Points>(null);
    const geometry = useMemo(() => new THREE.SphereGeometry(size, points, points), []);

    useEffect(() => {
        pointsRef.current?.rotateZ(10 * Math.random());
        pointsRef.current?.rotateX(1.5);
    }, []);



    useFrame(({ clock }) => {
        if (pointsRef.current) {
            const elapsedTime = clock.getElapsedTime();
            pointsRef.current.rotation.z += 0.001;


            const positionAttribute = pointsRef.current.geometry.getAttribute('position');
            const vertex = new THREE.Vector3();

            for (let i = 0; i < positionAttribute.count; i++) {
                vertex.fromBufferAttribute(positionAttribute, i);

                const waveX1 = 0.25 * Math.sin(vertex.x * 2 + elapsedTime * 3);
                const waveX2 = 0.125 * Math.sin(vertex.x * 3 + elapsedTime * 2);
                const waveY1 = 0.1 * Math.sin(vertex.y * 5 + elapsedTime * 0.5);

                vertex.z = waveX1 + waveX2 + waveY1;
                positionAttribute.setZ(i, vertex.z);
            }

            positionAttribute.needsUpdate = true;
        }
    });

    return (
        <points ref={pointsRef} position={[x, y, z]} geometry={geometry}>
            <pointsMaterial color={color} size={0.1} />
        </points>
    );
};

export default CustomBlob;