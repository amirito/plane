<?php
require('../core/core.php');

if(isset($_GET['address'])){
	$address = $_GET['address'];
	
	$query = "SELECT * FROM tracks WHERE address = '$address' ORDER BY id";
		
	$result = mysqli_query($connection ,$query);

	$rows = array();
	while($r = mysqli_fetch_assoc($result)){
		$rows[] = $r;
		}
	echo json_encode($rows);
}