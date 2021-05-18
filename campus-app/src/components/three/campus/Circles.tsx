import React from "react";

// components
import Circle from "./Circle";

// hooks
import { useCampusStore } from "../../../store/CampusStore";

// types
import { Dims3 } from "../../../types";

const Circles = () => {
  const suitablePositions = useCampusStore((state) => state.suitablePositions);

  return (
    <group>
      {suitablePositions &&
        Object.keys(suitablePositions).map((key, i) => {
          const item = suitablePositions[key];
          const position: Dims3 = [item[0], 3, item[1]];
          return <Circle position={position} key={item.id} />;
        })}
    </group>
  );
};

export default Circles;
