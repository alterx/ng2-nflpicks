import {Component, View, NgFor, NgIf, FORM_DIRECTIVES, NgClass} from 'angular2/angular2';
import {RouterLink, RouteParams, CanActivate} from 'angular2/router';
import {Games} from '../../services/games';
import {Users} from '../../services/users';
import {Week} from '../../models/week';

var users = new Users();

@Component({
  selector: 'display'
})

@View({
  templateUrl: 'src/components/game-list/game-list.html',
  styleUrls: ['src/components/game-list/game-list.css'],
  directives: [NgFor, NgIf, FORM_DIRECTIVES, NgClass, RouterLink]
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
      this.games.getGames(week).subscribe(result => this.days = result.days);
  }
  
  checkWinner(game, team) {
      game.winner = team;
  }
  
  savePicks(form) {
    if(form.valid) {
      var week = new Week({id: 'REG' + this.week, days: this.days});
      this.games.saveUserPicks(week);
    }
  }
}
