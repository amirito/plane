marker = new Array();
var infoWindowsOut = [];
var infoWindowsClick = [];
var flightPath = null;
var flightPlanCoordinates = [];
function mouseover(marker,map) {


    if (marker.activate != 1) {

        setIcon(marker, 'red', marker.icon.rotation);

        var contentString = '<div class="test">'+marker.title +'</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
       // infoWindowsOut.push(infowindow);

      //  infowindow.open(map,marker);
    }
}

function closeAllInfoWindows(type) {
    for (var i=0;i<type.length;i++) {
        type[i].close();
    }
}
$('.person').click(function(){

window.marker['7335C7'].setMap(null);

})
function mouseout(marker,map) {
    if (marker.activate != 1) {
        setIcon(marker, '#d5d745', marker.icon.rotation);
        closeAllInfoWindows(infoWindowsOut);
    }
}


function mouseclick(marker, map, length,markers) {

    $('.plane-info').removeClass('open-side');
    $('.plane-info').addClass('close-side');
    $("#image_address").html("");


    testy(marker.title);

    if (marker.activate == 0) {



        setTimeout(function(){
            $('.plane-info').removeClass('close-side');
            $('.plane-info').addClass('open-side');
            closeAllInfoWindows(infoWindowsClick);

            var contentString = '<div class="test">'+marker.title +'</div>';


            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
          //  infoWindowsClick.push(infowindow);

         //   infowindow.open(map,marker);


            marker.activate = 1;

            for (var k = 0; k < length; k++) {
                x =  markers[k];



                if (window.marker[x].title !== marker.title) {
                    window.marker[x].activate = 0;
                    var bear = window.marker[x].icon.rotation;

                    setIcon(window.marker[x], '#d5d745', bear);


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
   // alert(val.address)
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
            $("#image_address").html("");
            $('.plane-info').removeClass('open-side');
            $('.plane-info').addClass('close-side');

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

    var markers = [];



    var i = 0;
    function periodically() {
    var newTest = "";
    for(var u = 0 ; u < markers.length;u++){
       newTest +=  markers[u]+','
        }
    //console.log(newTest);
        $.ajax({
            method: "GET",
            url: "ajax/ajax_mehrdad.php",
            data: {
                markers: newTest
                }
            }).done(function (data) {

                var res = data.split("+");
                var newData = res[0];
                var updateData = res[1];
                var deleteData = res[2];

                if(newData != "0"){
                    var newJsonData = JSON.parse(newData);
                    $.each(newJsonData, function (key, val) {

                        var position = new google.maps.LatLng(val.lat, val.lon);

                        marker[val.address] = new google.maps.Marker({
                            position: position,
                            map: map,
                            icon: goldStar,
                            title: val.address,
                            activate: 0,
                            zIndex: parseFloat(val.alt)
                        });
                        markers.push(marker[val.address].title);
                        marker[val.address].icon.rotation = parseFloat(val.bearing);

                        google.maps.event.addListener(marker[val.address], 'mouseover', function () {
                            mouseover(marker[val.address],map);
                        })
                        google.maps.event.addListener(marker[val.address], 'mouseout', function () {
                            mouseout(marker[val.address],map);
                        })

                        google.maps.event.addListener(marker[val.address], 'click', function () {

                            mouseclick(marker[val.address], map, markers.length,markers);
                        })

                        i++;


                    })
                }


            if(updateData != "0"){
                var updateJsonData = JSON.parse(updateData);
                $.each(updateJsonData, function (key, val) {

                    var position = new google.maps.LatLng(val.lat, val.lon);
                    updateMarker(marker[val.address], position, val.bearing, val.alt ,map);


                })
            }

            if(deleteData != "0"){
                var deleteJsonData = JSON.parse(deleteData);
                $.each(deleteJsonData, function (key, val) {

                    marker[val.address].setMap(null);


                })
            }


        })

        setTimeout(periodically,3000);


    }

    periodically();

}