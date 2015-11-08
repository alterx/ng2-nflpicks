import {bootstrap, bind} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

import {Games} from './services/games';
import {Users} from './services/users';
import {HTTP_BINDINGS} from 'angular2/http';

import {MyApp} from './components/base/app';

bootstrap(MyApp, [ROUTER_BINDINGS, HTTP_BINDINGS, Games, Users]);
