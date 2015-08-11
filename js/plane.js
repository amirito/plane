marker = [];
var infoWindowsOut = [];
var infoWindowsClick = [];
var flightPath = null;
var flightPlanCoordinates = [];
function mouseover(marker,map) {


    if (marker.activate != 1) {

        setIcon(marker, 'red', marker.icon.rotation);

        var contentString =
            '<div id="content">'+'<div id="bodyContent">'+
            marker.title +'</div>'+'</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        infoWindowsOut.push(infowindow);

        infowindow.open(map,marker);
    }
}

function closeAllInfoWindows(type) {
    for (var i=0;i<type.length;i++) {
        type[i].close();
    }
}

function mouseout(marker,map) {
    if (marker.activate != 1) {
        setIcon(marker, '#d5d745', marker.icon.rotation);
        closeAllInfoWindows(infoWindowsOut);
    }
}
function mouseclick(marker, map, length) {

    if (marker.activate == 0) {



        setTimeout(function(){
            closeAllInfoWindows(infoWindowsClick);

            var contentString =
                '<div id="content">'+'<div id="bodyContent">'+
                marker.title +'</div>'+'</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            infoWindowsClick.push(infowindow);

            infowindow.open(map,marker);


            marker.activate = 1;
            for (var k = 0; k < length; k++) {
                if (k != marker.indexId) {
                    window.marker[k].activate = 0;
                    var bear = window.marker[k].icon.rotation;

                    setIcon(window.marker[k], '#d5d745', bear);


                }
            }

            setIcon(marker, '#444', marker.icon.rotation);
        $.ajax({

            method: "GET",
            url: "ajax/ajax_path.php",
            data: {
                address: marker.title
            }
        }).done(function (data) {
            //console.log(data)

            var returnedData = JSON.parse(data);
            name  = '';
            //alert(returnedData[0].address)
            try {
                flightPath.setMap(null);
            }catch (e){}

            try {
                flightPlanCoordinates = [];

            }catch (e){}

            $.each(returnedData, function (key, val) {

                flightPlanCoordinates.push(new google.maps.LatLng(val.lat, val.lon))
                name  = val.address;

            });

            flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FFFF00',
                strokeOpacity: 1.0,
                strokeWeight: 2,
                name : name
            })

            flightPath.setMap(map);


        })},500);


    } else {

        setTimeout(function(){
            closeAllInfoWindows(infoWindowsClick);
            try {
                flightPath.setMap(null);
            }catch (e){}

            try {
                flightPlanCoordinates = [];

            }catch (e){}
            marker.activate = 0;
            setIcon(marker, '#d5d745', marker.icon.rotation);
        },500);
    }
}
$('#play-log').click(function(){

alert(flightPath.name);

})
function initialize() {
    var styles = [{stylers: [{hue: -10}, {saturation: -85}, {lightness: -30}]}];

    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    var mapOptions = {
        zoom: 5,
        center: new google.maps.LatLng(34.0000, 54.0000),
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };


    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    var goldStar = {
        path: 'M22.985,130.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
        fillColor: '#d5d745',
        fillOpacity: 1,
        scale: 0.04,
        strokeColor: 'black',
        strokeWeight: 0.35,
        rotation: 0
    };

    airportsMarker = [];
    $.getJSON("ajax/ajax_airports.php", function (data) {
        var j = 0;
        $.each(data, function (key, val) {
            var position = new google.maps.LatLng(val.lat, val.lon);
            var icon = {
                url: "images/airport.png", // url
                scaledSize: new google.maps.Size(27, 22), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(13.5, 11) // anchor
            };
            airportsMarker.push(new google.maps.Marker({
                position: position,
                map: map,
                icon: icon,
                title: val.name,
                activate_airports: 0,
                zIndex: parseFloat(-10),
                visible: false
            }));

            j++;
        })
    })

    google.maps.event.addListener(map, 'zoom_changed', function () {

        mz = map.getZoom();

        if (parseInt(mz) > 5) {
            for (var m = 0; m < airportsMarker.length; m++) {
                airportsMarker[m].setVisible(true);
            }
        }

        else if (parseInt(mz) <= 5) {
            for (var m = 0; m < airportsMarker.length; m++) {
                airportsMarker[m].setVisible(false);
            }

        }
    });


    marker = [];


    i = 0;
    function periodically() {

        $.ajax({
            method: "GET",
            url: "ajax/ajax_new.php",
            data: {
                marker_length: window.i
            }
        }).done(function (data) {
            //alert(data)
            if (data != '0') {
                var returnedData = JSON.parse(data);
                //alert(returnedData[0].address)
                $.each(returnedData, function (key, val) {
                    //alert(val.address)
                    var position = new google.maps.LatLng(
                        val.lat, val.lon);
                    marker.push(new google.maps.Marker({
                        position: position,
                        map: map,
                        icon: goldStar,
                        title: val.address,
                        indexId: window.i,
                        activate: 0,
                        zIndex: parseFloat(val.alt)
                    }));

                    marker[window.i].icon.rotation = parseFloat(val.bearing);


                    google.maps.event.addListener(marker[i], 'mouseover', function () {
                        mouseover(marker[this.indexId],map);
                    })
                    google.maps.event.addListener(marker[i], 'mouseout', function () {
                        mouseout(marker[this.indexId],map);
                    })

                    google.maps.event.addListener(marker[i], 'click', function () {

                        mouseclick(marker[this.indexId], map, marker.length);
                    })
                    window.i++;
                })
            }
        });
        $.getJSON("ajax/ajax.php", function (data) {

            i = 0;
            $.each(data, function (key, val) {


                var position = new google.maps.LatLng(
                    val.lat, val.lon);

                updateMarker(marker[i], position, val.bearing, val.alt,map);


                // }
                i++;
            })
        })
        //var infoWindow = new google.maps.InfoWindow(),marker, i;
        setTimeout(periodically, 3000);
    }

    periodically();
}