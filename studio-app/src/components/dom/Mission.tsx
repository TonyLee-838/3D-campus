import React from "react";
import { Html } from "@react-three/drei";

import MissionApp from "../external/MissionApp";

const Mission = () => {
  return (
    <Html transform scale={[12, 10, 10]} position={[0, 110, 0]}>
      <MissionApp />
    </Html>
  );
};

export default Mission;
