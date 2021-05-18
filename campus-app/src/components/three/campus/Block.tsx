import React from "react";

//Three
import { useBox } from "@react-three/cannon";

//Components
import StreetLight from "./StreetLight.jsx";
import Building from "./Building";
import StreetTree from "./StreetTree.jsx";

import colors from "../../../config/colors";
import { IBlock } from "../../../types";
import { getUniqueId } from "../../../utils";
import { useDecoration } from "../../../hooks/useDecoration";

const Block = (props: IBlock) => {
  const {
    blockDimensions,
    blockPosition,
    treePositions,
    lightPositions,
  } = useDecoration(props);

  const [ref] = useBox(() => ({
    type: "Static",
    position: blockPosition,
  }));

  return (
    <group>
      <mesh ref={ref} receiveShadow>
        <boxBufferGeometry attach="geometry" args={blockDimensions} />
        <meshStandardMaterial attach="material" color={colors.grey} />
      </mesh>

      {props.buildings.map((building) => (
        <Building {...building} key={building.id} />
      ))}
      {treePositions.map(({ position, rotation , id}) => (
        <StreetTree
          position={position}
          rotation={rotation}
          key={id}
        />
      ))}
      {lightPositions.map(({ position, rotation , id}) => (
        <StreetLight
          position={position}
          rotation={rotation}
          key={id}
        />
      ))}
    </group>
  );
};

export default Block;
