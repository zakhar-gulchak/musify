import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'musify-app',
    templateUrl: '/app/components/app.component.html'
})
export class AppComponent implements OnInit {
    title = '\uD83C\uDFB5 Musify \uD83C\uDFB5 Search your favourite music'; // todo how to set this title into html

    ngOnInit() {
    }
}
