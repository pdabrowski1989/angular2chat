import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Routes
import {routes} from './app.routes';

// Component
import {MainComponent} from './components/Main/main.component';
import {DashboardComponent} from './components/Dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        routes
    ],
    declarations: [
        DashboardComponent,
        MainComponent
    ]
})

export class Chat {}