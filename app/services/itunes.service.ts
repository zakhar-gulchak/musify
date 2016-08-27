import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ItunesService {
    private itunesUrl: string = `https://itunes.apple.com/search`;
    constructor(private http: Http) {

    }

}
