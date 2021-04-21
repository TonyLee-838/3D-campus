import { useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import { useCubeTexture } from '@react-three/drei';

import { getPublicPath } from '../utils/getPublicPath';

const useSkyBox = () => {
  const envMap = useCubeTexture(['pz.png', 'nz.png', 'py.png', 'ny.png', 'nx.png', 'px.png'], {
    path: `${getPublicPath()}/3d/sky/`,
  });

  const { scene } = useThree();

  useEffect(() => {
    scene.background = envMap;
  }, []);
};

export default useSkyBox;
