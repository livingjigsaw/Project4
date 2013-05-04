var kBoardWidth = 19;
var kBoardHeight= 19;
var kPieceWidth = 25;
var kPieceHeight= 25;
var kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
var kPixelHeight= 1 + (kBoardHeight * kPieceHeight);
var arrSize = kBoardWidth * kBoardHeight; 

var gCanvasElement;
var gDrawingContext;
var gPattern;

var gBoard = new Array(); //this holds data from the entire board
			/* 
			gBoard is a char array
			'0' = no piece here
			'1' = player one has a piece here
			'2' = player two has a piece here
			*/
var gGameInProgress;

//following two varialbles need to be set from database.
var playerNum; //first player or second player; as character
var currentTurn = '1'; //holds char = current player's playerNum
var capCountMe = 0; // number of captures made by my char
var capCountThem = 0;


function Cell(row, column) { //assigns row & column to an object
    this.row = row;
    this.column = column;
}

function captures(coords, position, player){ // executes any captures
	if(coords.row > 2 && coords.column > 2)
		if (gBoard[position-20] != player && gBoard[position-20] != '0')
			if(gBoard[position-40] !=player && gBoard[position-40]!='0' && gBoard[position-60] ==player){
				gBoard[position-20] = '0';
				gBoard[position-40] ='0';
				if (playerNum == player){
				capCountMe +=1;
				}
				else{
				capCountThem +=1;
				}
				
			}	
	if(coords.row > 2)
		if (gBoard[position-19] != player && gBoard[position-19] != '0')
			if(gBoard[position-38] !=player && gBoard[position-38]!='0' && gBoard[position-57] ==player){
				gBoard[position-19] = '0';
				gBoard[position-38] ='0';
				if (playerNum == player){
				capCountMe +=1;
				}
				else{
				capCountThem +=1;
				}
			}	
	if(coords.row > 2 && coords.column < 16)
		if (gBoard[position-18] != player&& gBoard[position-18] != '0')
			if(gBoard[position-36] !=player && gBoard[position-36]!='0' && gBoard[position-54] ==player){
				gBoard[position-18] = '0';
				gBoard[position-36] ='0';
				if (playerNum == player){
				capCountMe +=1;
				}
				else{
				capCountThem +=1;
				}
			}	
	if(coords.column > 2)
		if (gBoard[position-1] != player && gBoard[position-1] != '0')
			if(gBoard[position-2] !=player && gBoard[position-2]!='0' && gBoard[position-3] ==player){
				gBoard[position-1] = '0';
				gBoard[position-2] ='0';
				if (playerNum == player){
				capCountMe +=1;
				}
				else{
				capCountThem +=1;
				}
			}	
	if(coords.column < 16)
		if (gBoard[position+1] != player && gBoard[position+1] != '0')
			if(gBoard[position+2] !=player && gBoard[position+2]!='0' && gBoard[position+3] ==player){
				gBoard[position+1] = '0';
				gBoard[position+2] ='0';
				if (playerNum == player){
				capCountMe +=1;
				}
				else{
				capCountThem +=1;
				}
			}	
	if(coords.row < 16 && coords.column >2 )
		if (gBoard[position+18] != player && gBoard[position+18] != '0')
			if(gBoard[position+36] !=player && gBoard[position+36]!='0' && gBoard[position+54] ==player){
				gBoard[position+18] = '0';
				gBoard[position+36] ='0';
				if (playerNum == player){
				capCountMe +=1;
				}
				else{
				capCountThem +=1;
				}
			}	
	if(coords.row < 16)
		if (gBoard[position+19] != player && gBoard[position+19] != '0')
			if(gBoard[position+38] !=player && gBoard[position+38]!='0' && gBoard[position+57] ==player){
				gBoard[position+19] = '0';
				gBoard[position+38] ='0';
				if (playerNum == player){
				capCountMe +=1;
				}
				else{
				capCountThem +=1;
				}
			}	
	if(coords.row < 16 && coords.column < 16 )
		if (gBoard[position+20] != player && gBoard[position+20] != '0')
			if(gBoard[position+40] !=player && gBoard[position+40]!='0' && gBoard[position+60] ==player){
				gBoard[position+20] = '0';
				gBoard[position+40] ='0';
				if (playerNum == player){
				capCountMe +=1;
				}
				else{
				capCountThem +=1;
				}
			}	
}

