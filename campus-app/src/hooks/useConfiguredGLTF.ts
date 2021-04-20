import { useEffect, useMemo } from 'react';

import { useGLTF } from '@react-three/drei';
import { Color, Material } from 'three';

interface configuredGLTFOptions {
  colors?: {
    primary?: string;
    secondary?: string;
  };
}

const setCustomColors = (material: Material, color: string) => {
  Object.assign(material, { color: new Color(color) });
};

const BASE_PATH = 'http://10.115.213.234:8086/public/3d/';

export const useConfiguredGLTF = (path: string, options: configuredGLTFOptions = {}) => {
  const gltf = useGLTF(BASE_PATH + path, false);

  const { materials, scene } = gltf;

  const { colors } = options;

  useEffect(() => {
    Object.keys(materials).forEach((matKey) => {
      const material = materials[matKey];

      // Allow to pass custom color here...
      //FIXME: REFACTOR...
      if (matKey === 'primary' && colors?.primary) {
        setCustomColors(material, colors.primary);
      }
      if (matKey === 'secondary' && colors?.secondary) {
        setCustomColors(material, colors.secondary);
      }
      //Fix transparency issue
      material.depthWrite = true;
    });

    scene.castShadow = true;
  }, [colors, gltf, materials, scene]);

  // Allow to create multiple instances.
  const copiedScene = useMemo(() => scene.clone(), [scene]);

  return { ...gltf, scene: copiedScene };
};
