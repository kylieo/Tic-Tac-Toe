// if playerName = true // replace html on scoreboard
// line through winning row
// different chalk font for scoreboard
// if tile is in use else
/*    {
        window.alert("Tile is in use. Please select another tile."); */
// text-decoration:line-through;



// This object looks after all the logic:
var clicker = {

  count: 0, // Here we store the "state", initially 0

  // bumpCount knows how to increment and update the screen
  bumpCount: function () {
    clicker.count += 1;
    $('#clicks').text(clicker.count + ' clicks');
  },
  
  // init attaches event handlers once the browser is ready
  init: function () {
    $('#clicker').on('click', this.bumpCount);
  }
};

// The only thing waiting for the DOM is .init();
$(document).ready(function () {
  clicker.init();
});

//

// If not x or o allow a square to be clicked.

//


var playerTurn = 2

var takeTurn = function () {
	if (playerTurn % 2 === 0) {
		$(this).html('<p>0</p>');
	} else {
		$(this).html('<p>X</p>');
	} 
	playerTurn++;

//	var checkForWinner = function() {
//		if (playerTurn - 1) % 2 === 0 {
			//alert or console log 'you are the winner'
//		}
	// checkforwinner()

};

$('.cell').on('click', takeTurn);

// line go through 3 winning


var takeTurn = function() {
  if (this.innerHTML == "&nbsp;" ) {
    if (playerTurn % 2 == 0) {
      this.textContent = "X";
    } else {
      this.textContent = "0";
    }
    playerTurn++;
  }
};


var detectWin = function () {

// $('#cell-1x3').html() === $('#cell-1x1').html() && $('#cell-1x2').html() === $('#cell-1x1').html()

	window.alert("Game won. Please reset the game.");
};


var resetBoard = $(".button").click(function () {
    $(".cell").text("");
    // resets the board by deleting the x and o's on the board
});





// };


// var markCell = function() {
	
// };






// // Inline block images
// // 3 rows




// // Tic Tac Toe




// var currentPlayer =

// var tile = [images];

// var tile.checkClick = function () {
// 	if (this.isClicked) ()) 
// }

// // Determines which square was clicked

// var checkClick = $('.board').on('click', '.tile', function(event) {
//   // When a square is clicked the function receives a jQuery event object as a parameter
//   var $tile = $(event.currentTarget);
// }); // event.currentTarget is used to find the DOM element that was clicked on and stores it as a variable.



// // Update the board to fill the square with the 'X' or 'O' image.

// var updateBoard = function(event) {

// 	$('.board').on('click', '.tile') {

//   	var $tile = $(event.currentTarget);
//   	$tile.addClass('tile-x');
// 	});
// 	// Makes a square appear as selected by player 'X' by adding the class .square-x to the square (.addClass).
// }




// // Check whether a winning combination has been played

// winningCombos = [[0,1,2],[3,4,5]]
// //REVISIT ME PLZ :)

// winningCombos = new Array 
// 	new Array (0, 1, 2),
// 	new Array (3, 4, 5),
// 	new Array (6, 7, 8),
// 	new Array (0, 3, 6),
// 	new Array (1, 4, 7),
// 	new Array (2, 5, 8),
// 	new Array (0, 4, 8),
// 	new Array (2, 4, 6),

// var checkWinner = function {

// }

// // 
// var playerTurn = (0);
// var moved = [[]]
// function init() {   
//   var cells = document.getElementsByClassName("cell");
//   for (var i in cells) {
//     cells[i].onclick = takeTurn;
//   }
// }

// //

// function takeTurn() {
//   if (this.innerHTML == "&nbsp;" ) {
//     if (playerTurn % 2 == 0) {
//       this.textContent = "X";
//     } else {
//       this.textContent = "0";
//     }
//     playerTurn++;
//   }
// }


// // index of current player-1


// // Clear the board and start a new game:

// function clear_board() {

//     var cells = document.getElementsByClassName("cell");
//     for (var i in cells) {
//         cells[i].innerHTML = "&nbsp";
//     }
// }

