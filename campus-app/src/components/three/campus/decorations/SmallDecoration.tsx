import React from 'react';

import { useGLTF } from '@react-three/drei';
import { useConfiguredGLTF } from '../../../../hooks/useConfiguredGLTF';
import { ExternalModel, ISmallDecoration } from '../../../../types';
import { getPublicPath } from '../../../../utils/getPublicPath';

const SmallDecoration = ({ type, rotationY, position, scale = 0.2 }: ISmallDecoration) => {
  const [x, z] = position;

  const { scene } = useConfiguredGLTF(`${getPublicPath()}/3d/decorations/d${type}.glb`);

  return (
    <group position={[x, 0.5, z]} scale={[scale, scale, scale]} rotation={[0, rotationY, 0]}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(`${getPublicPath()}/3d/decorations/d1.glb`);
useGLTF.preload(`${getPublicPath()}/3d/decorations/d2.glb`);
useGLTF.preload(`${getPublicPath()}/3d/decorations/d3.glb`);
useGLTF.preload(`${getPublicPath()}/3d/decorations/d4.glb`);
useGLTF.preload(`${getPublicPath()}/3d/decorations/d5.glb`);

export default SmallDecoration;
