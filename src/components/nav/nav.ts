import {Component, View, NgIf} from 'angular2/angular2';
import {RouterLink, RouteParams, Router} from 'angular2/router';
import {Games} from '../../services/games';
import {Users} from '../../services/users';

@Component({
  selector: 'nav-bar'
})

@View({
    templateUrl: 'src/components/nav/nav.html',
    directives: [RouterLink, NgIf]
})

export class Nav {
  currentWeek: string;
  users: Users;
  router: Router;
  
  constructor(games: Games, users: Users, router: Router) {
    games.getCurrentWeekNumber().subscribe(result => this.currentWeek = result.weekNumber);
    this.users = users;
    this.router = router;
  }
  
  logOut() {
    this.users.logout().then(function() {
      this.router.navigate(['/Login']);
    }.bind(this));
  }
  
  loggedIn() {
    return this.users.isAuthenticated();
  }
}