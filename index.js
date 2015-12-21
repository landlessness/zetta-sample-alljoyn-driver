var Scout = require('zetta-scout');
var util = require('util');
var AllJoynSample = require('./alljoyn_sample');

var AllJoynSampleScout = module.exports = function() {
  Scout.call(this);
};
util.inherits(AllJoynSampleScout, Scout);

AllJoynSampleScout.prototype.init = function(next) {

  var self = this;

  var query = this.server.where({type: 'alljoyn-sample'});
  var options = {default: 'DEFAULT'};

  this.server.find(query, function(err, results) {
    if (results[0]) {
      self.provision(results[0], AllJoynSample, options);
    } else {
      self.discover(AllJoynSample, options);
    }
  });

  next();

};
