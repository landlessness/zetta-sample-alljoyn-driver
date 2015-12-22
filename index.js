var Scout = require('zetta-scout');
var util = require('util');
var AllJoynSample = require('./alljoyn_sample');

var AllJoynSampleScout = module.exports = function() {
  this.serviceName = arguments[0];
  this.servicePort = arguments[1];
  this.busAttachment = arguments[2];
  console.log('this.busAttachment ' + this.busAttachment);
  
  Scout.call(this);
};
util.inherits(AllJoynSampleScout, Scout);

AllJoynSampleScout.prototype.init = function(next) {
  var self = this;
  
  var query = this.server.where({type: 'alljoyn-sample'});
  
  var options = {
    serviceName: this.serviceName,
    servicePort: this.servicePort,
    busAttachment: this.busAttachment
  };
  console.log('this.options ' + util.inspect(options));

  this.server.find(query, function(err, results) {
    if (results[0]) {
      self.provision(results[0], AllJoynSample, options);
    } else {
      self.discover(AllJoynSample, options);
    }
  });

  next();

};
