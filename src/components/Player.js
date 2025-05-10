class Player {
    constructor(name='p1', token='X') {
        this.name = name;
        this.token = token;
        this.wins = 0;
    }

    getPlayerName = () => this.name;
    setPlayerName = (name) => this.name;
    getToken = () => this.token;
    setToken = (val) => this.token;
    getWins = () => this.wins;
    addWin = () => ++this.wins;

}

export default Player;