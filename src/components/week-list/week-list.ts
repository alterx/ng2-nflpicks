import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {RouterLink, RouteParams, CanActivate} from 'angular2/router';
import {Games} from '../../services/games';
import {Users} from '../../services/users';

var users = new Users();

@Component({
  selector: 'week-list'
})

@View({
  templateUrl: 'src/components/week-list/week-list.html',
  directives: [NgFor, NgIf, RouterLink]
})

@CanActivate(() => users.isAuthenticated())

export class WeekList {
  weeks: Array<number>;
  
  constructor(games: Games, params: RouteParams) {
    this.weeks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  }
}
