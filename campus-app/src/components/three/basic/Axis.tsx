import React from 'react';

type AxisType = 'x' | 'y' | 'z';

interface AxisProps {
  axis: AxisType;
  color: string;
  length?: number;
}

type AxisConfig = {
  [key in AxisType]: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
};

const Axis = ({ axis, color, length = 70 }: AxisProps) => {
  const CONFIGS: AxisConfig = {
    x: {
      position: [length / 2, 0, 0],
      rotation: [0, 0, Math.PI / 2],
    },
    y: {
      position: [0, length / 2, 0],
      rotation: [0, 0, 0],
    },
    z: {
      position: [0, 0, length / 2],
      rotation: [Math.PI / 2, 0, 0],
    },
  };
  return (
    <mesh rotation={CONFIGS[axis].rotation} position={CONFIGS[axis].position}>
      <cylinderBufferGeometry args={[0.1, 0.1, length]} />
      <meshPhongMaterial color={color} />
    </mesh>
  );
};

export default Axis;
