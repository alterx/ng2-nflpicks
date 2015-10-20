import {bootstrap, bind} from 'angular2/angular2';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, APP_BASE_HREF, ROUTER_BINDINGS} from 'angular2/router'

import {Games} from './services/games'
import {HTTP_BINDINGS} from 'angular2/http';

import {MyApp} from './components/base/app';

bootstrap(MyApp, [ROUTER_BINDINGS, HTTP_BINDINGS, Games]);
