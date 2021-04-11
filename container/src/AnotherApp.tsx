import React, { useRef, useEffect } from 'react';
import { mount } from 'mission/MissionApp';

const AnotherApp = () => {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    mount(ref.current);
  });

  return <div style={{ border: '5px solid red' }} ref={ref}></div>;
};

export default AnotherApp;
