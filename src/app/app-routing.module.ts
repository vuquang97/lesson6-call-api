import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
    {
        path: 'account',
        loadChildren: './Components/dangky/dangky.module#DangkyModule'
    },
    {
        path: 'actorparent',
        loadChildren: './Components/actor/actor.module#ActorModule'
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',component: HomePageComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })]
})
export class AppRoutingModule { }
