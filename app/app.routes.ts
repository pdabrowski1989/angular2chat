// Config
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {LogInComponent} from './components/LogIn/logIn.component';
import {CreateUserComponent} from './components/LogIn/CreateUser/createUser.component';
import {DashboardComponent} from './components/Dashboard/dashboard.component';
import {ConfigComponent} from './components/Config/config.component';

// Routes
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '/login',
        component: LogInComponent
    },
    {
        path: 'dashboard',
        component: CreateUserComponent
    },
    {
        path: '/dashboard',
        component: DashboardComponent
    },
    {
        path: '/config',
        component: ConfigComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);