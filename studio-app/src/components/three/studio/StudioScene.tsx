import React from 'react';

//Components
import AppScene from '../basic/AppScene';
import Ceiling from './Ceiling';
import Floor from './Floor';
import Monitor from './Monitor';
import Wall from './Wall';

const StudioScene = () => {
  return (
    <AppScene>
      <Ceiling />
      <Monitor />
      <Wall rotationY={0} />
      <Wall rotationY={Math.PI / 2} />
      <Wall rotationY={-Math.PI / 2} />
      <Wall rotationY={Math.PI} />
      <Floor />
    </AppScene>
  );
};

export default StudioScene;
