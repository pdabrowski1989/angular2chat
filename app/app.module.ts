import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DashboardComponent} from "./components/Dashboard";

@NgModule({
    imports: [BrowserModule],
    declaration: [DashboardComponent],
    bootstrap: [DashboardComponent]
})

export class AppModule { }
