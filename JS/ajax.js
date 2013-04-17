//Pass the placenumber of the move through the location argument
function moveInsert(location, currentTurn){
	var request;
	// abort any pending request
	if (request) {request.abort();}
	
	// fire off the request to /ajax.php
	var request = $.ajax({url: "php/moveInsert.php", type: "post", data: "move="+location+"&turn="+currentTurn , async:false});

	// prevent default posting of form
}