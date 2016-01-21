import 'reflect-metadata';
import 'es6-shim';

import {CORE_DIRECTIVES} from "angular2/common";
import {Component, View} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {APP_ROUTES, Routes} from "./routes.config";
import {APP_DIRECTIVES} from "./app.module";

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, APP_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: 'app/app.html'
})
@RouteConfig(APP_ROUTES)

export class App {
    public routes = Routes;
}