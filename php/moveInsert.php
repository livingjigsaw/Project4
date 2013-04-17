<?php
	session_start();
	//echo "here";
	require_once("connect.php");
	$spot=$_POST["move"];
	$turn=$_POST['turn'];
	$query = "UPDATE game SET location='".$spot."', turn='".$turn."' WHERE id=".$_SESSION['gameId'];
	$mysqli->query($query);

?>