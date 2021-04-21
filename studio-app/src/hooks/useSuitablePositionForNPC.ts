// types
import { Dims3, ModelData } from "../types";

export const getSuitablePositionForNPC = (
  npcData: ModelData,
  horizontalDistance: number = 1.5,
  verticalDistance: number = 4.5,
  lookAtHeight: number = 2.5
) => {
  const { position, rotation } = npcData;

  const specialAngle = Math.PI - rotation[1];

  const getLookAtPosition = (): Dims3 => {
    const x = Math.cos(specialAngle) * horizontalDistance + position[0];
    const z = Math.sin(specialAngle) * horizontalDistance + position[2];
    return [x, lookAtHeight, z];
  };
  const lookAtPosition = getLookAtPosition();

  const getPlayerPosition = (): Dims3 => {
    const x = Math.sin(specialAngle) * verticalDistance + lookAtPosition[0];
    const z = lookAtPosition[2] - Math.cos(specialAngle) * verticalDistance;
    return [x, 0.1, z];
  };
  const playerPosition = getPlayerPosition();

  return {
    lookAtPosition,
    playerPosition,
  };
};
