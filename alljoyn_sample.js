var Device = require('zetta-device');
var util = require('util');

var AllJoynSample = module.exports = function(options) {
  Device.call(this);
  this._default = options['default'];
};
util.inherits(AllJoynSample, Device);

AllJoynSample.prototype.init = function(config) {
  config
  .name('AllJoynSample')
  .type('alljoyn-sample')
  .state('waiting')
  .when('waiting', { allow: ['do']})
  .when('doing', { allow: [] })
  .map('do', this.do, [
    { name: 'message', type: 'text'}
  ]);
};

AllJoynSample.prototype.do = function(message, cb) {
  this.state = 'doing';
  this.log(this._default + ': ' + message);
  this.state = 'waiting';
  cb();
};
