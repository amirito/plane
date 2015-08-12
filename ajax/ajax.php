<?php
require('../core/core.php');

$query = "SELECT * FROM `unique` ORDER BY id";
$result = mysqli_query($connection ,$query);
$rows = array();
while($r = mysqli_fetch_assoc($result)){
	$rows[] = $r;
	}
echo json_encode($rows);