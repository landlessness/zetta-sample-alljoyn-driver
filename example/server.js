var zetta = require('zetta');
var AllJoynSample = require('../index');
var app = require('./apps/alljoyn_sample_app');

zetta()
  .use(AllJoynSample)
  .use(app)
  .listen(1337);
