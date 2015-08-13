<?php
require('../core/core.php');

if(isset($_GET['marker_length'])){
	$marker_length = $_GET['marker_length'];
	
	$query = "SELECT * FROM `last_data`";

	$result = mysqli_query($connection ,$query);
	$num_rows = mysqli_num_rows($result);
    //echo $num_rows;
	$limit = $num_rows - $marker_length;
	//$marker_length++;
	
	if($limit > 0){
	$query2 = "SELECT * FROM `last_data` ORDER BY id LIMIT $marker_length , $limit";
		
	$result2 = mysqli_query($connection ,$query2);



	$rows = array();
	while($r = mysqli_fetch_assoc($result2)){
		$rows[] = $r;
		}

	echo json_encode($rows);
	}else{
		echo '0';
		}
}