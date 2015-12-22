var Device = require('zetta-device');
var alljoyn = require('alljoyn');
var util = require('util');

var AllJoynSample = module.exports = function(options) {
  Device.call(this);
  this.serviceName = options['serviceName'];
  this.servicePort = options['servicePort'];
  this.busAttachment = options['busAttachment'];
};
util.inherits(AllJoynSample, Device);

AllJoynSample.prototype.init = function(config) {
  
  this._establishBus();
  
  config
  .name('AllJoynSample')
  .type('alljoyn-sample')
  .state('waiting')
  .monitor('nameOwner')
  .when('waiting', { allow: ['do']});
};

AllJoynSample.prototype._establishBus = function() {

  this.sessionId = 0;

  // AllJoyn Inits
  console.log("Test loading alljoyn bus...", alljoyn);

  /* Create message bus. */
  this.msgBus = alljoyn.BusAttachment(this.busAttachment, true);

  // Start message bus
  console.log("Start "+this.msgBus.start());

  // Connect message bus
  console.log("Connect "+this.msgBus.connect());

  var self = this;
  var busListener = alljoyn.BusListener(
    function(name){
      console.log("FoundAdvertisedName", name);
      sessionId = self.msgBus.joinSession(name, self.servicePort, 0);
      console.log("JoinSession "+self.sessionId);
    },
    function(name){
      console.log("LostAdvertisedName", name);
    },
    function(name){
      self.nameOwner = name
      console.log("NameOwnerChanged", name);
    }
  );

  this.msgBus.registerBusListener(busListener);

  console.log("FindAdvertisedName "+this.msgBus.findAdvertisedName(this.serviceName));

}

