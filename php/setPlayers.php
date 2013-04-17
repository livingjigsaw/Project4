<?php
	session_start();
	require_once("connect.php");
	$query = "SELECT id, player_two FROM game where player_two is null =1";
	$result = $mysqli->query($query);
	$row = $result->fetch_assoc() ;
	if ($row != null){
		$game_id = $row['id'];
		$join = "update game set player_two='".$_SESSION['user']."' where id = ".$game_id;
		$mysqli->query($join);
		$_SESSION['gameId'] = $game_id;
		$_SESSION['player'] = '2';
	}
	else{
		$create = "insert into game (player_one, turn, location) values('".$_SESSION['user']."', '1', 0)";
		$mysqli->query($create);
		$getId = "select id from game where player_one='".$_SESSION['user']."' and player_two is null";
		$result2 = $mysqli->query($getId);
		$row2 = $result2->fetch_assoc();
		$_SESSION['gameId']=$row2['id'];

		$_SESSION['player'] = '1';
	}
	echo $_SESSION["player"];
	

?>