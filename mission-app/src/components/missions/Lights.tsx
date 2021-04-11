import React from 'react';

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[-3, 5, -3]} castShadow />
    </>
  );
};

export default Lights;
