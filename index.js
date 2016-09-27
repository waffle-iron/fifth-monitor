var serviceAccount = require('./google-sheets-service-account.json');
var Sheets = require('node-sheets').default;

var gs = new Sheets('1B8KmXWy0_bTpw_52m5r7-yYJxwfTJS1oyqDn5gKn6rk');

gs.authorizeJWT(serviceAccount)
  .then(() => gs.tables('A1:Qq'))
  .then( data => {
  	console.log(data);
  })
  .catch(err => console.error(err));
	
