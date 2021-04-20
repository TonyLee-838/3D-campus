const path = require('path');

const loadENV = () => {
  require('dotenv').config({
    path: path.resolve(__dirname, '../', '.env'),
  });
};

module.exports = loadENV;
