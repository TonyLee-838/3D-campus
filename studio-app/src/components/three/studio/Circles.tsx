import React from "react";

// components
import Circle from "./Circle";

// three
// attention: react-three-fiber is better than @react-three/fiber here
// because const {camera} = useThree() is valid when using react-three-fibe
// when using  @react-three/fiber, it makes errors!
import { useThree } from "react-three-fiber";

// hooks
import { getSuitablePositions } from "../../../hooks/useSuitablePosition";
import { useStudioStore } from "../../../store/studioStore";

// types
import { Dims3 } from "../../../types/studio";

const Circles = () => {
  const bookshelfData = useStudioStore((state) => state.bookshelfData);
  const deskData = useStudioStore((state) => state.deskData);
  const monitorData = useStudioStore((state) => state.monitorData);
  const npcData = useStudioStore((state) => state.npcData);
  const suitablePositions: Dims3[] = getSuitablePositions([
    bookshelfData,
    deskData,
    monitorData,
    npcData,
  ]);

  return (
    <group>
      {suitablePositions.map((position, i) => (
        <Circle position={position} key={`circle-${i}`} />
      ))}
    </group>
  );
};

export default Circles;
