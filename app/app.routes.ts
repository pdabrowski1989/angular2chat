// Config
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {AuthorizationComponent} from './components/Authorization/authorization.component';
import {LogInComponent} from './components/Authorization/LogIn/logIn.component';
import {CreateUserComponent} from './components/Authorization/CreateUser/createUser.component';
import {DashboardComponent} from './components/Dashboard/dashboard.component';
import {ConfigComponent} from './components/Config/config.component';

// Routes
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'authorization/login',
        pathMatch: 'full'
    },
    {
        path: 'authorization',
        component: AuthorizationComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
            },
            {
                path: 'login',
                component: LogInComponent
            },
            {
                path: 'createUser',
                component: CreateUserComponent
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'config',
        component: ConfigComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);