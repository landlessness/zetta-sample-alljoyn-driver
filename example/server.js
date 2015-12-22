var zetta = require('zetta');
var AllJoynSample = require('../index');
var app = require('./apps/alljoyn_sample_app');


zetta()
  .name("Connected Life Gateway")
  .use(AllJoynSample, 'org.alljoyn.Bus.sample', 25, 'myApp')
  .link('http://link-demo.iot.apigee.net/')
  .listen(1337);
