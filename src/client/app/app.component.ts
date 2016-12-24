import { Component, OnInit } from '@angular/core';
import { Config } from './shared/index';
import './operators';

import '../css/styles.css';

@Component({
    moduleId: module.id,
    selector: 'musify-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    title: string = '';

    constructor() {
        console.log('Environment config', Config);
    }

    ngOnInit() {
        this.title = '\uD83C\uDFB5 Musify \uD83C\uDFB5';
    }
}
