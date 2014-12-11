'use strict';

var Hapi         = require('hapi'),
  server         = new Hapi.Server('0.0.0.0', process.env.PORT, {cors:{origin: ['http://localhost:8100'],credentials: true}, timeout:{client:60000}}), //cors:true is telling hapi it is okay if someone talks to you from a different domain you then have to go to the client side in their app.js $httpProvier.defaults = true * something
  routes         = require('./routes/config/routes'),
  plugins        = require('./routes/config/plugins'),
  authentication = require('./routes/config/authentication');

server.pack.register(plugins, function(){
  server.auth.strategy('session', 'cookie', true, authentication);
  server.route(routes);
  server.start(function(){
    server.log('info', server.info.uri);
  });
});
