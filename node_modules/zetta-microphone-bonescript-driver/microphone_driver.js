var Device = require('zetta').Device;
var util = require('util');
var bone = require('bonescript');

var SAMPLE_TIME = 100; // ms

var Microphone = module.exports = function(pin) {
  Device.call(this);
  this.pin = pin || 'P9_36';
};
util.inherits(Microphone, Device);

Microphone.prototype.init = function(config) {
  config
    .type('microphone')
    .name('Microphone')
    .monitor('volume');

  var startTime = 0;
  var maxValue = 0;
  var minValue = 0;
  function reset() {
    startTime = new Date().getTime();
    maxValue = 0;
    minValue = 100;
  }
  
  reset();
  var self = this;
  setInterval(function() {
    bone.analogRead(self.pin, function(x) {
      if (x.err) {
        return;
      }
      
      x.value = (x.value === 0) ? 1 : x.value;
      x.value = Number((100 * x.value).toFixed(3));

      if (x.value > maxValue) {
        maxValue = x.value;
      }
      
      if (x.value < minValue) {
        minValue = x.value;
      }
      
      if (new Date().getTime() - startTime > SAMPLE_TIME) {
        self.volume = Number((maxValue - minValue).toFixed(3));
        //self.amplitude = x.value;
        reset();
      }
    });

  }, 25);

};


