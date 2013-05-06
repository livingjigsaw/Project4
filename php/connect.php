<?php
	//echo "here";
	$mysqli = new mysqli("127.0.0.1", "root" , "qpzmga", "pente");
	if ($mysqli->connect_errno){
		die('Could not connect: ' . $mysqli->connect_error);
	}
?>
