import React, { useEffect, useRef } from 'react';
// three
import { useFrame } from 'react-three-fiber';

// config
import colors from '../../../config/colors';

// type
import { Dims3 } from '../../../types';

import { SUITABLE_RADIUS } from '../../../config/campus';
import { useConfiguredGLTF } from '../../../hooks/useConfiguredGLTF';
import { getPublicPath } from '../../../utils/getPublicPath';
import { useAnimations, useGLTF } from '@react-three/drei';

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

  // useFrame(() => {
  //   if (meshRef && meshRef.current) {
  //     meshRef.current.rotation.z += 0.05;
  //   }
  // });

  return (
    <group position={position} rotation={[0, 0, 0]} ref={meshRef}>
      <group position={[0, -1, 0]} scale={[2, 2, 2]}>
        <primitive object={gltf.scene} />
        {/* <circleBufferGeometry args={[SUITABLE_RADIUS, 10]} />
      <meshBasicMaterial color={colors.reds.watermelon} /> */}
      </group>
    </group>
  );
};

useGLTF.preload(`${getPublicPath()}/3d/circle/scene.gltf`);
export default Circle;
