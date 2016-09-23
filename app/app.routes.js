"use strict";
var router_1 = require('@angular/router');
// Components
var logIn_component_1 = require('./components/LogIn/logIn.component');
var createUser_component_1 = require('./components/LogIn/CreateUser/createUser.component');
var dashboard_component_1 = require('./components/Dashboard/dashboard.component');
var config_component_1 = require('./components/Config/config.component');
// Routes
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '/login',
        component: logIn_component_1.LogInComponent
    },
    {
        path: 'dashboard',
        component: createUser_component_1.CreateUserComponent
    },
    {
        path: '/dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '/config',
        component: config_component_1.ConfigComponent
    }
];
exports.routes = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map