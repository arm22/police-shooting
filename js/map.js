// Function to draw your map
var drawMap = function() {

  // Create map and set viewd
	var map = L.map('container');
	map.setView([34,-100],4);
  // Create an tile layer variable using the appropriate url
	var layer = L.tileLayer('https://{s}.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoiYXJtMjA2IiwiYSI6IjJlMjQ1NWRlOTIyY2Q0MmMwMTE5ZWFmNTgyOTI5NjhkIn0.Avm6VjzhgLYy-YOsv61aCQ');
  // Add the layer to your map
 	layer.addTo(map);
  // Execute your function to get data
 	getData(map);
}

// Function for getting data
var getData = function(map) {
	$.ajax({
	    url:'../data/response.json',
	        type: "get",
		    success: function(dat){
		    	customBuild(dat, map);
		    },
		   dataType:"json"
		}) 
}

// Do something creative with the data here!  
var customBuild = function(data, map) {
	console.log(data);
	data.map(function(d){
		var circle = new L.circle([d.lat, d.lng], 200, {color:'red', opacity:.5}).addTo(map)
	});
  
}


