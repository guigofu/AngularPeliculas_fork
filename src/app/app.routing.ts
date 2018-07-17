import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { LoginComponent } from './core/pages/login/login.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { moviesRoutes } from './movies/movies.routing';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'estrenos', component: DashboardComponent, canActivate: [AuthGuardService],
         children: [
            ...moviesRoutes,
            { path: '', redirectTo: 'peliculas', pathMatch: 'full' }
        ]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }
