import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'DashboardComponent',
    templateUrl: 'app/components/Dashboard/dashboard.html'
})

export class DashboardComponent {
    onClick() {
        alert('asdasd')
    }
}

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];