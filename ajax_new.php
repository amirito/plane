<?php
if(isset($_GET['marker_length'])){
	$marker_length = $_GET['marker_length'];
	$conn = mysqli_connect('localhost','root','','plane');
	
	$query = "SELECT t1.* FROM tracks t1
	  JOIN (SELECT address, MAX(id) id FROM tracks GROUP BY address) t2
		ON t1.address = t2.address AND t1.id = t2.id ORDER BY id";
		
	$result = mysqli_query($conn ,$query);
	$num_rows = mysqli_num_rows($result);
	
	$limit = $num_rows - $marker_length;
	
	if($limit > 0){
	$query2 = "SELECT t1.* FROM tracks t1
	  JOIN (SELECT address, MAX(id) id FROM tracks GROUP BY address) t2
		ON t1.address = t2.address AND t1.id = t2.id ORDER BY id LIMIT $marker_length , $limit";
		
	$result2 = mysqli_query($conn ,$query2);
	
	
	
	$rows = array();
	while($r = mysqli_fetch_assoc($result2)){
		$rows[] = $r;
		}

	echo json_encode($rows);
	}else{
		echo '0';
		}
}