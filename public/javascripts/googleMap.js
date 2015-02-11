var map;
var boroughsJson;
var colours = ["#74FF70", "#7DFF6E", "#87FF6D", "#90FF6C", "#99FF6B", "#A3FF69", "#ADFF68", "#B7FF67", "#C1FF66", "#CBFF65", "#D6FF63", "#E0FF62", "#EBFF61", "#F6FF60", "#FFFC5F", "#FFF15D", "#FFE55C", "#FFD95B", "#FFCE5A", "#FFC259", "#FFB657", "#FFA956", "#FF9D55", "#FF9054", "#FF8353", "#FF7651", "#FF6950", "#FF5C4F", "#FF4E4E", "#FF4D59"];

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
  zoom: 11,
  center: {lat: 51.51, lng: - 0.10}
	})

  $.getJSON("/data", function(data) {
		console.log(data.Hackney);
		boroughsJson = data;
		
		map.data.setStyle(function(feature){		  	
			return {fillColor: intensity(boroughsJson[feature.k.name])};
		});
		
	});

// Load GeoJSON.
var json = 'https://rawgit.com/jjlakin/compound-cities/master/greater-london/my-api.json'
map.data.loadGeoJson(json);

};



var intensity = function(data) {
	return colours[data];

// [START snippet]
// Color each letter gray. Change the color when the isColorful property
// is set to true.


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
