import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'registration',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    templateUrl: 'app/registration/registration.html'
})

export class Registration implements IRegistrationViewModel {
    constructor() {
    }

    register(): void {
        // TODO: register here
    }
}

export interface IRegistrationViewModel {
    register(): void;
}