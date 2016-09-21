// Config
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {MainComponent} from './components/Main/main.component';
import {DashboardComponent} from './components/Dashboard/dashboard.component';

// Routes
const appRoutes: Routes = [
    {
        path: 'home',
        component: MainComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes)