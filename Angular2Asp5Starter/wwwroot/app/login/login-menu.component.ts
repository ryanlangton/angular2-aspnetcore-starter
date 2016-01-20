import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'log-in-menu',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    templateUrl: 'app/login/login-menu.html'
})

export class LogInMenu implements ILogInMenuViewModel {
    isAuthenticated: boolean;
    username: string;

    constructor() {
        this.isAuthenticated = true;
        this.username = "fake user";
    }

    logOff(): void {
        console.debug("logging off!");
        this.isAuthenticated = false;
        this.username = "";
        // TODO: implement
    }
}

export interface ILogInMenuViewModel {
    isAuthenticated: boolean,
    username: string,
    logOff(): void
}