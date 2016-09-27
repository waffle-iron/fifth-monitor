var MCrypt = require('mcrypt').MCrypt;
var fs = require('fs');

var key = getKey();
var iv = getIV();

var rijCBC = new MCrypt('rijndael-128', 'cbc');

rijCBC.open(key, iv);

console.log(rijCBC.decrypt(new Buffer(partial));

