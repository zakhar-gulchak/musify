import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ItunesService {
    private itunesUrl: string = `https://itunes.apple.com/search`;

    constructor(private jsonp: Jsonp) { }

    apiRequest(url: string) {
        return this.jsonp.get(url)
            .map(res => res.json().results);
    }

    searchAlbums(str: string, type: string = 'album') {
        return this.apiRequest(`${this.itunesUrl}?term=${str}&offset=0&limit=20&media=music&entity=${type}&callback=JSONP_CALLBACK`);
    }
}
