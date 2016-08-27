import { Component } from '@angular/core';
import { ItunesService } from '../services/itunes.service';
import { SpotifyService } from '../services/spotify.service';

@Component({templateUrl: 'app/components/search.component.html'})
export class SearchComponent {
    private searchTitle: string = 'Search your favourite music...';
    private text: string = '';
    private searchResults;

    constructor(private _itunesService: ItunesService, private _spotifyService: SpotifyService) {
    }

    private search(text) {
        this.searchResults = this._spotifyService.searchMusic(text);
    }
}
