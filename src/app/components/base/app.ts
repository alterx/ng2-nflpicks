import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {List} from '../list/list';
import {Team} from '../team/team';

@Component({
  selector: 'my-app'
})
@View({
  template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [RouterOutlet, List, Team]
})

@RouteConfig([
    { path: '/', component: List, as: 'List'},
    { path: '/team/:teamId', component: Team, as: 'Team'},
])

export class MyApp {
  constructor() {}
}
