##Monitor a Micophone using Zetta and bonescript!

###Install

```
$> npm install zetta-microphone-bonescript-driver
```

###Usage

```
var zetta = require('zetta');
var Microphone = require('zetta-microphone-bonescript-driver');

zetta()
  .use(Microphone)
  .listen(1337)
```

### Hardware

![Hookup Diagram](docs/hookup_diagram_bb.png)

* [Beagle Bone](http://beagleboard.org/black)
* [Electret Microphone](https://www.sparkfun.com/products/9964)

###Streams

#####amplitude

Amplitude, relative to 0-1.8v
