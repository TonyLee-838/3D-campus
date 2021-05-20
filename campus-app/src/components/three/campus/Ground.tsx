import React from 'react';

//Three
import { usePlane } from '@react-three/cannon';

//Config
import colors from '../../../config/colors';

const Ground = () => {
  const [groundRef] = usePlane(() => ({
    fixedRotation: true,

    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 1.2, 0],
  }));
  return (
    <mesh ref={groundRef} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[1009, 1000]} />
      <meshBasicMaterial attach='material' color={colors.grey} visible={false} />
    </mesh>
  );
};

export default Ground;
