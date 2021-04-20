import React from "react";

// components
import { FpsView } from "react-fps";
import Message from "./Message";
import EntireMap from "./EntireMap";

// hooks
import { useCampusStore } from "../../store/CampusStore";
import MiniMap from "./MiniMap";

const DomMain = () => {
  const message = useCampusStore((state) => state.message);
  const showEntireMap = useCampusStore((state) => state.showEntireMap);
  // const showEntireMap
  return (
    <>
      <FpsView />
      <MiniMap />
      {showEntireMap && <EntireMap forMiniMap={false} />}
      <Message content={message} />
    </>
  );
};

export default DomMain;
