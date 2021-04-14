import React, { useEffect, useRef } from 'react';

import { mount } from 'quiz/QuizApp';

const QuizApp = () => {
  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    mount(containerRef.current);

    console.log(containerRef.current);
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default QuizApp;
