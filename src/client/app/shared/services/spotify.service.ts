import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService {
    private spotifyUrl: string = `https://api.spotify.com/v1/`;
    constructor(private http: Http) {
    }

    apiRequest(url: string) {
        return this.http.get(url)
            .map((res: any) =>  res.json().albums.items)
            .flatMap((data: any) => {
                let ids = data.map((cur: any) => cur.id).join(',');
                if (ids.length === 0) {
                    return Observable.throw('Internal server error');
                }

                return this.http.get(`${this.spotifyUrl}albums/?ids=${ids}`)
                    .map((res: any) =>  res.json().albums);
            });
    }

    searchAlbums(str: string, type: string = 'album') {
        return this.apiRequest(`${this.spotifyUrl}search?query=${str}&offset=0&limit=20&type=${type}`);
    }
}
