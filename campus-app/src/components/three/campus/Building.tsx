import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';

//hooks
import { useConfiguredGLTF } from '../../../hooks/useConfiguredGLTF';
import { useEnterSudio } from '../../../hooks/useEnterStudio';

//types
import { IBuilding } from '../../../types';
import { getPublicPath } from '../../../utils/getPublicPath';

const Building = ({
  position,
  scale = 1,
  colors = { primary: '', secondary: '' },
  rotationY = 0,
  model,
  id = 'null',
}: IBuilding) => {
  const { scene } = useConfiguredGLTF(`${getPublicPath()}/3d/buildings/${model}.gltf`, {
    colors,
  });

  useEnterSudio(id);

  return (
    <group
      castShadow
      receiveShadow
      position={[position[0], 0, position[1]]}
      scale={[scale, scale, scale]}
      rotation={[0, rotationY, 0]}
    >
      <primitive object={scene} />
    </group>
  );
};

//FIXME: Refactor this later on...
useGLTF.preload(`${getPublicPath()}/3d/buildings/b1.gltf`);
useGLTF.preload(`${getPublicPath()}/3d/buildings/b2.gltf`);
useGLTF.preload(`${getPublicPath()}/3d/buildings/b3.gltf`);
useGLTF.preload(`${getPublicPath()}/3d/buildings/b4.gltf`);
useGLTF.preload(`${getPublicPath()}/3d/buildings/b5.gltf`);
useGLTF.preload(`${getPublicPath()}/3d/buildings/b6.gltf`);
useGLTF.preload(`${getPublicPath()}/3d/buildings/b7.gltf`);
useGLTF.preload(`${getPublicPath()}/3d/buildings/b8.gltf`);
// useGLTF.preload("./public/3d/buildings/b9.gltf");

export default Building;
