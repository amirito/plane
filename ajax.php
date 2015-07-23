<?php

$conn = mysqli_connect('localhost','root','','plane');

$query = "SELECT t1.* FROM tracks t1
  JOIN (SELECT address, MAX(id) id FROM tracks GROUP BY address) t2
    ON t1.address = t2.address AND t1.id = t2.id ORDER BY id";
$result = mysqli_query($conn ,$query);
$rows = array();
while($r = mysqli_fetch_assoc($result)){
	$rows[] = $r;
	}
echo json_encode($rows);