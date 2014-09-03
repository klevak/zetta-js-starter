var zetta = require('zetta');
var Buzzer = require('zetta-buzzer-bonescript-driver');

zetta() 
    .name('Adam Magaluk')
    .use(Buzzer)
    .listen(1337);
