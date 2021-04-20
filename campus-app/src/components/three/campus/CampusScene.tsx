import React, { Suspense, useEffect, useState } from 'react';

// components
import AppScene from '../basic/AppScene';
import GroundGrid from './GroundGrid';
import Ground from './Ground';
import Block from './Block';
import AppSky from './AppSky';
import SkyBox from './SkyBox';
import Road from './Road';
import RoadIntersection from './RoadIntersection.jsx';
import Circles from './Circles';

// utils
import { getUniqueId } from '../../../utils';

// hooks
import { useCampusStore } from '../../../store/CampusStore';
import { Preload } from '@react-three/drei';

const CampusScene = () => {
  const blocks = useCampusStore((state) => state.blocks);
  return (
    <AppScene>
      <Preload all />
      <GroundGrid />
      {blocks && blocks.map((block) => <Block {...block} key={getUniqueId('block')} />)}
      <Circles />
      <Ground />
      <RoadIntersection position={[0, 0, 0]} />
      <RoadIntersection position={[500, 0, 0]} />
      <RoadIntersection position={[-500, 0, 0]} />
      <RoadIntersection position={[0, 0, 500]} />
      <RoadIntersection position={[0, 0, -500]} />
      <RoadIntersection position={[500, 0, 500]} />
      <RoadIntersection position={[-500, 0, -500]} />
      <RoadIntersection position={[500, 0, -500]} />
      <RoadIntersection position={[-500, 0, 500]} />

      <SkyBox />
    </AppScene>
  );
};

export default CampusScene;
