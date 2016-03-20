import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from '../header/header.component';
import {FxMachineComponent} from '../fx-machine/fx-machine.component';
import {HomeComponent} from '../home/home.component';


@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    styleUrls : ['./app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent
    ]
})
@RouteConfig([
    {path:'/', name: 'Home', component: HomeComponent},
    {path:'/fxmachine',        name: 'FXMachine',       component: FxMachineComponent}
])
export class AppComponent { }