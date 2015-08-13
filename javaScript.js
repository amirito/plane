
var aircraftList= [];
var myhttp = GetHttp();
var map;

var myTimer=setInterval(function () {SendDataTimer()}, 1000);



if (navigator.geolocation)
{
navigator.geolocation.getCurrentPosition(success);
}

else
{
alert("Geo Location is not supported on your current browser!");
}
var islandLoc = new google.maps.LatLng(48.692492, -122.908192);
var birdLoc = new google.maps.LatLng(48.692615936699596, -122.90869625529479);
var mylocation;
var bounds;
function success(position)
{
    var lat = position.coords.latitude; var long = position.coords.longitude; var city = position.coords.locality;
    var myLatlng = new google.maps.LatLng(lat, long);mylocation = myLatlng;
    var myOptions = { center: myLatlng, zoom: 5, mapTypeId: google.maps.MapTypeId.TERRAIN };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var marker = new google.maps.Marker({position : myLatlng, title : "lat: " + lat + " long: " + long});marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({content : "<b>User Address</b><br/> Latitude:" + lat + "<br /> Longitude:" + long + ""});infowindow.open(map,marker);
    var island_marker = new google.maps.Marker({ position: islandLoc, map: map });
    //planeSymbol = GetPlaneSymbol();
    //var bird_marker = new google.maps.Marker({ position: mylocation, map: map, icon: planeSymbol });
    
    google.maps.event.addListener(map, 'zoom_changed', function() {
      bounds: map.getBounds();
      sendData();
    });
    map.setZoom(6);

     google.maps.event.addListener(map, 'dragend', function() {
      bounds: map.getBounds();
      sendData();
    });

     var infowindow = new google.maps.InfoWindow({content : "javad"});

    var af = AddAircraft(36.2,54.26,map,"AE2255",infowindow);
    //SetAircraftRotation(af, -90);
    SetAircraftRotation(af,  40);

   
}

function GetHttp()
{
    try
    {
        return new XMLHttpRequest(); 
    }
    catch(e)
    {
        try
        {
            return new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e)
        {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

}


function SendDataTimer() 
{
   sendData();

   var d = new Date();
  document.getElementById("lblTime").innerHTML = d.toLocaleTimeString();
}

function sendData()
{
    var url = "Process.aspx?zid=" + map.getBounds() + "," + map.getZoom();
    myhttp.open("Get" , url , true);
    myhttp.onreadystatechange = ReciveData;
    myhttp.send(null);
}

function ReciveData()
{
    if(myhttp.readyState == 4)
    {
        var answer = myhttp.responseText;
        //document.getElementById("txtAns").value = answer;

        var targetsInfo = answer.split("\n");
        //document.getElementById("txtAns").value = targetsInfo.length;
        //document.getElementById("txtAns").value = currentTarget[0];

        //AddAircraft(45.5 , 33.66 , map , "11225");
        //return;
        for(i = 0; i < targetsInfo.length - 1; i++)
        {
            var currentTarget = targetsInfo[i].split(",");
            var matchAddress = "";
            for(j = 0; j < aircraftList.length; j++)
            {
                if(currentTarget[0] == aircraftList[j].address)
                {
                    matchAddress = currentTarget[0];
                    aircraftList[j].setPosition(new google.maps.LatLng(currentTarget[2], currentTarget[3]));
                    SetAircraftRotation(aircraftList[j],Number(currentTarget[5]) + 180);

                    break;
                }
            }
            if(matchAddress == "")
            {
             var infowindow = new google.maps.InfoWindow({content : currentTarget[0]});

              var airPlane = AddAircraft(currentTarget[2] , currentTarget[3] , map , currentTarget[0],infowindow);
              SetAircraftRotation(airPlane, Number(currentTarget[5]) + 180);
               google.maps.event.addListener(airPlane, 'click', onMarkerClick);
                
                aircraftList.push(airPlane);
            }
        }
    }

}



function ShowMessage() {
        alert("Hi");
    }

function GetPlaneSymbol() {
    var path = 'M601 1139 c-37 -50 -59 -148 -64 -283 -4 -94 -11 -115 -40 -116 -4 0 -53 -22 -110 -49 -56 -27 -140 -61 -187 -75 -94 -28 -150 -58 -150 -80 0 -14 25 -45 38 -47 4 0 16 -2 27 -5 11 -2 56 3 100 11 166 29 308 46 316 38 5 -5 14 -57 20 -116 13 -125 9 -135 -68 -188 -60 -41 -72 -57 -73 -92 0 -38 18 -42 80 -17 58 23 80 16 80 -24 0 -38 22 -58 60 -54 32 3 35 6 43 45 4 22 14 43 21 46 7 3 33 -4 56 -14 54 -24 84 -22 88 8 5 35 -14 59 -78 103 -40 27 -62 50 -67 68 -8 33 14 213 27 226 12 12 98 0 283 -39 108 -23 132 -25 157 -15 30 12 47 41 35 60 -9 14 -87 53 -225 112 -63 27 -143 65 -176 83 l-62 35 -4 147 c-5 157 -20 220 -60 256 -28 24 -34 22 -67 -24z';
    var planeSymbol = { path: path,
        scale: 0.0233,
        fillColor: 'red',
        strokeColor: '#FFFFFF',
        fillOpacity: 1, strokeWeight: 1,
        rotation: 0,
        origin: new google.maps.Point(500, 500),
        anchor: new google.maps.Point(500, 500)
    };
    return planeSymbol;
}

function AddAircraft(lat , lon , map , Address,infoWindow) {

    var planeSymbol = GetPlaneSymbol();
    var myLatlng2 = new google.maps.LatLng(parseFloat(lat), parseFloat(lon));
    var aircraft = new google.maps.Marker({ position: myLatlng2, map: map, icon: planeSymbol});
    aircraft.address = Address;
    aircraft.infoWindow = infoWindow;
    return aircraft;
}

function SetAircraftRotation(aircraft , rotation)
{
    aircraft.icon.rotation = -180+rotation;
}

function SetPosition(aircraft , lat , lon)
{
    var myLatlng2 = new google.maps.LatLng(parseFloat(lat), parseFloat(lon));
    aircraft.position = myLatlng2;
}

 function Rotate(markerId)
 {
      var marker = getGMapElementById(subgurim_GMap1,markerId);
      marker.icon.rotation = 20.0;
 }


