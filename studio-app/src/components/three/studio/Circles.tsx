import React from "react";

// components
import Circle from "./Circle";

// hooks
import { useStudioStore } from "../../../store/studioStore";

const Circles = () => {
  const suitablePositions = useStudioStore((state) => state.suitablePositions);

  return (
    <group>
      {suitablePositions &&
        Object.keys(suitablePositions).map((key, i) => (
          <Circle position={suitablePositions[key]} key={`circle-${i}`} />
        ))}
    </group>
  );
};

export default Circles;
