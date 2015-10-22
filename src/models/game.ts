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

    constructor(externalGame) {
		this.id = externalGame.id;
        this.team1 = externalGame.team1;
        this.team2 = externalGame.team2;
        this.team1_score = externalGame.team1_score;
        this.team2_score = externalGame.team2_score;
        this.date = externalGame.date;
        this.winner = externalGame.winner || '';
        this.calculateWinningTeam(game);
    }
    
    private calculateWinningTeam(game) {
       if(game.team2_score > game.team1_score) {
           this.result = game.team2;
       } else if(game.team2_score < game.team1_score) {
           this.result = game.team1;
       } else {
           this.result = 'tied';
       }
    }
}