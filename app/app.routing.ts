import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './components/search.component';
import {AlbumComponent} from './components/album.component';
import {AboutComponent} from './components/about.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: SearchComponent},
    {path: 'about', component: AboutComponent},
    {path: 'album/:id', component: AlbumComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
