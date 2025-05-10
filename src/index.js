import Player from './components/Player.js';
import render from './components/render.js';
import generateToken from './components/generateToken.js';
import globalEventListener from './utils/helper.js';
import checkWin from './components/checkWin.js';
import removeBoard from './components/removeBoard.js';

import './style.css';

const mainContent = document.getElementById('main-content');
const display = render();

let win;
let whoWon;

const game = (() => {

    // Get the players

    // Generate a random token for player1
    let p1Token = generateToken();

    const player1 = new Player(prompt("Player 1, what is your name?"), p1Token);

    // Get the token for player 2
    let p2Token;
    if (player1.getToken() === 'X') {
        p2Token = 'O';
    } else {
        p2Token = 'X';
    }

    const player2 = new Player(prompt("Player 2, what is your name?"), p2Token);

    //Render message
    if (player1.getToken() === 'X') {
        display.renderMessage(player1.getPlayerName());
    } else {
        display.renderMessage(player2.getPlayerName());
    }

    let turn;

    // Get who goes first
    if (player1.getToken() === 'X') {
        turn = 'p1';
    } else {
        turn = 'p2';
    }

    display.renderBoard();

    // Listen for selection
    globalEventListener('click', '.cell', (e) => {
        if (turn === 'p1') {
            if (e.target.innerText === '') {
                e.target.innerText = player1.getToken();
                win = checkWin(player1.getToken());
                if (win === true) {
                    player1.addWin();
                    whoWon = player1.getPlayerName();
                    display.renderWinMessage(whoWon);
                    removeBoard();
                } else {
                    turn = 'p2';
                    display.renderMessage(player2.getPlayerName());
                }
            }
        } else {
            if (e.target.innerText === '') {
                e.target.innerText = player2.getToken();
                win = checkWin(player2.getToken());
                if (win === true) {
                    player2.addWin();
                    whoWon = player2.getPlayerName();
                    display.renderWinMessage(whoWon);
                    removeBoard();
                } else {
                    turn = 'p1';
                    display.renderMessage(player1.getPlayerName());
                }
            }
        }
    })

})();




