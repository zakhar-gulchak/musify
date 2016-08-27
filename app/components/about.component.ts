import { Component } from '@angular/core';

@Component({templateUrl: 'app/components/about.component.html'})
export class AboutComponent {
    title: string = 'About';
    text: string = 'About this app.';
}
