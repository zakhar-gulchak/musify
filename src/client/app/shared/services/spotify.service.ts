import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private spotifyUrl: string = `https://api.spotify.com/v1/`;
    constructor(private http: Http) {
    }

    apiRequest(url: string) {
        // let headers = new Headers({'Access-Control-Request-Headers': 'Access-Control-Allow-Origin, X-XSRF-TOKEN'});
        let headers = new Headers({'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, X-XSRF-TOKEN'});
        let options = new RequestOptions({headers});

        return this.http.get(url, options)
            .map(res =>  res.json().albums.items)
            .flatMap(data => {
                let ids = data.map((cur: any) => cur.id).join(',');
                return this.http.get(`${this.spotifyUrl}albums/?ids=${ids}`)
                    .map(res =>  res.json().albums);
            });
    }

    searchAlbums(str: string, type: string = 'album') {
        return this.apiRequest(`${this.spotifyUrl}search?query=${str}&offset=0&limit=20&type=${type}`);
    }
}
