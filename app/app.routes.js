"use strict";
var router_1 = require('@angular/router');
// Components
var main_component_1 = require('./components/Main/main.component');
var dashboard_component_1 = require('./components/Dashboard/dashboard.component');
// Routes
var appRoutes = [
    {
        path: 'home',
        component: main_component_1.MainComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }
];
exports.routes = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map