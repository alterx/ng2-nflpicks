import {Component, View} from 'angular2/angular2';
import {RouterLink, RouteParams} from 'angular2/router';
import {Games} from '../../services/games';

@Component({
  selector: 'nav-bar'
})
@View({
    templateUrl: 'src/components/nav/nav.html',
    directives: [RouterLink]
})
export class Nav {
  currentWeek: string;
  
  constructor(games: Games) {
    games.getCurrentWeekNumber().subscribe(result => this.currentWeek = result.weekNumber);
  }
}