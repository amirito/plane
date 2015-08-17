<?php
require('../core/core.php');

if(isset($_GET['address'])){
	$address = $_GET['address'];

	$query = "SELECT * FROM `image_info` WHERE address = '$address' ; ";

	$result = mysqli_query($connection ,$query);

	//$marker_length++;
	$output = "";
	$row = mysqli_fetch_assoc($result);

	$addresses = explode(",",$row["image_address"]);


	foreach($addresses as $address){
		$url = "";
		if($address != "") {
			$round_id = intval($address / 1000) * 1000;
			//echo $round_id;
			if($address > 100000){
				$url = "http://img.planespotters.net/photo/".$round_id."/thumbnail/PlanespottersNet_".$address.".jpg";
			}else{
				$url = "http://img.planespotters.net/media/photos/thumbnail/0".$round_id."/PlanespottersNet_0".$address.".jpg";
			}
			$output .= "<li><a href='#'><img src='$url' alt='$address'></a></li>";

		}
	}
	echo $output;
}
