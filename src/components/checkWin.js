


function checkWin(token) {

    let win;
    const board = document.getElementById('board');

    if (board.childNodes[0].innerText === token && board.childNodes[1].innerText === token && board.childNodes[2].innerText === token) {
        win = true;
    } else if (board.childNodes[3].innerText === token && board.childNodes[4].innerText === token && board.childNodes[5].innerText === token) {
        win = true;
    } else if (board.childNodes[6].innerText === token && board.childNodes[7].innerText === token && board.childNodes[8].innerText === token) {
        win = true;
    } else if (board.childNodes[0].innerText === token && board.childNodes[3].innerText === token && board.childNodes[6].innerText === token) {
        win = true;
    } else if (board.childNodes[1].innerText === token && board.childNodes[4].innerText === token && board.childNodes[7].innerText === token) {
        win = true;
    } else if (board.childNodes[2].innerText === token && board.childNodes[5].innerText === token && board.childNodes[8].innerText === token) {
        win = true;
    } else if (board.childNodes[0].innerText === token && board.childNodes[4].innerText === token && board.childNodes[8].innerText === token) {
        win = true;
    } else if (board.childNodes[2].innerText === token && board.childNodes[4].innerText === token && board.childNodes[6].innerText === token) {
        win = true;
    } else {
        win = false;
    }

    return win;
}

export default checkWin;