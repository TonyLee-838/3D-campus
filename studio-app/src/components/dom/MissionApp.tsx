import React, { useEffect, useRef } from 'react';

import { mount } from 'mission/MissionApp';

const MissionApp = () => {
  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    mount(containerRef.current);

    console.log(containerRef.current);
  }, []);

  return <div ref={containerRef} />;
};

export default MissionApp;
