import {bootstrap, bind} from 'angular2/angular2';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, APP_BASE_HREF, ROUTER_BINDINGS} from 'angular2/router'

import {TeamsService} from './services/teams'
import {HTTP_BINDINGS} from 'angular2/http';

import {MyApp} from './components/base/app';

bootstrap(MyApp, [ROUTER_BINDINGS,bind(APP_BASE_HREF).toValue(location.pathname), HTTP_BINDINGS, TeamsService]);
