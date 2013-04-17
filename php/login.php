<?php
	//echo "here";
	require_once("connect.php");
	$U = $_POST["loginuser"];
	$P = $_POST["loginpswd"];
	$pass = sha1($P);
	//echo $pass;
	$stmt = $mysqli->prepare("select count(*) from user where username = ? and password = ?");
	$stmt->bind_param('sd',$U ,$pass);
	//echo $mysqli->error();
	$stmt->execute();
	$stmt->bind_result($count);
	$stmt->fetch();
	$stmt->close();
	//echo $count;
	if($count==1){
		session_start();
		$_SESSION["user"] = $U;
		$_SESSION["pswd"] = $pass;
		header("location:/gamepage.php");
	}
	else{
		
		header("location: http://localhost?login=false");
	}	
?>