// The Gameboard
const gameboard = (function () {
    let gameboard = [
    ['[]', '[]', '[]'],
    ['[]', '[]', '[]'],
    ['[]', '[]', '[]']
];

    const getGameboard = () => gameboard;

    return {getGameboard}
})()

// Player
function player(name) {
    name;
    playerToken = token();

    const getPlayerToken = () => playerToken;

    return {name, getPlayerToken};
}

// Player tokens
function token() {
    // Generate token
    if (player.playerToken === 'X') {
            token = 'O';
        } else {
            token = 'X'
        }

    
    
    return {token}
} 

