# Web Basics 2 Week 5
Follow the directions in the  [pdf](https://github.com/Code-the-Dream-School/web-basics-2-week-5/blob/master/BattleshipDOM.pdf) file or in your index.js file to do the assignment.


Do you remember the game Battleship we created before? well .... it is time to make it with the DOM!!

We are providing you with the design of a board (in the DOM) for a player1, you have to create the board for the player2 using the id property 'board_player2' -> it is the second list (ul) in your index.html file

First ask the players for their names (use prompt (or if you want to take it up a notch try and create modal pop-ups)

Now each time the turn player clicks on any cell of the opponent's board (you have to verify if the player is clicking the right board) the program needs to verify if there is an opponent's ship in that cell. If it is then the opponent has one less ship

We want you to store the data of each player in two Player objects. Each object has to store: name, remaining boats, and their respective board.

Each board needs to be initialized randomly with '0' and four '1' wich means the state of the cell. Numbers 1 are representing the 4 positions of the player's ships

Also we want you to display the name of the turn player in the tag that has the id 'turn_player'. And if there is a winner  a text with: 'Congratulations {name_player}!! you win'

in the index.html file you are going to find 4 more ids: 'name_player1' , 'name_player2' , 'ships_player1' , 'ships_player2'. We want to see the information of each player in the respective elements

As in our previous Battleship, the winner is the player that hits the 4 opponent's ships first

One more Thing create a 'reset' and a 'new game' buttons as childs of the element with the id 'buttons'. the reset button has to start the game again and the new game create a new game with new players and a new random board.

## Additional goals: 

Show player guesses on the board in the DOM as different color so that it is easy to see where a player has previously guessed. 
Show player hits on the board in another color so that players can see where they have had hits. 
Make it responsive so it's easy to play on a phone. 
Make player 2 a computer player. 
