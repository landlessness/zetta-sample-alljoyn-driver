var zetta = require('zetta');
var AllJoynSample = require('../index');
var app = require('./apps/alljoyn_sample_app');


zetta()
  .use(AllJoynSample, 'org.alljoyn.Bus.sample', 25, 'myApp')
  // .use(app)
  .listen(1337);
