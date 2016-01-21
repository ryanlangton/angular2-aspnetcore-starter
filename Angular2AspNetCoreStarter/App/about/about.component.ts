import {Component, View, OnInit} from 'angular2/core';
import {AboutModel} from './about.model';
import {AboutService} from './about.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'about',
    directives: [CORE_DIRECTIVES],
    providers: [AboutService],
    templateUrl: 'app/about/about.html'
})

export class About implements OnInit, IAboutViewModel {
    public about: AboutModel;

    constructor(private _aboutService: AboutService) { }

    ngOnInit() {
        this.about = new AboutModel();
        this._aboutService.get().subscribe((data: AboutModel) => {
            this.about = data;
        });
    }
}

export interface IAboutViewModel {
    about: AboutModel;
}