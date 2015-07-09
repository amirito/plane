function dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }
    alert(out);
    var pre = document.createElement('pre');
    pre.innerHTML = out;
    document.body.appendChild(pre)
}
jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src =
        "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});







function initialize() {
    var mapOptions = {
        zoom: 5,
        center: new google.maps.LatLng(34.0000, 54.0000),
        
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);
    var goldStar = {
        path: 'M22.985,130.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
        fillColor: '#d5d745',
        fillOpacity: 1,
        scale: 0.04,
        strokeColor: 'black',
        strokeWeight: 0.35,
        rotation: 0
    };
    var flightPlanCoordinates = [
        new google.maps.LatLng(32.390000, 51.43000),
        new google.maps.LatLng(35.440000, 51.300000),
        new google.maps.LatLng(35.640000, 51.600000)
    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FFFF00',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    flightPath.setMap(map);
    window.marker = [];

    function newMarker(markers) {
        for (i = 0; i < markers.length; i++) {
			
            var position = new google.maps.LatLng(markers[i][1],markers[i][2]);
            	
                position: position,
                map: map,
                icon: goldStar,
                title: markers[i][0],
				
            }));
            marker[i].icon.rotation = parseFloat(markers[i][3]);
			//console.log(marker[i].getTitle())
			
            // Allow each marker to have an info window  
			
          
				//alert('asd')
			

        }
		
        return marker;
    }

    function updateMarker(marker, position, bearing) {
            marker.setPosition(position);
            marker.setIcon({
                path: 'M22.985,130.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
                fillColor: '#d5d745',
                fillOpacity: 1,
                scale: 0.04,
                strokeColor: 'black',
                strokeWeight: 0.35,
                rotation: parseFloat(bearing)
            });
            marker.setPosition(position);
            return marker;
        }
        // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' + '<h3>London Eye</h3>' +
            '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +
            '</div>'
        ],
        ['<div class="info_content">' +
            '<h3>Palace of Westminster</h3>' +
            '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
            '</div>'
        ]
    ];
    var markers = [];

    function periodically() {
		
        $.getJSON("ajax.php", function(data) {

            if (typeof markers[0] === 'undefined') {
                $.each(data, function(key, val) {
                    markers.push([val.address, val.lat,
                        val.lon, val.bearing
						
                    ]);
					
                })
                newMarker(markers);
				
				 

            } else {
				 

                i = 0;
                $.each(data, function(key, val) {
					
                        //markers.push([val.address, val.lat,val.lon,val.bearing]);
                        if (markers[i][0] == val.address &&
                            (markers[i][1] != val.lat ||
                                markers[i][2] != val.lon ||
                                markers[i][3] != val.bearing
                            )) {
                           // alert('in')
                            var position = new google.maps.LatLng(
                                val.lat, val.lon);
                            markers[i][1] = val.lat;
                            markers[i][2] = val.lon;
                            markers[i][3] = val.bearing;
                            updateMarker(window.marker[i],
                                position, val.bearing);
                        }
                        if (markers[i][0] != val.address) {
                           // alert('jadid');
                        }
                        i++;
                    })
            }
        });
		
        var infoWindow = new google.maps.InfoWindow(),
            marker, i;
        setTimeout(periodically, 3000);
		
    }
	
    periodically();
	  
}