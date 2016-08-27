import {Routes, RouterModule} from '@angular/router';

import {SearchResultsComponent} from './components/search.results.component';
import {WelcomeComponent} from './components/welcome.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'search', component: SearchResultsComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
