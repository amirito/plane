<?php
require('../core/core.php');
//require('sample.php');
//$input = test();
ob_start();

//echo 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

	error_reporting(E_ALL);
	ini_set('display_errors','1');
	date_default_timezone_set('Asia/Tehran');


if(isset($_POST['input'])){
	$input = $_POST['input'];
	$input = str_replace("!" , "\"",$input);
	$input = json_decode($input);
	var_dump($input);
	
	
	foreach($input as $key => $value){
		//var_dump($value);
	$query = "INSERT INTO `tracks`(`id`, `address`, `alt`, `bearing`, `callsign`, `lat`, `lon`, `sensorId`, `squawk`, `vertSpeed`, `timestamp`) 
				VALUES ('','$value->Address','$value->Alt','$value->Bearing','$value->Callsign','$value->Lat','$value->Lon','$value->SensorID','$value->Squawk','$value->VertSpeed',UNIX_TIMESTAMP()) ; ";
	$result = mysqli_query($connection ,$query);
	echo 'done';
	}
}

$file = 'log.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= '\n';
$current .= ob_get_contents();
// Write the contents back to the file
file_put_contents($file, $current);

ob_end_flush();