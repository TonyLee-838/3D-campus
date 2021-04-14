import React, { useEffect, useRef } from "react";

import { mount } from "mission/MissionApp";

const MissionApp = () => {
  const containerRef = useRef<HTMLDivElement>();
  useEffect(() => {
    mount(containerRef.current);
  }, []);
  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
  );
};

export default MissionApp;
