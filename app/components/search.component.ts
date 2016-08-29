import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

import { ItunesService } from '../services/itunes.service';
import { SpotifyService } from '../services/spotify.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {Observable} from "rxjs/Rx";

@Component({templateUrl: 'app/components/search.component.html'})
export class SearchComponent implements OnInit {
    searchTitle: string = 'Search your favourite albums...';
    searchControl: FormControl = new FormControl();
    searchResults: Observable<Array<any>>;

    constructor(private _itunesService: ItunesService, private _spotifyService: SpotifyService) {
    }

    ngOnInit() {
        this.searchResults = this.searchControl.valueChanges
            .filter(str => !!str)
            .debounceTime(500)
            .distinctUntilChanged()
            .flatMap(str => Observable.forkJoin(this._spotifyService.searchAlbums(str),
                                                this._itunesService.searchAlbums(str)))
            .map(data => Array.prototype.concat(data[0], data[1]));
    }
}
