import { Component, OnInit } from '@angular/core';

import '../../public/css/styles.css';

@Component({
    selector: 'musify-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    title = '\uD83C\uDFB5 Musify \uD83C\uDFB5';

    ngOnInit() {
    }
}
