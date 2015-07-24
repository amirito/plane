<?php
require('../core/core.php');
require('sample.php');
$input = test();
$_POST['input'] = 1;

if($_POST['input']){
	$input = json_decode($input);
	var_dump($input);
	foreach($input as $key => $value){
	$query = "INSERT INTO `tracks`(`id`, `address`, `alt`, `bearing`, `callsign`, `lat`, `lon`, `sensorId`, `squawk`, `vertSpeed`, `timestamp`) 
				VALUES ('','$value->Address','$value->Alt','$value->Bearing','$value->Callsign','$value->Lat','$value->Lon','$value->SensorID','$value->Squawk','$value->VertSpeed',UNIX_TIMESTAMP()) ; ";
	$result = mysqli_query($connection ,$query);
		}

}