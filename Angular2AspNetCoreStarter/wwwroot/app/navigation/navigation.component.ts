import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'navigation',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    templateUrl: 'app/navigation/navigation.html'
})

export class Navigation implements INavigationViewModel {
    constructor() {
    }
}

export interface INavigationViewModel {
}