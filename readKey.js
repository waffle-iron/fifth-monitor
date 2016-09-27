var fs = require('fs');

module.exports = function(keyfile){

	return fs.readFileSync(keyfile, {
		 encoding: 'hex'
	})
}
