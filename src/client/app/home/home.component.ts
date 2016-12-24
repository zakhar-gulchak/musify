import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    title: string = 'Home';
    text: string = 'This app search albums for you through iTunes and Spotify. Just type name of artist or album.';
}
