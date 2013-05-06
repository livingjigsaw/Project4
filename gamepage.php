<!doctype html>
<html>
	<head>
		<script src="JS/facebook.js"></script>
		<script src="JS/jquery.js"></script>
		<script src="JS/pente.js"></script>
		<script src="JS/ajax.js"></script>
		<link rel="stylesheet" type="text/css" href="css\styles.css" />
		</style>
	</head>
	<body onLoad="initGame()">
		<header>
			<div id="fb-root">
				<button onclick="logOut()">Log Out</button>
				<div id="msgBox">Player 1: &nbsp; Player 2: &nbsp;</div>
			</div>
		<header>
			<div id="msgBox">
			<span id="p1"> Player 1: Austin - 2 Captures<!--2 VARs--></span>&nbsp; <span id="p2"> Player 2: Jonathan - 0 Captures<!--2 VARs--></span>
			</div>
		</header>
			<div id="wrapper">
			</div>
	</body>
</html>
