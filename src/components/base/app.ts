import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {Parse} from '../../../../node_modules/parse/dist/parse-latest.js';
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
    { path: '/', component: WeekList, as: 'WeekList'},
    { path: '/login', component: Login, as: 'Login'},
    { path: '/week/:weekId', component: GameList, as: 'GameList'},
])

export class MyApp {
  constructor() {
    Parse.initialize(config.parse.APP_ID, config.parse.JS_KEY);
  }
}
