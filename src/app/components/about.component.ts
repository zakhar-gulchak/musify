import { Component } from '@angular/core';

@Component({templateUrl: 'about.component.html'})
export class AboutComponent {
    title: string = 'About';
    text: string = 'This app search albums for you through iTunes and Spotify. Just type name of artist or album.';
}
