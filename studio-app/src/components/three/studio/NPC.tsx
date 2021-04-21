import React, { useEffect, useRef, useState } from "react";

// components

// three
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useThree } from "react-three-fiber";

// hooks
import { useStudioStore } from "../../../store/studioStore";
import { useSuitablePosition } from "../../../hooks/useSuitablePosition";
import { useMouseControl } from "../../../hooks/useMouseControl";
import { getSuitablePositionForNPC } from "../../../hooks/useSuitablePositionForNPC";

type GLTFResult = GLTF & {
  nodes: {
    head_0001: THREE.SkinnedMesh;
    head_1001: THREE.SkinnedMesh;
    head_2001: THREE.SkinnedMesh;
    head_3001: THREE.SkinnedMesh;
    head_4001: THREE.SkinnedMesh;
    head_5001: THREE.SkinnedMesh;
    head_6001: THREE.SkinnedMesh;
    head_7001: THREE.SkinnedMesh;
    Armature_rootJoint: THREE.Bone;
  };
  materials: {
    head: THREE.MeshStandardMaterial;
    eyes: THREE.MeshStandardMaterial;
    lamp: THREE.MeshStandardMaterial;
    body: THREE.MeshStandardMaterial;
    hands: THREE.MeshStandardMaterial;
    chain: THREE.MeshStandardMaterial;
    legs: THREE.MeshStandardMaterial;
    hinge: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Take 01";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function NPC(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "./public/3d/common/npc.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const npcData = useStudioStore((state) => state.npcData);
  const setShowMissionPanel = useStudioStore(
    (state) => state.setShowMissionPanel
  );
  const { ready } = useMouseControl("npc");

  const lookAtPosition = getSuitablePositionForNPC(npcData).lookAtPosition;
  lookAtPosition[0] += 0.5;
  const { activity, startActivity } = useSuitablePosition(npcData, null, {
    lookAtPosition,
    modelName: "npc",
  });
  useEffect(() => {
    if (ready.current) {
      startActivity();
      setShowMissionPanel(true);
    } else {
      setShowMissionPanel(false);
    }
  }, [ready.current]);

  const { position, rotation } = npcData;
  useEffect(() => {
    actions["Take 01"].play();
  }, []);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.9, 0.9, 0.9]}
      position={position}
      rotation={rotation}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.56, 3.23]}>
          <primitive object={nodes.Armature_rootJoint} />
          <skinnedMesh
            name="head_0001"
            geometry={nodes.head_0001.geometry}
            material={materials.head}
            skeleton={nodes.head_0001.skeleton}
            morphTargetDictionary={nodes.head_0001.morphTargetDictionary}
            morphTargetInfluences={nodes.head_0001.morphTargetInfluences}
          />
          <skinnedMesh
            name="head_1001"
            geometry={nodes.head_1001.geometry}
            material={materials.eyes}
            skeleton={nodes.head_1001.skeleton}
            morphTargetDictionary={nodes.head_1001.morphTargetDictionary}
            morphTargetInfluences={nodes.head_1001.morphTargetInfluences}
          />
          <skinnedMesh
            name="head_2001"
            geometry={nodes.head_2001.geometry}
            material={materials.lamp}
            skeleton={nodes.head_2001.skeleton}
            morphTargetDictionary={nodes.head_2001.morphTargetDictionary}
            morphTargetInfluences={nodes.head_2001.morphTargetInfluences}
          />
          <skinnedMesh
            name="head_3001"
            geometry={nodes.head_3001.geometry}
            material={materials.body}
            skeleton={nodes.head_3001.skeleton}
            morphTargetDictionary={nodes.head_3001.morphTargetDictionary}
            morphTargetInfluences={nodes.head_3001.morphTargetInfluences}
          />
          <skinnedMesh
            name="head_4001"
            geometry={nodes.head_4001.geometry}
            material={materials.hands}
            skeleton={nodes.head_4001.skeleton}
            morphTargetDictionary={nodes.head_4001.morphTargetDictionary}
            morphTargetInfluences={nodes.head_4001.morphTargetInfluences}
          />
          <skinnedMesh
            name="head_5001"
            geometry={nodes.head_5001.geometry}
            material={materials.chain}
            skeleton={nodes.head_5001.skeleton}
            morphTargetDictionary={nodes.head_5001.morphTargetDictionary}
            morphTargetInfluences={nodes.head_5001.morphTargetInfluences}
          />
          <skinnedMesh
            name="head_6001"
            geometry={nodes.head_6001.geometry}
            material={materials.legs}
            skeleton={nodes.head_6001.skeleton}
            morphTargetDictionary={nodes.head_6001.morphTargetDictionary}
            morphTargetInfluences={nodes.head_6001.morphTargetInfluences}
          />
          <skinnedMesh
            name="head_7001"
            geometry={nodes.head_7001.geometry}
            material={materials.hinge}
            skeleton={nodes.head_7001.skeleton}
            morphTargetDictionary={nodes.head_7001.morphTargetDictionary}
            morphTargetInfluences={nodes.head_7001.morphTargetInfluences}
          />
        </group>
        <group
          position={[2.17, 1.01, 8.39]}
          rotation={[-0.27, 0.6, 1.93]}
          scale={[1, 1, 1]}
        />
        <group position={[-5.04, -3.62, 7.38]} rotation={[0.74, 0, 0]} />
      </group>
    </group>
  );
}

useGLTF.preload("./public/3d/common/npc.glb");
