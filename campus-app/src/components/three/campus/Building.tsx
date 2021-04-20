import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';

//hooks
import { useConfiguredGLTF } from '../../../hooks/useConfiguredGLTF';
import { useEnterSudio } from '../../../hooks/useEnterStudio';

//types
import { IBuilding } from '../../../types';

const Building = ({
  position,
  scale = 1,
  colors = { primary: '', secondary: '' },
  rotationY = 0,
  model,
  id = 'null',
}: IBuilding) => {
  const { scene } = useConfiguredGLTF(`buildings/${model}.gltf`, {
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
      // onClick={(e) => {
      //   e.stopPropagation();
      //   console.log(id);
      // }}
    >
      <primitive object={scene} />
    </group>
  );
};

//FIXME: Refactor this later on...
// useGLTF.preload(`buildings/b1.gltf`);
// useGLTF.preload(`buildings/b2.gltf`);
// useGLTF.preload(`buildings/b3.gltf`);
// useGLTF.preload(`buildings/b4.gltf`);
// useGLTF.preload(`buildings/b5.gltf`);
// useGLTF.preload(`buildings/b6.gltf`);
// useGLTF.preload(`buildings/b7.gltf`);
// useGLTF.preload(`buildings/b8.gltf`);
// useGLTF.preload("./public/3d/buildings/b9.gltf");

export default Building;
