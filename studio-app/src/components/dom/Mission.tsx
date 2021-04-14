import { Html } from "@react-three/drei";
import React from "react";
import MissionApp from "../external/MissionApp";

const Mission = () => {
  return (
    <Html transform scale={[9.95, 9.95, 9.95]} position={[0, 100, 0]}>
      <MissionApp />
    </Html>
  );
};

export default Mission;
