import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Routes
import {routes} from './app.routes';

// Component
import {AppComponent} from './app.component';
import {NavigationComponent} from './components/Navigation/navigation.component';
import {AuthorizationComponent} from './components/Authorization/authorization.component';
import {LogInComponent} from './components/Authorization/LogIn/logIn.component';
import {CreateUserComponent} from './components/Authorization/CreateUser/createUser.component';
import {DashboardComponent} from './components/Dashboard/dashboard.component';
import {MessagePanelComponent} from './components/Dashboard/MessagePanel/messagePanel.component';
import {FriendsPanelComponent} from './components/Dashboard/FriendsPanel/FriendsPanel.component';
import {ConfigComponent} from './components/Config/config.component';

@NgModule({
    imports: [
        BrowserModule,
        routes
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        AuthorizationComponent,
        LogInComponent,
        DashboardComponent,
        CreateUserComponent,
        ConfigComponent,
        MessagePanelComponent,
        FriendsPanelComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}