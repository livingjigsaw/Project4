<?php
	session_start();
	require_once("connect.php");
	$id = $_SESSION['gameId'];
	$query = "SELECT turn FROM game where id=".$id;
	$result = $mysqli->query($query);
	$row = $result->fetch_assoc();
	echo $row['turn'];
	
?>