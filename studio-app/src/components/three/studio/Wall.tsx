import { usePlane } from '@react-three/cannon';
import React from 'react';
import colors from '../../../config/colors';

interface WallProps {
  rotationY: number;
}

const Wall = ({ rotationY }: WallProps) => {
  // const [wallRef] = usePlane(() => ({
  //   type: 'Static',
  // }));

  return (
    <group rotation={[0, rotationY, 0]} position={[0, 0, 0]}>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[30, 20, 0]}>
        <boxBufferGeometry args={[60, 0.01, 40]} />
        <meshPhongMaterial color={colors.oranges.tangerine} />
      </mesh>
    </group>
  );
};

export default Wall;
