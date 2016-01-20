//import 'es6-shim';
//import 'reflect-metadata';

import {App} from './app/app.component'
import {bootstrap}  from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {APP_PROVIDERS} from './app/app.module';
import {provide} from 'angular2/core';

bootstrap(App, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    APP_PROVIDERS]);