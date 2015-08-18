<?php
require('../core/core.php');

$output = "";

if(isset($_GET['markers'])) {

    $markers = $_GET['markers'];
    $markers_split = explode(",", $markers);
    $one = "";
    foreach ($markers_split as $one1) {
        $one .= "'" . $one1 . "'" . " ,";
    }
    $one = trim($one, ",");


    $query3 = "SELECT * FROM `last_data`  WHERE `address` NOT IN($one) AND `activate` = '1' ORDER BY id ASC ";
    $result3 = mysqli_query($connection, $query3);
    $rows3 = array();
    while ($r3 = mysqli_fetch_assoc($result3)) {
        $rows3[] = $r3;
    }
    if ($rows3){
        $output .= json_encode($rows3) . "+";
    }else{
        $output .= '0' . "+";
    }

    $query2 = "SELECT * FROM `last_data`  WHERE `address` IN($one) AND `activate` = '1' ORDER BY id ASC ";

    $result2 = mysqli_query($connection, $query2);

    $rows2 = array();
    while ($r2 = mysqli_fetch_assoc($result2)) {
        $rows2[] = $r2;
    }

    if ($rows2){
        $output .= json_encode($rows2) . "+";
    }else{
        $output .= '0' . "+";
    }



    $query4 = "SELECT * FROM `last_data`  WHERE `address` IN($one) AND `activate` = '0' ORDER BY id ASC ";
    $result4 = mysqli_query($connection, $query4);
    $rows4 = array();
    while ($r4 = mysqli_fetch_assoc($result4)) {
        $rows4[] = $r4;
    }
    if ($rows4){
        $output .= json_encode($rows4);
    }else{
        $output .= '0';
    }
    echo $output;


}