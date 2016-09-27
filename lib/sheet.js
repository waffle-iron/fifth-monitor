var Sheets = require('node-sheets').default;

module.exports = function(callback){
  var gs = new Sheets('1B8KmXWy0_bTpw_52m5r7-yYJxwfTJS1oyqDn5gKn6rk');

  return gs();
}
