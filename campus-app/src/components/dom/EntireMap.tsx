import React, { useEffect, useMemo } from "react";

// components
import RoomIcon from "@material-ui/icons/Room";

// types
import { Style } from "../../types/";

// hooks
import { useCampusStore } from "../../store/CampusStore";
import {
  getEntireMapStyle,
  getBlockStyle,
  getBuildingStyle,
  getStudioNameStyle,
  getPlayerEntireMapStyle,
  getOffsetStyleOfMap,
} from "../../hooks/useCalculateMap";

interface EntireMapProps {
  forMiniMap?: boolean;
}

const EntireMap = ({ forMiniMap = false }: EntireMapProps) => {
  const blocks = useCampusStore((state) => state.blocks);
  const buildings = useCampusStore((state) => state.buildings);
  const playerPosition = useCampusStore((state) => state.playerPosition);
  const entireMapStyle: Style = forMiniMap ? {} : { left: "25%", top: "10%" };
  const offsetStyle: Style = !forMiniMap
    ? {}
    : getOffsetStyleOfMap(playerPosition);

  const getEntireMap = () => {
    // console.log("get entire map");
    return useMemo(
      () => (
        <>
          {blocks &&
            blocks.map((block, i) => {
              const { position, dimensions } = block;
              return (
                <div
                  style={getBlockStyle(position, dimensions)}
                  key={`block-${i}`}
                />
              );
            })}
          {buildings &&
            buildings.map((building, i) => {
              return (
                <div
                  style={getBuildingStyle(building.position)}
                  key={`building-${i}`}
                >
                  <span style={getStudioNameStyle()}>XX工作室</span>
                </div>
              );
            })}
        </>
      ),
      [blocks, buildings]
    );
  };

  return (
    <div style={{ ...getEntireMapStyle(), ...entireMapStyle, ...offsetStyle }}>
      {getEntireMap()}
      {!forMiniMap && playerPosition && (
        <RoomIcon
          color="secondary"
          style={getPlayerEntireMapStyle(playerPosition)}
          fontSize="large"
        />
      )}
    </div>
  );
};

export default EntireMap;
