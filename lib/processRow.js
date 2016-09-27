var sheet = require('lib/sheet.js');

sheet(function(doc){
	doc.getInfo((err, info)=> {
		console.log(info);	
	});
});
