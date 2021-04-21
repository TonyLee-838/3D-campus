import React, { useEffect, useRef } from "react";

// components
import Quiz from "../../dom/Quiz";

// three
import { Html, useGLTF, useHelper } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { a } from "react-spring/three";

// hooks
import { useStudioStore } from "../../../store/studioStore";
import { useSuitablePosition } from "../../../hooks/useSuitablePosition";
import { useMouseControl } from "../../../hooks/useMouseControl";

type GLTFResult = GLTF & {
  nodes: {
    Plane001__0: THREE.Mesh;
  };
  materials: {
    fucccc: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "./public/3d/common/note.glb"
  ) as GLTFResult;
  const deskData = useStudioStore((state) => state.deskData);
  const { position, rotation } = useStudioStore((state) => state.noteData);
  const { ready } = useMouseControl("desk");
  const config = {
    distance: 2.5,
    heightOfLookAt: 2,
    heightOfSubModelFineTune: -0.25,
  };
  const { startActivity, endActivity, subModelAnimation } = useSuitablePosition(
    deskData,
    { position, rotation },
    config
  );
  useEffect(() => {
    if (ready.current) {
      startActivity();
    } else {
      endActivity();
    }
  }, [ready.current]);

  return (
    <a.group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.02, 0.02, 0.02]}
      position={subModelAnimation.position as any}
      rotation={subModelAnimation.rotation as any}
    >
      <Quiz onClick={endActivity} />
      <group rotation={[0, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.16, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Plane001__0.geometry}
              material={materials.fucccc}
              position={[0.16, 0, 0]}
            />
          </group>
        </group>
      </group>
    </a.group>
  );
}

useGLTF.preload("./public/3d/common/note.glb");
