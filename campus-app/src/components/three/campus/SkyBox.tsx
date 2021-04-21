import React, { useEffect } from 'react';

//Three
import { useCubeTexture } from '@react-three/drei';
import { useThree } from 'react-three-fiber';

//Config
import { getPublicPath } from '../../../utils/getPublicPath';

const SkyBox = () => {
  const envMap = useCubeTexture(['pz.png', 'nz.png', 'py.png', 'ny.png', 'nx.png', 'px.png'], {
    path: `${getPublicPath()}/3d/sky/`,
  });

  const { scene } = useThree();

  useEffect(() => {
    scene.background = envMap;
  }, []);

  return <></>;
};

export default SkyBox;
