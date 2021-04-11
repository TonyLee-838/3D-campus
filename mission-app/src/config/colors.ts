const colors = {
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

export const getColorArray = () => {
  return Object.entries(colors).map((entry) => entry[1]);
};

export default colors;
