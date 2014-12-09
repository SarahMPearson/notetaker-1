'use strict';

var Hapi         = require('hapi'),
  server         = new Hapi.Server('0.0.0.0', process.env.PORT, {cors:true}), //cors:true is telling hapi it is okay if someone talks to you from a different domain
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
