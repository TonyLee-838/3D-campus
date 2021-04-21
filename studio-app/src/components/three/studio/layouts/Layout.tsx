import React from 'react';
import SuspenseWrapper from '../../basic/SuspenseWrapper';
import BackWindows from './BackWindows';
import Ceiling from './Ceiling';
import Floor from './Floor';
import FrontWall from './FrontWall';
import LeftWall from './LeftWall';
import RightWall from './RightWall';

const Layout = () => {
  return (
    <>
      {/* <LeftWall /> */}
      <Floor position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
      <Ceiling position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]} />
      {/* <BackWindows />
      <FrontWall />
      <Floor />
    <RightWall /> */}
    </>
  );
};

export default Layout;
