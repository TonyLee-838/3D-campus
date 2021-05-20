import React from 'react';

import RoadIntersection from './RoadIntersection';
import Station from './decorations/Station';
import SmallDecoration from './decorations/SmallDecoration';
import GroundBox from '../GroundBox';
import { useCampusStore } from '../../../../store/CampusStore';

const Decorations = () => {
  const decorations = useCampusStore((state) => state.decorations);
  return (
    <>
      {decorations.groundBoxPositions.map((position) => (
        <GroundBox position={position} />
      ))}
      {decorations.intersections.map((intersection) => (
        <RoadIntersection {...intersection} key={intersection.id} />
      ))}
      {decorations.busStations.map((station) => (
        <Station {...station} />
      ))}
      {decorations.otherDecorations.map((deco) => (
        <SmallDecoration {...deco} />
      ))}
    </>
  );
};

export default Decorations;
