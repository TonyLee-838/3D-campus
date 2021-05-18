import React from 'react';
import { Dims2 } from '../../../types';
import { getUniqueId } from '../../../utils';
import CrossWalk from './decorations/CrossWalk';

interface RoadIntersectionProps {
  crossWalkAmount: number;
  position: Dims2;
  rotationY?: number;
  scale?: number;
}

const RoadIntersection = ({ crossWalkAmount, position, rotationY, scale }: RoadIntersectionProps) => {
  const [x, z] = position;
  return (
    <group position={[x, 2.7, z]} scale={[0.2, 0.2, 0.2]} rotation={[0, rotationY, 0]}>
      {Array.from({ length: crossWalkAmount }).map((_, id) => (
        <CrossWalk key={id} rotation={[0, (Math.PI / 2) * i, 0]} />
      ))}
    </group>
  );
};

export default RoadIntersection;
