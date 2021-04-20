import React from "react";

// components
import RoomIcon from "@material-ui/icons/Room";

// hooks
import {
  getMiniMapStyle,
  getPlayerMiniMapStyle,
} from "../../hooks/useCalculateMap";
import EntireMap from "./EntireMap";

const MiniMap = () => {
  return (
    <div style={getMiniMapStyle()}>
      <RoomIcon
        color="secondary"
        style={getPlayerMiniMapStyle()}
        fontSize="large"
      />
      <EntireMap forMiniMap={true} />
    </div>
  );
};

export default MiniMap;
