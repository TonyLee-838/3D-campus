import React, { Suspense, useEffect, useState } from 'react';

// components
import AppScene from '../basic/AppScene';
import GroundGrid from './GroundGrid';
import Ground from './Ground';
import Block from './Block';
import SkyBox from './SkyBox';
import Circles from './Circles';

// hooks
import { useCampusStore } from '../../../store/CampusStore';
import Decoration from './decorations/Decorations';

const CampusScene = () => {
  const blocks = useCampusStore((state) => state.blocks);

  return (
    <AppScene>
      <GroundGrid />
      {blocks && blocks.map((block) => <Block {...block} key={block.id} />)}
      <Decorations />
      <Circles />
      <Ground />
      <SkyBox />
    </AppScene>
  );
};

export default CampusScene;
