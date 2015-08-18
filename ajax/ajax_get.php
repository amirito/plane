<?php
require('../core/core.php');
ob_start();

	error_reporting(E_ALL);
	ini_set('display_errors','1');
	date_default_timezone_set('Asia/Tehran');


if(isset($_POST['input'])){
	$input = $_POST['input'];
	$input = str_replace("!" , "\"",$input);
	$input = json_decode($input);
	var_dump($input);
	
	
	foreach($input as $key => $value){
	$query = "INSERT INTO `tracks`(`id`, `address`, `alt`, `bearing`, `callsign`, `lat`, `lon`, `sensorId`, `squawk`, `vertSpeed`, `timestamp`) 
				VALUES ('','$value->Address','$value->Alt','$value->Bearing','$value->Callsign','$value->Lat','$value->Lon','$value->SensorID','$value->Squawk','$value->VertSpeed',UNIX_TIMESTAMP()) ; ";
	$result = mysqli_query($connection ,$query);
	echo 'done';

    $query = "SELECT * FROM `last_data` WHERE address = '$value->Address' ; ";
    $result = mysqli_query($connection ,$query);
    $num_rows = mysqli_num_rows($result);
        if($num_rows == 0)
        {
            $query = "INSERT INTO `last_data`(`id`, `address`, `alt`, `bearing`, `lat`, `lon`, `timestamp`,`activate`)
                VALUES ('','$value->Address','$value->Alt','$value->Bearing','$value->Lat','$value->Lon',UNIX_TIMESTAMP(), '1' ) ; ";
            mysqli_query($connection ,$query);
        }
        else{
            $query = "UPDATE `last_data` SET `alt`='$value->Alt',`bearing`='$value->Bearing',
                    `lat`='$value->Lat',`lon`='$value->Lon',`timestamp` = UNIX_TIMESTAMP() WHERE address = '$value->Address' ; ";
            mysqli_query($connection ,$query);
        }


	}
}

$file = 'log.txt';
$current = file_get_contents($file);
$current .= '\n';
$current .= ob_get_contents();
file_put_contents($file, $current);

ob_end_flush();