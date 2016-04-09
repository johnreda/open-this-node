var request = require('request');
var fs = require('fs');
var prompt = require('prompt');
var urlToGet = (process.argv[2]);
//var prettyJSON = require('')


  prompt.get(['url'], function (err, result) {
    console.log('Command-line input received:');
    var useThisUrl = (result.url);
    	console.log(useThisUrl);

		request(useThisUrl, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	var responseData = body;
		    //console.log(body) // Show the HTML for the Google homepage. 
		    console.log(responseData);

		    fs.writeFile("responseParse.json", json-prettify /package.json, function(err, data){
		    	if(err){
		    		throw err
		    	}
		    	else {
		    		console.log("Logged")
		    	}
		    })


		}
	})
});




