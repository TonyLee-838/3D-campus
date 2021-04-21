import React from 'react';
import colors from '../../../config/colors';
import Axis from './Axis';

const CoordinateSystem = () => {
  return (
    <>
      <Axis length={120} axis='x' color={colors.reds.watermelon} />
      <Axis length={120} axis='y' color={colors.blues.cadet} />
      <Axis length={120} axis='z' color={colors.greens.plants} />
    </>
  );
};

export default CoordinateSystem;
