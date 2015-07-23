<?php
if(isset($_GET['address'])){
	$address = $_GET['address'];
	$conn = mysqli_connect('localhost','root','','plane');
	
	$query = "SELECT * FROM tracks WHERE address = '$address' ORDER BY id";
		
	$result = mysqli_query($conn ,$query);

	$rows = array();
	while($r = mysqli_fetch_assoc($result)){
		$rows[] = $r;
		}
	echo json_encode($rows);
}