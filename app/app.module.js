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
var main_component_1 = require('./components/Main/main.component');
var dashboard_component_1 = require('./components/Dashboard/dashboard.component');
var Chat = (function () {
    function Chat() {
    }
    Chat = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routes
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                main_component_1.MainComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Chat);
    return Chat;
}());
exports.Chat = Chat;
//# sourceMappingURL=app.module.js.map