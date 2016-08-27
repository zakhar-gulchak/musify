import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '/app/components/app.component.html'
})
export class AppComponent implements OnInit {
    title = 'Search your favourite music'; // todo how to set this title into html

    ngOnInit() {
    }
}
