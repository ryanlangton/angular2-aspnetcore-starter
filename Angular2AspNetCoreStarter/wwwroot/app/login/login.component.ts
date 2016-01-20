import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'log-in',
    templateUrl: 'app/login/login.html'
})

export class LogIn implements ILogInViewModel {
    constructor() {
    }

    logIn(): void {
        // TODO: log in here
    }
}

export interface ILogInViewModel {
    logIn(): void;
}