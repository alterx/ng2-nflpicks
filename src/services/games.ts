import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {config} from '../config/config';

const GAMES = config.importio.BASE_URL + "/18452fea-fbb0-4315-b902-7ff30aacbc39/_query?input/webpage/url=http%3A%2F%2Fwww.nfl.com%2Fschedules%2F2015%2F%WEEK_IDENTIFIER%&_user=" + config.importio.USER + "&_apikey=" + config.importio.API_KEY;
const CURRENT_WEEK = config.importio.BASE_URL + "/17db7886-7167-4cf1-90b5-e3b2a196f1a6/_query?input/webpage/url=http%3A%2F%2Fwww.nfl.com%2Fschedules&_user=" + config.importio.USER + "&_apikey=" + config.importio.API_KEY;

@Injectable()
export class Games {
	
	constructor(public http: Http) {
	}	
	
	getGames(week: string) : any {
		return this.http.get(GAMES.replace('%WEEK_IDENTIFIER%', week))
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
		);
	}
	
	getCurrentWeekNumber() : any {
		return this.http.get(CURRENT_WEEK)
			.map(function(res) {
				var result = {
					fullText: '',
					weekNumber: 0
				};
				try {
					result.fullText = res.json().results[0].current_week;
					result.weekNumber = parseInt(result.fullText.replace(/\D/g,''));
				} catch(ex) {
					
				}
				return result;
			}
		);
	}
}