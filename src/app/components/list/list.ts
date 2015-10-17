import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {RouterLink, RouteParams} from 'angular2/router';
import {Games} from '../../services/games';

@Component({
  selector: 'display'
})

@View({
  templateUrl: 'app/components/list/list.html' ,
  directives: [NgFor, NgIf, RouterLink]
})

export class List {
  myName: string;
  days: Array<Object>;
  week: string;
  
  constructor(games: Games, params: RouteParams) {
    this.myName = "Carlos";
    this.days = [{}];
    this.week = params.get('week') || 'REG1';
    
    games.getPastGames(this.week).subscribe(results => this.days = results);
   
  }
}
