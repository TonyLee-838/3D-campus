const path = require('path');

const loadENV = () => {
  const parsed = require('dotenv').config({
    path: path.resolve(__dirname, '../', '.env'),
  });

  return Object.keys(parsed).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(parsed[next]);
    return prev;
  }, {});
};

module.exports = loadENV;
