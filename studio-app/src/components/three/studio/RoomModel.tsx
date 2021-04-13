import React from 'react';
import { useFBX } from '@react-three/drei';

const RoomModel = () => {
  const fbx = useFBX('public/3d/room.fbx');

  return (
    <group>
      <primitive object={fbx} />
    </group>
  );
};

export default RoomModel;

useFBX.preload('public/3d/room.fbx');
