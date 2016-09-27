var MCrypt = require('mcrypt').MCrypt;
var fs = require('fs');

var key = fs.readFileSync('DTCTT.key');
var iv = fs.readFileSync('DTCTT.iv', 'utf8');
var proc = fs.readFileSync('DTCTT.proc');

var rijCBC = new MCrypt('rijndael-128', 'cbc');

console.log(rijCBC.isBlockAlgorithm());
