import { useEffect, useMemo } from "react";

import { useGLTF } from "@react-three/drei";
import { Color, Material } from "three";

interface configuredGLTFOptions {
  colors?: {
    primary?: string;
    secondary?: string;
  };
}

const setCustomColors = (material: Material, color: string) => {
  Object.assign(material, { color: new Color(color) });
};

export const useConfiguredGLTF = (
  path: string,
  options: configuredGLTFOptions = {}
) => {
  const gltf = useGLTF(path, false);

  const { nodes, materials, scene } = gltf;

  const { colors } = options;

  useEffect(() => {
    Object.keys(materials).forEach((matKey) => {
      const material = materials[matKey];

      // Allow to pass custom color here...
      //FIXME: REFACTOR...
      if (matKey === "primary" && colors?.primary) {
        setCustomColors(material, colors.primary);
      }
      if (matKey === "secondary" && colors?.secondary) {
        setCustomColors(material, colors.secondary);
      }
      //Fix transparency issue
      material.depthWrite = true;
    });

    scene.castShadow = true;
  }, [colors, gltf, materials, scene]);

  // const copiedNodes = useMemo(() => {
  //   const copiedNodes = {};
  //   Object.keys(nodes).forEach((key) => {
  //     const newNode = nodes[key].clone();
  //     copiedNodes[key] = newNode;
  //   });
  //   return copiedNodes;
  // }, [nodes]);

  // Allow to create multiple instances.
  const copiedScene = useMemo(() => scene.clone(), [scene]);

  return { ...gltf, scene: copiedScene };
};
