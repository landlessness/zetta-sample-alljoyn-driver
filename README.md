##Zetta Sample Driver for AllJoyn

###Install

```
$> git clone https://github.com/zettajs/zetta-sample-alljoyn-driver zetta-sample-alljoyn-driver
```

###Usage

```
var zetta = require('zetta');
var Starter = require('zetta-sample-alljoyn-driver');

zetta()
  .use(Starter)
  .listen(1337)
```

### Hardware

* any platform

###Transitions

#####

Calls ...

###Design

This device driver is designed to work with the AllJoyn signal sample.

### Development Tips

Installing AllJoyn on  Mac OSX://
https://wiki.allseenalliance.org/develop/hackfests/alljoyn.js-osx
https://wiki.allseenalliance.org/develop/hackfests/alljoyn-js

Programming IoT Applications Using AllJoyn.js
https://wiki.allseenalliance.org/_media/training/programming_alljoyn.js.pdf