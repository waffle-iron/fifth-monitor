var MCrypt = require('mcrypt').MCrypt;
var fs = require('fs');


// key should be hexadecimal
var key = getKey(`${process.argv[2]}.key`);

// initialization Vector should be 32 bit 
var iv = getIV();

var rijCBC = new MCrypt('rijndael-256', 'cbc');

rijCBC.open(key, iv);

console.log(rijCBC.decrypt(new Buffer(partial));

