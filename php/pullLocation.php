<?php
	session_start();
	require_once("connect.php");
	$id = $_SESSION['gameId'];
	$query = "select location FROM game where id=".$id;
	$result = $mysqli->query($query);
	$row = $result->fetch_assoc();
	echo $row['location'];
	
?>