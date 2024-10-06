// Define the game board
const board = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

// Place pieces on the board
function initializeBoard() {
    const playerAPosition = getRandomPosition();
    let playerBPosition;
    do {
        playerBPosition = getRandomPosition();
    } while (playerBPosition.row === playerAPosition.row && playerBPosition.col === playerAPosition.col);

    board[playerAPosition.row][playerAPosition.col] = 'A';
    board[playerBPosition.row][playerBPosition.col] = 'B';
}

// Display the game board
function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    board.forEach((row, rowIndex) => {
        row.forEach((piece, colIndex) => {
            const square = document.createElement('div');
            square.className = 'square';
            square.dataset.row = rowIndex;
            square.dataset.col = colIndex;

            // Create piece element
            const pieceElement = document.createElement('div');
            pieceElement.className = 'piece';
            if (piece === 'A') {
                pieceElement.classList.add('piece-A');
            } else if (piece === 'B') {
                pieceElement.classList.add('piece-B');
            }

            // Append piece to square
            square.appendChild(pieceElement);

            boardElement.appendChild(square);
        });
    });
}

// Generate a random position on the board
function getRandomPosition() {
    const row = Math.floor(Math.random() * 5);
    const col = Math.floor(Math.random() * 5);
    return { row, col };
}

// AI logic for moving pieces
function moveAI(player) {
    // Implementation of moveAI function

    const availableMoves = [];
    board.forEach((row, rowIndex) => {
        row.forEach((piece, colIndex) => {
            if (piece === player) {
                availableMoves.push({ row: rowIndex, col: colIndex });
            }
        });
    });

    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    const newRow = randomMove.row + Math.floor(Math.random() * 3) - 1;
    const newCol = randomMove.col + Math.floor(Math.random() * 3) - 1;

    if (newRow >= 0 && newRow < 5 && newCol >= 0 && newCol < 5) {
        board[randomMove.row][randomMove.col] = '';
        board[newRow][newCol] = player;
    }
    renderBoard(); // Update the board after moving
}

// Start the game
initializeBoard();
renderBoard();
let currentPlayer = 'A';
setInterval(() => {
    moveAI(currentPlayer);
    currentPlayer = currentPlayer === 'A' ? 'B' : 'A';
}, 1000); // Move players alternately every second
