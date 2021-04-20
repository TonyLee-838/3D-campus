import React, { useEffect, useState } from 'react';

//Three
import { Sky } from '@react-three/drei';

const SUNRISE_HOUR = 6;
const SUNSET_HOUR = 18;
const SUNRISE_AZIMUTH = 0;
const SUNSET_AZIMUTH = 0.5;

const getAzimuth = (hour: number) => {
  const azimuth =
    ((SUNSET_AZIMUTH - SUNRISE_AZIMUTH) / (SUNSET_HOUR - SUNRISE_HOUR)) * (hour - SUNRISE_HOUR);
  return azimuth < 0 ? 1 + azimuth : azimuth;
};

const AppSky = () => {
  return (
    <Sky
      sunPosition={[100, 2000, 100]}
      inclination={0}
      mieCoefficient={0.023}
      mieDirectionalG={0.997}
      turbidity={12.7}
      rayleigh={0.642}
    />
  );
};

export default AppSky;
