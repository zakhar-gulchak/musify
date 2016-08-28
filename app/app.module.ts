import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule}       from '@angular/http'

import {AppComponent} from './components/app.component';

import {routing} from './app.routing';

import {SearchComponent} from "./components/search.component";
import {AboutComponent} from "./components/about.component";

import {ItunesService} from "./services/itunes.service";
import {SpotifyService} from "./services/spotify.service";

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
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
