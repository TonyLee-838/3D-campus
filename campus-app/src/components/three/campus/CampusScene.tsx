import React, { Suspense, useEffect, useState } from 'react';

// components
import AppScene from '../basic/AppScene';
import GroundGrid from './GroundGrid';
import Ground from './Ground';
import Block from './Block';
import SkyBox from './SkyBox';
import GroundBox from './GroundBox.jsx';
import Circles from './Circles';

// utils
import { getUniqueId } from '../../../utils';

// hooks
import { useCampusStore } from '../../../store/CampusStore';
import Lake from './decorations/Lake';
import Park from './decorations/Park';
import RoadIntersection from './RoadIntersection';
import { ExternalModel, Intersection, ISmallDecoration } from '../../../types';
import Station from './decorations/Station';
import SmallDecoration from './decorations/SmallDecoration';

const groundBoxPositions = [
  [0, 0, 0],
  [500, 0, 0],
  [-500, 0, 0],
  [0, 0, 500],
  [0, 0, -500],
  [500, 0, 500],
  [-500, 0, -500],
  [500, 0, -500],
  [-500, 0, 500],
];

const intersections: Intersection[] = [
  { crossWalkAmount: 4, position: [-145, 5], rotationY: 0 },
  { crossWalkAmount: 3, position: [-145, -225], rotationY: -Math.PI / 2 },
  { crossWalkAmount: 3, position: [250, -225], rotationY: Math.PI / 2 },
  { crossWalkAmount: 3, position: [255, 5], rotationY: Math.PI / 2 },
];

const otherDecorations: ISmallDecoration[] = [
  { type: '2', position: [-450, 120], rotationY: 0, scale: 0.35 },
  { type: '3', position: [-250, 380], rotationY: 0, scale: 0.35 },
  { type: '4', position: [450, -250], rotationY: 0, scale: 0.2 },
  { type: '5', position: [-300, -420], scale: 0.35, rotationY: 0 },
];

const busStations: ExternalModel[] = [{ position: [-25, 47], rotationY: Math.PI }];

const CampusScene = () => {
  const blocks = useCampusStore((state) => state.blocks);
  return (
    <AppScene>
      <GroundGrid />
      {blocks && blocks.map((block) => <Block {...block} key={getUniqueId('block')} />)}
      {groundBoxPositions.map((position) => (
        <GroundBox position={position} />
      ))}
      {intersections.map((intersection) => (
        <RoadIntersection {...intersection} key={getUniqueId('intersection')} />
      ))}
      {busStations.map((station) => (
        <Station {...station} />
      ))}
      {otherDecorations.map((deco) => (
        <SmallDecoration {...deco} />
      ))}
      <Circles />
      <Lake position={[120, 0, -110]} />
      <Park type='1' position={[390, 1.8, -510]} rotationY={Math.PI / 2} scale={0.4} />
      <Park type='2' position={[-265, 1.8, -100]} scale={0.18} />
      <Ground />
      <SkyBox />
    </AppScene>
  );
};

export default CampusScene;
