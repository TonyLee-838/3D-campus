import React from 'react';

//Three
import { useGLTF } from '@react-three/drei';

//Hooks
import { useConfiguredGLTF } from '../../../hooks/useConfiguredGLTF';
import { getPublicPath } from '../../../utils/getPublicPath';

const StreetTree = ({ position, rotation }) => {
  const { materials, nodes } = useConfiguredGLTF(`${getPublicPath()}/3d/block/tree-1.glb`);

  return (
    <group dispose={null} rotation={rotation} position={position}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.1, 0.1, 0.1]}>
        <mesh material={materials.Grass} geometry={nodes.Leaves_15002_1.geometry} />
        <mesh material={materials.Wood} geometry={nodes.Leaves_15002_2.geometry} />
        <mesh material={materials.Building_Green} geometry={nodes.Leaves_15002_3.geometry} />
        <mesh material={materials.White_1} geometry={nodes.Leaves_15002_4.geometry} />
      </group>
    </group>
  );
};

useGLTF.preload(`${getPublicPath()}/3d/block/tree-1.glb`);
export default StreetTree;
