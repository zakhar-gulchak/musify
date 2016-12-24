import { Component } from '@angular/core';
import { Config } from './shared/index';
import './operators';

@Component({
    moduleId: module.id,
    selector: 'musify-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    title: string = '\uD83C\uDFB5 Musify \uD83C\uDFB5';

    constructor() {
        console.log('Environment config', Config);
    }
}
