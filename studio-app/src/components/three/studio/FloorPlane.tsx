import React, { useRef } from 'react';

// three
import { useTexture } from '@react-three/drei';
import { Mesh, MeshPhongMaterial } from 'three';
import { useBox, usePlane } from '@react-three/cannon';
import colors from '../../../config/colors';

const FloorPlane = () => {
  const [floorRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    type: 'Static',
  }));

  return (
    <mesh ref={floorRef}>
      <planeBufferGeometry args={[60, 60]} />
      <meshBasicMaterial visible={false} />
      {/* <meshPhongMaterial color={colors.greens.flesh} /> */}
    </mesh>
  );
};

export default FloorPlane;
