var hippie = require('hippie');
var map = hippie;

map()
	.header('User-Agent', 'hippie')
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

map()
	.header('User-Agent', 'hippie')
	.json()
	.get('https://rawgit.com/jjlakin/compound-cities/master/greater-london/my-api.json')
	.expectValue('type', 'FeatureCollection')
	.end(function(err, res, body){
		if(err) {
			throw err
		} else {
			console.log('Borough geoJSON will return polygons for each borough')
		}
	});
