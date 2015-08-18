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
    //var script = document.createElement('script');
    //script.src ="http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    //document.body.appendChild(script);
});

function setIcon(marker, color, bearing) {
    marker.setIcon({
        path: 'M22.985,130.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
        fillColor: color,
        fillOpacity: 1,
        scale: 0.04,
        strokeColor: 'black',
        strokeWeight: 0.35,
        rotation: parseFloat(bearing)
    });
}

function updateMarker(marker, position, bearing,zindex,map) {

    if(marker.activate == 1){


        //marker.activate = 1;
        //for (var k = 0; k < length; k++) {
        //    if (k != marker.indexId) {
        //        window.marker[k].activate = 0;
        //        var bear = window.marker[k].icon.rotation;
        //
        //        setIcon(window.marker[k], '#d5d745', bear);
        //    }
        //}
        //
        //setIcon(marker, '#444', marker.icon.rotation);
        $.ajax({

            method: "GET",
            url: "ajax/ajax_path.php",
            data: {
                address: marker.title
            }
        }).done(function (data) {
            //console.log(data)

            var returnedData = JSON.parse(data);
            name = '';
            //alert(returnedData[0].address)
            try {
                flightPath.setMap(null);
            } catch (e) {
            }

            try {
                flightPlanCoordinates = [];

            } catch (e) {
            }

            $.each(returnedData, function (key, val) {

                flightPlanCoordinates.push(new google.maps.LatLng(val.lat, val.lon))
                name = val.address;

            });

            flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FFFF00',
                strokeOpacity: 1.0,
                strokeWeight: 2,
                name: name
            })

            flightPath.setMap(map);


        })

    }
    marker.setPosition(position);
    marker.setZIndex(parseFloat(zindex));
    setIcon(marker, marker.icon.fillColor, bearing);
}