import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {RouterLink, RouteParams, CanActivate} from 'angular2/router';
import {Games} from '../../services/games';
import {Users} from '../../services/users';

var users = new Users();

@Component({
  selector: 'display'
})

@View({
  templateUrl: 'src/components/game-list/game-list.html' ,
  directives: [NgFor, NgIf, RouterLink]
})

@CanActivate(() => users.isAuthenticated())

export class GameList {
  myName: string;
  days: Array<Object>;
  week: string;
  games: Games;
  
  constructor(games: Games, params: RouteParams, users: Users) {
    this.myName = "Carlos";
    this.days = [{}];
    this.games = games;
    this.week = params.get('weekId').replace(/\D/g,'') || '';
    this.goToWeek(params.get('weekId'));
  }
  
  goToWeek(week) {    
      this.games.getGames(week).subscribe(results => this.days = results);
  }
}
