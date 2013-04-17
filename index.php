<html>
	<head>
	<link rel="stylesheet" type="text/css" href="css\index.css" />
	<script src="http://localhost/JS/myjs.js"></script>
	</head>
	<body>
		<section id="signup">
			Sign up for a new account!
			<form method="post" action="php/signup.php">
				Username: <input type="text" name="username" id="username" onkeyup="validateName()"></input> <br />
				Password: <input type="password" name="password" id="password" onkeyup="validatePswd()"></input> <br />
				Confirm Password: <input type="password" name="confirm" id="confirm" onkeyup="validatePswd()"></input> <br />
				<input type="submit"> </input>
			</form>
		</section>
		<section id="login">
			Login to your existing account
			<form method="post" action="php/login.php">
				Username: <input type="text" name="loginuser" id="loginuser"></input> <br />
				Password: <input type="password" name="loginpswd" id="loginpswd"></input> <br />
				<input type="submit"> </input>
			</form>
		</section>
		<section id="error">
		</section>
	</body>
</html>