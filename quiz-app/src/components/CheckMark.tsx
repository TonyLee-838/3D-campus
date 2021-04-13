import React from 'react';
import SvgLines from 'react-mt-svg-lines';
import colors from '../config/color';

const CheckMark = () => {
  return (
    <SvgLines animate duration={1500}>
      <svg viewBox='0 0 100 100'>
        <g fill='none' strokeMiterlimit='1'>
          <circle fill={colors.green} cx='50' cy='50' r='45' />
          <path
            stroke='#FFF'
            strokeWidth='8'
            d='M20.8,51c0,0,20.8,18.2,21.5,18.2c0.6,0,33.3-38.5,33.3-38.5'
          />
        </g>
      </svg>
    </SvgLines>
  );
};

export default CheckMark;
