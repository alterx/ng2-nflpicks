import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

const API_KEY = "ce6acdb1fd3f4268a2065c488c7309ccfa4e78f7fc5673350f690b8813be3038bfcae5459067232f5c94dda52131e6351dc44fd0c0fe45753dcddef6c16f1c64f5c7af5435d24beb6bd41c3b69ef574a";
const USER = "ce6acdb1-fd3f-4268-a206-5c488c7309cc";
const BASE_URL = "https://api.import.io/store/data";

const PAST_WEEKS_GAMES = BASE_URL + "/bc0eed72-54f5-4fbb-b173-d345ca5ce218/_query?input/webpage/url=http%3A%2F%2Fwww.nfl.com%2Fschedules%2F2015%2F%WEEK_IDENTIFIER%&_user=" + USER + "&_apikey=" + API_KEY;
const FUTURE_WEEKS_GAMES = BASE_URL + "/037a7096-ef4f-425a-af05-816f081d95f3/_query?input/webpage/url=http%3A%2F%2Fwww.nfl.com%2Fschedules%2F2015%2F%WEEK_IDENTIFIER%&_user=" + USER + "&_apikey=" + API_KEY;

@Injectable()
export class Games {
	
	pastGames: Array<Object>;
	
	constructor(public http: Http) {
	}	
	
	getPastGames(week: string) : any {
		return this.http.get(PAST_WEEKS_GAMES.replace('%WEEK_IDENTIFIER%', week))
			.map(function(res) {
				var results = res.json().results || [],
					week = [],
					i = -1;
				
				results.map(function(game) {
					if(game.team1) {
						week[i].games.push(game);
					} else {
						week.push({ date: game.date, games: [] });
						i++;
					}
				});
				
				return week;
			}
		)
	}
	
	getFutureGames(week: string) : any {
		return this.http.get(FUTURE_WEEKS_GAMES.replace('%WEEK_IDENTIFIER%', week))
			.map(function(res) {
				var results = res.json().results || [],
					week = [],
					i = -1;
				
				results.map(function(game) {
					if(game.team1) {
						week[i].games.push(game);
					} else {
						week.push({ date: game.date, games: [] });
						i++;
					}
				});
				
				return week;
			}
		)
	}
	
	getCurrentWeekNumber() : any {
		
	}
	
	weekIsInPast() : any {
		return true;
	}
}