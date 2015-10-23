import * as Moment from '../../../node_modules/moment/moment.js';

export class Game {
    id: string;
    team1: string;
    team2: string;
    team1_score: number;
    team2_score: number;
    date: Moment;
    time: string;
    winner: string;
    result: string;

    constructor(externalGame, gameDate) {
		this.id = externalGame.id;
        this.team1 = externalGame.team1;
        this.team2 = externalGame.team2;
        this.team1_score = parseInt(externalGame.team1_score);
        this.team2_score = parseInt(externalGame.team2_score);
        
        var moment = new Moment(gameDate);
        this.date = moment;
        
        this.date = externalGame.date;
        this.winner = externalGame.winner || '';
        this.calculateWinningTeam(externalGame);
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