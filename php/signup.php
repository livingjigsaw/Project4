<?php
	require_once("connect.php");
	$pass = sha1($_POST['password']);
	$stmt0 = $mysqli->prepare("select count(*) from user where username = ?");
	
	$stmt0->bind_param('s', $_POST['username']);
	$stmt0->execute();
	$stmt0->bind_result($count);
	$stmt0->fetch();
	$stmt0->close();
	$stmt1 = $mysqli->prepare("select count(*) from user where password = ?");
	$stmt1->bind_param('s', $pass);
	$stmt1->execute();
	$stmt1->bind_result($count2);
	$stmt1->fetch();
	$stmt1->close();
	if($count == 0 && $count2 == 0){
		$stmt = $mysqli->prepare("insert into user (username,password) VALUES (?,?)");
		$stmt->bind_param('ss', $_POST['username'], $pass);
		$stmt->execute();
		$stmt->close();
		session_start();
		$_SESSION["user"]=$_POST['username'];
		$_SESSION["pswd"]=$_POST['password'];
		header("location: http://localhost/gamepage.php");
	}
	else
		header("location: http://localhost?unique=false");	
	