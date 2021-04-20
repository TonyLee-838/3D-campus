import React from 'react';
import { Vector2 } from 'three';

//Components
import RoadFragment from './RoadFragment';

//Types
import { IRoad } from '../../../types';
import { getUniqueId } from '../../../utils';

const ROAD_MODEL_LENGTH = 10;

const Road = ({ from, to }: IRoad) => {
  const direction = new Vector2(to[0], to[1]).sub(new Vector2(from[0], from[1]));

  //Diagonal Length
  const length = Math.ceil(direction.length() / ROAD_MODEL_LENGTH);

  console.log(length);

  const rotationY = Math.acos(direction.normalize().y);

  return (
    //First Align all the fragments along z axis.
    //Then rotate them all together.

    <group rotation={[0, rotationY, 0]} position={[from[0], 0, from[1]]}>
      {Array.from({ length }).map((_, i) => {
        const position = [0, 0, ROAD_MODEL_LENGTH * i];

        return (
          <RoadFragment
            key={getUniqueId('road-fragment')}
            position={position}
            clippingPlanePosition={i === length - 1 && [0, 0, to[1]]}
          />
        );
      })}
    </group>
  );
};

export default Road;
