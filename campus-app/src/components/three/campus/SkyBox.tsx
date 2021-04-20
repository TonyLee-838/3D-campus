import React, { useEffect, useRef } from 'react';

//Three
import { useCubeTexture, useTexture } from '@react-three/drei';
import { useFrame, useThree } from 'react-three-fiber';
import { BackSide, Mesh } from 'three';

//Config
const SkyBox = () => {
  // const textures = useTexture(paths);
  const envMap = useCubeTexture(['pz.png', 'nz.png', 'py.png', 'ny.png', 'nx.png', 'px.png'], {
    path: `http://10.115.213.234:8086/public/3d/sky/`,
  });

  const { scene } = useThree();

  useEffect(() => {
    scene.background = envMap;
  }, []);

  const skyRef = useRef<Mesh>(null!);

  useFrame(() => {
    // skyRef.current.rotation.y += (Math.PI / 180) * 0.01;
  });

  return (
    <>
      {/* <mesh ref={skyRef} position={[0, 150, 0]}> */}
      {/* <boxBufferGeometry args={[700, 700, 700]} /> */}
      {/* {textures.length &&
          textures.map((texture) => (
            <meshStandardMaterial
              attachArray='material'
              side={BackSide}
              map={texture}
              key={getUniqueId('skybox')}
            />
          ))} */}
      {/* <meshPhongMaterial map /> */}
      {/* {texture && <meshPhongMaterial map={texture} side={BackSide} opacity={0.7} />} */}
      {/* </mesh> */}
    </>
  );
};

// useTexture.preload('./3d/sky/sky-box.png');

export default SkyBox;
