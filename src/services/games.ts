import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {config} from '../config/config';
import {Game} from '../models/game';
import {Day} from '../models/day';
import {Week} from '../models/week';

const GAMES = config.importio.BASE_URL + "/18452fea-fbb0-4315-b902-7ff30aacbc39/_query?input/webpage/url=http%3A%2F%2Fwww.nfl.com%2Fschedules%2F2015%2F%WEEK_IDENTIFIER%&_user=" + config.importio.USER + "&_apikey=" + config.importio.API_KEY;
const CURRENT_WEEK = config.importio.BASE_URL + "/17db7886-7167-4cf1-90b5-e3b2a196f1a6/_query?input/webpage/url=http%3A%2F%2Fwww.nfl.com%2Fschedules&_user=" + config.importio.USER + "&_apikey=" + config.importio.API_KEY;
const COLLECTION_NAME = "WEEKLY_PICKS";

@Injectable()
export class Games {
	
	picks: Array<Object>;
	
	constructor(public http: Http) {
	}	
	// Probably want to use fetch here, still wanted to test Rx observables
	getGames(week: string) : any {
		return Rx.Observable.create(function(observer) {
			this.getUserPicks(week).then(function(results){
				if(results.length === 1) {
					var returnObj = new Week(results[0].get(COLLECTION_NAME), results[0].id);
					
					observer.onNext(returnObj);
					observer.onCompleted();
				} else {
					this.http.get(GAMES.replace('%WEEK_IDENTIFIER%', week))
						.map(function(res) {
							var results = res.json().results || [],
								weekDays = [],
								i = -1,
								day, game;
							
							results.map(function(gamep) {
								if(gamep.team1) {
									game = new Game(gamep, day.date);
									weekDays[i].games.push(game);
								} else {
									day = new Day(gamep.date, []);
									weekDays.push(day);
									i++;
								}
							});
							
							var returnObj = new Week({id: week, days: weekDays});
							observer.onNext(returnObj);
							observer.onCompleted();
						}
					).subscribe(function(result) {
						
					});
				}
			}.bind(this));
		}.bind(this));	
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
	
	saveUserPicks(week: Week) : any {
		var user = Parse.User.current();
    	var Collection = Parse.Object.extend(COLLECTION_NAME);
		
		var collection = new Collection();
		
		if(week.parseId && week.parseId !== '') {
			collection.set("id", week.parseId);
		}
		collection.set(COLLECTION_NAME, week);
		collection.set("weekId", week.id);
		collection.set("user", user);

		collection.save(null, {success: function(data) {
			console.log(data);
		}, error: function() {
			console.log('error');
		}});	
	}
	
	private getUserPicks(weekId: string) {
		var query = new Parse.Query(COLLECTION_NAME);
		
		if(weekId !== '' && weekId) {
			query.equalTo('weekId', weekId);
		}
		query.equalTo('user', Parse.User.current());

		return query.find();
	}
}