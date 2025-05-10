


function generateToken() {
    const randNum = Math.floor(Math.random() * 2);

    if (randNum === 0) {
        let playerToken = 'X';
        return playerToken;
    } else {
        let playerToken = 'O';
        return playerToken;
    }
}

export default generateToken;