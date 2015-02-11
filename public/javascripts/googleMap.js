var map;
var boroughsJson;

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
  zoom: 11,
  center: {lat: 51.51, lng: - 0.10}
	})

  $.getJSON("https://rawgit.com/jjlakin/compound-cities/master/greater-london/my-api.json", function(data) {
		console.log(data);
    boroughsJson = data.features
	});

var json = 'https://rawgit.com/jjlakin/compound-cities/master/greater-london/my-api.json'
// Load GeoJSON.
map.data.loadGeoJson(json);



// [START snippet]
// Color each letter gray. Change the color when the isColorful property
// is set to true.
map.data.setStyle(function(feature){
	console.log(feature.k.color);
	console.log(feature.k.name);
	if(feature.k.name === 'Hackney'){
		return {fillColor:'blue'};
	}else{
		return {fillColor:'red'};
	}
});


// map.data.setStyle(function(feature) {
//   console.log(feature);
//   console.log(feature.k.name)
//   if(feature.k.name === 'hackney'){
//   	var color = 'red';
//   	return /** @type {google.maps.Data.StyleOptions} */({
// 	    fillColor: color,
// 	    strokeColor: color,
// 	    strokeWeight: 2
//   });
// 	} else {
// 		var color = 'blue';
// 		return /** @type {google.maps.Data.StyleOptions} */({
// 	    fillColor: color,
// 	    strokeColor: color,
// 	    strokeWeight: 2
//     });
// 	};	
  
// });


// When the user clicks, set 'isColorful', changing the color of the letters.
map.data.addListener('click', function(event) {
  event.feature.setProperty('isColorful', true);
});

// When the user hovers, tempt them to click by outlining the letters.
// Call revertStyle() to remove all overrides. This will use the style rules
// defined in the function passed to setStyle()
map.data.addListener('mouseover', function(event) {
  map.data.revertStyle();
  map.data.overrideStyle(event.feature, {strokeWeight: 8});
});

map.data.addListener('mouseout', function(event) {
  map.data.revertStyle();
});
// [END snippet]
}

google.maps.event.addDomListener(window, 'load', initialize);
