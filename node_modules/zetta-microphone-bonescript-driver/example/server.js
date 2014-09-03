var zetta = require('zetta');
var Microphone = require('../index');

zetta()
  .use(Microphone, 'P9_40')
  .listen(4000, function() {
    console.log('Listening on port 4000')
  });