function checkPente(coords, position, player){ // returns true if there is a five in a row
	var count = 1;
	var loc = position;
	var locRow = coords.row;
	var locCol = coords.column;
	while(((gBoard[loc - 20] == player) && (locRow-1 > -1)) && (locCol-1 > -1)){
		count +=1;
		loc -=20;
		locRow -=1;
		locCol -=1;
	}
	loc = position;
	locRow = coords.row
	locCol = coords.column
	while(((gBoard[loc + 20] == player) && (locRow+1 < 19)) && (locCol+1 <19)){
		count +=1;
		loc +=20;
		locRow +=1;
		locCol +=1;
	}
	if (count > 4){
		return true
		}
	console.log(count);
	
	count = 1;
	loc = position;
	locRow = coords.row
	locCol = coords.column
	while((gBoard[loc - 19] == player) && (locRow-1 > -1)){
		count +=1;
		loc -=19;
		locRow -=1;
	}
	loc = position;
	locRow = coords.row
	locCol = coords.column
	while((gBoard[loc + 19] == player) && (locRow+1 < 19)){
		count +=1;
		loc +=19;
		locRow +=1;
	}
	if (count > 4){
		return true
		}
	console.log(count);
	
	count = 1;
	loc = position;
	locRow = coords.row
	locCol = coords.column
	while((gBoard[loc - 18] == player) && (locRow-1 > -1) && (locCol+1 < 19)){
		count +=1;
		loc -=18;
		locRow -=1;
		locCol +=1;
	}
	loc = position;
	locRow = coords.row
	locCol = coords.column
	while((gBoard[loc + 18] == player) && (locRow+1 < 19) && (locCol-1 > -1)){
		count +=1;
		loc +=18;
		locRow +=1;
		locCol -=1;
	}
	if (count > 4){
		return true
		}
		console.log(count);
		
	count = 1;
	loc = position;
	locRow = coords.row
	locCol = coords.column
	while((gBoard[loc - 1] == player) && (locCol-1 > -1)){
		count +=1;
		loc -=1;
		locCol -=1;
	}
	loc = position;
	locRow = coords.row
	locCol = coords.column
	while((gBoard[loc + 1] == player) && (locCol+1 < 19)){
		count +=1;
		loc +=1;
		locCol +=1;
	}
	if (count > 4){
		return true
		}
		console.log(count);
		
	return false;
	
}

function checkGameOver(a,b,c){
	if(capCountMe > 4 ){
		alert("You Win!");
		gGameInProgress = false;
	}
	else if(capCountThem > 4){
		alert("You Lose :(");
		gGameInProgress = false;
	}
	else if(checkPente(a,b,c)){
		if(c==playerNum)
			alert("You Win!");
		else
			alert("You Lose :(");
		gGameInProgress = false;
		}
		
}

