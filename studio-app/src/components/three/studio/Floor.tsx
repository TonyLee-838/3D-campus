import React, { useRef } from 'react';

//Three
import { useTexture } from '@react-three/drei';
import { Mesh, MeshPhongMaterial } from 'three';
import { useBox, usePlane } from '@react-three/cannon';
import colors from '../../../config/colors';

const Floor = () => {
  const [floorRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    type: 'Static',
  }));

  return (
    <mesh ref={floorRef}>
      <planeBufferGeometry args={[60, 60]} />
      <meshPhongMaterial color={colors.greens.flesh} />
    </mesh>
  );
};

export default Floor;
