import { useEffect, useLayoutEffect, useRef } from 'react';

import { useGLTF } from '@react-three/drei';

import colors from '../../../config/colors';
import { useConfiguredGLTF } from '../../../hooks/useConfiguredGLTF';

function RoadFragment({ position, clippingPlanePosition = null }) {
  const group = useRef();
  const { nodes, materials } = useConfiguredGLTF(`road/road-2.glb`);

  // const clippingPlaneRef = useRef();

  // useLayoutEffect(() => {
  //   if (clippingPlanePosition) {
  //     Object.keys(materials).forEach((m) => {
  //       const material = materials[m];

  //       material.clippingPlanes = [clippingPlaneRef.current];
  //     });
  //   }
  // }, [clippingPlanePosition, materials]);

  return (
    <group ref={group} position={position} dispose={null} receiveShadow>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.01, 0.01, 0.01]}>
        <group position={[0, 0, 0]} scale={[473.04, 28.96, 473.07]}>
          <mesh material={materials.BANQUET_XC} geometry={nodes.Mesh003.geometry} />
          <mesh material={materials.CALLASFL_1} geometry={nodes.Mesh003_1.geometry} />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload(`road/road-2.glb`);

export default RoadFragment;
