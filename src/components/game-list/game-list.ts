import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {RouterLink, RouteParams} from 'angular2/router';
import {Games} from '../../services/games';

@Component({
  selector: 'display'
})

@View({
  templateUrl: 'src/components/game-list/game-list.html' ,
  directives: [NgFor, NgIf, RouterLink]
})

export class GameList {
  myName: string;
  days: Array<Object>;
  week: string;
  games: Games;
  
  constructor(games: Games, params: RouteParams) {
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
