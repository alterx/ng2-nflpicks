import {Game} from './game';

export class Day {
    date: string;
	games: Array<Game>;

    constructor(date: string, games: Array<Game>) {
        this.date = date;
		this.games = games;
    }
}