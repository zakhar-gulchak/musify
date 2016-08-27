import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule}       from '@angular/http'

import {AppComponent} from './components/app.component';

import {routing} from './app.routing';

import {AlbumComponent} from "./components/album.component";
import {SearchComponent} from "./components/search.component";
import {AboutComponent} from "./components/about.component";

import {ItunesService} from "./services/itunes.service";
import {SpotifyService} from "./services/spotify.service";

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        AlbumComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        ItunesService,
        SpotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
