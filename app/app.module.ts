import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent }   from './components/Dashboard/Dashboard';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ DashboardComponent ],
    bootstrap:    [ DashboardComponent ]
})
export class AppModule { }