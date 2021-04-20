import React from 'react';

import { useGLTF } from '@react-three/drei';

//Hooks
import { useConfiguredGLTF } from '../../../hooks/useConfiguredGLTF';

const StreetLight = ({ position, rotation }) => {
  const { materials, nodes } = useConfiguredGLTF(`block/street-light.glb`);
  //
  return (
    <group dispose={null} scale={[0.1, 0.1, 0.1]} position={position} rotation={rotation}>
      <mesh
        material={materials['White.001']}
        geometry={nodes.Cube1_60001.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

// useGLTF.preload(`block/street-light.glb`);

export default StreetLight;
