import React, { useEffect, useRef } from 'react';

// three
import { useAnimations, useGLTF } from '@react-three/drei';

// type
import { Dims3 } from '../../../types';

import { useConfiguredGLTF } from '../../../hooks/useConfiguredGLTF';
import { getPublicPath } from '../../../utils/getPublicPath';

interface CircleProps {
  position: Dims3;
}

const Circle = ({ position }: CircleProps) => {
  const meshRef = useRef(null);
  const gltf = useConfiguredGLTF(`${getPublicPath()}/3d/circle/scene.gltf`);
  const { actions } = useAnimations(gltf.animations, meshRef);

  useEffect(() => {
    actions['PlaneAction'].play();
  }, []);

  return (
    <group position={position} rotation={[0, 0, 0]} ref={meshRef}>
      <group position={[0, -1, 0]} scale={[2, 2, 2]}>
        <primitive object={gltf.scene} />
      </group>
    </group>
  );
};

useGLTF.preload(`${getPublicPath()}/3d/circle/scene.gltf`);
export default Circle;
