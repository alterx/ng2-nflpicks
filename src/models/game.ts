export class Game {
    id: string;
    team1: string;
    team2: string;
    team1_score: number;
    team2_score: number;
    date: string;
    time: string;
    winner: string;
    result: string;

    constructor(externalGame, gameDate) {
		this.id = externalGame.id;
        this.team1 = externalGame.team1;
        this.team2 = externalGame.team2;
        this.team1_score = parseInt(externalGame.team1_score);
        this.team2_score = parseInt(externalGame.team2_score);
        this.winner = externalGame.winner || '';
        this.calculateWinningTeam(externalGame);
    }
    
    public isEnabled() {
        var gameDate = moment(this.date).utc(),
            current = moment().utc();
            console.log(gameDate.diff(current));
    }
    
    private calculateWinningTeam(game) {
       if(isNaN(this.team1_score) && isNaN(this.team2_score)) {
            this.result = 'pending';
       } else if(this.team2_score > this.team1_score) {
           this.result = game.team2;
       } else if(this.team2_score < this.team1_score) {
           this.result = game.team1;
       } else if(this.team2_score === this.team1_score) {
           this.result = 'tied';
       }
    }
}