
// ___________.__         ___________               ___________            
// \__    ___/|__| ____   \__    ___/____    ____   \__    ___/___   ____  
//   |    |   |  |/ ___\    |    |  \__  \ _/ ___\    |    | /  _ \_/ __ \ 
//   |    |   |  \  \___    |    |   / __ \\  \___    |    |(  <_> )  ___/ 
//   |____|   |__|\___  >   |____|  (____  /\___  >   |____| \____/ \___  >
//                    \/                 \/     \/                      \/ 





//if it is divisable by 2 it is O
var playerTurn = 2;

//Initialise the game board when the window loads
window.onload = init;

// Initialize the game
function init() {
   resetBoard();
   document.getElementsByClassName("btnNewGame").onclick = resetBoard;
}

// Resets the board
function resetBoard(){

	$(".cell").html("&nbsp");
	$(".cell").click(play);	

}

//Runs the Main Game Code
var play = function(event){

	var cell = event.target;

	takeTurn(cell);

	detectWin();
	playerTurn++;
}

var takeTurn = function (thisCell){
	if (playerTurn % 2 === 0) {
		thisCell.innerHTML = "<p>O</p>";
		// Disable mouse click for this cell. This cell is no longer active
      	thisCell.onmousedown = null;
	} else {
		thisCell.innerHTML = "<p>X</p>";
		// Disable mouse click for this cell. This cell is no longer active
      thisCell.onmousedown = null;
	} 
	

}


// Checks whether current player has 3 in a row anywhere on board.

var detectWin = function () {

		//Checks top row
		if ($('#cell-1x3')[0].innerHTML === $('#cell-1x1')[0].innerHTML && $('#cell-1x2')[0].innerHTML === $('#cell-1x1')[0].innerHTML && ($('#cell-1x1')[0].innerHTML !== "&nbsp;")){
			$('#cell-1x3')[0].style.backgroundColor = "red";
			$('#cell-1x2')[0].style.backgroundColor = "red";
			$('#cell-1x1')[0].style.backgroundColor = "red";
		}

		// Middle row
		else if($('#cell-2x3')[0].innerHTML === $('#cell-2x1')[0].innerHTML && $('#cell-2x2')[0].innerHTML === $('#cell-2x1')[0].innerHTML && ($('#cell-2x1')[0].innerHTML !== "&nbsp;")){
			$('#cell-2x3')[0].style.backgroundColor = "red";
			$('#cell-2x2')[0].style.backgroundColor = "red";
			$('#cell-2x1')[0].style.backgroundColor = "red";
		}

		// Middle vertical row
		else if($('#cell-1x2')[0].innerHTML === $('#cell-2x2')[0].innerHTML && $('#cell-3x2')[0].innerHTML === $('#cell-2x2')[0].innerHTML && ($('#cell-2x2')[0].innerHTML !== "&nbsp;")){
			$('#cell-1x2')[0].style.backgroundColor = "red";
			$('#cell-2x2')[0].style.backgroundColor = "red";
			$('#cell-3x2')[0].style.backgroundColor = "red";
		}
		//Vertical Left
		else if($('#cell-1x1')[0].innerHTML === $('#cell-2x1')[0].innerHTML && $('#cell-2x1')[0].innerHTML === $('#cell-3x1')[0].innerHTML && ($('#cell-3x1')[0].innerHTML !== "&nbsp;")){
			$('#cell-1x1')[0].style.backgroundColor = "red";
			$('#cell-2x1')[0].style.backgroundColor = "red";
			$('#cell-3x1')[0].style.backgroundColor = "red";
		}
		// Bottom row
		else if($('#cell-3x1')[0].innerHTML === $('#cell-3x2')[0].innerHTML && $('#cell-3x1')[0].innerHTML === $('#cell-3x3')[0].innerHTML && ($('#cell-3x3')[0].innerHTML !== "&nbsp;")){
			$('#cell-3x1')[0].style.backgroundColor = "red";
			$('#cell-3x2')[0].style.backgroundColor = "red";
			$('#cell-3x3')[0].style.backgroundColor = "red";
		}
		// Diag left
		else if($('#cell-1x1')[0].innerHTML === $('#cell-2x2')[0].innerHTML && $('#cell-3x3')[0].innerHTML === $('#cell-1x1')[0].innerHTML && ($('#cell-1x1')[0].innerHTML !== "&nbsp;")){
			$('#cell-3x3')[0].style.backgroundColor = "red";
			$('#cell-2x2')[0].style.backgroundColor = "red";
			$('#cell-1x1')[0].style.backgroundColor = "red";
		}

	// Vertical right
		else if($('#cell-1x3')[0].innerHTML === $('#cell-2x3')[0].innerHTML && $('#cell-2x3')[0].innerHTML === $('#cell-3x3')[0].innerHTML && ($('#cell-3x3')[0].innerHTML !== "&nbsp;")){
			$('#cell-1x3')[0].style.backgroundColor = "red";
			$('#cell-2x3')[0].style.backgroundColor = "red";
			$('#cell-3x3')[0].style.backgroundColor = "red";
		}
		//Diag Right
		else if($('#cell-3x1')[0].innerHTML === $('#cell-2x2')[0].innerHTML && $('#cell-2x2')[0].innerHTML === $('#cell-1x3')[0].innerHTML && ($('#cell-1x3')[0].innerHTML !== "&nbsp;")){
			$('#cell-3x1')[0].style.backgroundColor = "red";
			$('#cell-2x2')[0].style.backgroundColor = "red";
			$('#cell-1x3')[0].style.backgroundColor = "red";
		}
		else{
			return;
		}


		//vertical middle row not changing to red

		var winningPlayer;

		if( (playerTurn % 2) === 0){
			winningPlayer = "0";
		}
		else{
			winningPlayer = "X";
		}

		window.alert( winningPlayer + " won. Please reset the game.");
};


// Scorebard

// text-decoration:line-through;

/*    {
        window.alert("Tile is in use. Please select another tile."); */


