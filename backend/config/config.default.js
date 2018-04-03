'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_gloomyline';

  config.security = {
    csrf: {
      // default field in header to dilevery csrf token
      headerName: 'x-csrf-token'
    }
  }

  // add your config here
  config.middleware = [];

  // add plugins config here
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/alan-blog',
      options: {}
    }
  }

  return config;
};
