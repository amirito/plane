<?php

$conn = mysqli_connect('localhost','root','','plane');

$query = "SELECT * FROM airports";
$result = mysqli_query($conn ,$query);
$rows = array();
while($r = mysqli_fetch_assoc($result)){
	$rows[] = $r;
	}
echo json_encode($rows);