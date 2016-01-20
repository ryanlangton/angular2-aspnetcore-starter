import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'profile',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    templateUrl: 'app/profile/profile.html'
})

export class Profile implements IProfileViewModel {
    constructor() {
    }
}

export interface IProfileViewModel {
}