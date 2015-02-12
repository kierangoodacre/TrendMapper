var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));
app.use('/javascripts', express.static(__dirname + '/public/javascripts'));

app.get('/', function(request,response) {
	response.render('index')
})

// app.get('/data', function(request, response) {
// 	response.send({'Hackney':20,'Islington':1})
// })

app.get('/trendingIndex', function(request, response) {
	response.send(
		{
			"City of London": 30,
			"Barking and Dagenham": 85,
			"Barnet": 83,
			"Bexley": 91,
			"Brent": 3,
			"Bromley": 77,
			"Camden": 73,
			"Croydon": 77,
			"Ealing": 69,
			"Enfield": 84,
			"Greenwich": 84,
			"Hackney": 71,
			"Hammersmith and Fulham": 63,
			"Haringey": 65,
			"Harrow": 71,
			"Havering": 87,
			"Hillingdon": 88,
			"Hounslow": 78,
			"Islington": 77,
			"Kensington and Chelsea": 49,
			"Kingston upon Thames": 73,
			"Lambeth": 74,
			"Lewisham": 70,
			"Merton": 70,
			"Newham": 94,
			"Redbridge": 84,
			"Richmond upon Thames": 58,
			"Southwark": 68,
			"Sutton": 74,
			"Tower Hamlets": 95,
			"Waltham Forest": 68,
			"Wandsworth": 62,
			"Westminster": 56
		}
	)
})

server.listen(3000, function() {
  console.log('Server listening on port 3000')
});

module.exports = server;
