var hippie = require('hippie');
var map = hippie;

map()
	.header('User-Agent', 'hippe')
	.json()
	.get('http://localhost:3000/trendingIndex')
	.expectValue('City of London', 47)
	.end(function(err, res, body){
		if(err) {
			throw err 	
		} else {
			console.log('trendingIndex will return borough and index value')
		}
	});