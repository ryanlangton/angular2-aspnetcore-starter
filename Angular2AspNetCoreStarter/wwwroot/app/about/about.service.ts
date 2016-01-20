import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import "rxjs";

@Injectable()
export class AboutService {
    constructor(private _http: Http) { }

    get() {
        return this._http.get('/api/about').map(res => {
            return res.json();
        });
    }
}