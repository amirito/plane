<?php
require('../core/core.php');

$query = "SELECT * FROM `last_data` ORDER BY id ASC ";
$result = mysqli_query($connection ,$query);
$rows = array();
while($r = mysqli_fetch_assoc($result)){
	$rows[] = $r;
	}
echo json_encode($rows);