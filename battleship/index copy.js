
//------------------------ Game Project---------------------------
//Do you remember the game Battleship we created before? well .... it is time to make it with the DOM!!
//We are providing you with the design of a board (in the DOM) for a player1, you have to create the board for the player2 using the id property 'board_player2' -> it is the second list (ul) in your index.html file
//First ask the players for their names (use propmt)
//Now each time the turn player clicks on any cell of the opponent's board (you have to verify if the player is clicking the right board) the program needs to verify if there is an opponent's ship in that cell. If it is then the opponent has one less ship
//We want you to store the data of each player in two Player objects. Each object has to store: name, remaining boats, and their respective board.
//Each board needs to be initialized randomly with '0' and four '1' wich means the state of the cell. Numbers 1 are representing the 4 positions of the player's ships
//Also we want you to display the name of the turn player in the tag that has the id 'turn_player'. And if there is a winner  a text with: 'Congratulationes {name_player}!! you win'
//in the index.html file you are going to find 4 more ids: 'name_player1' , 'name_player2' , 'ships_player1' , 'ships_player2'. We want to see the information of each player in the respective elements
//As our previous Battleship, the winner is the player that hits the 4 opponent's ships first
//one more Thing create a 'reset' and a 'new game' buttons as childs of the element with the id 'buttons'. the reset button has to start the game again and the new game create a new game with new players and a new random board.

var players = {
  1: {
    name: " ",
    numShips: 4,
    gameBoard: [],
  },

  2: {
    name: "",
    numShips: 4,
    gameBoard: [],
  },
};

players[1].name = prompt("player 1 what is your name? ");
players[2].name = prompt("player 2 what is your name? ");

// player names
const player1_name = document.getElementById("name_player1");
player1_name.textContent = players[1].name;  

const player2_name = document.getElementById("name_player2");
player2_name.textContent = players[2].name;  

// whose turn
function updateTurnPlayer(){
  const turn_player = document.getElementById("turn_player");
  turn_player.textContent = players[currentPlayer].name;  

}

// number of ships
function updateNumships( ){
  const ships_player1 = document.getElementById("ships_player1");
  ships_player1.textContent = players[1].numShips;  
  
  const ships_player2 = document.getElementById("ships_player2");
  ships_player2.textContent = players[2].numShips;    

}


// this is the board

var haveWinner = false;

var currentPlayer = 1;

function playerBoard(playerNumber) {
  const board = createBoard();

  const board_Player = document.getElementById("board_player" + playerNumber);

  for (var x = 0; x < 4; x++) {
    const li = document.createElement("li"); // creating childs for the list (board), in this case represent a row number 'x' of the board

    for (var y = 0; y < 4; y++) {
      const cell = document.createElement("div");

      cell.className = "square"; // adding css properties to make it looks like a square
      // cell.textContent = board[x][y];  // saves the coordinates as a string value 'x,y'
      cell.value = board[x][y]; //state of the cell

      //this function adds the click event to each cell
      cell.addEventListener("click", (e) => {
        let cell = e.target; // get the element clicked
        console.log(cell.textContent); //display the coordinates in the console
        //cell.style.background ="purple"; //with this propertie you can change the background color of the clicked cell. try comment the line bellow and uncomment this line. Do not forget to save this file and refresh the borwser to see the changes

        if (haveWinner) {
          return;
        }

        if (currentPlayer === 1 && playerNumber === 2) {
          return;
        } else if (currentPlayer === 2 && playerNumber === 1) {
          return;
        }

        if (cell.value === 0) {
          cell.style.background = "green";
          alert(players[currentPlayer].name + " you miss!");

        } else if (cell.value === 1) {
          cell.style.background = "blue";
          alert(players[currentPlayer].name + " you hit!");
          players[currentPlayer].numShips--;
          updateNumships();
        }

        // when all guesses have been made
        if (players[currentPlayer].numShips === 0) {
          haveWinner = true;
          alert(players[currentPlayer].name + " you win! ");
        }

        if (currentPlayer === 1) {
          currentPlayer = 2;
        } else {
          currentPlayer = 1;
        }

        updateTurnPlayer();
        
      });

      li.appendChild(cell); //adding each cell into the row number x
    }

    board_Player.appendChild(li); //adding each row into the board
  }
}

function createBoard() {
  // player[currentPlayer].gameboard ===
  var arr2 = [];
  for (var j = 0; j < 4; j++) {
    var arr = [];
    for (var i = 0; i < 4; i++) {
      arr.push(0);
    }
    // This line creates random number
    let randomNum = Math.floor(Math.random() * 4);
    // add 1 in random place in array
    arr[randomNum] = 1;
    // push i arrays into arr2
    arr2.push(arr);
    // console.log(arr2);
  }
  return arr2;
}

playerBoard(1);
playerBoard(2);

updateNumships();
updateTurnPlayer();


