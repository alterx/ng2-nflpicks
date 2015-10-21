import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, Location} from 'angular2/router';
import {config} from '../../config/config';
import {GameList} from '../game-list/game-list';
import {WeekList} from '../week-list/week-list';
import {Login} from '../login/login';
import {Game} from '../game/game';
import {Nav} from '../nav/nav';

@Component({
  selector: 'my-app'
})

@View({
  template: `
        <nav-bar></nav-bar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [RouterOutlet, GameList, WeekList, Login, Nav]
})

@RouteConfig([
    { path: '/home', component: WeekList, as: 'WeekList'},
    { path: '/login', component: Login, as: 'Login'},
    { path: '/week/:weekId', component: GameList, as: 'GameList'},
])

export class MyApp {
  constructor(location: Location) {
    Parse.initialize(config.parse.APP_ID, config.parse.JS_KEY);
    console.log('hi');
  }
}
