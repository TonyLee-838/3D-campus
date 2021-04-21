import React from "react";

// components
import Aim from "./Aim";
import { FpsView } from "react-fps";
import Message from "./Message";
import MissionPanel from "./MissionPanel";

// hooks
import { useStudioStore } from "../../store/studioStore";

const DomMain = () => {
  const message = useStudioStore((state) => state.message);
  const showMissionPanel = useStudioStore((state) => state.showMissionPanel);
  return (
    <>
      <FpsView />
      <Aim />
      <Message content={message} />
      {showMissionPanel && <MissionPanel />}
    </>
  );
};

export default DomMain;
