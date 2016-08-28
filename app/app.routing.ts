import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './components/search.component';
import {AboutComponent} from './components/about.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: SearchComponent},
    {path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
