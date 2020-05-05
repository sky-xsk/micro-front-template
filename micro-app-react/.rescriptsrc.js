const { name } = require('./package');

module.exports = {
  webpack: config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    return config;
  },

  devServer: _ => {
    const config = {};

    config.port = 10100;
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    return config;
  },
};
