// Function to draw your map
var drawMap = function() {

  // Create map and set viewd
	var map = L.map('map');
	map.setView([34,-100],3);
  // Create an tile layer variable using the appropriate url
	var layer = L.tileLayer('https://{s}.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXJtMjA2IiwiYSI6IjJlMjQ1NWRlOTIyY2Q0MmMwMTE5ZWFmNTgyOTI5NjhkIn0.Avm6VjzhgLYy-YOsv61aCQ');
  // Add the layer to your map
 	layer.addTo(map);
  // Execute your function to get data
 	getData(map);
}

// Function for getting data
var getData = function(map) {
	$.ajax({
	    url:'./data/response.json',
	        type: "get",
		    success: function(dat){
		    	customBuild(dat, map);
		    },
		   dataType:"json"
		}) 
}

// Do something creative with the data here!  
var customBuild = function(data, map) {
	L.AwesomeMarkers.Icon.prototype.options.prefix = 'fa';
	var spec;
	console.log(data);
	data.map(function(d) {
		if (d["Victim's Gender"] == "Male") {
			 // Creates a blue marker with the coffee icon
				spec = L.AwesomeMarkers.icon({
				icon: 'male',
				markerColor: 'blue'
			});

		} else if (d["Victim's Gender"] == "Female") {
			// Creates a pink marker with the coffee icon
				spec = L.AwesomeMarkers.icon({
				icon: 'female',
				markerColor: 'pink'
			});	
		}
		var marker = new L.marker([d.lat, d.lng], {icon: spec}).addTo(map);
		marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
	});
  
}


