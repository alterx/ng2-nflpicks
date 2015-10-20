import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {Parse} from 'parse';
import {config} from '../../config/config';

import {List} from '../list/list';
import {Game} from '../game/game';

@Component({
  selector: 'my-app'
})
@View({
  template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [RouterOutlet, List, Game]
})

@RouteConfig([
    { path: '/', component: List, as: 'List'},
    { path: '/game/:gameId', component: Game, as: 'Game'},
])

export class MyApp {
  constructor() {
    Parse.initialize(config.parse.APP_ID, config.parse.JS_KEY); 
    //console.log(Parse);
  }
}
