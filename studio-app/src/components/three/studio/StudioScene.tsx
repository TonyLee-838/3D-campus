import React, { Suspense, useEffect } from 'react';

// components
import AppScene from '../basic/AppScene';
import Books from './Books';
import Bookshelf from './Bookshelf';
import Ceiling from './layouts/Ceiling';
import Circles from './Circles';
import Desk from './Desk';
import FloorPlane from './FloorPlane';
import Monitor from './Monitor';
import Wall from './Wall';
import NPC from './NPC';
import Note from './Note';
import SuspenseWrapper from '../basic/SuspenseWrapper';
import Layout from './layouts/Layout';
import Floor from './layouts/Floor';
import BackWindows from './layouts/BackWindows';
import FrontWall from './layouts/FrontWall';

const StudioScene = () => {
  return (
    <AppScene>
      {/* <Layout /> */}
      <SuspenseWrapper>
        <Floor position={[1, 1, 1]} rotation={[0, 0, 0]} />
        <Ceiling />
        <FrontWall position={[0, 7, -24]} />
        <BackWindows />

        {/* <Books />
        <Note />
        <NPC />
        <Bookshelf /> */}
        <Desk />
        {/* <Monitor /> */}
      </SuspenseWrapper>
      <Circles />
      {/* <Ceiling /> */}
      {/* <Wall rotationY={0} />
      <Wall rotationY={Math.PI / 2} />
      <Wall rotationY={-Math.PI / 2} />
      <Wall rotationY={Math.PI} /> */}
      <FloorPlane />
    </AppScene>
  );
};

export default StudioScene;
