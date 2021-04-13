import { GradientColor } from '../types';

export const colors = {
  orange: '#de7a22',
  yellow: '#f4cc70',
  iceBlue: '#a1d6e2',
  glacierBlue: '#1995ad',
  darkBlue: '#1e4e96',
  grass: '#d3e2c3',
  purple: '#7b5ba6',
  pink: '#e6bbcf',
  red: '#f13d6c',
  ultraGreen: '#94fd6f',
  grey: '#a4a4a4',
  white: '#fcfcfc',
};

export const gradientColors = {
  yellow: {
    from: ['#ffffff ', '#c8b572'],
    to: ['#a8a31122'],
  },
  iceBlue: { from: ['#849eb2'], to: ['#a3c8b2'] },
  lightRed: { from: ['#c399a5'], to: ['#a3c8b255'] },
  orange: { from: ['#c2a78e'], to: ['#e0ad7455'] },
  blue: { from: ['#147d8a'], to: ['#3492e766'] },
  red: { from: ['#d5234235'], to: ['#d4777755 '] },
  purple: { from: ['#52107463'], to: ['#54307844 '] },
  green: { from: ['#3f7a3955'], to: ['#53935966 '] },
  grey: { from: ['#acacac55'], to: ['#68686866 '] },
};

export const getColorArray = () => {
  return Object.entries(colors).map((entry) => entry[1]);
};
