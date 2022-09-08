const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const environment = {
  port: 5555,
  base_url: 'https://itunes.apple.com/search',
};

export default environment;
