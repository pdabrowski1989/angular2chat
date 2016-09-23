import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Routes
import {routes} from './app.routes';

// Component
import {AppComponent} from './app.component';
import {NavigationComponent} from './components/Navigation/navigation.component';
import {DashboardComponent} from './components/Dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        routes
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        NavigationComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}