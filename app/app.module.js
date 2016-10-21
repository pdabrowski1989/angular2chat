"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// Routes
var app_routes_1 = require('./app.routes');
// Component
var app_component_1 = require('./app.component');
var navigation_component_1 = require('./components/Navigation/navigation.component');
var authorization_component_1 = require('./components/Authorization/authorization.component');
var logIn_component_1 = require('./components/Authorization/LogIn/logIn.component');
var createUser_component_1 = require('./components/Authorization/CreateUser/createUser.component');
var dashboard_component_1 = require('./components/Dashboard/dashboard.component');
var messagePanel_component_1 = require('./components/Dashboard/MessagePanel/messagePanel.component');
var FriendsPanel_component_1 = require('./components/Dashboard/FriendsPanel/FriendsPanel.component');
var config_component_1 = require('./components/Config/config.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routes
            ],
            declarations: [
                app_component_1.AppComponent,
                navigation_component_1.NavigationComponent,
                authorization_component_1.AuthorizationComponent,
                logIn_component_1.LogInComponent,
                dashboard_component_1.DashboardComponent,
                createUser_component_1.CreateUserComponent,
                config_component_1.ConfigComponent,
                messagePanel_component_1.MessagePanelComponent,
                FriendsPanel_component_1.FriendsPanelComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map