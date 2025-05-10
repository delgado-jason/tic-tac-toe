

function render() {

    const mainContent = document.getElementById('main-content');
    const messageContainer = document.getElementById('message-container');

    const renderMessage = (name) => {
            
            messageContainer.innerHTML = `
                <p class="message">${name}, please choose a cell.</p>
            `;
    }

    const renderWinMessage = (name) => {

        messageContainer.innerHTML = `
            <p class="message">${name}, You won! Congratulations!!</p>
        `;

    }

    const renderBoard = () => {

        const board = document.createElement('div');
        board.setAttribute('id', 'board');
        const rows = 3;
        const cols = 3;

        // Generate the board
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++ ) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                board.appendChild(cell);
            }
        }

        mainContent.appendChild(board);

    }

    return { renderMessage, renderBoard, renderWinMessage };        
}

export default render;