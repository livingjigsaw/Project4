<?php
	//echo "here";
	$mysqli = new mysqli("localhost", "db_user" , "password1", "pente");
	if ($mysqli->connect_errno){
		die('Could not connect: ' . $mysqli->connect_error);
	}
?>
