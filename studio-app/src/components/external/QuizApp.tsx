import React, { useEffect, useRef } from "react";

import { mount } from "quiz/QuizApp";

const QuizApp = () => {
  const containerRef = useRef<HTMLDivElement>();
  useEffect(() => {
    mount(containerRef.current);
  }, []);
  return <div ref={containerRef}></div>;
};

export default QuizApp;
