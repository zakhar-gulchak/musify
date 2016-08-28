import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

import { ItunesService } from '../services/itunes.service';
import { SpotifyService } from '../services/spotify.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/concat';
// import 'rxjs/add/operator/forkJoin';
import {Observable} from "rxjs/Observable";

@Component({templateUrl: 'app/components/search.component.html'})
export class SearchComponent implements OnInit {
    searchTitle: string = 'Search your favourite albums...';
    searchControl: FormControl = new FormControl();
    searchResults: Observable<Array<any>>;

    constructor(private _itunesService: ItunesService, private _spotifyService: SpotifyService) {
    }

    ngOnInit() {
        this.searchControl.valueChanges
            .filter(str => !!str)
            .debounceTime(500)
            .distinctUntilChanged()
            .flatMap(str => Observable.concat(this._itunesService.searchAlbums(str),
                                                 this._spotifyService.searchAlbums(str))
                .subscribe(
                    data => {
                        this.searchResults = data[0];
                    },
                    err => console.error(err)
                ));
    }
}
