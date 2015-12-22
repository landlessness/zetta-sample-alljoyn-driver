module.exports = function testApp(server) {
  
  // add query params in the where object like so:
  // var starterDeviceQuery = server.where({type: 'led'});
  var alljoynSampleDeviceQuery = server.where({});
  
  server.observe([alljoynSampleDeviceQuery], function(alljoynSampleDevice){
    setInterval(function(){
      alljoynSampleDevice.call('do', './example/apps/alljoyn_sample_app.js is running', function() {});
    }, 1000);
  });
  
}