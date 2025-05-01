// The Gameboard
const gameboard = (function () {
    let gameboard = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
];

    const getGameboard = () => gameboard;
    // const updateGameboard = (a,b, token) => gameboard[a][b] = token; 

    return {getGameboard}
})()

// Player
function player(name, token) {
    name;
    let playerToken = token;
    let wins = 0;

    const getPlayerToken = () => playerToken;
    const getWins = () => wins;
    const addWin = () => ++wins;

    return {name, getPlayerToken, getWins, addWin};
}

// Player tokens
// function token() {
//     // Generate token
//     let token = '';
//     if (player.playerToken === 'X') {
//             token = 'O';
//         } else {
//             token = 'X'
//         }

    
    
//     return {token}
// } 

// Renders to the console.
const render = () => {
    console.log(gameboard.getGameboard());
}

// Check for win
const checkWin = (player) => {
    const board = gameboard.getGameboard();
    let win = false;
    const token = player.getPlayerToken();

    if (board[0][0] == token & board[0][1] == token & board[0][2] == token) {
        win = true;
        player.addWin();
    } else if (board[1][0] == token & board[1][1] == token & board[1][2] == token) {
        win = true;
        player.addWin();
    } else if (board[2][0] == token & board[2][1] == token & board[2][2] == token) {
        win = true;
        player.addWin();
    } else if (board[0][0] == token & board[1][0] == token & board[2][0] == token) {
        win = true;
        player.addWin();
    } else if (board[0][1] == token & board[1][1] == token & board[2][1] == token) {
        win = true;
        player.addWin();
    } else if (board[0][2] == token & board[1][2] == token & board[2][2] == token) {
        win = true;
        player.addWin();
    } else if (board[0][0] == token & board[1][1] == token & board[2][2] == token) {
        win = true;
        player.addWin();
    } else if (board[0][2] == token & board[1][1] == token & board[2][0] == token) {
        win = true;
        player.addWin();
    } else {
        win = false;
    }

    // Get win function
    const getWin = () => win;

    return {getWin}

};

// Get the player's chosen cell
function getChoice(player) {
    const choice = Number(prompt(`${player.name}, choose a cell (1-9): `));
    return choice;
}

// Update board
const updateGameboard = (choice, player) => {

    switch(choice) {
        case 1:
            gameboard.getGameboard()[0][0] = player.getPlayerToken();
            break;
        case 2: 
            gameboard.getGameboard()[0][1] = player.getPlayerToken();
        break;
        case 3:
            gameboard.getGameboard()[0][2] = player.getPlayerToken();
            break;
        case 4:
            gameboard.getGameboard()[1][0] = player.getPlayerToken();
            break;
        case 5:
            gameboard.getGameboard()[1][1] = player.getPlayerToken();
            break;
        case 6:
            gameboard.getGameboard()[1][2] = player.getPlayerToken();
            break;
        case 7:
            gameboard.getGameboard()[2][0] = player.getPlayerToken();
            break;
        case 8:
            gameboard.getGameboard()[2][1] = player.getPlayerToken();
            break;
        case 9:
            gameboard.getGameboard()[2][2] = player.getPlayerToken();
            break;
        default:
            console.log("Unable to update gameboard.");
    }
}

//##### GAME LOOP #####//

const gameLoop = (() => {

    // Get the players' name
    let player1 = player(prompt('Player 1: What is your name?'), 'X');
    let player2 = player(prompt('Player 2: What is your name?'), 'O');

    let win = checkWin(player1).getWin();

    // Render the board
    render();

    let cell;

    // The loop until there is a win
    while (win == false) {
        
        // Get the player's choice
        let choice1 = getChoice(player1);
        
        // Update board
        updateGameboard(choice1, player1);
        win = checkWin(player1).getWin();
        if (win) {
            console.log(`${player1.name}, you won!`);
            break;
        }
        render();

        // Get Player 2 choice and update board
        let choice2 = getChoice(player2);

        // Update board
        updateGameboard(choice2, player2);
        win = checkWin(player2).getWin();
        if (win) {
            console.log(`${player2.name}, you won!`);
            break;
        }
        render();

        // Stop the loop
        // win = true;
    }

    

    return {player1, player2, win, cell};
})()