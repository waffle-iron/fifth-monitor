var Spreadsheet = require('google-spreadsheet');
var spreadsheetKey = "1B8KmXWy0_bTpw_52m5r7-yYJxwfTJS1oyqDn5gKn6rk"
var serviceAccount = require('./google-sheets-service-account.json');
var doc = new Spreadsheet(spreadsheetKey);

//set usage of service account for server-to-server auth
doc.useServiceAccountAuth(serviceAccount,function(cb){
  doc.getInfo( (err, info) => {
 	console.log(info); 
  });
});