function getCursorPosition(e) {
    // returns values of .row and .column properties from an event
    var x;
    var y;
    if (e.pageX != undefined && e.pageY != undefined) {
	x = e.pageX;
	y = e.pageY;
    }
    else {
	x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= gCanvasElement.offsetLeft;
    y -= gCanvasElement.offsetTop;
    x = Math.min(x, kBoardWidth * kPieceWidth);
    y = Math.min(y, kBoardHeight * kPieceHeight);
    var cell = new Cell(Math.floor(y/kPieceHeight), Math.floor(x/kPieceWidth));
    return cell;
}

function drawBoard() { // draws all objects on the canvas

    gDrawingContext.clearRect(0, 0, kPixelWidth, kPixelHeight);

    gDrawingContext.beginPath();
    
    /* vertical lines */
    for (var x = kPieceWidth/2; x <= kPixelWidth; x += kPieceWidth) {
	gDrawingContext.moveTo(0.5 + x, 0);
	gDrawingContext.lineTo(0.5 + x, kPixelHeight);
    }
    
    /* horizontal lines */
    for (var y = kPieceHeight/2; y <= kPixelHeight; y += kPieceHeight) {
	gDrawingContext.moveTo(0, 0.5 + y);
	gDrawingContext.lineTo(kPixelWidth, 0.5 +  y);
    }
    
    /* draw it! */
    gDrawingContext.strokeStyle = "#ccc";
    gDrawingContext.stroke();
	
	for (var i=0; i<arrSize; i++){
		if (gBoard[i] != '0'){
			var coords = new Cell(Math.floor(i/kBoardHeight), i%kBoardHeight); // ASSUMES A SQUARE BOARD
			drawPiece(coords, gBoard[i]); 
			}
    }

    saveGameState(); //not sure about keeping this one, may have the ability to save
}

function drawPiece(p, player) { //draws the piece on the board, takes in a cell, and the player it belongs to

	var column = p.column;
    var row = p.row;
    var x = (column * kPieceWidth) + (kPieceWidth/2);
    var y = (row * kPieceHeight) + (kPieceHeight/2);
    var radius = (kPieceWidth/2) - (kPieceWidth/10);
    gDrawingContext.beginPath();
    gDrawingContext.arc(x, y, radius, 0, Math.PI*2, false);
    gDrawingContext.closePath();
    gDrawingContext.strokeStyle = "#000";
    gDrawingContext.stroke();
    if (player=='1') {
		gDrawingContext.fillStyle = "#000";
		gDrawingContext.fill();
    }
	else{
		gDrawingContext.fillStyle = "#fff";
		gDrawingContext.fill();
    }
}

function penteOnClick(e){ 
	if(gGameInProgress == true){
	//converts a cell's row and column to an index in gBoard, then puts a piece there
		if(playerNum == currentTurn){ // this will only let one player place at a time
			var cell = getCursorPosition(e);
			var position = cell.row*kBoardHeight + cell.column;
			if(gBoard[position] != '0'){
				//You must place a piece on an empty location
			}
			else{
			gBoard[position] = playerNum; 
			captures(cell, position, playerNum);
			checkGameOver(cell, position, playerNum);
			drawBoard();

			if(playerNum=='1'){
				currentTurn='2';
			}
			else{
				currentTurn='1'
			}
			moveInsert(position, currentTurn);
			}
		 }
		else{
			//wait your turn!
		}
		if (currentTurn != playerNum){
			var otherNum;
			var checker = setInterval( function (){
				currentTurn = $.ajax({url: "http://localhost/php/checkTurn.php", async: false}).responseText;
					if (currentTurn==playerNum){
						var otherLocS = $.ajax({url: "http://localhost/php/pullLocation.php", async: false}).responseText;
						var otherLoc = parseInt(otherLocS);
						console.log(otherLocS, otherLoc);
						if(playerNum=='1'){
							otherNum ='2';
						}
						else{
							otherNum='1';
						}
						gBoard[otherLoc]=otherNum;
						var otherCell = new Cell(Math.floor(otherLoc/kBoardHeight), otherLoc%kBoardHeight);
						captures(otherCell, otherLoc, gBoard[otherLoc]);
						checkGameOver(otherCell, otherLoc, otherNum);
						drawBoard();
						console.log("the cell", otherCell);
						clearInterval(checker);
					}
			},1000);
		}
	}
}




// NOT SURE about this one, may redo for our own save method
if (typeof resumeGame != "function") {
    saveGameState = function() {
	return false;
    }
    resumeGame = function() {
	return false;
    }
}

function newGame() {
	//initializes the gBoard array, 
	for (var i=0; i<arrSize; i++)
	{
		gBoard[i] = '0'; 
	};
    gGameInProgress = true; 
    drawBoard();
}

function endGame() { 
    gGameInProgress = false;
}

function initGame() { 
//the onload function    
	var canvasElement = document.createElement("canvas");
	canvasElement.id = "board";
	document.getElementById("wrapper").appendChild(canvasElement);
	
//the initial AJAX will go here to determine playerNum and 
	playerNum = $.ajax({url: "http://localhost/php/setPlayers.php", async: false}).responseText;
	alert(playerNum);
	//to create a row in the game table that stores an auto_inc id, date, player_one, player_two;

    gCanvasElement = canvasElement;
    gCanvasElement.width = kPixelWidth;
    gCanvasElement.height = kPixelHeight;
    gCanvasElement.addEventListener("click", penteOnClick, false);
    gDrawingContext = gCanvasElement.getContext("2d");
    if (!resumeGame()) {
	newGame();
    }
}